"use client";

import { ProductInfo } from "@/types/ProductInfo";
import { useEffect, useState } from "react";
import { getProductById } from "@/lib/product";
import Image from "next/image";
import PalmTree from "@/app/components/palm-tree";
import Button from "@/app/components/button";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    getProductById(params.productId)
      .then((result: ProductInfo) => {
        console.log(result);
        setProduct(result);
        setSizes(result.size || []);
        setColors(result.color || []);
      })
      .catch((error) => console.log(error));
  }, [params.productId]);

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      {product === null ? (
        <i className="animate-spin rounded-full h-32 w-32 border-t-4 border-[#F0C166] mt-[15%]" />
      ) : (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[60rem] h-[32rem]">
          <div className="flex h-full">
            <section className="w-1/2 p-4 flex items-center justify-center border-r-2 border-[#5D90A6]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                blurDataURL={product.imageUrl}
                placeholder="blur"
              />
            </section>
            <section className="w-1/2 p-4 flex flex-col justify-between">
              <PalmTree height={100} width={100} />
              <h3 className="font-medium text-3xl">{product.name}</h3>
              <h6 className="mb-2">{product.price} €</h6>
              <h6 className="h-14 w-[70%] overflow-y-auto mb-4">
                {product.description}
              </h6>
              <h6 className="font-medium">Product Details: </h6>
              <div className="h-14 w-[70%] overflow-y-auto">
                <ul>
                  {Object.entries(product.details).map(
                    ([key, value], index) => (
                      <li key={index}>
                        {key}: {value}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <select
                name="size"
                className="block appearance-none bg-white border border-[#F0E3DE] hover:border-[#B6F9FF] px-4 py-2 pr-8 rounded shadow leading-tight text-center w-72 "
              >
                {product.size.map((item, key) => (
                  <option key={key} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                name="color"
                className="block appearance-none bg-white border border-[#F0E3DE] hover:border-[#B6F9FF] px-4 py-2 pr-8 rounded shadow leading-tight text-center w-72"
              >
                {product.color.map((item, key) => (
                  <option key={key} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="amount"
                min={1}
                className="block appearance-none bg-white border border-[#F0E3DE] hover:border-[#B6F9FF] px-4 py-2 rounded shadow leading-tight text-center w-72"
              />
            </section>
            <section>
              <Button
                text={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="size-8 w-14"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                }
                action={handleClick}
                styling={"bg-[#49C2CE] h-full"}
              />
            </section>
          </div>
        </div>
      )}
    </>
  );
}
