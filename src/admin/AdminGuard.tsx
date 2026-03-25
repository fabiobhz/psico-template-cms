/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const SESSION_KEY = "fagom_admin_auth";
const PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string | undefined;

/**
 * Wraps the admin panel with a password gate.
 *
 * - If VITE_ADMIN_PASSWORD is not set (e.g. local development), access is open.
 * - If set, the user must enter the correct password once per browser session.
 */
const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const isProtected = !!PASSWORD;
  const [authed, setAuthed] = useState(
    () => !isProtected || sessionStorage.getItem(SESSION_KEY) === "1"
  );
  const [input, setInput]   = useState("");
  const [error, setError]   = useState(false);
  const [visible, setVisible] = useState(false);

  if (authed) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#f5f1ec", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#8fa68c] flex items-center justify-center shadow-md">
            <Lock size={22} color="white" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#e5e0d8] shadow-sm px-8 py-8">
          <h1 className="text-lg font-semibold text-[#3d3530] mb-1 text-center">
            Admin Access
          </h1>
          <p className="text-xs text-[#9e9086] text-center mb-6">
            Enter your admin password to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                value={input}
                onChange={(e) => { setInput(e.target.value); setError(false); }}
                placeholder="Password"
                autoFocus
                className={`w-full border rounded-xl px-4 py-3 text-sm text-[#3d3530] bg-[#faf8f6] pr-10 focus:outline-none focus:ring-2 transition-colors ${
                  error
                    ? "border-[#c0897a] focus:ring-[#c0897a]/30"
                    : "border-[#ddd8d2] focus:ring-[#8fa68c]/30"
                }`}
              />
              <button
                type="button"
                onClick={() => setVisible((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9e9086] hover:text-[#7a6e5f] transition-colors"
                tabIndex={-1}
              >
                {visible ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            {error && (
              <p className="text-xs text-[#c0897a] text-center -mt-1">
                Incorrect password. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#8fa68c] hover:bg-[#7a9278] text-white text-sm font-medium rounded-xl py-3 transition-colors duration-200 shadow-sm"
            >
              Enter
            </button>
          </form>
        </div>

        <p className="text-center text-[10px] text-[#b0a898] mt-6">
          Fagom Professional Template
        </p>
      </div>
    </div>
  );
};

export default AdminGuard;
