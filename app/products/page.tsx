"use client";

import { getAllProducts, getAllProductsByCollection } from "@/lib/product";
import PalmTree from "../components/palm-tree";
import ProductCard from "../components/product-card";
import { ProductCardInfo } from "@/types/ProductCardInfo";
import { useEffect, useState } from "react";
import NavigationMenu from "../components/navigation-menu";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((result) => {
        const temp: any = ["All"];
        result.map((item: ProductCardInfo) => {
          if (!temp.includes(item.collection)) temp.push(item.collection);
        });
        setCollections(temp);
        setProducts(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const productCollectionHandler = (collection: string) => {
    if (collection === "All") {
      getAllProducts()
        .then((result) => setProducts(result))
        .catch((error) => console.log(error));
    } else {
      getAllProductsByCollection(collection)
        .then((result) => setProducts(result))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {products === undefined || products.length == 0 ? (
        <i className="animate-spin rounded-full h-32 w-32 border-t-4 border-[#F0C166]" />
      ) : (
        <div>
          <section className="mt-1 flex flex-col sm:flex-row items-center justify-between">
            <div className="w-full mt-32 sm:w-1/3 sm:mb-0">
              <div className="sm:mt-0">
                <NavigationMenu />
              </div>
            </div>
            <div className="w-full sm:w-1/3 flex justify-center">
              <PalmTree height={200} width={200} />
            </div>
            <div className="w-full mt-32 sm:w-1/3">
              <select
                name="collection"
                onChange={(e) => productCollectionHandler(e.target.value)}
                className="sm:mt-0 ml-auto block appearance-none bg-white border border-[#F0E3DE] hover:border-[#B6F9FF] px-4 py-2 pr-8 rounded shadow leading-tight text-center"
              >
                {collections.map((collection: string, key: number) => (
                  <option key={key} value={collection}>
                    {collection}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            {products.map((product: ProductCardInfo, key: number) => (
              <ProductCard
                key={key}
                id={product.id}
                imageUrl={product.imageUrl}
                price={product.price}
                name={product.name}
                collection={product.collection}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
