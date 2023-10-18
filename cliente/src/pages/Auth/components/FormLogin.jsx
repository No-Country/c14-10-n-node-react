import { useState } from "react"

export default function FormLogin() {

    const [dates, setDates] = useState({
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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(dates)
        fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dates),
            /* credentials: "include" */
        })
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta de tu API si es necesario
                window.localStorage.setItem("token", data.token)
                console.log(data);
            })
            .catch(error => {
                // Maneja errores de la solicitud si es necesario
                console.eror({ "Error": error })
            });
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >

            <div>
                <label className="font-medium">
                    Email
                </label>
                <input
                    name="email"
                    value={dates.email}
                    onChange={handleInputChange}
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
                    value={dates.password}
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    required
                    className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-primary"
                />
            </div>
            <button
                className="w-full px-4 py-2 font-medium text-white transition-all duration-500 rounded-lg bg-gradient-to-r from-primary to-title hover:to-primary active:bg-primary"
            >
                Inicia Sesión
            </button>
        </form>
    )
}
