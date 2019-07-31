import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 197e1a8491ededfeecb216cd844ef57abb3488ea692b928d0aea0d5b97aec55f'
    }
});