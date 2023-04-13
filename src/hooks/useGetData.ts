import {useEffect, useState} from "react";
import {axiosInstance} from "../api/axiosInstance";
import {IMenu} from "../api/server";

export const useGetData = () => {
    const [data, setData] = useState<IMenu[]>([]);

    useEffect(() => {
        axiosInstance.get('/menu')
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => console.error(err));
    }, [])

    return { data };
}