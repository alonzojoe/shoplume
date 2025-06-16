import React from "react";

export const metadata = {
  title: "Homes",
};

const delay = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

const HomePage = async () => {
  await delay(2000);
  return (
    <div>
      <h2 className="text-re">Shopelumess</h2>
    </div>
  );
};

export default HomePage;
