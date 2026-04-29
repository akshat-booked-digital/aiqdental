import { useState } from "react";
import { Phone, X, Loader2, PhoneCall, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const FRONTLY_API_KEY = "fk_live_6be69385456cb3aea36e696e78b49b3826f17026bda20c379edc425edfa760cc";

const NAVY = "#1B2A4A";
const TEAL = "#2B8C96";
const TEAL_DARK = "#1F7A83";
const MINT = "#E6F4F6";
const BORDER = "#E9ECF0";
const MUTED = "#6B7280";

const COUNTRY_CODES = [
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1",  label: "🇺🇸 +1"  },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971",label: "🇦🇪 +971"},
  { code: "+353",label: "🇮🇪 +353"},
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
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 9999, fontFamily: "'Outfit', sans-serif" }}>
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 0,
            width: 360,
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 24px 60px rgba(27,42,74,0.22), 0 4px 12px rgba(27,42,74,0.08)",
            border: `1px solid ${BORDER}`,
            overflow: "hidden",
            animation: "cwFade 0.22s ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: `linear-gradient(135deg, ${NAVY} 0%, #243a63 100%)`,
              padding: "18px 20px",
              color: "#fff",
              position: "relative",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute", top: 12, right: 12,
                width: 28, height: 28, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: "none", color: "#fff",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <X size={16} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: TEAL, display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(43,140,150,0.45)",
                }}
              >
                <PhoneCall size={18} color="#fff" />
              </div>
              <div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Request a call back
                </div>
                <div style={{ fontSize: "0.78rem", opacity: 0.8, marginTop: 2 }}>
                  We'll ring you within minutes
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: 20 }}>
            <Field icon={<User size={14} />} label="Your name">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                maxLength={80}
                style={inputStyle}
              />
            </Field>

            <Field icon={<Phone size={14} />} label="Phone number">
              <div style={{ display: "flex", gap: 8 }}>
                <select value={code} onChange={(e) => setCode(e.target.value)} style={{ ...inputStyle, width: 104 }}>
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>{c.label}</option>
                  ))}
                </select>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="7700 900123"
                  inputMode="tel"
                  maxLength={20}
                  style={{ ...inputStyle, flex: 1 }}
                />
              </div>
            </Field>

            <Field icon={<MessageSquare size={14} />} label="Anything we should know? (optional)">
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="e.g. interested in Invisalign consultation"
                maxLength={300}
                rows={3}
                style={{ ...inputStyle, resize: "none", lineHeight: 1.5 }}
              />
            </Field>

            <button
              onClick={handleCall}
              disabled={loading}
              style={{
                marginTop: 6,
                width: "100%",
                background: loading ? TEAL_DARK : TEAL,
                color: "#fff",
                border: "none",
                borderRadius: 100,
                padding: "13px 20px",
                fontWeight: 600,
                fontSize: "0.92rem",
                cursor: loading ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontFamily: "inherit",
                transition: "all 0.2s",
                boxShadow: "0 6px 20px rgba(43,140,150,0.3)",
              }}
              onMouseOver={(e) => { if (!loading) (e.currentTarget.style.background = TEAL_DARK); }}
              onMouseOut={(e) => { if (!loading) (e.currentTarget.style.background = TEAL); }}
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <PhoneCall size={16} />}
              {loading ? "Connecting..." : "Call me now"}
            </button>

            <div style={{ fontSize: "0.7rem", color: MUTED, textAlign: "center", marginTop: 10 }}>
              By requesting a call you agree to be contacted by our team.
            </div>
          </div>
        </div>
      )}

      {/* FAB with label */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Request a call"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: open ? 0 : "0 22px 0 6px",
          height: 60,
          minWidth: 60,
          borderRadius: 100,
          background: TEAL,
          color: "#fff",
          border: "none",
          boxShadow: "0 12px 28px rgba(43,140,150,0.45)",
          cursor: "pointer",
          fontFamily: "inherit",
          fontWeight: 600,
          fontSize: "0.9rem",
          transition: "all 0.25s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = TEAL_DARK)}
        onMouseOut={(e) => (e.currentTarget.style.background = TEAL)}
      >
        <span
          style={{
            width: 48, height: 48, borderRadius: "50%",
            background: "rgba(255,255,255,0.18)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginLeft: open ? 6 : 0,
          }}
        >
          {open ? <X size={22} /> : <PhoneCall size={22} />}
        </span>
        {!open && <span style={{ whiteSpace: "nowrap" }}>Request a call</span>}
      </button>

      <style>{`
        @keyframes cwFade {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        fontSize: "0.72rem", fontWeight: 600, color: NAVY,
        letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6,
      }}>
        <span style={{ color: TEAL, display: "inline-flex" }}>{icon}</span>
        {label}
      </div>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 13px",
  borderRadius: 10,
  border: `1px solid ${BORDER}`,
  fontSize: "0.88rem",
  outline: "none",
  fontFamily: "inherit",
  background: "#fff",
  color: NAVY,
  boxSizing: "border-box",
  transition: "border-color 0.15s, box-shadow 0.15s",
};
