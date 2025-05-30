import { useState } from "react";
import {
  signUp,
  signInWithEmail,
  signInWithStd,
  signOut,
} from "../lib/auth/actions";

const AuthForm = () => {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [loginMethod, setLoginMethod] = useState<"email" | "std">("email");
  const [formData, setFormData] = useState({
    displayName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    std: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", isError: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", isError: false });

    try {
      if (authMode === "signup") {
        await signUp(
          formData.displayName,
          formData.lastName,
          formData.firstName,
          formData.email,
          formData.password,
          formData.std.toUpperCase()
        );
        setMessage({
          text: "Sign up successful! Check your email for confirmation.",
          isError: false,
        });
      } else {
        if (loginMethod === "email") {
          await signInWithEmail(formData.email, formData.password);
        } else {
          await signInWithStd(
            formData.std.toUpperCase().trim(),
            formData.password
          );
        }
        setMessage({ text: "Sign in successful!", isError: false });
      }
    } catch (error) {
      setMessage({
        text: error instanceof Error ? error.message : "An error occurred",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setAuthMode((prev) => (prev === "signin" ? "signup" : "signin"));
    setMessage({ text: "", isError: false });
  };

  const toggleLoginMethod = () => {
    setLoginMethod((prev) => (prev === "email" ? "std" : "email"));
    setMessage({ text: "", isError: false });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        {authMode === "signin" ? "Sign In" : "Sign Up"}
      </h2>

      {message.text && (
        <div
          className={`p-3 mb-4 rounded ${
            message.isError
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {authMode === "signup" ? (
          <>
            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Display Name
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="std"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                STD
              </label>
              <input
                type="text"
                id="std"
                name="std"
                value={formData.std}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <button
                type="button"
                onClick={toggleLoginMethod}
                className={`px-4 py-2 rounded-md ${
                  loginMethod === "email"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={toggleLoginMethod}
                className={`px-4 py-2 rounded-md ${
                  loginMethod === "std"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                STD
              </button>
            </div>
            {loginMethod === "email" ? (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ) : (
              <div>
                <label
                  htmlFor="std"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  STD
                </label>
                <input
                  type="text"
                  id="std"
                  name="std"
                  value={formData.std}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </>
        )}

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition-colors`}
        >
          {loading
            ? "Loading..."
            : authMode === "signin"
            ? "Sign In"
            : "Sign Up"}
        </button>
      </form>

      <div className="mt-4 text-center">
        {authMode === "signin" ? (
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={toggleAuthMode}
              className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none"
            >
              Sign up
            </button>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={toggleAuthMode}
              className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none"
            >
              Sign in
            </button>
          </p>
        )}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={signOut}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
