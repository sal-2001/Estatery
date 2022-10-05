
export const initialState = {
    location: "Location (Any)",
    date: new Date(),
    price: "Price (Any)",
    proptype: "Property (Any)",
    wish: false,
};

function Reducer(state, action)
{
    switch(action.type)
    {
        case "SET_LOCATION":
           return {
            ...state,
            location : action.location,
           }
           break;
        case "SET_DATE":
            return{
                ...state,
                date: action.date,
            }
            break;
        case "SET_PRICE":
            return{
                ...state,
                price : action.price
            }
            break;
        case "SET_PROPERTYTYPE":
            return{
                ...state,
                proptype: action.proptype
            }
            break;
        default:
            return state;    
        
    }
}
export default Reducer;