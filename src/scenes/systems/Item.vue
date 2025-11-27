<script setup lang="ts">
import useStat from '@/stat';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    inventory: '物品栏',
    item: '物品',
    action: '操作',
  },
} })
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <div class="card flex flex-col gap-4">
      <div class="text-lg">{{t('inventory')}}</div>
      <el-table :data="s.items">
        <el-table-column :label="t('item')">
        </el-table-column>
        <el-table-column :label="t('action')">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
