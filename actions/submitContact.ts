"use server";

import { supabase } from "../lib/supabase.client";

export async function submitContact(formData: FormData) {
  const first_name = String(formData.get("firstName") ?? "");
  const last_name = String(formData.get("lastName") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");
  const accept_terms = formData.get("acceptTerms") === "on";

  const { error } = await supabase.from("contact_messages").insert([
    { first_name, last_name, email, message, accept_terms },
  ]);

  if (error) throw new Error(error.message);
}
