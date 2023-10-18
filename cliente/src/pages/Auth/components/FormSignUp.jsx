import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

export default function FormSignUp() {

    const { register } = useAuthContext();
    const [dates, setDates] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario usando el spread operator para mantener los valores anteriores
        setDates({
            ...dates,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await register(dates)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >
            <div>
                <label className="font-medium">
                    Nombre
                </label>
                <input
                    onChange={handleInputChange}
                    value={dates.username}
                    name="username"
                    type="text"
                    required
                    className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-primary"
                />
            </div>
            <div>
                <label className="font-medium">
                    Email
                </label>
                <input
                    name="email" onChange={handleInputChange}
                    value={dates.email}
                    type="email"
                    required
                    className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-primary"
                />
            </div>
            <div>
                <label className="font-medium">
                    Contraseña
                </label>
                <input
                    name="password"
                    onChange={handleInputChange}
                    value={dates.password}
                    type="password"
                    required
                    className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-primary"
                />
            </div>
            <button type="submit"
                className="w-full px-4 py-2 font-medium text-white transition-all duration-500 rounded-lg bg-gradient-to-r from-primary to-title hover:to-primary active:bg-primary"
            >
                Crear cuenta
            </button>
        </form>
    )
}
