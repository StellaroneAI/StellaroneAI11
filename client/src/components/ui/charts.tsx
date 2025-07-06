import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

interface ChartData {
  name: string;
  [key: string]: any;
}

interface LineChartProps {
  data: ChartData[];
  xKey: string;
  yKey: string;
  color?: string;
  height?: number;
}

export function CustomLineChart({ data, xKey, yKey, color = "#0066CC", height = 300 }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

interface PieChartProps {
  data: ChartData[];
  colors: string[];
  height?: number;
  dataKey?: string;
}

export function CustomPieChart({ data, colors, height = 300, dataKey = "value" }: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey={dataKey}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

interface BarChartProps {
  data: ChartData[];
  xKey: string;
  yKey: string;
  color?: string;
  height?: number;
}

export function CustomBarChart({ data, xKey, yKey, color = "#0066CC", height = 300 }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={yKey} fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
}
