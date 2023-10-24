"use client";

import request from "@/server";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductType from "@/types/praduct";
import PraductCard from "@/components/card/praductCard";

const Products = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(("category") || "");

  const search = useSearchParams();
  const [products, setProducts] = useState([] as ProductType[]);
  const [total, setTotal] = useState(0);

  useEffect(() =>{
    const getProducts = async () =>{
      try{
       const {
        data:{total, products},
      } = await request.get<{ total: number; products: ProductType[] }>(
        "products",
        { params: { category: category || undefined } }
        
        );
        const { data } = await request.get("category");
        setCategory(data);

        setProducts(products);
        setTotal(total);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [category]);

  return (
    <div>
      <h1 className="text-center">Products</h1>
      <div className="container">
          {products.map((product) => (
            <PraductCard key={product._id } {...product} />
            ))}
       </div>
    </div>
  );
};

export default Products;
