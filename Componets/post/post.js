const Post = (props) => {
  return (
    <div>
      <h1>PostName: {props.title}</h1>
      <h1>Description: {props.description}</h1>
    </div>
  );
};
export default Post;
