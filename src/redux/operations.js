import axios from "axios";
import { fetchingInProgress, fetchingSuccess, fetcingError } from "./contactsSlice";

axios.defaults.baseURL = "https://63f91838083c79ca8b600e8c.mockapi.io"

export const fetchContacts = () => async dispatch => {
    try {
        dispatch(fetchingInProgress())
        const response = await axios.get("/contacts")
        dispatch(fetchingSuccess(response.data))
    } catch (error) {
        dispatch(fetcingError(error.message))
    }
}

