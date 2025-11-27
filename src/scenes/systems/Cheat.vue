<script setup lang="ts">
import useStat from '@/stat';
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    title: '作弊',
    goto: '前往',
    inputScene: '输入场景',
    gotoScene: '前往场景',
  },
} })

const gotoScene = ref('')
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <div class="card flex flex-col gap-4">
      <div class="text-lg">{{t('title')}}</div>
      <el-form label-width="auto">
        <el-form-item :label="t('gotoScene')">
          <el-input v-model="gotoScene" class="w-64!" :placeholder="t('inputScene')">
            <template #append>
              <el-button @click="s.toScene(gotoScene)">
                {{t('goto')}}
              </el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
