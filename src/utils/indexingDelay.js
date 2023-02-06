const indexingDelay = (items, type) => {
  items.forEach((item, idx) => {
    if (type === 'animation') {
      item.style.animationDelay = `0.${idx}5s`
    }
    if (type === 'transition') {
      item.style.transitionDelay = `0.${idx}5s`
    }
  })
}

export default indexingDelay
