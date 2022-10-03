import { defineStore } from "pinia";
import { UserState } from './types';

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user_name: undefined,
    email: undefined,
  })
})
