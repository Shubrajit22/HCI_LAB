import React, { useState } from "react";
import axios from "axios";

const StudentRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({});

  async function handleForm(e) {
    e.preventDefault();

    let newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!rollNo) newErrors.rollNo = "Roll No is required";
    if (!branch) newErrors.branch = "Branch is required";
    if (!department) newErrors.department = "Department is required";
    if (!address) newErrors.address = "Address is required";
    if (!dob) newErrors.dob = "Date of Birth is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/register1", {
        name,
        email,
        rollNo,
        branch,
        department,
        address,
        dob,
      });

      console.log("Response:", response.data);
      setName("");
      setEmail("");
      setRollNo("");
      setBranch("");
      setDepartment("");
      setAddress("");
      setDob("");
      setErrors({});

      alert("Student registered successfully!");
    } catch (error) {
      console.error("Error:", error);

      alert("Error registering student. Please check the console.");
    }
  }

  return (
    <div className="container mx-auto p-4">
      {" "}
      {/* Centered container */}
      <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
      <form onSubmit={handleForm} className="space-y-4">
        {" "}
        {/* Form with space between elements */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="rollNo"
            className="block text-gray-700 font-bold mb-2"
          >
            Roll No
          </label>
          <input
            type="text"
            id="rollNo"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setRollNo(e.target.value)}
            value={rollNo}
          />
          {errors.rollNo && (
            <p className="text-red-500 text-sm">{errors.rollNo}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="branch"
            className="block text-gray-700 font-bold mb-2"
          >
            Branch
          </label>
          <input
            type="text"
            id="branch"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setBranch(e.target.value)}
            value={branch}
          />
          {errors.branch && (
            <p className="text-red-500 text-sm">{errors.branch}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-gray-700 font-bold mb-2"
          >
            Department
          </label>
          <input
            type="text"
            id="department"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
          />
          {errors.department && (
            <p className="text-red-500 text-sm">{errors.department}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address
          </label>
          <textarea
            id="address"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>
        <div>
          <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
