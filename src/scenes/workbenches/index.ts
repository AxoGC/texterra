import type {Component} from "vue";
import AlchemyTable from "./AlchemyTable.vue";
import CookingCounter from "./CookingCounter.vue";
import type {ItemInstance} from "@/stat";
import type useStat from "@/stat";

export interface Recipe {
  input: ItemInstance[];
  output: ItemInstance[];
  condition: (stat: ReturnType<typeof useStat>) => boolean;
}

const workbenches: Record<string, Component> = {
  AlchemyTable,
  CookingCounter,
}

export default workbenches
