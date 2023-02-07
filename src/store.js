import { create } from 'zustand'

const useSectionsStore = create((set) => ({
  forYou: false,
  swiperImpressions: null,
  swiperValues: null,
  setForYou: (boolean) =>
    set({
      forYou: boolean,
    }),
  setSwiperImpressions: (swiper) =>
    set({
      swiperImpressions: swiper,
    }),
  setSwiperValues: (swiper) =>
    set({
      swiperValues: swiper,
    }),
}))

export default useSectionsStore
