import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderTypes } from "../types"

type OrderProps = {
    pedidos: OrderTypes[],
    tip: number
}

const OrderTotal = ({ pedidos, tip }: OrderProps) => {
    const subtotalAmount = useMemo(() => pedidos.reduce((total, item) => total + (item.quantity * item.price), 0), [pedidos])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, pedidos])
    const totalAmount = useMemo(() => tipAmount + subtotalAmount, [tip, pedidos])

    return (
        <div className="space-y-3">
            <h2 className="text-left mt-7 text-2xl font-normal text-yellow-200/80">Totales y Propinas</h2>
            <p>
                Subtotal a Pagar
                <span> {formatCurrency(subtotalAmount)}</span>
            </p>

            <p>
                Propinas
                <span> {formatCurrency(tipAmount)}</span>
            </p>

            <p>
                Total a Pagar
                <span> {formatCurrency(totalAmount)}</span>
            </p>
        </div>
    )
}

export default OrderTotal