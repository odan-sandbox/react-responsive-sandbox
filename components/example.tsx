import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    minWidth: 780
  })
  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <>
        <p>You are a desktop or laptop</p>
      </>}
    </div>
  )
}