export const revalidate = 3600; // cache responses for 1 hour

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return new Response(JSON.stringify({ error: "Missing INSTAGRAM_ACCESS_TOKEN" }), { status: 500 });
  }

  const url = new URL("https://graph.instagram.com/me/media");
  url.searchParams.set("fields", "id,media_url,permalink,thumbnail_url,caption,media_type,timestamp");
  url.searchParams.set("access_token", token);
  url.searchParams.set("limit", "9");

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Instagram error ${res.status}`);
    const data = await res.json();
    return Response.json(data);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Instagram fetch failed";
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}
