import { menuItems } from "../database/DB"
import { formatCurrency } from "../helpers"
import type { DBTypes , OrderTypes } from "../types"
type MenuProps = {
    pedidos : OrderTypes[],
    setpedidos: React.Dispatch<React.SetStateAction<OrderTypes[]>>
}
const Menu = ({pedidos , setpedidos}:MenuProps) => {
    const agregarPedido = (item: DBTypes) => {
        const itemExist = pedidos.findIndex(pedido=>pedido.id === item.id)
        if(itemExist < 0 ){
            const newItem : OrderTypes = {...item, quantity : 1}
            setpedidos(prevPedidos => [...prevPedidos, newItem])
        }else{
            const updatePedido = [...pedidos]
            updatePedido[itemExist].quantity++;
            setpedidos(updatePedido)
        }
    }
    return (
        <div className="border border-red-100 p-5 rounded-2xl xl:col-span-2 mb-5 xl:mb-0">
            <h2 className="text-center text-3xl font-semibold text-yellow-200">Menú</h2>
            <ol className="list-decimal space-y-4 ps-9 mt-10">
                {menuItems.map(item => (
                    <li key={item.id} className="cursor-pointer hover:text-yellow-200" onClick={() => agregarPedido(item)}>
                        <p className="flex flex-col md:flex-row justify-between text-white/80 hover:text-yellow-200">
                            <span>{item.name}</span><span className="font-black">{formatCurrency(item.price)}</span>
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Menu