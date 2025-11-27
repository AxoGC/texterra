<script setup lang="ts">
import useStat from '@/stat';
import {ArrowLeft} from '@element-plus/icons-vue';
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    title: '作弊',
    time: '时间',
    money: '金钱',
    goto: '前往',
    inputScene: '输入场景',
    gotoScene: '前往场景',
    achieve: '达成',
    inputAchievement: '输入成就',
    achieveAchievement: '达成成就',
  },
} })

const scene = ref('')
const achievement = ref('')
</script>

<template>
  <div class="p-4 flex flex-col gap-4">

    <div class="card flex items-center gap-4">
      <el-button :icon="ArrowLeft" @click="s.backScene">
        {{t('back')}}
      </el-button>
      <div class="text-lg">{{t('title')}}</div>
    </div>

    <el-form class="card" label-width="auto">
      <el-form-item :label="t('gotoScene')">
        <el-input v-model="scene" class="w-64!" :placeholder="t('inputScene')">
          <template #append>
            <el-button @click="s.toScene(scene)">
              {{t('goto')}}
            </el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item :label="t('time')">
        <el-input-number v-model="s.rawTime" />
      </el-form-item>
      <el-form-item :label="t('money')">
        <el-input-number v-model="s.money" />
      </el-form-item>
      <el-form-item :label="t('achieveAchievement')">
        <el-input v-model="achievement" class="w-64!" :placeholder="t('inputAchievement')">
          <template #append>
            <el-button @click="s.achieve(achievement)">
              {{t('achieve')}}
            </el-button>
          </template>
        </el-input>
      </el-form-item>
    </el-form>

    <div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="_, key in s.statuses" class="flex items-center gap-4">
        <div class="shrink-0">{{t(key)}}</div>
        <el-slider v-model="s.statuses[key]" />
      </div>
    </div>

    <div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="_, key in s.attributes" class="flex items-center gap-4">
        <div class="shrink-0">{{t(key)}}</div>
        <el-slider v-model="s.attributes[key]" />
      </div>
    </div>

  </div>
</template>
