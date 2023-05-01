import { GET_PRODUCTS } from "../constant/Action.types"
import {api} from '../../component/Api/index'

export const getProducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}
export const getProductsAsync = () => {

    return async dispatch => {
        const res = await api.get("/Product")
        dispatch(getProducts(res.data))
    }
}