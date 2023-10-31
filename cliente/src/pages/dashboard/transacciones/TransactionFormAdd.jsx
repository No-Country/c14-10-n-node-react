
const TransactionFormAdd = () => {
    return (
        <section>
            <form>
                <div>
                    <label htmlFor="name">Monto</label>
                    <input type="number" name="amount" id="amount" />
                </div>
                <div>
                    <label htmlFor="name">Descripción</label>
                    <input type="text" name="description" id="description" />
                </div>
                <div>
                    <label>Destino</label>
                    <select name="destination" id="destination">
                        <option value="1">Cuenta de ahorro</option>
                        <option value="2">Cuenta corriente</option>
                        <option value="3">Cuenta de inversión</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Elegir tarjeta</label>
                    <select name="card" id="card">
                        <option value="1">Tarjeta de débito</option>
                        <option value="2">Tarjeta de crédito</option>
                    </select>
                </div>
            </form>
        </section>
    )
}

export default TransactionFormAdd