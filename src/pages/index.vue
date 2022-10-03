<template>
  <div>
    <a-button type="primary">Primary Button</a-button>
    <span>{{ user_name }} </span>
    <span>{{ email }} </span>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store";

const store = useUserStore();

const { user_name, email } = storeToRefs(store);
</script>

<style lang="less" scoped></style>
