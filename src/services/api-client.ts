import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key : '286342b18ddf4066b7b6e8e9013ca263'
    }
})