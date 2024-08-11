import axios from "axios";
import { config } from "../../config";
import {
  handleRequestInterceptor,
  handleResponseInterceptor,
  responseInterceptorErrorFunc,
  requestInterceptorErrorFunc,
  verifyTokenRequestInterceptor,
} from "./AxiosApiService";

const appBaseUrlInstance = axios.create({
  baseURL: config.APP_URL,
});

const loginBaseUrlInstance = axios.create({
  baseURL: config.APP_URL,
});

const elasticSearchUrlInstance = axios.create({
  baseURL: config.ELASTIC_SEARCH_URL,
});

//Request Interceptor
appBaseUrlInstance.interceptors.request.use(
  handleRequestInterceptor,
  requestInterceptorErrorFunc
);

//Response Interceptor
appBaseUrlInstance.interceptors.response.use(
  handleResponseInterceptor,
  responseInterceptorErrorFunc
);

export { appBaseUrlInstance, loginBaseUrlInstance, elasticSearchUrlInstance };
