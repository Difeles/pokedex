export function useInfiniteScroll(loadMore, isLoading) {
  let observer = null

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting && !isLoading.value) {
        loadMore()
      }
    },
    { threshold: 0, rootMargin: '0px 0px 90px 0px' },
  )

  return { observer }
}
