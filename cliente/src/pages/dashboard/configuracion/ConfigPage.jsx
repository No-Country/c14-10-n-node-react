import { useContext, useState } from "react"
import { AuthContext } from "../../../context/AuthContext"
import closeIcon from "../../../assets/icons/close-icon.svg"
export default function ConfigPage() {
    const [editProfile, setEditProfile] = useState(false)
    const stateInput = editProfile ? "bg-slate-50 border-gray-200" : "bg-transparent border-transparent pointer-events-none"
    const [editPhoto, setEditPhoto] = useState(false)
    const { dataUser } = useContext(AuthContext)

    const handleEditProfile = () => {
        setEditProfile(!editProfile)
    }
    const handleChangePhoto = () => {
        setEditPhoto(!editPhoto)
    }
    return (
        <section className="md:px-16 flex flex-col gap-10 items-center md:w-[80%] mx-auto relative bg-white rounded-2xl">
            {
                editPhoto && (
                    <div className="absolute top-0 w-full h-[100%] left-0 p-4 flex justify-center items-center z-30">
                        <div className="blur absolute top-0 w-full h-[100%] bg-gray-50 opacity-70 left-0 p-4 z-40">
                            <div className="h-10"></div>
                        </div>
                        <div className="relative bg-gray-200 md:opacity-80 z-50 rounded-[2rem] w-full md:w-[60%] h-[60%] flex items-center justify-center">  
                            <span className="absolute top-0 right-0 p-4" onClick={handleChangePhoto}>
                                <img src={closeIcon} alt="" className="w-6 cursor-pointer" />
                            </span>
                            <form className="flex flex-col gap-4">
                                <p className="text-xl font-bold text-slate-800 mb-3">Elige una imagen</p>
                                <input type="file" className="mb-4"/>
                                <input className="bg-gray-400 text-black text-lg cursor-pointer font-bold px-8 py-2 rounded-[1rem] hover:shadow-xl" type="submit" value={"Subir imagen"}/>
                            </form>
                        </div>
                    </div>
                )
            }
            <div className="w-full flex gap-4 items-center py-10 border-b-[1px] z-10">
                <picture>
                    <img className="rounded-full w-36" src="https://1.bp.blogspot.com/-swg8C41eG00/X1VbvxXQX7I/AAAAAAAAXl0/mgpSVh6rRi87j9bd8i-4Kldx0J90rRQpACLcBGAsYHQ/s320/Vegetta777_Aries.jpg" alt="" />
                </picture>
                <div className="flex flex-col gap-1">
                    <a 
                        type="file"
                        className="border-[1px] font-bold cursor-pointer rounded-[1rem] px-4 py-2 hover:bg-slate-200 "
                        onClick={handleChangePhoto}
                    >Cambiar foto</a>
                    <h2 className="pl-2 font-bold text-xl text-primary capitalize">
                        {dataUser?.username}
                    </h2>
                    <p className="pl-2">Barcelona,España</p>
                </div>
            </div>
            <div className="w-full border-[1px] rounded-2xl p-4 z-10">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl text-slate-800">Informacion personal</h2>
                    <p className={`border-[1px] font-bold cursor-pointer rounded-[1rem] px-4 py-2 hover:bg-slate-200 ${editProfile && 'bg-blue-200' }`}
                        onClick={handleEditProfile}
                    >Editar</p>
                </div>
                <form className="flex flex-col gap-6">
                    <section className="grid md:grid-cols-2 md:gap-8">
                        <div className="flex flex-col items-start gap-1">
                            <label className="font-semibold text-slate-600 text-lg">Nombre</label>
                            <input 
                                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4 capitalize`} 
                                type="text" 
                                value={dataUser?.username}
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="font-semibold text-slate-600 text-lg" >Nombre completo</label>
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
                            <label className="font-semibold text-slate-600 text-lg">Numero Telefonico</label>
                            <input 
                                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`} 
                                type="number" 
                                value="98574542"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label className="font-semibold text-slate-600 text-lg">Ubicacion</label>
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
                                <input 
                                    type="submit"  
                                    className="bg-gradient-blue-purple text-white text-lg cursor-pointer font-bold px-8 py-2 rounded-[1rem] hover:shadow-xl" 
                                    value="Guardar cambios"/>
                            </div>
                        )
                    }
                    
                </form>
            </div>
        </section>
    )
}

