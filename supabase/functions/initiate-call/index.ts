import { corsHeaders } from "@supabase/supabase-js/cors";

interface CallBody {
  to?: unknown;
  name?: unknown;
  additionalDetails?: unknown;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as CallBody;
    const to = typeof body.to === "string" ? body.to.trim() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const additionalDetails =
      typeof body.additionalDetails === "string" ? body.additionalDetails.trim() : "";

    // Validate phone (E.164: +<country><number>, 8-16 digits total after +)
    if (!/^\+[1-9]\d{7,15}$/.test(to)) {
      return new Response(
        JSON.stringify({ error: "Invalid phone number. Use E.164 format like +447123456789." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (name.length < 1 || name.length > 100) {
      return new Response(JSON.stringify({ error: "Name must be 1-100 characters." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (additionalDetails.length > 500) {
      return new Response(
        JSON.stringify({ error: "Additional details must be 500 characters or fewer." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const apiKey = Deno.env.get("FRONTLY_API_KEY");
    if (!apiKey) {
      console.error("FRONTLY_API_KEY is not configured");
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const upstream = await fetch("https://uk-voice.frontly.in/api/v1/call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        to,
        name,
        additionalDetails: additionalDetails || undefined,
      }),
    });

    const text = await upstream.text();
    let payload: unknown;
    try {
      payload = JSON.parse(text);
    } catch {
      payload = { raw: text };
    }

    if (!upstream.ok) {
      console.error("Frontly upstream error", upstream.status, payload);
      return new Response(
        JSON.stringify({ error: "Call provider failed", status: upstream.status, details: payload }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ ok: true, data: payload }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("initiate-call error", err);
    return new Response(JSON.stringify({ error: "Unexpected server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
