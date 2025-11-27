<script setup lang="ts">
import useStat, {type Attribute} from '@/stat';
import {RadarChart} from 'echarts/charts';
import {use} from 'echarts/core';
import {useI18n} from 'vue-i18n';
import VChart from 'vue-echarts';
import {ref} from 'vue';
import type {EChartsOption} from 'echarts';
import {CanvasRenderer} from 'echarts/renderers';
import {ArrowLeft} from '@element-plus/icons-vue';
import {TooltipComponent} from 'echarts/components';

use([RadarChart, TooltipComponent, CanvasRenderer])

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    attribute: '属性',
    attributeTitle: '属性列表',
    radarTitle: '属性图',
  },
} })

const option = ref<EChartsOption>({
  tooltip: {
    trigger: 'item',
  },
  radar: {
    indicator: Object.keys(s.attributes).map(key => ({ name: t(`attributes.${key}`), max: 100 })),
    radius: '70%',
  },
  series: [{
    name: t('attribute'),
    type: 'radar',
    data: [{
      value: (Object.keys(s.attributes) as Attribute[]).map(key => s.attributes[key]),
    }]
  }]
})
</script>

<template>
  <div class="p-4 flex flex-col gap-4">

    <div class="card flex items-center gap-4">
      <el-button @click="s.backScene" :icon="ArrowLeft">
        {{t('back')}}
      </el-button>
      <div class="text-lg">{{t('attribute')}}</div>
    </div>

    <div class="flex gap-4">

      <div class="basis-1/2 card flex flex-col gap-4">
        <div class="text-lg">{{t('attributeTitle')}}</div>
        <div class="flex flex-col gap-4">
          <el-popover v-for="value, key in s.attributes" :content="t(`attributeNotes.${key}`)" placement="right">
            <template #reference>
              <div class="flex gap-2">
                <div class="w-20">{{t(`attributes.${key}`)}}</div>
                <el-progress class="grow" :percentage="value" text-inside :stroke-width="28" />
              </div>
            </template>
          </el-popover>
        </div>
      </div>

      <div class="basis-1/2 card flex flex-col gap-4">
        <div class="text-lg">{{t('radarTitle')}}</div>
        <v-chart class="aspect-square" :option="option" autoresize />
      </div>

    </div>

  </div>
</template>
