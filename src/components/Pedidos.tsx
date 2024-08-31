import { useState , useEffect } from "react"
import { formatCurrency } from "../helpers"
import Delete from "../icons/Delete"
import Food from "../icons/Food"
import type { OrderTypes, IdOrderType } from "../types"
import OrderTotal from "./OrderTotal"
import TipPorcentage from "./TipPorcentage"
import Trush from "../icons/Trush"
import Save from "../icons/Save"

type pedidosProps = {
    pedidos: OrderTypes[],
    eliminarPedido: (id: IdOrderType["id"]) => void,
    VaciarPedido: () => void
}

const Pedidos = ({ pedidos, eliminarPedido ,VaciarPedido }: pedidosProps) => {
    const [tip, setTip] = useState<number>(0)
    useEffect(()=>{
        if(pedidos.length === 0){
            setTip(0)
        }
    },[pedidos])
    return (
        <div className="border border-red-100 p-5 rounded-2xl col-span-3">
            {pedidos.length !== 0 ?
                <>
                    <h2 className="text-center text-3xl font-semibold text-yellow-200">Consumo</h2>
                    <ul className="mt-10 md:grid grid-cols-3 gap-2 h-80 border-white/95 overflow-y-scroll p-4 border-dashed border-2 space-y-4 md:space-y-0">
                        {pedidos.map(item => (
                            <li key={item.id} className="">
                                <div className="flex flex-col justify-between bg-[#0c18357d] rounded-3xl h-full ">
                                    <div className="px-6 my-8 h-full">
                                        <div className="flex flex-col w-full h-full justify-between text-left">
                                            <div>
                                                <h2 className="text-md font-bold tracking-tighter text-white/80 text-pretty">
                                                    {item.name}
                                                </h2>

                                            </div>
                                            <div className="mt-6">
                                                <p className="text-sm font-light flex justify-between tracking-tight text-white/90">
                                                    <span >
                                                        Cantidad {item.quantity}
                                                    </span>
                                                    <span>
                                                        {formatCurrency(item.price * item.quantity)}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-8 sm:px-8">
                                        <button aria-describedby="tier-starter" className="flex justify-center items-center mx-auto w-full px-6 py-2.5 text-center text-black duration-200 bg-gray-100/90 border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-[#fca5a5] hover:text-[#fca5a5] focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white gap-x-2"
                                            onClick={() => eliminarPedido(item.id)}
                                        >
                                            Eliminar <Delete className="size-6" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="md:flex items-center justify-around">
                        <OrderTotal pedidos={pedidos} tip={tip} />
                        <TipPorcentage setTip={setTip} />
                    </div>
                    <div className="md:flex justify-evenly mt-5 space-y-3 md:space-y-0">
                        <button className="w-full md:w-auto border border-white py-2 px-5 hover:border-green-500 hover:text-green-500 flex items-center justify-center gap-x-2">
                            <Save className="size-5"/>
                            <span>Guardar Pedido</span>
                        </button>
                        
                        <button className="w-full md:w-auto border border-white py-2 px-5 hover:border-red-500 hover:text-red-500 flex items-center justify-center gap-x-2" onClick={VaciarPedido}>
                            <Trush  className="size-4" />
                            <span>Eliminar Pedido</span>
                        </button>
                    </div>
                </>
                :
                <>
                    <h2 className="text-center text-3xl font-semibold text-yellow-200">Orden Vacia</h2>
                    <Food className="size-56 mx-auto " />
                </>
            }
        </div>
    )
}

export default Pedidos