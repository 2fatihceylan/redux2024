import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const url = 'https://course-api.com/react-useReducer-cart-project';







const initialState = {
    cartItems: [],  //Apidan çekilebilir, burda direk kodun içindeki veriyi aktardık
    amount: 4,
    total: 0,
    isLoading: true
}



export const getCartItems = createAsyncThunk('cart/getCartItems', 
    async (id, thunkAPI)=>{  //fonksiyon içinde parametre alabilirsin, id falan


        try{
            const response = await axios(url);

            return response.data;
        }
        catch(error){
            return thunkAPI.rejectWithValue('Something went wrong');
        }

    
})






const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart:(state)=>{
            state.cartItems= [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=>
                item.id !==itemId
            )
        },
        increase: (state, {payload})=>{
            const cartItem = state.cartItems.find((item)=>
                item.id === payload.id
            );
            cartItem.amount = cartItem.amount + 1;  //cartItem a ait amoun diğeri değil
        },
        decrease: (state, {payload})=>{
            const cartItem = state.cartItems.find((item)=>
                item.id === payload.id
            );
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state)=>{
            let amount = 0;
            let total = 0;
            
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.amount * item.price;
            });

            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder)=> {

        builder
        .addCase(getCartItems.pending, (state)=>{  //getcartitems from api still loading(pending)
            state.isLoading = true;
        })
        .addCase(getCartItems.fulfilled, (state, action)=>{ //getcartitems from api done (fullfilled)
            state.isLoading = false;
            state.cartItems = action.payload;    //api dan çektiğimiz cardItemsları burada redux cardıtemsa verdik
        })
        .addCase(getCartItems.rejected, (state, action)=> {   //getcartitems from api error(rejected)
            state.isLoading = false;
        })


    }
})


//console.log(cartSlice)

export const {
    clearCart,
    removeItem,
    increase,
    decrease,
    calculateTotals} = cartSlice.actions;


export default cartSlice.reducer;