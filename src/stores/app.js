import {defineStore} from "pinia";
import {getOrCreateUser} from "@/api/app.js";

export const useAppStore = defineStore('app',{
    state: () => ({
        user: {},
        tasks: []
    }),
    actions: {
        async init () {
            this.user = await getOrCreateUser()
            console.log('user:', this.user);
        }
    }
})