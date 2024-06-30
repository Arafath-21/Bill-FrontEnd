import { format, parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function PurchaseChart() {
  // purchase Data
  const purchasedata = useSelector((state) => state.purchase.purchase);
  const data = purchasedata;
  const sorted=data?.slice().sort((a, b) => new Date(a.sellingDate) - new Date(b.sellingDate));

  const newdata = sorted?.map((data) => {
    return {
      date: format(parseISO(data.purchaseDate), 'dd-MMMM'),
      purchase: Number(data.totalAmount),
      quantity: Number(data.quantity),
    };
  });

  if(!data){
    return null
  }

  

  return (
    <div className="mx-auto my-6 flex h-auto max-w-3xl w-full flex-col rounded-md bg-slate-100 px-4 py-6 shadow-xl">
      <h2 className="text-center font-semibold">Purchase</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={newdata}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="4" />
          <XAxis dataKey="date" className="text-xs font-semibold" />
          <Tooltip
            contentStyle={{ backgroundColor: '#fafaf9', borderRadius: '5px' }}
          />
          <YAxis
            domain={['dataMin', 'auto']}
            className="text-xs font-semibold"
            unit="Rs"
          />
          {/* <Area
            type="monotone"
            dataKey="quantity"
            stroke="#84cc16"
            fill="#1d4ed8"
            strokeWidth={2}
          /> */}
          <Area
            type="monotone"
            dataKey="purchase"
            stroke="#f59e0b"
            fill="#1d4ed8"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PurchaseChart;
