"use client";
import React, { useState, useEffect } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const page = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<IUser[]>([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/users");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getData();
        setUsers(data.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });

    const result = await response.json();
    setMessage(result.message || result.error || "Có lỗi xảy ra");
  };

  return (
    <div>
      <h1>Thêm người dùng mới</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tên:</label>
          <input
            type="text"
            name="name"
            className="text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Thêm mới</button>
      </form>
      {message && <p>{message}</p>}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
