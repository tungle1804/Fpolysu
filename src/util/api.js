import baseInstance from "../util/baseAPI";
// export const getApi = (api, method) => {
//     return fetch(api, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }).then(response => response.json())
//         .catch((error) => { throw error })
// }
export const getApi = (data) => {
  return new Promise((resolve, reject) => {
    return baseInstance
      .get(`${data[0]}`, data[1])
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const getApi1 = (data) => {
  return new Promise((resolve, reject) => {
    return baseInstance
      .post(`${data[0]}`, data[1])
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const getApi2 = (data) => {
  return new Promise((resolve, reject) => {
    return baseInstance
      .put(`${data[0]}`, data[1])
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
