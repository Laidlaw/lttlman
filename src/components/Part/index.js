import React from "react"
import styled from 'styled-components'

const Part = styled.div`
  max-width: ${props => props.full ? '100%' : null};
  max-width: ${props => props.header ? '96rem' : null};
  max-width: ${props => props.content ? '60rem' : null};
  margin: ${props => props.center ? '0 auto' : null};
  text-align: ${props => props.center ? 'center' : null};
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  flex-direction: ${props => props.row ? 'row' : 'column'};
`

export default Part;
