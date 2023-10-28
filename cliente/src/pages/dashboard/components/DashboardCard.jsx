/* eslint-disable react/prop-types */
import cashIcon from '../../../assets/icons/cash-icon.svg'
const DashboardCard = ({
    title,
    value,
    color
}) => {
    return (
        <div>
            <div className={`h-full rounded-xl shadow-xl hover:shadow-gray-400 p-4 ${color}`}>
                <div className="flex flex-col gap-2 items-center justify-between text-white">
                    <div className="flex flex-col gap-1 items-center mb-3">
                        <img className='w-12' src={cashIcon} alt="" />
                        <span className="text-sm font-bold">{title}</span>
                        <span className="text-5xl font-bold">{value}</span>
                    </div>
                    <div>
                        <p className='px-2 py-1 bg-green-200 font-bold text-green-600 rounded-lg'>+12%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard