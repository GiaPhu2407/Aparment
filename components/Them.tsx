import { useState } from "react";
import Modal from "./Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const handleAdd = () => {
    // Handle the add logic here
    setIsSuccessMessageVisible(true);

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setIsSuccessMessageVisible(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => setIsModalOpen(true)}
      >
        Thêm Phòng
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />

      {isSuccessMessageVisible && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Thêm thành công!
        </div>
      )}
    </div>
  );
}
