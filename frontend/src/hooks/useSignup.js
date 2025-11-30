import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContextProvider";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    userName,
    password,
    confirmedPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullName,
      userName,
      password,
      confirmedPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmedPassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.error(error);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

export default useSignup;

function handleInputError({
  fullName,
  userName,
  password,
  confirmedPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmedPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmedPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 9) {
    toast.error("Password must be at least 9 characters long");
    return false;
  }
  return true;
}
