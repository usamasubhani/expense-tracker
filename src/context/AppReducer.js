export default (state, action) => {
    switch(action.type) {
        case 'delete':
            return {
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }
        default:
            return state;
    }
}