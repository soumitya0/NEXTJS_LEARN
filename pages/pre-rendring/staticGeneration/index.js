import Link from "next/link";

const StaticGeneration = () => {
  return (
    <>
      <h1>StaticGeneration</h1>
      <h4>without data____________ </h4>
      <p>
        all the pages we’ve created do not require fetching external data. Those
        pages will automatically be statically generated when the app is built
        for production
      </p>

      <Link href="/pre-rendring/staticGeneration/staticGenerationWithData">
        <h4>
          with data____________{" "}
          <span style={{ color: "red" }}>CLICK ME TO OPEN</span>
        </h4>
      </Link>
      <p>
        {" "}
        for some pages, you might not be able to render the HTML without first
        fetching some external data. Maybe you need to access the file system,
        fetch external API, or query your database at build time. Next.js
        supports this case — Static Generation with data{" "}
      </p>
    </>
  );
};

export default StaticGeneration;
