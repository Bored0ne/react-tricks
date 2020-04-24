import Reattempt from "reattempt";
import axios, {AxiosRequestConfig} from "axios";

export default {
    secureGet: (url: string, config?: AxiosRequestConfig) => {
        // Add security layer here
        return Reattempt.run(
            {times: 3},
            () => axios.get(url, config)
        );
    },
    get: (url: string, config?: AxiosRequestConfig) => {
        return Reattempt.run(
            {times: 3},
            () => axios.get(url, config)
        );
    },
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
