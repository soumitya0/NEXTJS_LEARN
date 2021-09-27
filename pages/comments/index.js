import { useState } from "react";

function CommentsPage() {
  const [viewcomments, setViewComments] = useState([]);

  const [postComments, setPostComments] = useState("");
  const fetchComments = async () => {
    const responce = await fetch("/api/comments");
    const data = await responce.json();
    setViewComments(data);
  };

  const submitComments = async () => {
    const responce = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ postComments }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await responce.json();
    console.log(data);
  };

  const deleteComment = async (Did) => {
    const responce = await fetch(`/api/comments/${Did}`, {
      method: "DELETE",
    });

    const data = responce.json();
    fetchComments();
  };

  return (
    <>
      <div>
        <h1>CommentsPage</h1>

        <input
          type="text"
          value={postComments}
          onChange={(e) => {
            setPostComments(e.target.value);
          }}
        />
        <button onClick={submitComments}>Subbmit Comments</button>

        <button onClick={fetchComments}>Load comments</button>
        {viewcomments.map((val) => {
          return (
            <div key={val.id}>
              {val.id}
              {val.text}
              <button
                onClick={() => {
                  deleteComment(val.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <br />
    </>
  );
}

export default CommentsPage;
