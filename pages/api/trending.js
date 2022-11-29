import blogs from "./blogs";

// api/trending
export default function handler(req, res) {
  const { Trending } = blogs;
  if (Trending) return res.status(200).json(Trending);
  return res.status(404).json({ error: "Data Not Found" });
}
