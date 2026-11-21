/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  // Windows checkouts use CRLF (core.autocrlf), CI and Vercel use LF: accept both
  endOfLine: "auto",
};

export default config;
