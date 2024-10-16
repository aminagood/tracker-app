'use client';
const { createContext, useReducer } = require("react");
import TransactionReducer from "./transationReducer";




const initialTransaction = [

    {amount:150,desc:'Cold Drink', id:1},
    {amount:-40,desc:'Book', id:2},
    {amount:-200,desc:'Camera', id:3},
    {amount:100,desc:'utility bill', id:4}

   ];

  export const TransactionContext = createContext(initialTransaction);

 
export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

    function addTransaction(tranObj){
      dispatch({
        type: "Add trans",
        payload:{
          id: Math.floor(Math.random() * 10000),
            amount: tranObj.amount,
            desc: tranObj.desc
        }
      })
    }

   
    function deleteTransaction(id) {
      // alert(30)
      dispatch({
        type: 'DELETE TRANSACTION',
        payload: id 
      });
    }


    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
           
            
         } }>
           {children}
        </TransactionContext.Provider>
    )
}









