// import * as React from 'react'
// import { fireEvent, render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'

// import Explainer from './Explainer'

// const title = 'test title'
// const titleProperCase = 'Test Title'

// const subtitle = 'test subtitle'
// const subtitleProperCase = 'Test Subtitle'

// const children = 'test children'

// const mockOnClick = jest.fn()

// afterEach(() => {
//   jest.clearAllMocks()
// })

// describe('Explainer component', () => {
//   describe('renders buttonless content correct when', () => {
//     test('only title + children given', () => {
//       render(<Explainer title={title}>{children}</Explainer>)
//       expect(screen.getByText(titleProperCase)).toBeInTheDocument()
//       expect(screen.getByText(children)).toBeInTheDocument()
//     }),
//     test('title, subtitle, children given', () => {
//       render(<Explainer title={title} subtitle={subtitle}>{children}</Explainer>)
//       expect(screen.getByText(titleProperCase)).toBeInTheDocument()
//       expect(screen.getByText(subtitleProperCase)).toBeInTheDocument()
//       expect(screen.getByText(children)).toBeInTheDocument()
//     })
//   }),
//   test('renders button with correct onClick function', async () => {
//     const dom = render(<Explainer title={title} button={{title: title, handleOnClick: {mockOnClick}}}>{children}</Explainer>)
//     fireEvent.mouseOver(dom.getByText(title))
//     expect(mockOnClick).toBeCalledTimes(1)
//   })
// })
