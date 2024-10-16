

const TransactionReducer  = ((state, action)=>{
    switch(action.type){
        case 'Add trans':{
            return [action.payload, ...state ]
        }
        case 'DELETE TRANSACTION': {
            // state.splice(action.payload, 1);
            // return [...state];
            return state.filter(transaction => transaction.id !== action.payload);
          }
            
        default:

            return state;

    }
})
export default TransactionReducer ;