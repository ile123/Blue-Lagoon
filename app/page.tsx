import PalmTree from "./components/palm-tree";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <PalmTree height={500} width={500} />
        <Link
          href="/products"
          className="animate-pulse mb-[15%] text-4xl font-bold text-gray-800 hover:text-pink-500 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Blue Lagoon
        </Link>
    </div>
  );
}
