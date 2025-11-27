<script setup lang="ts">
import achievements from '@/game/achievements';
import useStat from '@/stat';
import {ArrowLeft} from '@element-plus/icons-vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({
  messages: {
    zh: {
      title: '成就列表',
      achieved: '已达成',
    },
  }
})
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    
    <div class="card flex items-center gap-4">
      <el-button @click="s.backScene" :icon="ArrowLeft">
        {{t('back')}}
      </el-button>
      <div class="text-lg">{{t('title')}}</div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div v-for="a in achievements" :key="a.id" class="card h-24 flex gap-2">
        <img :src="`/achievements/${a.icon}`" class="aspect-square rounded-2xl bg-main" alt="">
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <div>{{a.name[$i18n.locale]}}</div>
            <el-tag v-if="s.achievements[a.id]" type="warning">
              {{t('achieved')}}
            </el-tag>
          </div>
          <div class="text-sm text-subtle">{{a.description[$i18n.locale]}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
