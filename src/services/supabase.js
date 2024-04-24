import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ndsqpftlkpnhbgmgohuf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kc3FwZnRsa3BuaGJnbWdvaHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2ODg2ODMsImV4cCI6MjAyOTI2NDY4M30.oJUrGXhY3HK_J_22-62H1EcAjUpfm1R8GzDuG54uPVY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
