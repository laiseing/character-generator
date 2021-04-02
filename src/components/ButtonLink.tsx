import { Button, ButtonProps } from 'bold-ui'
import React from 'react'

export interface ButtonLinkProps extends ButtonProps {
  href?: string
}

export function ButtonLink(props: ButtonLinkProps) {
  const { ...rest } = props

  const component = 'a'

  return <Button component={component} {...rest} />
}

ButtonLink.defaultProps = {
  localized: true,
}