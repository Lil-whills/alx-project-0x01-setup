import React from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  posts: User[];
};

const UsersPage = ({ posts }: Props) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {posts.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> (@{user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default UsersPage;
