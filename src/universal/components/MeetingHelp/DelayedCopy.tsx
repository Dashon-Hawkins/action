import styled from 'react-emotion'
import HelpMenuCopy from 'universal/components/MeetingHelp/HelpMenuCopy'
import React from 'react'
import Ellipsis from 'universal/components/Ellipsis/Ellipsis'

const StyledHelpMenuCopy = styled(HelpMenuCopy)(({margin}: {margin: string}) => ({margin}))

const DelayedCopyInner = styled('span')(({show, thresh}: {show: number; thresh: number}) => ({
  opacity: show >= thresh ? 1 : 0,
  transform: show >= thresh ? 'translateY(0)' : 'translateY(10px)',
  transition: `all 500ms`
}))

const DelayedCopy = (props) => {
  const {children, show, thresh, margin} = props
  const showEllipsis = show === thresh - 1
  return (
    <StyledHelpMenuCopy margin={margin}>
      {showEllipsis && <Ellipsis />}
      <DelayedCopyInner show={show} thresh={thresh}>
        {children}
      </DelayedCopyInner>
    </StyledHelpMenuCopy>
  )
}
export default DelayedCopy
