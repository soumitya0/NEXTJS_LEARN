function NewsArticleList(props) {
  return (
    <>
      <div>
        <h1> News Article Lists</h1>
        <h4>url : /sports</h4>

        {props.articles.map((val) => {
          return (
            <div>
              <h1>{val.id}</h1>
              <p> {val.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  const responce = await fetch("http://localhost:4000/news");
  const data = await responce.json();

  return {
    props: {
      articles: data,
    },
  };
}
