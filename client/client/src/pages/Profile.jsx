import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const { backendUrl, setUser, user } = useAuth();
  const [newAvatar, setNewAvatar] = useState(null);
  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewAvatar(file);
    const formData = new FormData();
    formData.append("avatar", file);
    try {
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.put(
        `${backendUrl}/api/auth/update-avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setUser(data.data.user);
      toast.success(data.message || "Avatar updated Successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating avatar");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-100">
      <div className="relative bg-white/60 backdrop-blur-lg shadow-2xl rounded-xl p-10 flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl gap-10">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src="/jsslogoicon.png"
            alt="Institute Logo"
            className="w-20 h-20 object-contain mb-6"
          />
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            User Profile
          </h2>

          <div className="space-y-4 w-full">
            <div className="border border-blue-700 px-4 py-2 rounded-md bg-white/40 text-blue-800/80">
              <strong>Name:</strong> {user.name}
            </div>
            <div className="border border-blue-700 px-4 py-2 rounded-md bg-white/40 text-blue-800/80">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="border border-blue-700 px-4 py-2 rounded-md bg-white/40 text-blue-800/80">
              <strong>Hostel Preferred:</strong> {user.hostel}
            </div>
            <div className="border border-blue-700 px-4 py-2 rounded-md bg-white/40 text-blue-800/80">
              <strong>Course:</strong> {user.course}
            </div>
            <div className="border border-blue-700 px-4 py-2 rounded-md bg-white/40 text-blue-800/80">
              <strong>Year:</strong> {user.year}
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col gap-4">
          <img
            src={user.avatar || "/profile.png"}
            alt="User Icon"
            className="w-52 h-52 object-contain rounded-full shadow-md border border-blue-300 bg-white/30 p-2"
          />

          {/* Avatar change input */}
          <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Change Avatar
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
