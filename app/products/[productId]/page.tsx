"use client";

import { ProductInfo } from "@/types/ProductInfo";
import { useEffect, useState } from "react";
import { getProductById } from "@/lib/product";
import Image from "next/image";
import PalmTree from "@/app/components/palm-tree";
import Button from "@/app/components/button";
import Select from "@/app/components/select";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [productSize, setProductSize] = useState<string>("");
  const [productColor, setProductColor] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    getProductById(params.productId)
      .then((result: ProductInfo) => {
        setProduct(result);
        setSizes(result.size || []);
        setColors(result.color || []);
        setProductSize(result.size[0]);
        setProductColor(result.color[0]);
      })
      .catch((error) => console.log(error));
  }, [params.productId]);

  const sizeChangeHandler = (value: string) => {
    setProductSize(value);
  };

  const colorChangeHandler = (value: string) => {
    setProductColor(value);
  };

  const submitHandler = () => {
    alert(`Size: ${productSize}\nColor: ${productColor}\nAmount: ${amount}`);
  };

  return (
    <>
      {product === null ? (
        <i className="animate-spin rounded-full h-32 w-32 border-t-4 border-[#F0C166] mt-[15%]" />
      ) : (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl h-auto md:h-[32rem]">
          <div className="flex flex-col md:flex-row h-full">
            <section className="w-full md:w-1/2 p-4 flex items-center justify-center border-b-2 md:border-r-2 md:border-b-0 border-[#5D90A6]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                blurDataURL={product.imageUrl}
                placeholder="blur"
                className="max-w-full h-auto"
              />
            </section>

            <section className="w-full md:w-1/2 p-4 flex flex-col justify-between">
              <PalmTree height={100} width={100} />
              <h3 className="font-medium text-2xl md:text-3xl">
                {product.name}
              </h3>
              <h6 className="mb-2 text-lg md:text-xl">{product.price} €</h6>
              <h6 className="h-14 w-full md:w-[70%] overflow-y-auto mb-4">
                {product.description}
              </h6>
              <h6 className="font-medium text-lg">Product Details: </h6>
              <div className="h-14 w-full md:w-[70%] overflow-y-auto">
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

              <Select
                name={"size"}
                styling={
                  "block appearance-none bg-white border border-[#F0E3DE] hover:border-[#B6F9FF] px-4 py-2 pr-8 rounded shadow leading-tight text-center w-full md:w-72"
                }
                array={product.size}
                action={sizeChangeHandler}
              />

              <Select
                name={"color"}
                styling={
                  "block appearance-none bg-white border border-[#F0E3DE] hover:border-[#B6F9FF] px-4 py-2 pr-8 rounded shadow leading-tight text-center w-full md:w-72"
                }
                array={product.color}
                action={colorChangeHandler}
              />

              <input
                type="number"
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
                min={1}
                className="block appearance-none bg-white border border-[#F0E3DE] hover:border-[#B6F9FF] px-4 py-2 rounded shadow leading-tight text-center w-full md:w-72"
              />
            </section>

            <section className="flex justify-center items-center p-4 md:p-0">
              <Button
                content={
                  <div className="flex justify-center items-center h-full w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-6 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                }
                action={submitHandler}
                styling={
                  "bg-[#49C2CE] h-full w-full md:w-auto flex items-center justify-center px-6"
                }
              />
            </section>
          </div>
        </div>
      )}
    </>
  );
}
