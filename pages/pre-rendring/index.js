import Link from "next/link";

const PreRender = () => {
  return (
    <>
      <h1>Pre-Render</h1>
      <p>
        By default, Next.js pre-renders every page. This means that Next.js
        generates HTML for each page in advance, instead of having it all done
        by client-side JavaScript
      </p>
      <Link href="/pre-rendring/staticGeneration">
        <h4>
          1. Static Genration{" "}
          <span style={{ color: "red" }}>CLICK ME TO OPEN</span>
        </h4>
      </Link>
      <h4>2. Server side Rendering4</h4>
      <h2 style={{ textAlign: "center" }}>
        <a
          href="https://nextjs.org/learn/basics/data-fetching/pre-rendering"
          style={{ color: "red" }}
        >
          PRE_RENDRING IMPORTANT HELPFULL READ THIS
        </a>
      </h2>
    </>
  );
};

export default PreRender;
