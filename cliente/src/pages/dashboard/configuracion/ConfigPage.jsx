import { useAuthContext } from "../../../hooks/useAuthContext"

export default function ConfigPage() {
    const { dataUser } = useAuthContext()
    return (
        <section className="md:px-16 flex flex-col gap-10 items-center md:w-[80%] mx-auto">
            <div className="flex items-center w-full gap-4 py-10">
                <picture>
                    <img className="rounded-full w-36" src="https://1.bp.blogspot.com/-swg8C41eG00/X1VbvxXQX7I/AAAAAAAAXl0/mgpSVh6rRi87j9bd8i-4Kldx0J90rRQpACLcBGAsYHQ/s320/Vegetta777_Aries.jpg" alt="" />
                </picture>
                <div>
                    <h2 className="text-xl font-bold text-primary">{dataUser.username} </h2>
                    <p>Barcelona,España</p>
                </div>
            </div>
            <div className="w-full">
                <form action="" className="flex flex-col gap-6">
                    <section className="grid md:grid-cols-2 md:gap-8">
                        <div className="flex flex-col items-start gap-1">
                            <label className="text-lg font-semibold text-slate-600" htmlFor="">Nombre</label>
                            <input className="text-lg font-semibold bg-blue-100 rounded-[.8rem] border-[1px] border-slate-400 outline-blue-400 text-slate-800 py-2 px-4" type="text" />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="text-lg font-semibold text-slate-600" htmlFor="">Nombre completo</label>
                            <input className="text-lg font-semibold bg-blue-100 rounded-[.8rem] border-[1px] border-slate-400 outline-blue-400 text-slate-800 py-2 px-4" type="text" />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="text-lg font-semibold text-slate-600" htmlFor="">Correo</label>
                            <input className="text-lg font-semibold bg-blue-100 rounded-[.8rem] border-[1px] border-slate-400 outline-blue-400 text-slate-800 py-2 px-4" type="email" />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="text-lg font-semibold text-slate-600" htmlFor="">Numero Telefonico</label>
                            <input className="text-lg font-semibold bg-blue-100 rounded-[.8rem] border-[1px] border-slate-400 outline-blue-400 text-slate-800 py-2 px-4" type="number" />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="text-lg font-semibold text-slate-600" htmlFor="">Ubicacion</label>
                            <input className="text-lg font-semibold bg-blue-100 rounded-[.8rem] border-[1px] border-slate-400 outline-blue-400 text-slate-800 py-2 px-4" type="text" />
                        </div>
                    </section>
                    <div className="flex justify-center">
                        <input type="submit" className="bg-gradient-blue-purple text-white text-lg cursor-pointer font-bold px-8 py-2 rounded-[1rem] hover:shadow-xl" value="Guardar cambios" />
                    </div>
                </form>
            </div>
        </section>
    )
}

