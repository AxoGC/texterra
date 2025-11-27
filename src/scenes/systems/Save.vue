<script setup lang="ts">
import useStat from '@/stat';
import {ArrowLeft} from '@element-plus/icons-vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    saveList: '存档列表',
    name: '名称',
    createdAt: '创建时间',
    updatedAt: '更新时间',
    operation: '操作',
    saveName: '存档名',
    createBackup: '创建备份',
  },
} })
</script>

<template>
  <div class="p-4 flex flex-col gap-4">

    <div class="card flex items-center gap-4">
      <el-button :icon="ArrowLeft" @click="s.backScene">{{t('back')}}</el-button>
      <div class="text-lg">{{t('saveList')}}</div>
    </div>

    <div class="card flex flex-col gap-2">
      <el-input class="w-64!" :placeholder="t('saveName')">
        <template #append>
          <el-button>
            {{t('createBackup')}}
          </el-button>
        </template>
      </el-input>
      <el-table :data="s.saves">
        <el-table-column :label="t('name')" />
        <el-table-column :label="t('createdAt')" />
        <el-table-column :label="t('updatedAt')" />
        <el-table-column :label="t('operation')">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
