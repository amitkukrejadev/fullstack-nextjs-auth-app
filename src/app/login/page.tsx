"use client";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/login", user, {
        withCredentials: true,
      });
      console.log("Login Success", response.data);
      // Redirect to the home page or dashboard after successful login
      toast.success("Login successful!");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      // You can use a toast notification here to show the error
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Reset button state when user input changes
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          {isLoading ? "Processing..." : "Login"}
        </h1>
        {/* <form> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-black focus:border-blue-500 focus:outline-none"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-base font-semibold text-gray-800 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-black focus:border-blue-500 focus:outline-none"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-semibold text-base transition-colors"
            onClick={onLogin}
          >
            Login
          </button>
          <p className="mt-6 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
