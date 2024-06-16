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
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-[25rem] h-[30rem] p-4">
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
            <div className="p-1 flex flex-col justify-between">
              <h2 className="mt-2 mb-2 font-bold text-center text-xl">
                {name}
              </h2>
              <div className="mt-3 flex items-center">
                <span className="font-semibold text-xl ml-3">{price}</span>
                &nbsp;
                <span className="text-xl font-semibold">€</span>
                <span className="ml-auto font-semibold text-xl mr-3">
                  {collection}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
