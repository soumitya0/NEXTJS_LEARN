import { useRouter } from "next/router";

function Post({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>LOading Text.................</h1>;
  }

  return (
    <>
      <h1>{postData.id}</h1>
      <h4> {postData.price}</h4>
    </>
  );
}
export default Post;

export async function getStaticPaths() {
  const responce = await fetch("http://localhost:4000/products");
  const data = await responce.json();

  const path = data.map((productData) => {
    return {
      params: {
        productId: `${productData.id}`,
      },
      revalidate: 10,
    };
  });

  console.log(path);

  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const responce = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );

  const data = await responce.json();

  return {
    props: {
      postData: data,
    },
  };
}
