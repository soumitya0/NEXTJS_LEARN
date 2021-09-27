function NewsArticleByCategory({ article, category }) {
  //   console.log(article);
  //   console.log(category);

  return (
    <>
      <div>
        <h1> SHOWING RESULT OF {category}__________________ </h1>
        {article.map((val) => {
          return (
            <div key={val.id}>
              <h1>{val.id}</h1>
              <h4>
                {val.title} | {val.category}
              </h4>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default NewsArticleByCategory;

export async function getServerSideProps(context) {
  const params = context.params;
  const req = context.req;
  const res = context.res;

  const query = context.query;
  res.setHeader("Set-Cookie", ["name=Soumitya"]);
  console.log("req___", req.headers.cookie);

  //   console.log("res___", res);

  const category = params.category;

  const responce = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await responce.json();

  return {
    props: {
      article: data,
      category: category,
    },
  };
}
