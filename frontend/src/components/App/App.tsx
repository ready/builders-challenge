import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RouteErrorBoundary from 'components/Error/RouteErrorBoundary'
import LandingPageWrapper from 'components/LandingPage/LandingPage'
import ButtonWrapper from 'components/ButtonPage/Button'
import Sample01Wrapper from 'components/SamplePage01/Page'
import Sample02Wrapper from 'components/SamplePage02/Page'
import PageNotFound from 'components/Error/404'

import ProjectPage from './ProjectPages'

/**
 * This component is the application; it contains all the routes within the
 * project and points to which components are rendered for each of those routes
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ProjectPage.Root} element={<RouteErrorBoundary><LandingPageWrapper /></RouteErrorBoundary>} />
        <Route path={ProjectPage.Button} element={<RouteErrorBoundary><ButtonWrapper /></RouteErrorBoundary>} />
        <Route path={ProjectPage.Sample01} element={<RouteErrorBoundary><Sample01Wrapper /></RouteErrorBoundary>} />
        <Route path={ProjectPage.Sample02} element={<RouteErrorBoundary><Sample02Wrapper /></RouteErrorBoundary>} />
        <Route path={ProjectPage.None} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
