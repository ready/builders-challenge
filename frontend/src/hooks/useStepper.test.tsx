/**
 * @jest-environment jsdom
 */

import React from 'react'

import { act, render } from '@testing-library/react'

import { StepperHook, useStepper as useStepperHook } from './useStepper'

/**
 * A wrapper around the useStepperHook to deal with the react environment
 */
function setupStepper (firstStep?: number, lastStep?: number, cyclical?: boolean): StepperHook {
  const returnVal: StepperHook = {} as any
  const TestComponent: React.FC = () => {
    Object.assign(returnVal, useStepperHook(firstStep, lastStep, cyclical))
    return null
  }
  render(<TestComponent />)
  return returnVal
}

test("When no inputs are provided, the stepper doesn't move forward", () => {
  const stepper = setupStepper()
  const step = stepper.getStep()
  act(() => stepper.forward())
  expect(step).toBe(stepper.getStep())
})

test("When no inputs are provided, the stepper doesn't move backward", () => {
  const stepper = setupStepper()
  const step = stepper.getStep()
  act(() => stepper.backward())
  expect(step).toBe(stepper.getStep())
})

test("When no inputs are provided, the stepper's start and end match", () => {
  const stepper = setupStepper()
  expect(stepper.getStartStep()).toBe(stepper.getEndStep())
})

test('The current step begins at the start step', () => {
  const inputStartStep = 27
  const stepper = setupStepper(inputStartStep, 52)
  expect(inputStartStep).toBe(stepper.getStep())
})

test('Moving the stepper forward is exactly one increment', () => {
  const stepper = setupStepper(0, 1)
  const step = stepper.getStep()
  act(() => stepper.forward())
  expect(stepper.getStep()).toBe(step + 1)
})

test('Moving the stepper backward is exactly one decrement', () => {
  const stepper = setupStepper(0, 1)
  act(() => stepper.setStep(1))
  const step = stepper.getStep()
  act(() => stepper.backward())
  expect(stepper.getStep()).toBe(step - 1)
})

test('Setting the step overrides previous step', () => {
  const stepper = setupStepper(69, 100)
  const newStep = 78
  act(() => stepper.setStep(newStep))
  expect(newStep).toBe(stepper.getStep())
})

test('Setting the start step overrides previous start step', () => {
  const stepper = setupStepper(69, 100)
  const newStep = 78
  act(() => stepper.setStartStep(newStep))
  expect(newStep).toBe(stepper.getStartStep())
})

test('Setting the end step overrides previous end step', () => {
  const stepper = setupStepper(69, 100)
  const newStep = 78
  act(() => stepper.setEndStep(newStep))
  expect(newStep).toBe(stepper.getEndStep())
})

test('Swapped parameters still yields reasonable start and end steps', () => {
  const badFirst = 25
  const badLast = 15
  const stepper = setupStepper(badFirst, badLast)
  expect(stepper.getStartStep()).toBe(badLast)
  expect(stepper.getEndStep()).toBe(badFirst)
})

test('Non-integer parameters get floored', () => {
  const stepper = setupStepper(6.1, 9.9)
  expect(stepper.getStartStep()).toBe(6)
  expect(stepper.getEndStep()).toBe(9)
})

test('Non-integer setStep input get floored', () => {
  const stepper = setupStepper(10, 20)
  act(() => stepper.setStep(15.58234))
  expect(stepper.getStep()).toBe(15)
})

test('Non-integer setStartStep input get floored', () => {
  const stepper = setupStepper(10, 20)
  act(() => stepper.setStartStep(15.58234))
  expect(stepper.getStartStep()).toBe(15)
})

test('Non-integer setEndStep input get floored', () => {
  const stepper = setupStepper(10, 20)
  act(() => stepper.setEndStep(15.58234))
  expect(stepper.getEndStep()).toBe(15)
})

test('Cyclical stepper goes forward around to start', () => {
  const stepper = setupStepper(0, 1, true)
  const startStep = stepper.getStep()
  act(() => stepper.forward())
  act(() => stepper.forward())
  expect(stepper.getStep()).toBe(startStep)
})

test('Cyclical stepper goes backward around to start', () => {
  const stepper = setupStepper(0, 1, true)
  const startStep = stepper.getStep()
  act(() => stepper.backward())
  act(() => stepper.backward())
  expect(stepper.getStep()).toBe(startStep)
})

test('Negative parameters are valid', () => {
  const stepper = setupStepper(-1, 1, true)
  expect(stepper.getStep()).toBe(-1)
  act(() => stepper.forward())
  expect(stepper.getStep()).toBe(0)
  act(() => stepper.backward())
  expect(stepper.getStep()).toBe(-1)
  act(() => stepper.backward())
  expect(stepper.getStep()).toBe(1)
  act(() => stepper.backward())
  expect(stepper.getStep()).toBe(0)
})

test("Non-cyclical backwards step doesn't go past start", () => {
  const stepper = setupStepper(10, 15)
  const startStep = stepper.getStep()
  act(() => stepper.backward())
  expect(stepper.getStep()).toBe(startStep)
})

test("Non-cyclical forwards step doesn't go past end", () => {
  const stepper = setupStepper(10, 15)
  act(() => stepper.setStep(15))
  const endStep = stepper.getStep()
  act(() => stepper.forward())
  expect(stepper.getStep()).toBe(endStep)
})

test('Setting step past start snaps to start', () => {
  const stepper = setupStepper(1000, 2000)
  act(() => stepper.setStep(5))
  expect(stepper.getStep()).toBe(1000)
})

test('Setting step past end snaps to end', () => {
  const stepper = setupStepper(1000, 2000)
  act(() => stepper.setStep(5000))
  expect(stepper.getStep()).toBe(2000)
})

test('Setting a start step beyond the end step re-aligns them', () => {
  const stepper = setupStepper(15, 30)
  act(() => stepper.setStartStep(50))
  expect(stepper.getStartStep()).toBe(30)
  expect(stepper.getEndStep()).toBe(50)
  expect(stepper.getStep()).toBe(30)
})

test('Setting an end step beyond the start step re-aligns them', () => {
  const stepper = setupStepper(15, 30)
  act(() => stepper.setEndStep(5))
  expect(stepper.getStartStep()).toBe(5)
  expect(stepper.getEndStep()).toBe(15)
  expect(stepper.getStep()).toBe(15)
})

test('Setting the current step to what it already is will not affect anything', () => {
  const stepper = setupStepper(10, 20)
  act(() => stepper.setStep(10))
  expect(stepper.getStartStep()).toBe(10)
  expect(stepper.getStep()).toBe(10)
  expect(stepper.getEndStep()).toBe(20)
})

test('Setting the start step to what it already is will not affect anything', () => {
  const stepper = setupStepper(10, 20)
  act(() => stepper.setStep(15))
  act(() => stepper.setStartStep(10))
  expect(stepper.getStartStep()).toBe(10)
  expect(stepper.getStep()).toBe(15)
  expect(stepper.getEndStep()).toBe(20)
})

test('Setting the end step to what it already is will not affect anything', () => {
  const stepper = setupStepper(10, 20)
  act(() => stepper.setStep(15))
  act(() => stepper.setEndStep(20))
  expect(stepper.getStartStep()).toBe(10)
  expect(stepper.getStep()).toBe(15)
  expect(stepper.getEndStep()).toBe(20)
})

test('Long range cycles will work', () => {
  const stepper = setupStepper(10, 30, true)
  act(() => stepper.setStep(20))

  for (let i = 0; i < 21; i++) {
    act(() => stepper.forward())
  }
  expect(stepper.getStartStep()).toBe(10)
  expect(stepper.getStep()).toBe(20)
  expect(stepper.getEndStep()).toBe(30)

  for (let i = 0; i < 21; i++) {
    act(() => stepper.backward())
  }
  expect(stepper.getStartStep()).toBe(10)
  expect(stepper.getStep()).toBe(20)
  expect(stepper.getEndStep()).toBe(30)
})
