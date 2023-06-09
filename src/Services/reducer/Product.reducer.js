import { GET_PRODUCTS } from "../constant/Action.types"
const initialState = {
    Products: []
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_PRODUCTS:
            return {
                Products: action.payload
            }
            break;
        default:
            return state
            break;
    }
}
export default productReducer