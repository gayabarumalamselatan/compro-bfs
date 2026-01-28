import ProductsPage from "@/components/pages/products/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions - Products",
};

const page = () => {
  return <ProductsPage />;
};

export default page;
