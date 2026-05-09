import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  data: {
    name: string;
    revenue: number;
  }[];
};

export const RevenueChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(36 25% 87%)" />

        <XAxis
          dataKey="name"
          tick={{
            fontSize: 12,
            fill: "hsl(16 20% 48%)",
          }}
        />

        <YAxis
          tick={{
            fontSize: 12,
            fill: "hsl(16 20% 48%)",
          }}
          tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`}
        />

        <Tooltip
          formatter={(value) => {
            const finalValue = Array.isArray(value) ? value[0] : value;

            return `₹${Number(finalValue ?? 0).toLocaleString("en-IN")}`;
          }}
          contentStyle={{
            borderRadius: 12,
            border: "1px solid hsl(36 25% 87%)",
            background: "hsl(30 33% 98%)",
          }}
        />

        <Line
          type="monotone"
          dataKey="revenue"
          stroke="hsl(14 48% 69%)"
          strokeWidth={3}
          dot={{
            fill: "hsl(16 41% 29%)",
            strokeWidth: 2,
            r: 5,
          }}
          activeDot={{
            r: 7,
            fill: "hsl(14 48% 69%)",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
