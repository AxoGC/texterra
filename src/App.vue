<script setup lang="ts">
</script>

<template>
  <el-config-provider :button="{ text: true, round: true }">
    <div class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <router-view />
    </div>
  </el-config-provider>
</template>
