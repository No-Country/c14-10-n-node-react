import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Enero', ventas: 30 },
  { name: 'Febrero', ventas: 40 },
  { name: 'Marzo', ventas: 35 },
  { name: 'Abril', ventas: 50 },
  { name: 'Mayo', ventas: 60 },
  { name: 'Junio', ventas: 55 }
];

const GraphicLineChart = () => {
    
    return (
        <div>
            <h2>Gastos mensuales</h2>
            <LineChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="ventas" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    )
}

export default GraphicLineChart