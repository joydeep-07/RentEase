import { FaRegEye } from "react-icons/fa";
import {
  IoLockClosedOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";

const Register = ({ onLogin }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-80 md:w-96 flex flex-col bg-[var(--bg-main)] p-6 rounded-xl border border-[var(--border-light)]/50">
        <h2 className="text-3xl font-medium text-[var(--text-main)] font-heading">
          Sign <span className="text-[var(--accent-primary)]">Up</span>
        </h2>

        <p className="text-sm text-[var(--text-secondary)] mt-2">
          Don't have an account? <span className="text-[var(--accent-secondary)] ">Create Now</span>
        </p>

        {/* Name Input */}
        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center gap-2 h-11 px-4 rounded-full border border-[var(--border-light)] focus-within:border-[var(--accent-primary)] transition">
            <IoPersonOutline className="text-[var(--text-muted)] text-lg" />
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent outline-none text-sm text-[var(--text-main)]"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="flex items-center gap-2 h-11 px-4 rounded-full mt-4 border border-[var(--border-light)] focus-within:border-[var(--accent-primary)] transition">
          <IoMailOutline className="text-[var(--text-muted)] text-lg" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent outline-none text-sm text-[var(--text-main)]"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center gap-2 h-11 px-4 rounded-full mt-4 border border-[var(--border-light)] focus-within:border-[var(--accent-primary)] transition">
          <IoLockClosedOutline className="text-[var(--text-muted)] text-lg" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none text-sm text-[var(--text-main)]"
          />
          <button type="button" className="text-[var(--text-muted)]">
            <FaRegEye />
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="flex items-center gap-2 h-11 px-4 rounded-full mt-4 border border-[var(--border-light)] focus-within:border-[var(--accent-primary)] transition">
          <IoLockClosedOutline className="text-[var(--text-muted)] text-lg" />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full bg-transparent outline-none text-sm text-[var(--text-main)]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="mt-6 h-11 rounded-full bg-[var(--accent-primary)] text-white font-medium transition hover:brightness-110 active:scale-[0.98]"
        >
          Create account
        </button>

        {/* Sliding Trigger Link */}
        <p className="text-sm text-center mt-5 text-[var(--text-secondary)]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onLogin}
            className="text-[var(--accent-primary)] font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
