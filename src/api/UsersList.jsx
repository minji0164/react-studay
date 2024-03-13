import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  // useEffect(함수, 의존성배열) //useEffect 기본 구문
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // c

  return (
    <>
      <h1>Users List</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>로딩 중 ,,,</p>
      )}
    </>
  );
};

export default UsersList;
