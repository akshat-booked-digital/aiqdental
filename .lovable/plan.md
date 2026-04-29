# Floating Call-Back Widget

A floating phone button in the bottom-right opens a small form (name, country code + phone, optional details). Submitting calls a secure backend that forwards the request to Frontly's API, keeping the API key hidden from the browser.

## What the user sees

- Teal circular button with a phone icon, fixed bottom-right, on every page
- Click → compact card slides open with:
  - Name (required)
  - Country code dropdown (+44 default, +91, +1, +61, +971, …) + phone number (required)
  - Additional details (optional textarea)
  - "Call me" button + close (×)
- On submit: spinner → success or error toast
- Styled to match the navy/teal Amazing Smiles Dental theme

## How it works (technical)

```text
Browser (CallWidget)
   │  supabase.functions.invoke("initiate-call", { to, name, additionalDetails })
   ▼
Edge Function: initiate-call
   │  reads FRONTLY_API_KEY from Deno.env (never exposed to browser)
   │  validates input with zod
   │  POST https://uk-voice.frontly.in/api/v1/call
   ▼
Frontly API
```

### Steps

1. **Enable Lovable Cloud** so we can deploy the edge function and use the Supabase client.
2. **Add `FRONTLY_API_KEY` secret** (`fk_live_6be69385456cb3aea36e696e78b49b3826f17026bda20c379edc425edfa760cc`) via the secrets tool — stored server-side only.
3. **Create edge function** `supabase/functions/initiate-call/index.ts`:
   - CORS headers + OPTIONS handler
   - Zod validation: `to` (E.164-ish regex), `name` (1–100), `additionalDetails` (≤500, optional)
   - Forwards to Frontly with `x-api-key` header
   - Returns `{ ok: true }` or `{ error }` with appropriate status
   - `verify_jwt = false` (public widget)
4. **Create `src/components/dental/CallWidget.tsx`**:
   - Local state for open/closed, form fields, loading
   - Country code list as constant
   - Combines code + number into E.164 `to` value before sending
   - Uses sonner `toast` for feedback
   - Tailwind classes consistent with existing dental theme
5. **Mount widget** in `src/components/dental/DentalApp.tsx` so it appears on every page.

## Files

| File | Action |
|------|--------|
| `supabase/functions/initiate-call/index.ts` | Create |
| `src/integrations/supabase/client.ts` | Auto-created by Cloud setup |
| `src/components/dental/CallWidget.tsx` | Create |
| `src/components/dental/DentalApp.tsx` | Edit — render `<CallWidget />` |

## Security notes

- API key lives only as a server-side secret — never shipped to the browser
- All inputs validated server-side (zod) and client-side
- Phone normalized to E.164 before forwarding
