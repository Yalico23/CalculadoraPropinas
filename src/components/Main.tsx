import { useState } from "react"

import type {OrderTypes, IdOrderType} from "../types"
import Menu from "./Menu"
import Pedidos from "./Pedidos"

const Main = () => {
    const [pedidos, setpedidos] = useState<OrderTypes[]>([])
    const eliminarPedido = (id : IdOrderType['id']) =>{
        const newCart = pedidos.filter((pedido)=> pedido.id !== id) 
        setpedidos(newCart)
    }

    const VaciarPedido = () => {
        setpedidos([])
    }

    return (
        <main className="container mx-auto mt-10">
            <div className="xl:grid xl:grid-cols-5 p-10 xl:gap-x-5 xl:items-start ">
                <Menu pedidos={pedidos} setpedidos={setpedidos}/>
                <Pedidos pedidos={pedidos}  eliminarPedido={eliminarPedido} VaciarPedido={VaciarPedido}/>
            </div>
        </main>
    )
}

export default Main