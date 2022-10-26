import axios from "axios";
import type { AxiosInstance } from "axios";
import { XJRequestInterceptors, RequestConfig } from "./type";
import showMessage from "./status";
import pinia from "@/store";
import { useAxiosSpinStore } from "@/store";

const store = useAxiosSpinStore(pinia);
const DEFAULT_LOADING = true; //loading默认状态

class Request {
  instance: AxiosInstance;
  interceptors?: XJRequestInterceptors;
  showLoading: boolean;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;

    // 实例独有的请求响应拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 全局请求响应拦截
    this.instance.interceptors.request.use(
      (config) => {
        store.showLoading = this.showLoading;
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        if (this.showLoading) {
          store.showLoading = false;
        }
        const data = res.data;
        if (data.returnCode === 200) {
          return data;
        } else {
          console.log(showMessage(data.returnCode));
        }
        return data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config: RequestConfig): void {
    // 请求独有的请求拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    // 独有的请求加载
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;

    this.instance.request(config).then((res) => {
      // 独有的响应拦截
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res);
      }
      return res;
    });
  }

  get(config: RequestConfig): void {
    return this.request({ ...config, method: "GET" });
  }

  post(config: RequestConfig): void {
    return this.request({ ...config, method: "POST" });
  }
}

export default Request;
