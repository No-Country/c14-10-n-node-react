import { PieChart, Pie, Tooltip, Cell,ResponsiveContainer, Legend  } from 'recharts';

const data = [
    { name: 'Spend', value: 300 },
    { name: 'Earned', value: 150 },
];

const COLORS = ['#0088FE', '#0000FE'];

const GraphicDonutChart = () => {
    return (
        <div className='p-1 md:p-4 overflow-y-hidden max-h-[14rem] bg-white rounded-xl'>
            <div className='flex items-center justify-evenly'>
                <ResponsiveContainer 
                    width="90%" 
                    height={200}
                >
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={data}
                            // cx={150}
                            cy={100}
                            outerRadius={70}
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
                        <Legend 
                            align="right" 
                            verticalAlign="middle"
                            layout="vertical" 
                            iconSize={20}
                            iconType="circle"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GraphicDonutChart