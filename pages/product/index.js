import Link from "next/link";

function PostList(props) {
  return (
    <>
      <h1>product LIST</h1>

      {props.postData.map((val) => {
        return (
          <div
            key={val.id}
            style={{
              height: "100px",
              width: "15%",
              borderRadius: "15px",
              background: "#eee",
              display: "inline-block",
              margin: "25px",
            }}
          >
            {" "}
            <Link href={`product/${val.id}`} passHref>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <h4>ID: {val.id}</h4>

                <h4>Title: {val.price}....</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
export default PostList;

export async function getStaticProps() {
  console.log("Generating / Regenerating ");
  const responce = await fetch("http://localhost:4000/products");

  const data = await responce.json();
  return {
    props: {
      postData: data,
    },
    revalidate: 30,
  };
}
