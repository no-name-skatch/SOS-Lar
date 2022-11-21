import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zpxwqbagybmjiqatjdvo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweHdxYmFneWJtamlxYXRqZHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1NTA0NzYsImV4cCI6MTk4NDEyNjQ3Nn0.H4mdWcR0f0vOVfDbpYustDQ5oILRXzf7D8Qbm5QZON0"

// Better put your these secret keys in .env file
export const supabase = createClient(supabaseUrl, supabaseKey, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
