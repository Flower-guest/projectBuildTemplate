import { getCurrentInstance, ComponentInternalInstance } from 'vue';

//  挂载全局方法与变量调用
export default function useGlobalProperties() {
  console.log(getCurrentInstance()?.proxy);
  const {
    appContext: {
      app: {
        config: { globalProperties },
      },
    },
  } = getCurrentInstance() as ComponentInternalInstance;

  return { ...globalProperties };
}
