import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Homes",
};

// const delay = (ms: number) => {
//   return new Promise((res) => setTimeout(res, ms));
// };

const HomePage = async () => {
  // await delay(2000);
  const latestProducts = await getLatestProducts();

  console.log("products", latestProducts);

  return (
    <div>
      <h2>Shopelumess</h2>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </div>
  );
};

export default HomePage;
