<script setup lang="ts">
import useSave from '@/save';
import useStat from '@/stat';
import {ArrowLeft} from '@element-plus/icons-vue';
import {dayjs} from 'element-plus';
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';

const s = useStat()
const save = useSave()

const { t } = useI18n({ messages: {
  zh: {
    saveList: '存档列表',
    name: '名称',
    updatedAt: '更新时间',
    operation: '操作',
    saveName: '存档名',
    createBackup: '创建备份',
    load: '加载',
    loadConfirm: '确定要加载存档吗？',
    cover: '覆盖',
    coverConfirm: '确定要覆盖存档吗？',
    delete: '删除',
    deleteConfirm: '确定要删除存档吗？',
  },
} })

const backupName = ref('')
</script>

<template>
  <div class="p-4 flex flex-col gap-4">

    <div class="card flex items-center gap-4">
      <el-button :icon="ArrowLeft" @click="s.backScene">{{t('back')}}</el-button>
      <div class="text-lg">{{t('saveList')}}</div>
    </div>

    <div class="card flex flex-col gap-2">
      <el-input v-model="backupName" class="w-64!" :placeholder="t('saveName')">
        <template #append>
          <el-button @click="save.create(backupName)">
            {{t('createBackup')}}
          </el-button>
        </template>
      </el-input>
      <el-table :data="save.saves">
        <el-table-column :label="t('name')" prop="name" />
        <el-table-column :label="t('updatedAt')" :formatter="({ updatedAt }) => dayjs(updatedAt).format('YYYY/MM/DD hh:mm:ss')" />
        <el-table-column :label="t('operation')">
          <template #default="{ row }">
            <el-popconfirm :title="t('loadConfirm')" @confirm="save.load(row.id)">
              <template #reference>
                <el-button type="primary">
                  {{t('load')}}
                </el-button>
              </template>
            </el-popconfirm>
            <el-popconfirm :title="t('coverConfirm')" @confirm="save.cover(row.id)">
              <template #reference>
                <el-button class="ml-0!" type="warning">
                  {{t('cover')}}
                </el-button>
              </template>
            </el-popconfirm>
            <el-popconfirm :title="t('deleteConfirm')" @confirm="save.delete(row.id)">
              <template #reference>
                <el-button class="ml-0!" type="danger">
                  {{t('delete')}}
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
