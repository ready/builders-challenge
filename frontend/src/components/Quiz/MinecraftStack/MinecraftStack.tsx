import React from 'react'
import { Input } from 'antd'

import { useQuizContext } from '../QuizContext'

/**
 * Render the quiz question about minecraft stack size
 */
const MinecraftStack: React.FC = () => {
  const { answers } = useQuizContext()

  return (
    <>
      <p>
        Minecraft is widely known as the most famous video game of all time with chart-topping sales.
        In addition to mining, crafting, hunting, and building, players can store items in their inventory.
      </p>
      <p>
        What is the maximum number of items that can fit in an inventory stack?
      </p>
      <Input onChange={e => answers.setMinecraftStack(e.currentTarget.value)} />
    </>
  )
}

export default MinecraftStack
