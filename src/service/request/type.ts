import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface XJRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: XJRequestInterceptors;
  showLoading?: boolean;
}
