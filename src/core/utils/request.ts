
import axios,{Method} from 'axios';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

const Base_Url = 'https://api.github.com';

export const makeRequest = ({method = 'GET',url,data,params}:RequestParams) => {
    return axios({
        method,
        url: `${Base_Url}${url}`,
        data,
        params
    });
}