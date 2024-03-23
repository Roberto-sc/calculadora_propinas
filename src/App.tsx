import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPorcentageForm from "./components/TipPorcentageForm";

function App() {
  const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-20">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-5">
          <h2 className="text-4xl font-black mb-10"> Menú</h2>

          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-12">
          {order.length > 0 ?(
              <>
                <OrderContent order={order} removeItem={removeItem} />

                <TipPorcentageForm tip={tip} setTip={setTip} />

                <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
              </>
            ):
              (
                <p className="text-center"> La orden esta vacía</p>
              )
            }
        </div>
      </main>
    </>
  );
}

export default App;
