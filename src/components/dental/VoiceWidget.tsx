import { useEffect, useRef, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import "@/styles/voice-widget.css";

const RETELL_API_KEY = "key_7ae80cee8b9e9c083b1d6f4489dc";
const RETELL_AGENT_ID = "agent_ec767e22ce261923fab876aa6b";

type View = "form" | "call";

export default function VoiceWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Connecting…");
  const [seconds, setSeconds] = useState(0);

  const clientRef = useRef<RetellWebClient | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const client = new RetellWebClient();
    clientRef.current = client;

    client.on("call_started", () => {
      setStatus("Connected");
      startTimer();
    });
    client.on("call_ended", () => {
      stopTimer();
      setStatus("Call ended");
      window.setTimeout(() => closeWidget(), 1200);
    });
    client.on("error", (err: unknown) => {
      console.error("Retell error:", err);
      setStatus("Connection error");
      stopTimer();
      window.setTimeout(() => {
        client.stopCall();
        closeWidget();
      }, 1500);
    });

    return () => {
      stopTimer();
      try { client.stopCall(); } catch { /* noop */ }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startTimer() {
    stopTimer();
    setSeconds(0);
    timerRef.current = window.setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }
  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function resetWidget() {
    setView("form");
    setLoading(false);
    setError("");
    setSeconds(0);
    setStatus("Connecting…");
  }

  function closeWidget() {
    if (view === "call") {
      try { clientRef.current?.stopCall(); } catch { /* noop */ }
    }
    setOpen(false);
    window.setTimeout(resetWidget, 300);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const res = await fetch("https://api.retellai.com/v2/create-web-call", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RETELL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: RETELL_AGENT_ID,
          retell_llm_dynamic_variables: {
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
          },
          metadata: {
            source: "web_widget",
            lead_name: name,
            lead_email: email,
            lead_phone: phone,
            captured_at: new Date().toISOString(),
          },
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Retell error:", res.status, errText);
        throw new Error(`Retell API error: ${res.status}`);
      }

      const data = await res.json();
      if (!data.access_token) throw new Error("No access token returned");

      setView("call");
      setStatus("Connecting…");
      await clientRef.current?.startCall({ accessToken: data.access_token });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Couldn't start the call. Please try again.";
      console.error(err);
      setError(message);
      setLoading(false);
    }
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <>
      <button
        type="button"
        className="bw-fab"
        onClick={() => setOpen(true)}
        aria-label="Open voice widget"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
        </svg>
      </button>

      <div
        className={`bw-overlay ${open ? "bw-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeWidget();
        }}
      >
        <div className="bw-panel">
          <button type="button" className="bw-close" onClick={closeWidget} aria-label="Close">×</button>

          {view === "form" && (
            <div>
              <h3 className="bw-title">Talk to our team</h3>
              <p className="bw-subtitle">Enter your details and we'll connect you with our AI assistant in seconds.</p>
              <form onSubmit={handleSubmit}>
                <div className="bw-field">
                  <label htmlFor="bw-name">Name</label>
                  <input id="bw-name" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                </div>
                <div className="bw-field">
                  <label htmlFor="bw-email">Email</label>
                  <input id="bw-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                </div>
                <div className="bw-field">
                  <label htmlFor="bw-phone">Phone</label>
                  <input id="bw-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
                </div>
                <button type="submit" className="bw-submit" disabled={loading}>
                  {loading ? "Connecting…" : "Start call"}
                </button>
                <div className="bw-error">{error}</div>
              </form>
            </div>
          )}

          {view === "call" && (
            <div className="bw-call-state bw-active">
              <div className="bw-orb" />
              <p className="bw-status">{status}</p>
              <p className="bw-timer">{mm}:{ss}</p>
              <button type="button" className="bw-end" onClick={() => clientRef.current?.stopCall()}>End call</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
