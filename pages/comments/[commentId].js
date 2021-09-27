import { comments } from "../../data/comments";

function commentsComp({ commentDetails }) {
  console.log(comments);
  return (
    <div>
      {commentDetails.id}
      {commentDetails.text}
    </div>
  );
}
export default commentsComp;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const commentId = context.params.commentId;

  console.log(commentId, "IDDD");
  console.log(comments, "SOME DATA");
  const commentDetails = comments.find((val) => {
    return val.id === parseInt(commentId);
  });

  return {
    props: {
      commentDetails: commentDetails,
    },
  };
}
