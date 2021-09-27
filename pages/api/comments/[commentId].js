import { comments } from "../../../data/comments";

export default function handler(req, res) {
  // comment/1 => render 1 commetns

  const { commentId } = req.query;

  if (req.method == "GET") {
    const commentDetails = comments.find((comment) => {
      return comment.id === parseInt(commentId);
    });
    res.status(200).json(commentDetails);
  }
  //   DELETE COMMENTS
  else if (req.method == "DELETE") {
    const deleteComment = comments.find((comment) => {
      return comment.id === parseInt(commentId);
    });

    const index = comments.findIndex((comm) => {
      return comm.id === parseInt(commentId);
    });

    comments.splice(index, 1);

    res.status(200).json(deleteComment);
  }
}
