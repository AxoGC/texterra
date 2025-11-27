import type {Component} from "vue";
import Achievement from "./Achievement.vue";
import Quest from "./Quest.vue";
import Start from "./Start.vue";
import Attribute from "./Attribute.vue";
import Cheat from "./Cheat.vue";
import Save from "./Save.vue";
import Setting from "./Setting.vue";
import Item from "./Item.vue";

const systems: Record<string, Component> = {
  Achievement,
  Attribute,
  Cheat,
  Item,
  Quest,
  Save,
  Setting,
  Start,
}

export default systems
