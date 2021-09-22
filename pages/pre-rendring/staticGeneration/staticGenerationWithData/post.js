import Post from "../../../../Componets/post/post";

const postList = ({ postData }) => {
  return (
    <>
      <h1>LIST OF POST DATA</h1>
      {postData.map((post) => {
        return (
          <div
            key={post.id}
            style={{ background: "purple", color: "#fff", width: "50%" }}
          >
            <Post title={post.title} description={post.body} />
          </div>
        );
      })}
    </>
  );
};
export default postList;

export async function getStaticProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await responce.json();
  console.log(data, "DATA");
  return {
    props: {
      postData: data,
    },
  };
}
