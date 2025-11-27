import type {Component} from "vue";
import Achievement from "./Achievement.vue";
import Quest from "./Quest.vue";
import Start from "./Start.vue";
import Attribute from "./Attribute.vue";
import Cheat from "./Cheat.vue";
import Save from "./Save.vue";
import Setting from "./Setting.vue";
import Item from "./Item.vue";
import Donation from "./Donation.vue";
import Map from "./Map.vue";
import Account from "./Account.vue";

const systems: Record<string, Component> = {
  Account,
  Achievement,
  Attribute,
  Cheat,
  Donation,
  Item,
  Map,
  Quest,
  Save,
  Setting,
  Start,
}

export default systems
