<script setup lang="ts">
import useStat from '@/stat';
import {ArrowLeft} from '@element-plus/icons-vue';
import {useI18n} from 'vue-i18n';

const { t } = useI18n({ 
  messages: {
    zh: {
      title: '社区',
    },
  },
})

const s = useStat()

</script>

<template>
  <div class="p-4 flex flex-col gap-4">

    <div class="card flex items-center gap-4">
      <el-button :icon="ArrowLeft" @click="s.backScene">{{t('back')}}</el-button>
      <div class="text-lg">{{t('title')}}</div>
    </div>

  </div>
</template>
