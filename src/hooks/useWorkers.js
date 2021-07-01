import { useState } from 'react'
import { workerData } from '../MockData/data'

export function useWorkers() {
  const [workers, setWorkers] = useState(workerData)

  const sortedWorkers = workers.reduce((res, person) => {
    if (!res[person.company]) {
      res[person.company] = []
    }
    res[person.company].push(person)
    return res
  }, {})

  return {
    workers,
    sortedWorkers,
    setWorkers,
  }
}
