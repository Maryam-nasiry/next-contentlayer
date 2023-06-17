import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();

  // Define the function that will handle the click event
  const handleClick = () => {
    // Navigate to some link
    router.push("/https://www.freepik.com");
  };

  return (
    <button
      // Add the Tailwind utility classes for styling
      className="bg-blue-500 text-white py-2 px-4 rounded transform scale-95 active:scale-100 transition duration-300"
      // Add the onClick event handler
      onClick={handleClick}
    >
      Click me
    </button>
  );
}
