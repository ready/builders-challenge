import { useEffect, useState } from 'react'

type Step = number | string
export type StepMap = Map<string, number>
export interface StepperHook {
  forward: () => void
  backward: () => void

  setStep: (step: Step) => void
  getStep: () => number

  setStartStep: (step: Step) => void
  setEndStep: (step: Step) => void
  getStartStep: () => number
  getEndStep: () => number

  setStepMap: (stepMap: StepMap) => void
}

/**
 * Creates a stepper hook which internally tracks the state of the current step.
 * A stepper is simply an integer which can be moved up and down or set as needed.
 * It will often be used in conjuction with the Steps component to move between steps in a flow.
 * @param firstStep - An integer representing the numerical value of the first step. Default is 0.
 * @param lastStep - An integer representing the numerical value of the last step. Default is 0.
 * @param cyclical - A boolean flag determining if going past the end wraps back to the start or vice versa.
 *  Default is false.
 * @returns the stepper hook which contains the functions to modify the state.
 */
export const useStepper = (firstStep = 0, lastStep = 0, cyclical = false): StepperHook => {
  const [startStep, setStartStep] = useState(Math.floor(Math.min(firstStep, lastStep)))
  const [endStep, setEndStep] = useState(Math.floor(Math.max(firstStep, lastStep)))
  const [step, setStep] = useState(startStep)
  const [stepMap, setStepMap] = useState({} as unknown as StepMap)

  // Whenever the start or end steps are changed,
  // we want to make sure the current step is still within those bounds
  useEffect(() => safeSetStep(step), [startStep, endStep])

  /**
   * Moves the stepper forward one step.
   * If the stepper is cyclical it will wrap around to the start.
   */
  const forward = (): void => {
    setStep(s => {
      if (s === endStep) {
        return cyclical ? startStep : endStep
      } else {
        return s + 1
      }
    })
  }

  /**
   * Moves the stepper backward one step
   * If the stepper is cyclical it will wrap around to the end.
   */
  const backward = (): void => {
    setStep(s => {
      if (s === startStep) {
        return cyclical ? endStep : startStep
      } else {
        return s - 1
      }
    })
  }

  /**
   * @returns the current step
   */
  const getStep = (): number => {
    return step
  }

  /**
   * @returns the start step
   */
  const getStartStep = (): number => {
    return startStep
  }

  /**
   * @returns the end step
   */
  const getEndStep = (): number => {
    return endStep
  }

  /**
   * Sets the new current step.
   * If outside of the start/end range, it snaps to the range.
   * @param newStep - the new current step
   */
  const safeSetStep = (newStep: number): void => {
    if (newStep > endStep) {
      setStep(endStep)
    } else if (newStep < startStep) {
      setStep(startStep)
    } else if (newStep !== step) {
      // This check is required when setting React state to avoid infinite re-renders
      setStep(Math.floor(newStep))
    }
  }

  /**
   * Sets the new starting step.
   * If the new starting step is larger than the current end step,
   * it adjusts the range such that the start and end steps' order is preserved.
   * @param newStartStep - the new starting step
   */
  const safeSetStartStep = (newStartStep: number): void => {
    // This check is required when setting React state to avoid infinite re-renders
    if (newStartStep !== startStep) {
      if (newStartStep > endStep) {
        setStartStep(endStep)
        setEndStep(Math.floor(newStartStep))
      } else {
        setStartStep(Math.floor(newStartStep))
      }
    }
  }

  /**
   * Sets the new ending step.
   * If the new ending step is smaller than the current start step,
   * it adjusts the range such that the start and end steps' order is preserved.
   * @param newEndStep - the new ending step
   */
  const safeSetEndStep = (newEndStep: number): void => {
    // This check is required when setting React state to avoid infinite re-renders
    if (newEndStep !== endStep) {
      if (newEndStep < startStep) {
        setEndStep(startStep)
        setStartStep(Math.floor(newEndStep))
      } else {
        setEndStep(Math.floor(newEndStep))
      }
    }
  }

  /**
   * Safely sets the step map without rendering infinitely.
   * Navigation is useful in the stepper by providing a method of setting the step
   * via a string instead of a number
   * @param newStepMap - The new step map
   */
  const safeSetStepMap = (newStepMap: StepMap): void => {
    if (newStepMap.size !== stepMap.size) return setStepMap(newStepMap)
    for (const [key, newValue] of newStepMap) {
      if (stepMap.get(key) !== newValue) return setStepMap(newStepMap)
    }
  }

  /**
   * An internal function to consult the step map to see if the step is a valid entry in the map
   * If it is a string that maps to a step or a number, call the step function
   * @param step - A string to consult the step map with or a number that is the actual entry of the step
   * @param setFunction - The set function to call
   */
  const consultStepMap = (step: Step, setFunction: (step: number) => void): void => {
    if (typeof step === 'string') {
      const value = stepMap.get(step)
      if (value !== undefined) setFunction(value)
    } else {
      setFunction(step)
    }
  }

  return {
    forward,
    backward,

    setStep: step => consultStepMap(step, safeSetStep),
    getStep,

    setStartStep: step => consultStepMap(step, safeSetStartStep),
    setEndStep: step => consultStepMap(step, safeSetEndStep),
    getStartStep,
    getEndStep,

    setStepMap: safeSetStepMap
  }
}
