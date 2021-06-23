import { useState } from 'react'

export function useRenderNewWorker() {
  const [renderNewWorker, setRenderNewWorker] = useState(false)
  return {
    renderNewWorker,
    setRenderNewWorker,
  }
}
