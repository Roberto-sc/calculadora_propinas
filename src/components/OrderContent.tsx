import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem : (id: MenuItem['id']) => void
};

export default function OrderContent({ order,removeItem}: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="spay3 mt-10">
        {order.map((orderItem) => (
            <div 
                key={orderItem.id}
                className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
                  <div>
              <p className="text-lg">
                {orderItem.name} - {formatCurrency(orderItem.price)}
              </p>
              <p className="font-black">
                    Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.quantity * orderItem.price)}
              </p>
              

                </div>
              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => removeItem(orderItem.id)}
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
