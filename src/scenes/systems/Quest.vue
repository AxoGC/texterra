<script setup lang="ts">
import quests, {type Quest} from '@/game/quests';
import useStat from '@/stat';
import {ArrowLeft, ArrowUp} from '@element-plus/icons-vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({
  messages: {
    zh: {
      title: '任务',
      active: '进行中',
      finished: '已完成',
    },
  },
})

function isFinished(quest: Quest, curSteps: string[]): boolean {
  const curStepId = curSteps[curSteps.length - 1]
  if (!curStepId) {
    return false
  }
  const curStep = quest.steps[curStepId]
  if (!curStep) {
    return false
  }
  return curStep.end === true
}
</script>

<template>
  <div class="p-4 flex flex-col gap-4">

    <div class="card flex items-center gap-4">
      <el-button :icon="ArrowLeft" @click="s.backScene">
        {{t('back')}}
      </el-button>
      <div class="text-lg">{{t('title')}}</div>
    </div>

    <el-collapse class="card">
      <template v-for="q, i in s.questOrder">
        <el-collapse-item v-if="quests[q] && s.quests[q]">
          <template #title>
            <div class="flex items-center gap-2">
              <div>{{quests[q]?.name[$i18n.locale]}}</div>
              <el-tag :type="isFinished(quests[q], s.quests[q]) ? 'info' : 'warning'" round>
                {{isFinished(quests[q], s.quests[q]) ? t('finished') : t('active')}}
              </el-tag>
              <el-button 
                v-if="i > 0"
                class="ms-auto me-2" 
                circle 
                :icon="ArrowUp" 
                @click.stop="[s.questOrder[i-1], s.questOrder[i]] = [s.questOrder[i], s.questOrder[i-1]] as any" 
              />
            </div>
          </template>
          <div class="text-subtle flex flex-col gap-1">
            <div class="bg-main rounded-2xl py-1 px-2">
              {{quests[q].description[$i18n.locale]}}
            </div>
            <div v-for="step in s.quests[q]">
              <div class="font-bold">
                {{quests[q].steps[step]?.name[$i18n.locale]}}</div>
              <div>
                {{quests[q].steps[step]?.description[$i18n.locale]}}
              </div>
            </div>
          </div>
        </el-collapse-item>
      </template>
    </el-collapse>

  </div>
</template>
