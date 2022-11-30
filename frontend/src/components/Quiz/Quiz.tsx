import React, { ReactNode, useEffect, useRef } from 'react'
import { Button } from 'antd'

import { useQuizResultsContext } from 'context/QuizResultsContext'
import NumberedDivider from 'components/Common/NumberedDivider'
import { useContainerDimensions } from 'hooks/useContainerDimensions'

import { useQuizContext } from './QuizContext'
import MarioBrothersName from './MarioBrotherName/MarioBrothersName'
import PikachuType from './PikachuType/PikachuType'
import MinecraftStack from './MinecraftStack/MinecraftStack'
import Villans from './Villans/Villans'
import ThankYou from './Results/ThankYou'
import styles from './Quiz.module.css'

/**
 * Renders the actual ACP application. The heart of Turnkey ACP
 * The application dynamically shows more steps as each one is completed
 */
const Quiz: React.FC = () => {
  const { setQuizAnswers } = useQuizResultsContext()
  const { stepper, answers } = useQuizContext()
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
  const maxScrollHeight = Math.max(window.innerHeight - 192 - curStepHeight, 0)

  const handleContinue = (): void => {
    if (step === stepper.getEndStep() - 1) {
      // Store the answers in a higher context for displaying on results page
      setQuizAnswers(answers.getAnswers())
    }

    stepper.forward()
  }

  return (
    <>
      <Step step={0} attachedRef={scrollRefs[0]}><MarioBrothersName /></Step>
      <Step step={1} attachedRef={scrollRefs[1]}><PikachuType /></Step>
      <Step step={2} attachedRef={scrollRefs[2]}><MinecraftStack /></Step>
      <Step step={3} attachedRef={scrollRefs[3]}><Villans /></Step>
      <Step step={4} attachedRef={scrollRefs[4]}><ThankYou /></Step>
      <div className={styles.continueContain} style={{ marginBottom: `${maxScrollHeight}px` }}>
        <Button
          className={styles.continue}
          type='primary'
          onClick={handleContinue}
        >
          {step === stepper.getEndStep() - 1 ? 'Submit Answers' : 'Continue'}
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
