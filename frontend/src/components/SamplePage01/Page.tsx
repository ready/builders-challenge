import Explainer from 'components/Common/Explainer'
import MenuWrap from 'components/Menu/MenuWrap'
import React from 'react'

/**
 * renders the landing page, a welcoming page that introduces the repositiory
 * to the viewer
 */
const Page: React.FC = () => {
  return (
    <Explainer
      title='This is a sample page'
      subtitle='consider it a playground, if you will'
    >
      This is a sample page placed here to provide you with ample examples to create your own new page(s)!
      This page is, by default, mapped to route '/01'. Feel free to modify this example however you'd like!
    </Explainer>
  )
}

/**
 * wraps the `LandingPage` in our menu, assigning it the `Home` tab
 */
const Sample01Wrapper: React.FC = () => {
  return <MenuWrap active='Page 01'><Page /></MenuWrap>
}

export default Sample01Wrapper
