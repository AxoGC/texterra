<script setup lang="ts">
import useStat from '@/stat';
import {ArrowLeft} from '@element-plus/icons-vue';
import {useI18n} from 'vue-i18n';
import VChart from 'vue-echarts';
import {ScatterChart} from 'echarts/charts';
import {GeoComponent, TooltipComponent, VisualMapComponent} from 'echarts/components';
import {use} from 'echarts/core';
import {CanvasRenderer} from 'echarts/renderers';
import {ref} from 'vue';
import {registerMap, type EChartsOption} from 'echarts';
import gamemap from '@/gamemap.json';

use([
  ScatterChart,
  TooltipComponent,
  GeoComponent,
  VisualMapComponent,
  CanvasRenderer,
])

const s = useStat()

const { t } = useI18n({
  messages: {
    zh: {
      title: '地图',
    },
  },
})

const option = ref<EChartsOption>({
  geo: {
    map: 'gamemap',
    roam: true,
    label: {
      show: true,
      color: '#555'
    }
  },
  tooltip: {},
})

registerMap('gamemap', gamemap as any)
</script>

<template>
  <div class="h-full p-4 flex flex-col gap-4">

    <div class="card flex items-center gap-4">
      <el-button :icon="ArrowLeft" @click="s.backScene">
        {{t('back')}}
      </el-button>
      <div class="text-lg">{{t('title')}}</div>
    </div>

    <v-chart class="grow card" :option="option" autoresize>
    </v-chart>

  </div>
</template>
