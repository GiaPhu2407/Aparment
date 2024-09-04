"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
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
    </div>
  );
}
