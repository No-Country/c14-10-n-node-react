import { useState } from "react"

export default function ConfigPage() {
    const [editProfile, setEditProfile] = useState(false)
    const stateInput = editProfile ? "bg-slate-50 border-gray-200" : "bg-transparent border-transparent pointer-events-none"
    const [editPhoto, setEditPhoto] = useState(false)
    const handleEditProfile = () => {
        setEditProfile(!editProfile)
    }
    const handleChangePhoto = () => {
        setEditPhoto(!editPhoto)
    }
    return (
        <section className="md:px-16 flex flex-col gap-10 items-center md:w-[80%] mx-auto bg-white rounded-2xl">
            {
                editPhoto && (
                    <div className="fixed top-0 w-screen h-screen left-0 p-4 flex justify-center items-center">
                        <div className="relative bg-slate-200 opacity-70 z-50 rounded-[2rem] w-[60%] h-[60%] flex items-center justify-center">
                            <span className="absolute top-0 right-0 p-4" onClick={handleChangePhoto}>X</span>
                            <form className="flex flex-col gap-4">
                                <p className="text-2xl font-bold text-slate-800">Sube una imagen</p>
                                <input type="file" />
                                <input className="bg-gray-400 text-black text-lg cursor-pointer font-bold px-8 py-2 rounded-[1rem] hover:shadow-xl" type="submit" />
                            </form>
                        </div>
                    </div>
                )
            }
            <div className="w-full flex gap-4 items-center py-10 border-b-[1px] ">
                <picture>
                    <img className="w-36 rounded-full" src="https://1.bp.blogspot.com/-swg8C41eG00/X1VbvxXQX7I/AAAAAAAAXl0/mgpSVh6rRi87j9bd8i-4Kldx0J90rRQpACLcBGAsYHQ/s320/Vegetta777_Aries.jpg" alt="" />
                </picture>
                <div className="flex flex-col gap-1">
                    <a 
                        type="file"
                        className="border-[1px] font-bold cursor-pointer rounded-[1rem] px-4 py-2 hover:bg-slate-200 "
                        onClick={handleChangePhoto}
                    >Cambiar foto</a>
                    <h2 className="pl-2 font-bold text-xl text-primary">Samuel </h2>
                    <p className="pl-2">Barcelona,España</p>
                </div>
            </div>
            <div className="w-full border-[1px] rounded-2xl p-4">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl text-slate-800">Informacion personal</h2>
                    <p className={`border-[1px] font-bold cursor-pointer rounded-[1rem] px-4 py-2 hover:bg-slate-200 ${editProfile && 'bg-blue-200' }`}
                        onClick={handleEditProfile}
                    >Editar</p>
                </div>
                <form action="" className="flex flex-col gap-6">
                    <section className="grid md:grid-cols-2 md:gap-8">
                        <div className="flex flex-col items-start gap-1">
                            <label className="font-semibold text-slate-600 text-lg" htmlFor="">Nombre</label>
                            <input 
                                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`} 
                                type="text" 
                                value="Samuel"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="font-semibold text-slate-600 text-lg" htmlFor="">Nombre completo</label>
                            <input 
                                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`} 
                                type="text" 
                                value="Samuel de Luque"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="font-semibold text-slate-600 text-lg" htmlFor="">Correo</label>
                            <input 
                                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`} 
                                type="email" 
                                value="SamuelLuq1@gmail.com"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="font-semibold text-slate-600 text-lg" htmlFor="">Numero Telefonico</label>
                            <input 
                                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`} 
                                type="number" 
                                value="98574542"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="font-semibold text-slate-600 text-lg" htmlFor="">Ubicacion</label>
                            <input 
                                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`} 
                                type="text" 
                                value="España, Barcelona"
                            />
                        </div>
                    </section>
                    {
                        editProfile && (
                            <div className="flex justify-center">
                                <input type="submit"  className="bg-gradient-blue-purple text-white text-lg cursor-pointer font-bold px-8 py-2 rounded-[1rem] hover:shadow-xl" value="Guardar cambios"/>
                            </div>
                        )
                    }
                    
                </form>
            </div>
        </section>
    )
}

