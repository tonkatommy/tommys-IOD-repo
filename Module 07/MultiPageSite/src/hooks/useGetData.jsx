import { useReducer, useEffect } from "react";
import axios from "axios";

export const useGetData = (url) => {
    const [fetchedData, dispatch] = useReducer(reducer, null);

    useEffect(() => {
        let ignore = false;
        axios
            .get(url)
            .then((response) => {
                // console.log(response.data);
                // !ignore ? setData(response.data) : null;
                dispatch({ type: "FETCH_SUCCESS", payload: response.data });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: "FETCH_ERROR", payload: err.message });
            });
        // clean up function
        return () => {
            ignore = true;
        };
    }, [url]);

    return fetchedData;
};

const reducer = (fetchedData, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return action.payload;

        case "FETCH_ERROR":
            return action.payload;

        default:
            break;
    }
};
