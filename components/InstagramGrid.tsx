"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Item = {
  id: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
};

export default function InstagramGrid() {
  const [items, setItems] = useState<Item[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setErr(d.error);
        else setItems((d.data ?? d) as Item[]);
      })
      .catch((e) => setErr(String(e)));
  }, []);

  if (err) return <p className="text-sm text-red-600">Instagram error: {err}</p>;
  if (!items.length) return <p className="text-sm text-neutral-500">Loading Instagram…</p>;

  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((it) => {
        const src = it.media_type === "VIDEO" ? (it.thumbnail_url || it.media_url) : it.media_url;
        return (
          <a key={it.id} href={it.permalink} target="_blank" rel="noreferrer" className="block">
            <Image
              src={src}
              alt={it.caption || "Instagram post"}
              width={400}
              height={400}
              className="aspect-square w-full h-auto rounded-md object-cover"
            />
          </a>
        );
      })}
    </div>
  );
}
