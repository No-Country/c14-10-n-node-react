import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const data = [
  { name: 'Comida', value: 300 },
  { name: 'Viajes', value: 150 },
  { name: 'Ropa', value: 200 },
  { name: 'Alquiler', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const GraphicDonutChart = () => {
    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    innerRadius={40} // Define el radio interno para crear el efecto de donut
                    fill="#8884d8"
                    label
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                    }
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    )
}

export default GraphicDonutChart