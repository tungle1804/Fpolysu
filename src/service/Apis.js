import React from 'react'
import axios from 'axios';

const callApi = (method, urlController, data) => {
  var config = {
    method: method,
    url: `http://localhost:8080/${urlController}`,
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config)
}

export { callApi }
