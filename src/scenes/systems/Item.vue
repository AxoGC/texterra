<script setup lang="ts">
import items from '@/items';
import useStat from '@/stat';
import {ArrowLeft, ArrowUp, Delete, Pointer} from '@element-plus/icons-vue';
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
            <el-popover :content="items[row.id]?.description[$i18n.locale]" placement="right">
              <template #reference>
                <div class="inline-flex items-center gap-1">
                  <span class="text-lg">{{items[row.id]?.icon}}</span>
                  <span>{{items[row.id]?.name[$i18n.locale]}}</span>
                  <span v-if="row.count">x {{row.count}}</span>
                </div>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column :label="t('action')" align="right">
          <template #default="{ row, $index }">
            <el-button v-if="items[row.id]?.effect" :icon="Pointer" circle />
            <el-button
              class="ml-0!"
              :disabled="$index < 1"
              :icon="ArrowUp"
              circle 
              @click="[s.items[$index], s.items[$index-1]] = [s.items[$index-1], s.items[$index]] as any"
            />
            <el-button class="ml-0!" :icon="Delete" circle type="danger" @click="s.delItems([row])" />
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
