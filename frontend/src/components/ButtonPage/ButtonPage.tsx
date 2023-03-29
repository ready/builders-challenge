import React, { useState } from 'react'
import { Button } from 'antd'
import MenuWrap from 'components/Menu/MenuWrap'

import styles from './ButtonPage.module.css'
import Card from 'components/ButtonPage/Card'
import { DownloadOutlined } from '@ant-design/icons'

/**
 * Renders a collection of buttons doing different things
 */
const ButtonPage: React.FC = () => {
  return (
    <div className={styles.buttonPage}>
      <ButtonTypes />
      <ButtonSizes />
      <ButtonStatuses />
      <ButtonIcons />
      <ButtonClick />
    </div>
  )
}

const ButtonTypes: React.FC = () => (
  <Card>
    <Row>
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='ghost'>Ghost</Button>
      <Button type='text'>Text</Button>
      <Button type='link'>Link</Button>
    </Row>
  </Card>
)

const ButtonSizes: React.FC = () => (
  <Card>
    <Row>
      <Button size='large'>Large</Button>
      <Button>Default</Button>
      <Button size='small'>Small</Button>
    </Row>
  </Card>
)

const ButtonStatuses: React.FC = () => (
  <Card>
    <Row>
      <Button danger>Danger</Button>
      <Button ghost>Ghost</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </Row>
  </Card>
)

const ButtonIcons: React.FC = () => (
  <Card>
    <Row>
      <Button icon={<DownloadOutlined />}>Download</Button>
      <Button icon={<DownloadOutlined />} shape='circle' />
      <Button icon={<DownloadOutlined />} shape='round' />
    </Row>
  </Card>
)

const ButtonClick: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Card>
      <Row>
        <Button onClick={() => setCount(c => c + 1)}>
          {count === 0 ? 'Click me' : `Clicked ${count} time${count > 1 ? 's' : ''}`}
        </Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
        <Button href='quiz'>Take Quiz</Button>
        <Button href='https://google.com' target='_blank'>Google Something</Button>
      </Row>
    </Card>
  )
}

/**
 * Wraps a row of buttons
 * @prop `children` - the buttons to be wrapped
 */
const Row: React.FC = props => {
  return (
    <div className={styles.row}>
      {props.children}
    </div>
  )
}

/**
 * wraps the `Button` in the menu; assigning it the `Button` tab
 */
const ButtonWrapper: React.FC = () => {
  return <MenuWrap active='Button'><ButtonPage /></MenuWrap>
}

export default ButtonWrapper
