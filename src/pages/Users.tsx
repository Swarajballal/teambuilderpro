import { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/ProductList";
import Loading from "@/components/Loading";
import { Product } from "@/types";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import Pagination from "@/components/ui/Pagination";

const productsData = [
  {
    id: "1",
    category: "Camera",
    name: "Sony FX3",
    price: "$3,999.00",
    images: ["/img/products/FX3.png"],
  },
  {
    id: "2",
    category: "Camera",
    name: "Sony A7S III",
    price: "$3,499.00",
    images: ["/img/products/7SIII.png"],
  },
  {
    id: "3",
    category: "Camera",
    name: "Sony A7C",
    price: "$1,599.00",
    images: ["/img/products/7C.png"],
  },
  {
    id: "4",
    category: "Camera",
    name: "Sony A7 IV",
    price: "$2,399.00",
    images: ["/img/products/7IV.png"],
  },
  {
    id: "5",
    category: "Camera",
    name: "Sony A7R III",
    price: "$2,499.00",
    images: ["/img/products/7RIII.png"],
  },
  {
    id: "6",
    category: "Camera",
    name: "Sony A7R V",
    price: "$3,899.00",
    images: ["/img/products/7RV.png"],
  },
  {
    id: "7",
    category: "Camera",
    name: "Sony A6700",
    price: "$1,799.00",
    images: ["/img/products/6700.png"],
  },
  {
    id: "8",
    category: "Camera",
    name: "Sony AZV-E10",
    price: "$699.00",
    images: ["/img/products/ZVE10.png"],
  },
];


const Users = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate a data fetch with a timeout
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 2000); // 2 second delay
  }, []);

  return (
    <Container>
      <div className="flex items-center space-x-2 justify-center md:pt-20  pt-10 gap-3">
          <Input type="text" className="px-3 p-5 w-60 md:w-96" placeholder="Search...." />
          <Button className="px-3 py-2">Search</Button>
      </div>
       {loading ? (
        <Loading />
      ) : (
      <div className="space-y-2 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
           <ProductList items={products} />     
        </div>
      </div>
      )}

    <div className="flex justify-center items-center space-x-2 p-10 gap-3">
        <Pagination />
    </div>

    </Container>
  );
};

export default Users;