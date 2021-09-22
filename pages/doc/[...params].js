import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();

  const { params = [] } = router.query;
  console.log(params, "PARAMS........");
  return (
    <>
      <h1> Welcome to doc home page</h1>
      <h4>{params[0]}</h4>
      <h4>{params[1]}</h4>
    </>
  );
}

export default Doc;
