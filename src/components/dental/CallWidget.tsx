import { useState } from "react";
import { Phone, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

const FRONTLY_API_KEY = "fk_live_6be69385456cb3aea36e696e78b49b3826f17026bda20c379edc425edfa760cc";

const COUNTRY_CODES = [
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+353", label: "🇮🇪 +353" },
];

export default function CallWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("+44");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCall = async () => {
    if (!name.trim()) return toast.error("Please enter your name");
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 6) return toast.error("Please enter a valid phone number");

    setLoading(true);
    try {
      const res = await fetch("https://uk-voice.frontly.in/api/v1/call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": FRONTLY_API_KEY,
        },
        body: JSON.stringify({
          to: `${code}${digits}`,
          name: name.trim(),
          additionalDetails: details.trim() || undefined,
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed (${res.status})`);
      }
      toast.success("Call initiated! We'll ring you shortly.");
      setName(""); setPhone(""); setDetails(""); setOpen(false);
    } catch (e: any) {
      toast.error(e?.message || "Could not start the call. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 9999 }}>
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: 76,
            right: 0,
            width: 320,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            padding: 20,
            border: "1px solid #e5e7eb",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontWeight: 700, color: "#0f2c4a" }}>Request a call back</div>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280" }}>
              <X size={18} />
            </button>
          </div>
          <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 14px" }}>
            Enter your details and we'll call you right back.
          </p>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={80}
            style={inputStyle}
          />

          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <select value={code} onChange={(e) => setCode(e.target.value)} style={{ ...inputStyle, width: 110, marginTop: 0 }}>
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              inputMode="tel"
              maxLength={20}
              style={{ ...inputStyle, marginTop: 0, flex: 1 }}
            />
          </div>

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Anything we should know? (optional)"
            maxLength={300}
            rows={3}
            style={{ ...inputStyle, resize: "none" }}
          />

          <button
            onClick={handleCall}
            disabled={loading}
            style={{
              marginTop: 12,
              width: "100%",
              background: "#14b8a6",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "12px 16px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              opacity: loading ? 0.8 : 1,
            }}
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Phone size={16} />}
            {loading ? "Calling..." : "Call me"}
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Request a call"
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#14b8a6",
          color: "#fff",
          border: "none",
          boxShadow: "0 10px 25px rgba(20,184,166,0.45)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {open ? <X size={24} /> : <Phone size={24} />}
      </button>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 10,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #d1d5db",
  fontSize: 14,
  outline: "none",
  fontFamily: "inherit",
  background: "#fff",
  color: "#0f2c4a",
  boxSizing: "border-box",
};
