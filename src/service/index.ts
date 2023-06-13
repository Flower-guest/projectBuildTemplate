import Request from './request';

const timeOut = 30000;

const xjRequest = new Request({
  baseURL: import.meta.env.VITE_BASE_URL + '',
  timeout: timeOut,
  interceptors: {
    requestInterceptor: (config) => {
      const token = '';

      if (token) {
        config.headers = {
          Authorization: `bearer ${token}`,
        };
      }
      return config;
    },
  },
});

export default xjRequest;
