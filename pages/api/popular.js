import blogs from "./blogs";

// api/popular
export default function handler(req, res) {
  const { Popular } = blogs;

  if (Popular) return res.status(200).json(Popular);
  return res.status(404).json({ error: "Data Not Found" });
}
