import { useMemo } from "react"
import { OrderItem } from "../types"
import formatCurrency from "../helpers"



interface OrderTotalProps{
    order: OrderItem[]
    tip:number,
    placeOrder: ()=>void


}

export default function OrderTotals({order, tip, placeOrder}:OrderTotalProps){
    //.reduce es propio de Js

    const subtotalAmount = useMemo( ()=>order.reduce( (total,item) => total + (item.quantity * item.price),0 ),
    [order])

    const tipAmount = useMemo( ()=> subtotalAmount * tip  ,[tip,order])
    const totalPagar = useMemo( ()=>subtotalAmount + tipAmount , [tip,order])

    return(
        <>Order Totals
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
               
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>
                    Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>
                    Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalPagar)}</span>
                </p>
            </div>

            <button 
                className="w-full bg-black text-white font-black mt-10 uppercase p-3 disabled:opacity-10"
                disabled = {totalPagar === 0}
                onClick={ placeOrder}
            >
                Guardar Order
            </button>
        </>
    )

}