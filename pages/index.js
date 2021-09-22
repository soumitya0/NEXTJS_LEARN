import { useRouter } from "next/router";

import Link from "next/link";
const Home = () => {
  const router = useRouter();
  return (
    <>
      <h1>HOME</h1>
      <h3 style={{ textAlign: "center" }}>click to open</h3>
      <h4
        onClick={() => {
          router.push("/routeDetails");
        }}
      >
        ROUTING - LINK - 404
        <span style={{ color: "red" }}> CLICK ME TO OPEN</span>
      </h4>

      <Link href="/pre-rendring">
        <h4>
          PRE_RENDRING <span style={{ color: "red" }}> CLICK ME TO OPEN</span>
        </h4>
      </Link>
    </>
  );
};

export default Home;
