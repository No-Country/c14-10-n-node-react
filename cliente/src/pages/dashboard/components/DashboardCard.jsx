/* eslint-disable react/prop-types */

const DashboardCard = ({
    title,
    value,
    color
}) => {
    return (
        <div>
            <div className={` rounded-xl shadow-xl hover:shadow-gray-400 p-4 ${color}`}>
                <div className="flex items-center justify-between text-white">
                    <div className="flex flex-col">
                        <img 
                            src="https://www.reshot.com/preview-assets/icons/R7ULS2C9V5/holding-money-R7ULS2C9V5.svg" alt="" 
                            className="w-12 h-12"
                        />
                        <span className="text-sm font-light">{title}</span>
                        <span className="text-2xl font-bold">{value}</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard