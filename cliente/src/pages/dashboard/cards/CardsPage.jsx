import CardCredit from "../../../components/CardCredit"

export default function CardsPage() {
    return (
        <div className="w-full flex px-2 py-2 md:px-10 flex-col justify-start gap-8 max-md:flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Tarjetas de credito</h2>
            <div className="flex md:gap-16">
                <CardCredit />
                <article className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-white bg-black px-4 py-2 w-fit uppercase">Primario</h3>
                    <div>
                        <h4 className="font-semibold text-slate-500">Agregado el</h4>
                        <p>
                            Martes 12 de Octubre del 2021
                        </p>
                    </div>
                    <div className="flex justify-between gap-3">
                        <div>
                            <p>Rail preference</p>
                            <p>cross_river</p>
                        </div>
                        <div>
                            <p>Issuer</p>
                            <p>440393</p>
                        </div>
                        <div>
                            <p>Country code</p>
                            <p>USA</p>
                        </div>
                    </div>
                </article>
            </div>
            <div className="flex md:gap-16">
                <CardCredit />
                <article className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-black border-[1px] border-gray-400 px-4 py-2 w-fit">Hacer primario</h3>
                    <div>
                        <h4 className="font-semibold text-slate-500">Agregado el</h4>
                        <p>
                            Martes 12 de Octubre del 2021
                        </p>
                    </div>
                    <div className="flex justify-between gap-3">
                        <div>
                            <p>Rail preference</p>
                            <p>cross_river</p>
                        </div>
                        <div>
                            <p>Issuer</p>
                            <p>440393</p>
                        </div>
                        <div>
                            <p>Country code</p>
                            <p>USA</p>
                        </div>
                    </div>
                </article>
            </div>
            <div>
                <article className="cursor-pointer">
                    <h2 className="text-2xl font-bold text-slate-800">Tarjeta de credito</h2>
                    <p className="text-slate-600">Agrega una tarjeta de credito para poder realizar pagos</p>
                </article>
            </div>
        </div>
    )
}
