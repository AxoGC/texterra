<script setup lang="ts">
import {useI18n} from 'vue-i18n';

const { t } = useI18n({ messages: {
  zh: {
    uiSetting: '界面',
    theme: '主题',
  },
} })

</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <div class="card flex flex-col gap-4">
      <div class="text-lg">{{t('uiSetting')}}</div>
      <el-form>
      </el-form>
    </div>
  </div>
</template>
