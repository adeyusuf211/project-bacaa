import blogs from "../blogs";

export default function handler(req, res) {
  const { Posts } = blogs;
  if (Posts) return res.status(200).json(Posts);
  return res.status(404).json({ errror: "Data not found" });
}
