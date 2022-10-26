import { createPinia } from "pinia";
import { useUserStore } from "./modules/user";
import { useAxiosSpinStore } from "./modules/axiosSpin";
// pinia持久化
import { createPersistedState } from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(createPersistedState());

export { useUserStore, useAxiosSpinStore };

export default pinia;
