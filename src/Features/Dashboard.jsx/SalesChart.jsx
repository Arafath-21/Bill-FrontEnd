import { useQuery } from '@tanstack/react-query';
import { format, isValid, parseISO } from 'date-fns';
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
import { getSales } from '../../services/sales';

function SalesChart() {
  // salesData
  const { data: data1, isLoading } = useQuery({
    queryKey: ['sales'],
    queryFn: getSales,
  });

  const data = data1?.data?.sales;

  // Filter out entries with empty sellingDate
  const validData = data?.filter((entry) => entry.sellingDate);

  const sorted = validData
    ?.slice()
    ?.sort((a, b) => new Date(a.sellingDate) - new Date(b.sellingDate));

  const newdata = sorted?.map((data) => {
    return {
      date: format(parseISO(data.sellingDate), 'dd-MMMM'),
      sales: Number(data.totalAmount),
      quantity: Number(data.quantity),
    };
  });

  if (!data || validData.length === 0) {
    return (
      <div className="pt-10">
        <p className="text-md text-center font-semibold capitalize tracking-wider text-red-600">
          cannot show dashboard with empty data!
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-auto w-full max-w-3xl flex-col rounded-md bg-slate-100  px-4 py-6 shadow-xl">
      <h2 className="text-center font-semibold">Sales</h2>
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
          <CartesianGrid strokeDasharray="3" />
          <XAxis
            dataKey="date"
            tickSize={6}
            className="text-xs font-semibold"
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#fafaf9', borderRadius: '5px' }}
          />
          <YAxis
            domain={['dataMin', 'auto']}
            className="text-xs font-semibold"
            unit="Rs"
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#f59e0b"
            fill="#1d4ed8"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
