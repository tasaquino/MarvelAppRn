import axios from 'axios';

const instance = axios.create({ baseURL: 'https://gateway.marvel.com' });

instance.interceptors.request.use(function (config) {
    config.params = {...config.params,
        apikey: "1c3f8f51fdf6ed0f8f77cae4df7386e7",
        hash: "8a2454a1445263a6e994841c53c0495a",
        ts: 1
    };
    
    return config;
}, (err) => {
    return Promise.reject(err);
});

export default instance;