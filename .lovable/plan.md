

## Plan: Floating Call-Back Widget with Secure Edge Function

### Overview
Add a floating phone button (bottom-right) that opens a callback request form. The API call goes through a Supabase Edge Function to keep the API key secret.

### Step 1: Set up Supabase integration
- Initialize Supabase in the project (client config + dependencies)
- This is needed to invoke the edge function from the frontend

### Step 2: Store the API key as a runtime secret
- Use the secrets tool to prompt you to add `FRONTLY_API_KEY` with value `fk_live_5a09a340c41d6026e934a02c5c7a28ba3be44e8fe7f31c84cab2d61f370705b3`

### Step 3: Create Edge Function `supabase/functions/initiate-call/index.ts`
- Accepts POST with `{ to, name, additionalDetails }`
- Validates input (phone format, name required)
- Reads `FRONTLY_API_KEY` from `Deno.env`
- Forwards request to `https://uk-voice.frontly.in/api/v1/call`
- Returns success/error response with CORS headers
- No JWT verification needed (public endpoint)

### Step 4: Create `src/components/dental/CallWidget.tsx`
- Floating teal circle button with phone icon (Lucide `Phone`), fixed bottom-right
- Click toggles a compact card with:
  - Name input (required)
  - ISD code dropdown (+44 default, +91, +1, +61, +971, etc.) + phone number input
  - Additional details textarea (optional)
  - "Call" CTA button
  - Close button
- On submit: invokes the edge function, shows loading spinner, then success/error toast (sonner)
- Styled with existing dental theme (navy/teal)

### Step 5: Add widget to `DentalApp.tsx`
- Import and render `<CallWidget />` so it appears on every page

### Files changed
| File | Action |
|------|--------|
| `supabase/functions/initiate-call/index.ts` | Create |
| `src/components/dental/CallWidget.tsx` | Create |
| `src/components/dental/DentalApp.tsx` | Edit — add `<CallWidget />` |
| `src/integrations/supabase/client.ts` | Create (Supabase client setup) |

