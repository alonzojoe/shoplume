import { cn } from "@/lib/utils";
type ProductPrice = {
  value: number;
  className?: string;
};

const ProductPrice = ({ value, className }: ProductPrice) => {
  const formattedPrice = value.toFixed(2);

  const [amount, decimal] = formattedPrice.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {amount}
      <span className="text-xs align-super">.{decimal}</span>
    </p>
  );
};

export default ProductPrice;
