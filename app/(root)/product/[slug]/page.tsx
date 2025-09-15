import React from "react";

const ProductDetails = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;

  return <div>Product Details: {slug}</div>;
};

export default ProductDetails;
