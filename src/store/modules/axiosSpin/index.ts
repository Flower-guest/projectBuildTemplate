import { defineStore } from 'pinia';

import { AxiosSpinState } from './types';

export const useAxiosSpinStore = defineStore('axiosSpin', {
  state: (): AxiosSpinState => ({
    showLoading: false,
  }),
});
