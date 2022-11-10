import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Explainer from './Explainer'

const title = 'test title'
const titleProperCase = 'Test Title'

const subtitle = 'test subtitle'
const subtitleProperCase = 'Test Subtitle'

const children = 'test children'

const mockOnClick = jest.fn()

afterEach(() => {
  jest.clearAllMocks()
})

test('Explanation component renders buttonless content correctly when only titl + children given', () => {
  render(<Explainer title={title}>{children}</Explainer>)
  expect(screen.getByText(titleProperCase)).toBeInTheDocument()
  expect(screen.getByText(children)).toBeInTheDocument()
})

test('Explanation component renders buttonless content correctly when title, subtitle, children given', () => {
  render(<Explainer title={title} subtitle={subtitle}>{children}</Explainer>)
  expect(screen.getByText(titleProperCase)).toBeInTheDocument()
  expect(screen.getByText(subtitleProperCase)).toBeInTheDocument()
  expect(screen.getByText(children)).toBeInTheDocument()
})

test('Explanation component renders button with correct onClick function', () => {
  const dom = render(<Explainer title={title} button={{ title, handleOnClick: mockOnClick }}>{children}</Explainer>)
  fireEvent.mouseOver(dom.getByText(title))
  expect(mockOnClick).toBeCalledTimes(1)
})
