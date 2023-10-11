import { Link } from "react-router-dom";

export default function PortadaAuth() {
    return (
        <div className="relative items-center justify-center flex-1 hidden h-screen overflow-hidden bg-title lg:flex">
            <div className="relative z-10 w-full max-w-md">
                <Link to='/' className="text-3xl font-bold text-white">WarrenBank</Link>
                <div className="mt-16 space-y-3 ">
                    <h3 className="text-3xl font-bold text-white">Start growing your business quickly</h3>
                    <p className="text-gray-200">
                        Create an account and get access to all features for 30-days, No credit card required.
                    </p>
                    <div className="flex items-center -space-x-2 overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 border-2 border-white rounded-full" />
                        <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 border-2 border-white rounded-full" />
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 border-2 border-white rounded-full" />
                        <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 border-2 border-white rounded-full" />
                        <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 border-2 border-white rounded-full" />
                        <p className="text-sm font-medium text-gray-300 translate-x-5">
                            Únete a 5.000+ usuarios
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-0 my-auto h-[500px]"
                style={{
                    background: "linear-gradient(152.92deg, #1062FB , #3D8FE6 , #6ACCEB )", filter: "blur(118px)"
                }}
            >

            </div>
        </div>
    )
}
