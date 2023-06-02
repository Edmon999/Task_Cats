import axios from "axios";

import { API_URL } from "../../../constants";

export const request = ({
    url = API_URL,
    endPoint = "/",
    body = {},
    method = "GET",
    headers = {},
  }) => {
    const config = {
      method,
      url: `${url}${endPoint}`,
      data: body,
      headers,
      params: {},
    };
    
    return axios(config);
  };