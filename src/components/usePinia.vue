<template>
    <div>
        {{ userStore.username }}
    </div>
    <button @click="handleUpdate">修改</button>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const handleUpdate = () => userStore.updateName('李四');
</script>
