import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Enero', gastos: 30 },
    { name: 'Febrero', gastos: 40 },
    { name: 'Marzo', gastos: 35 },
    { name: 'Abril', gastos: 50 },
    { name: 'Mayo', gastos: 60 },
    { name: 'Junio', gastos: 55 }
];



const GraphicLineChart = () => {
    
    return (
        <div className='p-8 flex flex-col gap-4'>
            <div className='flex max-md:flex-col justify-between items-center'>
                <h2 className='text-xl text-black font-bold pb-2'>Gastos mensuales</h2>
                <select name="" id=""
                    className='bg-primary text-white rounded-md px-4 py-2 outline-secondary font-bold hover:bg-blue-400'
                >
                    <option className='font-semibold py-1 hover:bg-secondary' value="">Ultimos 6 meses</option>
                    <option className='font-semibold py-1 hover:bg-secondary' value="">Ultimo Mes</option>
                    <option className='font-semibold py-1 hover:bg-secondary' value="">Ultima semana</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart width={600} height={400} data={data}>
                    <CartesianGrid
                        stroke="#E0E0E0"
                        vertical={false}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="gastos" 
                        stroke="#69ADFF" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorGastos)"
                        activeDot={{ r: 8, fill: '#1062FB' }} 
                    />
                    <defs>
                    <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#69ADFF" stopOpacity={0.6}/>
                        <stop offset="45%" stopColor="#69ADFF" stopOpacity={0.18}/>
                        <stop offset="95%" stopColor="#69ADFF" stopOpacity={0.05}/>
                    </linearGradient>
                    </defs>
                    <XAxis 
                        dataKey="name" 
                        stroke="#000"
                        padding={{top:10}}
                        tickSize={10}
                    />
                    <YAxis 
                        dataKey="gastos" 
                        domain={[0, 100]}
                        tickFormatter={(value) => `$${value}`}
                    />
                    
                    <Line type="monotone" dataKey="gastos" stroke="#1062FB" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
                    <Tooltip 
                        allowEscapeViewBox={
                            { x: true, y: false }
                        }
                        cursor={{ stroke: '#e0e0e0', strokeWidth: 2, opacity: 1, fill: '#DCEDF4', rx: 10 }}
                        contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '1rem', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                        labelStyle={{ color: '#000', fontWeight: 'bold' }}
                        itemStyle={{ color: '#000' }}
                        formatter={(value) => `$${value}`}
                    />
                    <Legend 
                        wrapperStyle={{ bottom: -10 }}
                        align="center"
                        verticalAlign="bottom"
                        height={36}
                        content="Gastos"
                            
                        
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraphicLineChart