import { defineStore } from "pinia";

export const useParameterStore = defineStore("parameter", {
  state: (): Partial<{test: string}> => ({
    test: "no-value",
  }),
  actions: {
    setTest(value: string): void {
      this.test = value;
    },

  },
});