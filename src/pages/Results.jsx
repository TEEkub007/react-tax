import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;
  
  let salaryOfYear = formData.salary * 12 + parseInt(formData.bonus); //รายได้ทั้งปี
  let expenses = salaryOfYear * 0.5 <= 100000 ? salaryOfYear * 0.5 : 100000; //ค่าลดหย่อน
  let child =
    parseInt(formData.child) * 30000 <= 60000
      ? parseInt(formData.child) * 30000
      : 60000; //บุตร
  let social =
    parseInt(formData.social) * 12 <= 30000
      ? parseInt(formData.social) * 12
      : 30000; //ประกันสังคม
  let lifeinsurance =
    parseInt(formData.lifeinsurance) <= 100000
      ? parseInt(formData.lifeinsurance)
      : 100000; //ประกัน
  let deduction = 60000 + child + social + lifeinsurance;
  let income = salaryOfYear - expenses - deduction;
  let ptax = 0;
  if (income <= 100000) ptax = 0;
  else if (income <= 300000) ptax = 0.05;
  else if (income <= 1000000) ptax = 0.1;
  else ptax = 0.15;

  return (
    //ตกแต่งโดย=>https://chatgpt.com/share/673ec39f-0fd0-8012-ba8e-20a98377a85b
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          ผลลัพธ์การคำนวณภาษี
        </h1>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">เงินรวมทั้งปี:</span>
            <span className="text-gray-800">{salaryOfYear.toLocaleString()} บาท</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">ค่าใช้จ่าย:</span>
            <span className="text-gray-800">{expenses.toLocaleString()} บาท</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">ค่าลดหย่อน:</span>
            <span className="text-gray-800">{deduction.toLocaleString()} บาท</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">เงินได้ประเมินสุทธิ:</span>
            <span className="text-gray-800">{income.toLocaleString()} บาท</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">หักภาษี:</span>
            <span className="text-gray-800">{ptax * 100} %</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">ภาษีที่ต้องชำระ:</span>
            <span className="text-gray-800">{(income * ptax).toLocaleString()} บาท</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
