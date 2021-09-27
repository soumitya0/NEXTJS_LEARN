import { comments } from "../../../data/comments";

export default function handler(req, res) {
  // checking for POST req

  if (req.method === "GET") {
    // GET

    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.postComments;
    console.log(comment);
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
