import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart: [],
  totalPrice:[],
  totalQunatity:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCard: (state,actions) => {
       
    //  state.cart.push(actions.payload)
      
    const find=state.cart.findIndex((val)=> val.id===actions.payload.id)
    if(find!=-1){
      state.cart[find]={...state.cart[find],qunataty:state.cart[find].qunataty+1}

    }
    else{
      state.cart.push({...actions.payload,qunataty:1})
    }
    },
    DeleteCard:(state,actions)=>{
      state.cart= state.cart.filter((value)=>{
        return value.id !== actions.payload.id
      })
     
    },
    Increment:(state,actions)=>{
state.cart=state.cart.map((value)=>{
  if(value.id === actions.payload.id){
    return {...value, qunataty:value.qunataty+1}
  }
  return value;

})
    },
    Drecement:(state,actions)=>{
      state.cart=state.cart.map((value)=>{
        if(value.id === actions.payload.id){
          return {...value, qunataty:value.qunataty > 1 ?value.qunataty-1 :1}
        }
        return value;
      })
    },
 Totalcard: (state) => {
  const { Totalprice, Totalqunataty } = state.cart.reduce(
    (acc, cardItem) => {
      const { price, qunataty } = cardItem
      const totalValue = parseFloat(price) * qunataty
      acc.Totalprice += totalValue
      acc.Totalqunataty += qunataty
      return acc
    },
    {
      Totalprice: 0,
      Totalqunataty: 0
    }
  )
  state.totalPrice = Totalprice
  state.totalQunatity = Totalqunataty
}


  },
})


export const {addToCard,DeleteCard,Increment,Drecement, Totalcard,totalPrice,totalQunatity,} = cartSlice.actions

export default cartSlice.reducer