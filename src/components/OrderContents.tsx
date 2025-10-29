import { MenuItem, OrderItem } from "../types"
import formatCurrency from '../helpers/index'

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id:MenuItem['id'] )=> void
}

export default function OrderContents({order,removeItem}:OrderContentsProps) {

   

  return (
    <div>
        <h2 className="font-black text-4xl text-center">
            Consumo
        </h2>

        <div className="space-y-3 mt-5">
            { 
                
                    order.map( item =>( 
                            <div 
                                key={item.id}  
                                className="flex justify-between border-t item-center border-gray-200 py-5 last-of-type:border-b"
                            >
                                <div>
                                    <p>
                                        {item.name} - {formatCurrency(item.price) }
        
                                    </p>
                                    <p>
                                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity ) }
        
                                    </p>
                                </div>
                            
                                <button 
                                    className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer"
                                    onClick= { ()=>removeItem(item.id)}
                                >
                                    X
                                </button>
                            </div>
                        ) )

                    
            }    

        </div>
        
    </div>

  )
}
