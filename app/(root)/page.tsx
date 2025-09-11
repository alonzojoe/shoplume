import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: "Homes",
};

const delay = (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
};

const HomePage = async () => {
  await delay(2000);
  console.log(sampleData);
  return (
    <div>
      <h2 className="text-re">Shopelumess</h2>
      <ProductList data={sampleData.products} title="Products" />
    </div>
  );
};

export default HomePage;
