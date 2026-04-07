import React, { useState } from "react";
import { Phone, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

const ISD_CODES = [
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+61", country: "AU" },
  { code: "+971", country: "AE" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+39", country: "IT" },
  { code: "+34", country: "ES" },
  { code: "+81", country: "JP" },
];

const API_URL = "https://uk-voice.frontly.in/api/v1/call";
const API_KEY = "fk_live_5a09a340c41d6026e934a02c5c7a28ba3be44e8fe7f31c84cab2d61f370705b3";

export default function CallWidget() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [isd, setIsd] = useState("+44");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    if (!/^\d{6,15}$/.test(phone)) {
      toast.error("Please enter a valid phone number (digits only).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({
          to: `${isd}${phone}`,
          name: name.trim(),
          additionalDetails: details.trim() || undefined,
        }),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      toast.success("We'll call you shortly!");
      setName("");
      setPhone("");
      setDetails("");
      setOpen(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Request a callback"
        className="call-widget-fab"
      >
        {open ? <X size={24} /> : <Phone size={24} />}
      </button>

      {/* Widget panel */}
      {open && (
        <div className="call-widget-panel">
          <div className="call-widget-header">
            <Phone size={18} />
            <span>Request a Callback</span>
          </div>
          <form onSubmit={handleSubmit} className="call-widget-form">
            <input
              type="text"
              placeholder="Your name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              className="call-widget-input"
            />
            <div className="call-widget-phone-row">
              <select
                value={isd}
                onChange={(e) => setIsd(e.target.value)}
                className="call-widget-select"
              >
                {ISD_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} {c.country}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Phone number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                required
                maxLength={15}
                className="call-widget-input call-widget-phone-input"
              />
            </div>
            <textarea
              placeholder="Any additional details (optional)"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              maxLength={500}
              rows={2}
              className="call-widget-textarea"
            />
            <button
              type="submit"
              disabled={loading}
              className="call-widget-cta"
            >
              {loading ? (
                <Loader2 size={18} className="call-widget-spinner" />
              ) : (
                <Phone size={18} />
              )}
              {loading ? "Calling…" : "Call Me"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
