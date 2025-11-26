import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE } from "./ActionType";
import api from "../../config/apiConfig";

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post('/api/orders', reqData.address);
        if(data.id) {
            reqData.navigate({search:`step=3&orderId=${data.id}`});
            console.log("Order created :", data);
        } 
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        });
    }catch (error) {
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message,
        });
    }
}

export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST });
    try {
        const { data } = await api.get(`/api/orders/${orderId}`);
        dispatch({
            type: GET_ORDERS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_ORDERS_FAILURE,
            payload: error.message,
        });
    }
}