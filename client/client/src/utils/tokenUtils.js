// utils/tokenUtils.js
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const refreshAccessToken = async () => {
  try {
    const res = await axios.post(
      `${backendUrl}/api/auth/refresh-token`,
      {
        refreshToken: localStorage.getItem("refreshToken"),
      },
      {
        withCredentials: true,
      }
    );

    const { accessToken, refreshToken } = res.data.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return accessToken;
  } catch (error) {
    console.error("Refresh token failed", error);
    return null;
  }
};
