import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-cardapio-aiq.herokuapp.com'
});

//api.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTQ4Njc0NzUsInN1YiI6MiwiaWF0IjoxNjUyMjc1NDc1fQ.SferF0yioaDn_UiqTUgOB-X0NPJpzbxHaZJpte9cv6M`
//const user = JSON.parse(localStorage.getItem("user"))
//api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`

export default api;