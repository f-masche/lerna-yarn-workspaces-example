import { awesomeFn } from "@quramy/x-core";

export function cli() {
  awesomeFn();
  console.log("HERE");
  return Promise.resolve(true);
}
