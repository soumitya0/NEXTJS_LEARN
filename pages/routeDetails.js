import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <nav>
        <Link href="/">
          <div>* Home</div>
        </Link>
        <div
          onClick={() => {
            router.push("/about");
          }}
        >
          * about
        </div>

        <Link href="/profile">
          <div>* profile</div>
        </Link>
      </nav>{" "}
      <h1>Welcome Home Page ..............</h1>
      <h4>simple Route__________________</h4>
      <p>Route: /about</p>
      <p>Route: /profile</p>
      <br />
      <h4>Nested Route__________________</h4>
      <p>Route: /blog</p>
      <p>Route: /blogfirst</p>
      <p>Route: /blogsecond</p>
      <br />
      <h4>Dynamic Route__________________</h4>
      <p>Route: /product</p>
      <p>Route: /product/$id</p>
      <br />
      <h4>Nested Dynamic Route__________________ IMPORTANT</h4>
      <p>Route: /student</p>
      <p>Route: /student/$id/review/$id</p>
      <br />
      <h4>Catch All Routes Dynamic Route__________________ IMPORTANT</h4>
      <p>Route: /doc/dsdfsdfsdf/sdfsdfgsdgsdfg</p>
      <br />
    </>
  );
}
