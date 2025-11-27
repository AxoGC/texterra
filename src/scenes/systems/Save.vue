<script setup lang="ts">
import useStat from '@/stat';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    saveList: '存档列表',
    name: '名称',
    createdAt: '创建时间',
    updatedAt: '更新时间',
    operation: '操作',
  },
} })
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <div class="card flex flex-col gap-4">
      <div class="text-lg">{{t('saveList')}}</div>
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
