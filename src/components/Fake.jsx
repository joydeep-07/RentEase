import React from "react";
import ThemeToggle from "./ThemeToggle";

const Fake = () => {
  return (
    <>
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-10 space-y-10 transition-all">
        <ThemeToggle />
        {/* Heading Font Test */}
        <section>
          <h1 className="heading-font text-4xl mb-3">
            Heading{" "}
            <span className="text-[var(--accent-primary)] ">
              Font Preview
            </span>{" "}
          </h1>
          <p className="text-[var(--text-secondary)]">
            This is the body text preview using your main font variables. Toggle
            dark mode to see transitions.
          </p>
        </section>

        {/* Background Colors */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Background Colors</h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="h-24 rounded-xl bg-[var(--bg-main)] border border-[var(--border-light)] flex items-center justify-center">
              bg-main
            </div>

            <div className="h-24 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-light)] flex items-center justify-center">
              bg-secondary
            </div>

            <div className="h-24 rounded-xl border border-[var(--border-light)] flex items-center justify-center bg-[var(--bg-gradient)]">
              gradient
            </div>
          </div>
        </section>

        {/* Accent Colors */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Accent Colors</h2>

          <div className="flex gap-6">
            <div className="w-32 h-24 rounded-xl bg-[var(--accent-primary)] flex items-center justify-center text-black">
              primary
            </div>

            <div className="w-32 h-24 rounded-xl bg-[var(--accent-secondary)] flex items-center justify-center text-black">
              secondary
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Buttons</h2>

          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-lg bg-[var(--accent-primary)] text-black hover:opacity-90">
              Primary Button
            </button>

            <button className="px-6 py-2 rounded-lg bg-[var(--accent-secondary)] text-black hover:opacity-90">
              Secondary Button
            </button>

            <button className="px-6 py-2 rounded-lg border border-[var(--border-light)]">
              Outline Button
            </button>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Inputs</h2>

          <input
            type="text"
            placeholder="Test input field"
            className="px-4 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] w-80 outline-none"
          />
        </section>

        {/* Card Example */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Card Example</h2>

          <div className="p-6 rounded-xl border border-[var(--border-light)] bg-[var(--bg-secondary)] max-w-md">
            <h3 className="heading-font text-xl mb-2">Sample Card</h3>
            <p className="text-[var(--text-secondary)]">
              This card shows how borders, backgrounds, and text behave in light
              and dark mode.
            </p>

            <button className="mt-4 px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-black">
              Action
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Fake;
