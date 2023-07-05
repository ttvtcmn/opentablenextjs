import { PRICE } from "@prisma/client";
import React from "react";

export default function Price({ price }: { price: PRICE }) {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else if (price === PRICE.EXPENSIVE) {
      return (
        <>
          <span>$$$$</span>
          <span className="text-gray-400"></span>
        </>
      );
    } else {
      return (
        <>
          <span className="text-gray-400">$$$$</span>
        </>
      );
    }
  };

  return <p className="flex mr-3">{renderPrice()}</p>;
}
