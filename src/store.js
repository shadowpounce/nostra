import { create } from 'zustand'

const useSectionsStore = create((set) => ({
  forYou: false,
  impression: false,
  values: false,
  leavingImpressionDirection: undefined,
  leavingValuesDirection: undefined,
  setForYou: (boolean) =>
    set({
      forYou: boolean,
    }),
  setImpression: (boolean) =>
    set({
      impression: boolean,
    }),
  setValues: (boolean) =>
    set({
      values: boolean,
    }),
  setDirectionImpression: (direction) =>
    set({
      leavingImpressionDirection: direction,
    }),
  setDirectionValues: (direction) =>
    set({
      leavingValuesDirection: direction,
    }),
}))

export default useSectionsStore
