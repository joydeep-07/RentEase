import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";

const Login = ({ onRegister }) => {
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

        {/* Email Field */}
        <div className="flex items-center gap-2 h-11 px-4 rounded-full border border-[var(--border-light)] focus-within:border-[var(--accent-primary)] transition-[var(--transition-fast)]">
          <IoMailOutline className="text-[var(--text-muted)] text-lg" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent outline-none text-sm text-[var(--text-main)] placeholder-[var(--text-muted)]"
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center gap-2 h-11 px-4 rounded-full mt-4 border border-[var(--border-light)] focus-within:border-[var(--accent-primary)] transition-[var(--transition-fast)]">
          <IoLockClosedOutline className="text-[var(--text-muted)] text-lg" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none text-sm text-[var(--text-main)] placeholder-[var(--text-muted)]"
          />
          <button
            type="button"
            className="text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
          >
            <FaRegEye />
          </button>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between mt-5 text-sm">
          <label className="flex items-center gap-2 cursor-pointer text-[var(--text-secondary)]">
            <input
              type="checkbox"
              className="accent-[var(--accent-primary)] h-4 w-4"
            />
            Remember me
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="button"
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

        {/* Register link */}
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
