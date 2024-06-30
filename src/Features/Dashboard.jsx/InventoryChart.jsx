import { useSelector } from 'react-redux';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

function InventoryChart() {
  const data = useSelector((state) => state.item.items);
  const finaldata = data?.map((item) => {
    return {
      itemName: item.itemName,
      quantity: Number(item.quantity),
      salesPrice: Number(item.salesPrice),
    };
  });

  if (!data) {
    return null
  }

  return (
    <div className="mx-auto my-6 flex h-auto w-full max-w-3xl flex-col rounded-md bg-slate-100 px-4 py-6 shadow-xl ">
      <h2 className="text-center font-semibold">Items</h2>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={finaldata}
            nameKey="itemName"
            dataKey="quantity"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={3}
          >
            {finaldata?.map((entry) => (
              <Cell fill="#1d4ed8" stroke="" key={entry.itemName} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default InventoryChart;
