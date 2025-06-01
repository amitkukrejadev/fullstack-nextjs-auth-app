"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sign } from "crypto";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  // const onSignup = async () => {
  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup Failed", error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Reset button state when user input changes
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          {isLoading ? "Processing..." : "SignUp"}
        </h1>
        {/* <form> */}
        <form onSubmit={onSignup}>
          {/* ✅ Add it here */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-base font-semibold text-gray-800 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              required
              className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-3 text-black focus:border-blue-500 focus:outline-none"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <label
              htmlFor="email"
              className="block text-base font-semibold text-gray-800 mb-2 mt-4"
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
            />
          </div>
          <button
            onClick={onSignup}
            disabled={!user.username || !user.email || !user.password}
            // Prevent form submission if any field is empty
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-semibold text-base transition-colors"
          >
            {buttonDisabled ? "No Sign Up" : "Sign Up"}
          </button>
          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
