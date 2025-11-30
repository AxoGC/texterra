<script setup lang="ts">
import type {Attribute} from '@/stat';
import {computed, reactive} from 'vue';
import {useI18n} from 'vue-i18n';

const available = computed(() => 24 - Object.values(form).reduce((sum, v) => sum + v, 0))

const form = reactive<Record<Attribute, number>>({
  strength: 0,
  agility: 0,
  appearance: 0,
  spirit: 0,
  alchemy: 0,
  agriculture: 0,
})

const { t } = useI18n({
  messages: {
    zh: {
      pointAvailable: '可用点数',
    },
  },
})
</script>

<template>
  <div class="p-4 flex flex-col items-start gap-4">

    <div class="flex gap-2 items-end">
      <div>{{t('pointAvailable')}}</div>
      <div class="text-xl">{{available}}</div>
    </div>

    <el-form>
      <el-form-item v-for="_, key in form" :label="t(key)">
        <el-popover placement="right" :content="t(`${key}Note`)">
          <template #reference>
            <el-input-number v-model="form[key]" :min="0" :max="form[key]+available" />
          </template>
        </el-popover>
      </el-form-item>
    </el-form>

    <div>
      <el-button :text="false" @click="(Object.keys(form) as Attribute[]).forEach(key => form[key] = 0)">
        {{t('clear')}}
      </el-button>
      <el-button type="primary" :text="false">
        {{t('confirm')}}
      </el-button>
    </div>

  </div>
</template>
