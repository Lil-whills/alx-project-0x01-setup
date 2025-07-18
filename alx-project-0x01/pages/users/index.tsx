import React, { useEffect, useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: UserData[] = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleAddUserClick = (user: UserData) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => handleAddUserClick(user)}
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

      {showModal && selectedUser && (
        <UserModal user={selectedUser} />
      )}
    </div>
  );
};

export default Users;
