import { useRouter } from "next/router";

function Post({ postData }) {
  return (
    <>
      <h1>{postData.id}</h1>
      <h4> {postData.title}</h4>
      <p>{postData.body}</p>
    </>
  );
}
export default Post;

export async function getStaticPaths() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();

  const path = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    // ],
    paths: path,

    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("CONTEXT------->", context);
  const { params } = context;

  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await responce.json();
  console.log(data, "DATA");
  return {
    props: {
      postData: data,
    },
  };
}
