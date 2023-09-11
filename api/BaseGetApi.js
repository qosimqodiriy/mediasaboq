import axios from "axios";

export default async function GetApi(url) {
    const res = await axios.get(`http://mediasaboq.uz/api/v1/${url}`)
    const data = res.data;
    return data;
}