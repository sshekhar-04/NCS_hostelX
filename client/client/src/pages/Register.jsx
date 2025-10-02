// src/pages/Signup.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Signup = () => {
  const { setUser, backendUrl } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hostel, setHostel] = useState("BH");
  const [course, setCourse] = useState("B.Tech");
  const [year, setYear] = useState("First");
  const [avatarFile, setAvatarFile] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("hostel", hostel);
      formData.append("course", course);
      formData.append("year", year);
      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }
      const { data } = await axios.post(
        `${backendUrl}/api/auth/register`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (data) {
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        setUser(data.data.user);
        toast.success(data.message || "SignUp Successful !");
        navigate("/");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.message || "SingUp failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSignUp}
        className="bg-white/50 p-8 rounded-2xl shadow-xl w-[90%] max-w-md transition-transform duration-300 hover:scale-[1.02] my-19"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Create Your Hostel Account
        </h2>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Hostel Preference */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hostel Preference
          </label>
          <select
            value={hostel}
            onChange={(e) => setHostel(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="BH">BH</option>
            <option value="ISH">ISH</option>
            <option value="GH">GH</option>
          </select>
        </div>

        {/* Course */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course
          </label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="B.Tech">B.Tech</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
            <option value="B.Pharm">B.Pharm</option>
          </select>
        </div>

        {/* Year */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="First">First Year</option>
            <option value="Second">Second Year</option>
            <option value="Third">Third Year</option>
          </select>
        </div>
        {/* Avatar Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Avatar
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatarFile(e.target.files[0])}
            className="w-full px-4 py-2 border border-amber-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 cursor-pointer"
        >
          Sign Up
        </button>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
