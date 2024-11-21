import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    //ตกแต่งโดย=>https://chatgpt.com/share/673ec39f-0fd0-8012-ba8e-20a98377a85b
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          โปรแกรมคำนวณภาษี
        </h1>
        <form onSubmit={submitForm} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold mb-2">เงินเดือน:</label>
            <input
              type="text"
              name="salary"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold mb-2">โบนัส:</label>
            <input
              type="text"
              name="bonus"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold mb-2">ค่าประกันสังคม:</label>
            <input
              type="text"
              name="social"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold mb-2">จำนวนบุตร:</label>
            <input
              type="text"
              name="child"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-semibold mb-2">ค่าประกันชีวิต:</label>
            <input
              type="text"
              name="lifeinsurance"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
