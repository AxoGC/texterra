<script setup lang="ts">
import scenes from '@/scenes';
import useStat from '@/stat';
import EmptyScene from './EmptyScene.vue';
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import SidebarDesktop from './SidebarDesktop.vue';
import SidebarMobile from './SidebarMobile.vue';

const s = useStat()

const md = useBreakpoints(breakpointsTailwind).greaterOrEqual('md')

</script>

<template>
  <div class="h-screen max-w-6xl mx-auto flex flex-col md:flex-row">
    <div class="w-64 bg-white dark:bg-gray-800 overflow-auto">
      <sidebar-desktop v-if="md" />
      <sidebar-mobile v-else />
    </div>
    <div class="grow basis-0 overflow-auto">
      <component v-if="scenes[s.scene]" :is="scenes[s.scene]" />
      <empty-scene v-else />
    </div>
  </div>
</template>
