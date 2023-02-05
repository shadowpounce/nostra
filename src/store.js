import { create } from 'zustand'

const useSectionsStore = create((set) => ({
  forYou: false,
  impression: false,
  leavingImpressionDirection: undefined,
  setForYou: (boolean) =>
    set({
      forYou: boolean,
    }),
  setImpression: (boolean) =>
    set({
      impression: boolean,
    }),
  setDirectionImpression: (direction) =>
    set({
      leavingImpressionDirection: direction,
    }),
}))

export default useSectionsStore
