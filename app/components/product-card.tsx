import { ProductCardInfo } from "@/types/ProductCardInfo";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  id,
  imageUrl,
  price,
  name,
  collection,
}: ProductCardInfo) {
  return (
    <div className="container mx-auto transform transition duration-500 hover:scale-105">
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-[25rem] p-4">
          <Link
            href={`/products/${id}`}
            className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full"
          >
            <div className="relative pb-48 overflow-hidden h-[22rem]">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={imageUrl}
                alt=""
                width={500}
                height={1000}
              />
            </div>
            <hr className="border-t-4 border-blue-100" />
            <div className="p-1 flex flex-col justify-between">
              <h2 className="mt-2 mb-2 font-semibold text-center text-xl">
                {name}
              </h2>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-lg ml-2">{price} €</span>
                <span className="text-lg mr-2">{collection}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
