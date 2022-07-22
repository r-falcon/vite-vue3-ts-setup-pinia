import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            username: '张三',
        };
    },
    actions: {
        updateName(username: string) {
            this.username = username;
        },
    },
});
