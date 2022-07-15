import axios from "axios";

//인스턴스 생성
const instance = axios.create({  
  baseURL: "https://realprojectapiserver.com/",
  headers: { "Content-Type": "application/json" },
});

//토큰값
const token = localStorage.getItem('token')
instance.defaults.headers.common["Authorization"] =`Bearer ${token}`

export default instance ;

// export const login_instance = axios.create({
//   baseURL: "http://localhost:5001",
//   headers: { "Content-Type": "application/json" },
// });