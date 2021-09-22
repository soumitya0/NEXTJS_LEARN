import Link from "next/link";
const StaticGenerationWithData = () => {
  return (
    <>
      <h1>StaticGeneration WithData______________</h1>
      <h5>Use to inject props</h5>
      <p>
        {" "}
        for some pages, you might not be able to render the HTML without first
        fetching some external data. Maybe you need to access the file system,
        fetch external API, or query your database at build time. Next.js
        supports this case —{" "}
        <span style={{ color: "red" }}> Static Generation with data</span>{" "}
      </p>

      <h4>
        <span style={{ color: "red" }}>getStaticProps() ___________</span>
      </h4>
      <p>
        1. help featch APIs and send as props to components and allows you to
        tell Next.js: “Hey, this page has some data dependencies — so when you
        pre-render this page at build time, make sure to resolve them first!”
      </p>
      <p>
        2. getStaticProps() run only on server-side that why we get console on
        VS-code terminal and can asscess fs-module just like nodejs
      </p>
      <p>3. getStaticProps() not run on client side</p>

      <p>4. getStaticProps() use only on PAGES folder files</p>
      <Link href="/pre-rendring/staticGeneration/staticGenerationWithData/users">
        <h2>EX userData____CLICK ME TO OPEN</h2>
      </Link>

      <Link href="/pre-rendring/staticGeneration/staticGenerationWithData/post">
        <h2>EX postData____CLICK ME TO OPEN</h2>
      </Link>
    </>
  );
};
export default StaticGenerationWithData;
