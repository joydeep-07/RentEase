import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'
import { users } from "../utils/users";

const Login = ({ onRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

 const handleLogin = () => {
   const foundUser = users.find(
     (u) => u.email === email && u.password === password,
   );

   if (foundUser) {
     dispatch(login(foundUser));
     setError("");
     navigate("/");
   } else {
     setError("Invalid email or password");
   }
 };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="
          w-80 md:w-96 flex flex-col
          bg-[var(--bg-main)] 
          p-6 rounded-xl 
          border border-[var(--border-light)]/50
        "
      >
        <h2 className="text-3xl font-medium text-[var(--text-main)] font-heading">
          Sign <span className="text-[var(--accent-primary)]">In</span>
        </h2>

        <p className="text-sm text-[var(--text-secondary)] mt-2">
          Welcome back! Please login
        </p>

        {/* Google Button */}
        <button
          type="button"
          className="
            w-full mt-6 h-11 rounded-full
            flex items-center justify-center gap-2
            bg-[var(--bg-main)]
            border border-[var(--border-light)]
            hover:bg-[var(--bg-tertiary)]/50
            transition-[var(--transition-fast)]
          "
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm font-medium text-[var(--text-main)]">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[var(--border-light)]" />
          <p className="text-xs text-[var(--text-muted)]">
            or login with email
          </p>
          <div className="flex-1 h-px bg-[var(--border-light)]" />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 h-11 px-4 rounded-full border border-[var(--border-light)] focus-within:border-[var(--accent-primary)]">
          <IoMailOutline className="text-[var(--text-muted)] text-lg" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent outline-none text-sm text-[var(--text-main)] placeholder-[var(--text-muted)]"
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-2 h-11 px-4 rounded-full mt-4 border border-[var(--border-light)] focus-within:border-[var(--accent-primary)]">
          <IoLockClosedOutline className="text-[var(--text-muted)] text-lg" />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent outline-none text-sm text-[var(--text-main)] placeholder-[var(--text-muted)]"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="text-[var(--text-muted)]"
          >
            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Remember */}
        <div className="flex items-center justify-between mt-5 text-sm">
          <label className="flex items-center gap-2 cursor-pointer text-[var(--text-secondary)]">
            <input
              type="checkbox"
              className="accent-[var(--accent-primary)] h-4 w-4"
            />
            Remember me
          </label>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="
            mt-6 h-11 rounded-full 
            bg-[var(--accent-primary)] 
            text-white font-medium 
            transition-[var(--transition-base)]
            shadow-[var(--shadow-sm)]
          "
        >
          Login
        </button>

        {/* Register */}
        <p className="text-sm text-center mt-5 text-[var(--text-secondary)]">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={onRegister}
            className="text-[var(--accent-primary)] font-medium hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
