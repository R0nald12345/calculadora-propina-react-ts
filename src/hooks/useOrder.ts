
import {useState} from 'react'
import type {MenuItem, OrderItem} from '../types/index'
 
export default function useOrder() {

    const [order,setOrder] = useState<OrderItem[]>([]); 
    const[tip,setTip] = useState(0)

    
    const addItem =(item:MenuItem)=>{

        const itemExit = order.find(OrderItem => 
            OrderItem.id === item.id

            
        )


        if(itemExit){
            const updateOrder = order.map( orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1 } : orderItem
            ) 

            setOrder(updateOrder);

        }else{
            
            const newItem:OrderItem = {...item, quantity:1 }
            setOrder([...order,newItem ] );            

        }


    }

    const removeItem = (id:MenuItem['id'] )=>{
        setOrder( order.filter(item=> item.id != id ) )
    }

    const placeOrder = ()=>{
        console.log('Guardando...');
        setOrder([])
        setTip(0)
    }

    return {
        removeItem,
        tip,
        setTip,
        order,
        addItem,
        placeOrder,
    }  
      

  
}
