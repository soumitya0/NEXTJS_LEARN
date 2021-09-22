import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();

  const pid = router.query.productid;
  return (
    <>
      {" "}
      <h1>Product Details ................</h1>
      <h4>pid : {pid}</h4>
    </>
  );
};
export default ProductDetails;
