const API_URL = "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo";

const RESOURCE = "Tweets";

const COMMON_HEADERS = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export async function fetchTweets() {
  const res = await fetch(`${API_URL}/${RESOURCE}?select=*&order=date.desc`, {
    headers: COMMON_HEADERS,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to fetch tweets");
  }
  return res.json();
}

export async function createTweet({ content, userName, date }) {
  const res = await fetch(`${API_URL}/${RESOURCE}`, {
    method: "POST",
    headers: COMMON_HEADERS,
    body: JSON.stringify({ content, userName, date }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to create tweet");
  }
  const data = await res.json();
  return Array.isArray(data) ? data[0] : data;
}
