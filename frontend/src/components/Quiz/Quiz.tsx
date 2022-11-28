import React, { ReactNode, useEffect, useRef } from 'react'

import { Button } from 'antd'

import NumberedDivider from 'components/Common/NumberedDivider'
import { useContainerDimensions } from 'hooks/useContainerDimensions'

import { useQuizContext } from './QuizContext'

import styles from './Quiz.module.css'
import MarioBrothersName from 'components/Quiz/MarioBrotherName/MarioBrothersName'
import PikachuType from 'components/Quiz/PikachuType/PikachuType'
import SplatoonVersion from 'components/Quiz/SplatoonVersion/SplatoonVersion'
import Villans from 'components/Quiz/Villans/Villans'

/**
 * Renders the actual ACP application. The heart of Turnkey ACP
 * The application dynamically shows more steps as each one is completed
 */
const Quiz: React.FC = () => {
  const { stepper } = useQuizContext()
  const step = stepper.getStep()
  const scrollRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  // When the step changes, scroll the new step into view
  useEffect(() => {
    if (step === 0) return
    setTimeout(() => scrollRefs[step].current?.scrollIntoView({
      behavior: 'smooth'
    }), 100)
  }, [step])

  // Calculate allowable scroll distance to always keep current step in view
  const curStepHeight = useContainerDimensions(scrollRefs[step]).height
  const maxScrollHeight = window.innerHeight - 192 - curStepHeight

  return (
    <>
      <Step step={0} attachedRef={scrollRefs[0]}><MarioBrothersName /></Step>
      <Step step={1} attachedRef={scrollRefs[1]}><PikachuType /></Step>
      <Step step={2} attachedRef={scrollRefs[2]}><SplatoonVersion /></Step>
      <Step step={3} attachedRef={scrollRefs[3]}><Villans /></Step>
      <div className={styles.continueContain} style={{ marginBottom: `${maxScrollHeight}px` }}>
        <Button
          className={styles.continue}
          type='primary'
          onClick={() => stepper.forward()}
        >
          {step === stepper.getEndStep() ? 'Submit Answers' : 'Continue'}
        </Button>
      </div>
    </>
  )
}

interface StepProps {
  step: number
  children: ReactNode
  attachedRef: React.MutableRefObject<any>
}

/**
 * Renders the step of the Quiz with the proper styles
 * If the current step matches the step provided
 * @prop `children` - the node to render
 * @prop `step` - the index of this node, gets offet by 1 in the display
 * @prop `attachedRef` - the ref to attach to the divider for scrolling
 */
const Step: React.FC<StepProps> = props => {
  const currentStep = useQuizContext().stepper.getStep()
  if (currentStep < props.step) return <></>

  return (
    <div ref={props.attachedRef} style={{ opacity: props.step === currentStep ? 1 : 0.5 }}>
      {props.step !== 0 && (
        <NumberedDivider
          checked={props.step < currentStep}
          number={props.step + 1}
          filled={props.step === currentStep}
        />
      )}
      {props.children}
    </div>
  )
}

export default Quiz
