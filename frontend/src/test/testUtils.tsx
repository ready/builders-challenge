import * as React from 'react'
import { RenderResult, render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ApolloMockedProvider from './apollo/MockedProviderWrapper'
import { MockReturnType } from './apollo/mocks/createMock'
import { AppProvider } from 'context/AppProvider'
import { AuthProvider } from 'context/AuthContext'
import { ErrorStateProvider } from 'context/ErrorStateContext'
import * as fakeData from './apollo/mocks/fakeData'
import PortalPage from 'components/App/PortalPages'

interface WrapperProps {
  /** react children to render */
  children: React.ReactNode
}

interface OptionsType {
  /** List of mock objects that we expect will be called by the components we're testing */
  mocks?: MockReturnType[]
  /** An array of initial entries to the MemoryRouter provider. Default is [PortalPage.Root] */
  initialEntries?: string[]
  /** Any props we wanna pass on to AppProvider */
  appProviderProps?: {
    /** An org id passed to AppProvider to simulate a logged in state */
    initialOrgId?: string | undefined
  }
}

/** A custom render component that extends the @testing-library/react render method
  *  It takes in the same params as the original render function and wraps it in Wrapper component
  * @param ui - the component to render
  * @param options - options to pass to @testing-library/react render
  * @returns a render function that wraps
  */
const render = (ui: React.ReactElement<any>, options: OptionsType = {}): RenderResult => {
  const {
    mocks = [],
    initialEntries = [PortalPage.Root],
    ...wrapperOptions
  } = options
  /** A component that wraps any children it receives with the various
  *  providers we need for those components to work
  *  List of providers - ApolloProvider, BrowserRouter, AppProvider (from our AppContext)
  */
  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <ErrorStateProvider>
        <AuthProvider>
          <ApolloMockedProvider mocks={mocks}>
            <AppProvider initialOrgId={fakeData.fakeOrganization.id}>
              <MemoryRouter initialEntries={initialEntries}>
                {children}
              </MemoryRouter>
            </AppProvider>
          </ApolloMockedProvider>
        </AuthProvider>
      </ErrorStateProvider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...wrapperOptions })
}

// eslint-disable-next-line
export * from '@testing-library/react'

// eslint-disable-next-line
export { render }
