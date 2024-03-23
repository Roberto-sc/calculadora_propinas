import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
};

export default function OrderContent({ order }: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="spay3 mt-10">
        {order.length === 0 ? (
          <p className="text-center"> La orden esta vacía</p>
        ) : (
          order.map((orderItem) => (
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
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
