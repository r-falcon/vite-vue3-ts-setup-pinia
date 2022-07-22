<template>
    <h3>测试 鼠标坐标</h3>
    <p>Mouse： {{ x }} - {{ y }}</p>
</template>

<script lang="ts" setup>
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
</script>
