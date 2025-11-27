<script setup lang="ts">
import {useI18n} from 'vue-i18n';

const { t } = useI18n({ messages: {
  zh: {
    title: '待初始化',
    subTitle: '当前地点为空',
    button: '初始化',
  },
} })
</script>

<template>
  <div class="h-full flex flex-col items-center">
    <el-result
      class="grow-2"
      icon="primary"
      :title="t('title')"
      :sub-title="t('subTitle')"
    >
      <template #extra>
        <el-button type="primary" :text="false">
          {{t('button')}}
        </el-button>
      </template>
    </el-result>
    <div class="grow" />
  </div>
</template>
