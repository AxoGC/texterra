<script setup lang="ts">
import items from '@/items';
import useStat from '@/stat';
import {ArrowLeft} from '@element-plus/icons-vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    title: '物品栏',
    item: '物品',
    action: '操作',
  },
} })
</script>

<template>
  <div class="p-4 flex flex-col gap-4">

    <div class="card flex items-center gap-4">
      <el-button :icon="ArrowLeft" @click="s.backScene">
        {{t('back')}}
      </el-button>
      <div class="text-lg">{{t('title')}}</div>
    </div>

    <div class="card">
      <el-table :data="s.items">
        <el-table-column :label="t('item')">
          <template #default="{ row }">
            <div class="flex items-center gap-1">
              <span class="text-lg">{{items[row.id]?.icon}}</span>
              <span>{{items[row.id]?.name[$i18n.locale]}}</span>
              <span v-if="row.count">x {{row.count}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column :label="t('action')">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
