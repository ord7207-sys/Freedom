"use client";

import React from 'react'
import { useState, useEffect } from 'react'

export default function FormRegister() {

  const [form, setForm] = useState({
        txt_firstname: "",
        txt_lastname: "",
        txt_username: "",
        txt_password: "",
   });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.txt_firstname);
    console.log(form.txt_lastname);
    console.log(form.txt_username);
    console.log(form.txt_password);

  };
    

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md border">
       
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            ฟอร์มสมัครสมาชิก
          </h1>
        </div>
        

      <form className='p-6 space-y-5' onSubmit={handleSubmit}>

        <label className="text-black">กรุณาระบุชื่อ</label>
        <input type="text" name="txt_firstname" defaultValue={form.txt_firstname} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='firstname' />
        {form.txt_firstname}

        <label className="text-black">กรุณาระบุนามสกุล</label>
        <input type="text" name="txt_lastname" defaultValue={form.txt_lastname} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='lastname' />
        {form.txt_lastname}

        <label className="text-black">ชื่อผู้ใช้</label>
        <input type="text" name="txt_username" defaultValue={form.txt_username} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='username' />
        {form.txt_username}

        <label className="text-black">รหัสผ่าน</label>
        <input type="password" name="txt_password" defaultValue={form.txt_password} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='password' />
        {form.txt_password}

        
        <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">บันทึกข้อมูล</button>
      </form>
    </div>
    </div>
  )
}

