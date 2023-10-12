import { PieChart, Pie, Tooltip, Cell,ResponsiveContainer  } from 'recharts';

const data = [
    { name: 'Comida', value: 300 },
    { name: 'Viajes', value: 150 },
    { name: 'Ropa', value: 200 },
    { name: 'Alquiler', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const GraphicDonutChart = () => {
    return (
        <div className='p-4 md:p-8'>
            <div className='flex max-md:flex-col justify-between items-center'>
                <h2 className='text-xl text-black font-bold pb-2'>Actividad</h2>
                <select name="" id=""
                    className='bg-primary text-white rounded-md px-4 py-2 outline-secondary font-bold hover:bg-blue-400'
                >
                    <option className='font-semibold py-1 hover:bg-secondary' value="">Ultimos 6 meses</option>
                    <option className='font-semibold py-1 hover:bg-secondary' value="">Ultimo Mes</option>
                    <option className='font-semibold py-1 hover:bg-secondary' value="">Ultima semana</option>
                </select>
            </div>
            <div className='flex items-center justify-evenly'>
                <ResponsiveContainer 
                    width="80%" 
                    height={300}
                >
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={data}
                            // cx={150}
                            // cy={100}
                            outerRadius={80}
                            innerRadius={60} // Define el radio interno para crear el efecto de donut
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
                    </PieChart>
                </ResponsiveContainer>
                <div className='flex flex-col font-semibold'>
                    <p className='flex items-center gap-2'>
                        <span className='block rounded-full w-3 h-3 bg-[#00C49F]'></span>
                        Viajes
                    </p>
                    <p className='flex items-center gap-2'>
                        <span className='block rounded-full w-3 h-3 bg-[#FFBB28]'></span>
                        Ropa
                    </p>
                    <p className='flex items-center gap-2'>
                        <span className='block rounded-full w-3 h-3 bg-[#FF8042]'></span>
                        Alquiler
                    </p>
                    <p className='flex items-center gap-2'>
                        <span className='block rounded-full w-3 h-3 bg-[#0088FE]'></span>
                        Comida
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GraphicDonutChart