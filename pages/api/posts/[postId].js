import blogs from "../blogs";

export default function handler(req, res) {
    const { postId }  = req.query;
    const { Posts }   = blogs;

    if(postId) {
        const data = Posts.find(post => post.id == postId);
        return res.status(200).json(data)
    }

    return res.status(404).json({ error: "Data not found" })
}