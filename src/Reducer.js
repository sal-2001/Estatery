
export const initialState = {
    location: "Location (Any)",
    date: new Date(),
    price: "Price (Any)",
    proptype: "Property (Any)",
    wishlist:[],
    user: null,
};

function Reducer(state, action)
{
    switch(action.type)
    {
        case "SET_LOCATION":
            //set up the location
           return {
            ...state,
            location : action.location,
           }
           break;
        case "SET_DATE":
            //set up the move-in date
            return{
                ...state,
                date: action.date,
            }
            break;
        case "SET_PRICE":
            //set up the price range
            return{
                ...state,
                price : action.price
            }
            break;
        case "SET_PROPERTYTYPE":
            //set up the property type
            return{
                ...state,
                proptype: action.proptype
            }
            break;
        case "ADD_TO_WISHLIST":
            //logical adding of items to wishlist
            return{
                ...state,
                wishlist:[...state.wishlist, action.item]
            }
            break;
        case "REMOVE_FROM_WISHLIST":
            //logical removal of items from wishlist
            let newWishlist = [...state.wishlist];
            const index = state.wishlist.findIndex((wishlistItem)=>(wishlistItem.id === action.id));
            if(index>=0)
            {
                newWishlist.splice(index,1);
            }
            else
            {
                console.warn("Item doesn't exist in wishlist");
            }
            return{
                ...state,
                wishlist: newWishlist
            }
            break;
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            }
            break;
        default:
            return state;    
        
    }
}
export default Reducer;