import { useState } from 'react'

export function useOpenPerson() {
  const [openPerson, setOpenPerson] = useState()
  return {
    openPerson,
    setOpenPerson,
  }
}
