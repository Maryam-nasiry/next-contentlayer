"use client"

import { useRouter } from "next/router";

interface LinktestProps {
  link: "https://www.freepik.com";
  text: "click";
}

export default function Linktest({ link, text }: LinktestProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded transform scale-95 active:scale-100 transition duration-300"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
