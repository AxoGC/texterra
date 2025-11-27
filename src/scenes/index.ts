import type {Component} from "vue";
import places from "./places";
import events from "./events";
import workbenches from "./workbenches";
import systems from "./systems";

const scenes: Record<string, Component> = {
  ...places,
  ...events,
  ...workbenches,
  ...systems,
}

export default scenes
