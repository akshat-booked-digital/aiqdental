import { useState } from "react";
import { Phone, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const COUNTRY_CODES = [
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+353", label: "🇮🇪 +353" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+49", label: "🇩🇪 +49" },
];

export default function CallWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("+44");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setName("");
    setPhone("");
    setDetails("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const digits = phone.replace(/\D/g, "").replace(/^0+/, "");

    if (!trimmedName) return toast.error("Please enter your name");
    if (digits.length < 6) return toast.error("Please enter a valid phone number");

    const to = `${code}${digits}`;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("initiate-call", {
        body: { to, name: trimmedName, additionalDetails: details.trim() },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);

      toast.success("Calling you now — please answer your phone");
      reset();
      setOpen(false);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Couldn't start the call. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-[#0f2a47] text-white px-5 py-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">Request a call back</div>
              <div className="text-xs text-white/70">We'll ring you in seconds</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Your name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Jane Smith"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Phone number</label>
              <div className="flex gap-2">
                <select
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="rounded-lg border border-slate-300 px-2 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="7123 456789"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Additional details <span className="text-slate-400">(optional)</span>
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                maxLength={500}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                placeholder="Anything you'd like us to know"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-medium py-2.5 text-sm transition-colors"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Phone size={16} />}
              {loading ? "Connecting…" : "Call me"}
            </button>

            <p className="text-[11px] text-slate-400 text-center pt-1">
              By submitting you agree to receive a call from Amazing Smiles Dental.
            </p>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close call widget" : "Request a call back"}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <Phone size={22} />}
        {!open && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-60 animate-ping" />
        )}
      </button>
    </>
  );
}
