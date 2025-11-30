<script setup lang="ts">
import quests from '@/game/quests';
import items from '@/items';
import useStat from '@/stat';
import {ArrowRight, More} from '@element-plus/icons-vue';
import {computed} from 'vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({
  messages: {
    zh: {
      item: '物品',
      more: '更多',
      use: '使用',
      About: '关于',
      Attribute: '属性',
      Achievement: '成就',
      Save: '存档',
      Map: '地图',
      Setting: '设置',
      weekday1: '星期一',
      weekday2: '星期二',
      weekday3: '星期三',
      weekday4: '星期四',
      weekday5: '星期五',
      weekday6: '星期六',
      weekday7: '星期日',
    },
  },
})

const curQuest = computed(() => {
  const curQuestId = s.questOrder[0]
  if (!curQuestId) { return undefined }
  return quests[curQuestId]
})

const curQuestStep = computed(() => {
  const curQuestId = s.questOrder[0]
  if (!curQuestId) { return undefined }
  const curQuest = quests[curQuestId]
  if (!curQuest) { return undefined }
  const curStepIds = s.quests[curQuestId]
  if (!curStepIds) { return undefined }
  const curStepId = curStepIds[curStepIds.length - 1]
  if (!curStepId) { return undefined }
  return curQuest.steps[curStepId]
})
</script>

<template>
  <div class="flex flex-col">

    <div class="bg-tertiary h-px" />

    <div class="px-4 py-1 flex flex-col gap-2">
      <div class="flex justify-between text-sm">
        <div>💰{{s.money}}</div>
        <div>⏰{{`${s.time.hour}:${s.time.minute}`}}</div>
        <div>📅{{` ${s.time.month}/${s.time.day}`}} {{t(`weekday${s.time.weekday}`)}}</div>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div v-for="_, key in s.statuses" class="flex gap-2 text-sm">
          <el-progress class="grow" :percentage="s.statuses[key]" text-inside :stroke-width="20">
            <template #default="{ percentage }">
              {{t(key)}} {{percentage}}
            </template>
          </el-progress>
        </div>
      </div>
    </div>

    <div class="px-2 py-1">
      <div v-if="curQuest && curQuestStep" class="bg-main rounded-2xl px-2 py-1">
        <div class="flex justify-between items-center">
          <div class="text-sm truncate">
            {{curQuestStep.name[$i18n.locale]}} | {{curQuest.name[$i18n.locale]}}
          </div>
          <el-button :icon="ArrowRight" @click="s.toScene('Quest')" size="small">{{t('more')}}</el-button>
        </div>
        <div class="text-sm text-subtle truncate">
          {{curQuestStep.description[$i18n.locale]}}
        </div>
      </div>
    </div>

    <div class="px-2 py-1 flex justify-center gap-2">
      <div 
        v-for="item in s.items.slice(0, 5)" 
        class="size-12 bg-tertiary rounded-2xl aspect-square relative flex justify-center items-center"
      >
        <el-popover v-if="items[item.id]" popper-class="p-2!">
          <div class="text-base">{{items[item.id]?.name[$i18n.locale]}}</div>
          <div class="text-sm">{{items[item.id]?.description[$i18n.locale]}}</div>
          <el-button v-if="items[item.id]?.effect" size="small" :text="false" class="mt-1">
            {{t('use')}}
          </el-button>
          <template #reference>
            <div class="text-2xl">{{items[item.id]?.icon}}</div>
          </template>
        </el-popover>
        <div class="absolute right-1 bottom-0.5 text-sm">{{item.count}}</div>
      </div>
      <div class="size-12 bg-tertiary rounded-2xl flex justify-center items-center" @click="s.toScene('Item')">
        <el-icon size="20">
          <More />
        </el-icon>
      </div>
    </div>

    <el-button-group class="py-1 mx-auto">
      <el-button
        class="px-3!"
        v-for="scene in ['Map', 'Attribute', 'Achievement', 'Save', 'Setting', 'About']"
        :text="false"
        @click="s.toScene(scene)"
      >
        {{t(scene)}}
      </el-button>
    </el-button-group>

  </div>
</template>
