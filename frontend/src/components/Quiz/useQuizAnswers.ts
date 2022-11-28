import { useState } from 'react'

import { PokemonType } from './useQuizAnswers.types'

export interface QuizAnswersHook {
  setMarioBrothersName: (name: any) => void
  getMarioBrothersName: () => string | undefined

  setPikachusType: (type: any) => void
  getPikachusType: () => PokemonType | undefined

  setSplatoonVersion: (version: any) => void
  getSplatoonVersion: () => string | undefined

  setVillans: (villans: any) => void
  getVillans: () => string[] | undefined
}

/**
 * Custom hook to manage the state of the user's quiz answers
 * @returns the hook to set or get state
 */
export const useQuizAnswers = (): QuizAnswersHook => {
  const [marioBrothersName, setMarioBrothersName] = useState(undefined as undefined | string)
  const [pikachusType, setPikachusType] = useState(undefined as undefined | PokemonType)
  const [splatoonVersion, setSplatoonVersion] = useState(undefined as undefined | string)
  const [villans, setVillans] = useState(undefined as undefined | string[])

  return {
    setMarioBrothersName,
    getMarioBrothersName: () => marioBrothersName,

    setPikachusType,
    getPikachusType: () => pikachusType,

    setSplatoonVersion,
    getSplatoonVersion: () => splatoonVersion,

    setVillans,
    getVillans: () => villans
  }
}
