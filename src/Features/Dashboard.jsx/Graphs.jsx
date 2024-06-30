import InventoryChart from "./InventoryChart"
import PurchaseChart from "./PurchaseChart"
import SalesChart from "./SalesChart"

function Graphs() {
    return (
        <div className="h-full px-6 flex max-w-full flex-col gap-6  mt-12">
              <SalesChart/>
              <PurchaseChart/>
              <InventoryChart/>
        </div>
    )
}

export default Graphs
