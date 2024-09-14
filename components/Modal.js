import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null;

  const handleAdd = () => {
    if (onAdd) onAdd();
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-7xl">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <h3 className="w-1/4">Ảnh</h3>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
            />
          </div>
          <div className="flex items-center">
            <h3 className="w-1/4">Tên Phòng</h3>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
          <div className="flex items-center">
            <h3 className="w-1/4">Trạng Thái</h3>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
          <div className="flex items-center">
            <h3 className="w-1/4">Ngày Đặt</h3>
            <input
              type="date"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 mr-2"
          >
            Thêm
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Modal;
