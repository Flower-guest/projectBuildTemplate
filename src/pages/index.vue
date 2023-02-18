<template>
  <div>
    <a-button type="primary">Primary Button</a-button>
    <span class="btn">{{ user_name }} </span>
    <span>{{ email }} </span>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store";

const store = useUserStore();

const { user_name, email } = store;
</script>

<style lang="less" scoped></style>
