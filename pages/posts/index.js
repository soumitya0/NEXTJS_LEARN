import Link from "next/link";

function PostList(props) {
  console.log(props);
  return (
    <>
      <h1>POST LIST</h1>

      {props.postData.map((val) => {
        return (
          <Link href={`posts/${val.id}`} passHref>
            <div
              style={{
                height: "100px",
                width: "15%",
                borderRadius: "15px",
                background: "#eee",
                display: "inline-block",
                margin: "25px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <h4>ID: {val.id}</h4>

                <h4>Title: {val.title.slice(0, 15)}....</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
export default PostList;

export async function getStaticProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await responce.json();
  // console.log(data, "DATA");
  return {
    props: {
      postData: data,
    },
  };
}
