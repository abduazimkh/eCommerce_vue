import axios from 'axios';

const options = {
  baseURL: 'https://api.escuelajs.co/api/v1/',
  headers: {
    post: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
  }
};
const instance = axios.create(options);
// export default () => {
// };

export default instance


// export default () => {
//   const instance = axios.create({
//     baseURL: 'https://api.escuelajs.co/api/v1/',
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: "*/*",
//         "Access-Control-Allow-Origin": "*"
//     },
//     timeout: 10000
// });
// return instance;
// };