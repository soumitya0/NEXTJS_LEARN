const userList = ({ usersData }) => {
  return (
    <>
      <h1>LIST OF USERS</h1>
      {usersData.map((users) => {
        return (
          <div
            key={users.id}
            style={{ background: "purple", color: "#fff", width: "50%" }}
          >
            <p>{users.name}</p>
            <p>{users.email}</p>
          </div>
        );
      })}
    </>
  );
};
export default userList;

export async function getStaticProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await responce.json();
  console.log(data, "DATA");
  return {
    props: {
      usersData: data,
    },
  };
}
