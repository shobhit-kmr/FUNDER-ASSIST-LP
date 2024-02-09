import React from "react";

export default function Btn({ name = "button" }) {
  return (
    <button
      type="button"
      class="text-h5 text-black bg-gradient-to-r from-yellow  to-orange hover:bg-gradient-to-br focus:ring-4 font-bold focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  rounded-full text-lg px-8 py-3 text-center me-2"
    >
      {name}
    </button>
  );
}
