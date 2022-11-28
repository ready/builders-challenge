import { useEffect, useState } from 'react'

import truthy from 'utils/truthy'

interface Dims {
  width: number
  height: number
}

/**
 * Custom hook to get the container dimensions of a react component
 * To use, create a ref using `useRef` and then pass it to this hook
 * and to the component
 * @param ref - the ref used by the react component
 * @returns the width and height of that component
 */
export const useContainerDimensions = (ref: React.MutableRefObject<any>): Dims => {
  const getDimensions = (): Dims => ({
    width: ref.current.offsetWidth,
    height: ref.current.offsetHeight
  })

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = (): void => {
      setDimensions(getDimensions())
    }

    if (truthy(ref.current)) {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])

  return dimensions
}
