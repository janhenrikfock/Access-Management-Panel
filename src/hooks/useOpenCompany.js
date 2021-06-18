import { useState } from 'react'

export function useOpenCompany() {
  const [openCompany, setOpenCompany] = useState()
  return {
    openCompany,
    setOpenCompany,
  }
}
