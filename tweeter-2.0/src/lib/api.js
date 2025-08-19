import { supabase } from "./supabase";

export async function fetchTweets() {
  const { data, error } = await supabase
    .from("Tweets")
    .select("*")
    .order("date", { ascending: false });
  if (error) throw error;
  return data;
}

export async function createTweet(tweet) {
  const { data, error } = await supabase
    .from("Tweets")
    .insert([tweet])
    .select();
  if (error) throw error;
  return data[0];
}
