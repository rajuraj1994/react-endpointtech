
const initialState={
    watchCount:0
}

const watchReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_WATCHLIST':
            return{
                watchCount:++state.watchCount
            }
        default:
            return state
    }
}


export default watchReducer
