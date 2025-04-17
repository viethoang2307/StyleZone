import React from "react";
import Button from "./Button";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between mb-4 border-b pb-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-medium">{item.name}</h3>
          <p className="text-gray-500">{item.category}</p>
          <p className="text-blue-500">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            size="icon"
            variant="secondary"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button variant="secondary" onClick={() => onRemove(item.id)}>
          Xóa
        </Button>
      </div>
    </div>
  );
};

export default CartItem;