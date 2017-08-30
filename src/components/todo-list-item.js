import styled from 'styled-components'

export default styled.li`
  color: ${props => props.complete ? props.theme.secondary : props.theme.highlight};
  background-color: ${props => props.active ? props.theme.background : props.theme.muted};
  width: 100%;
  padding: .7rem;
  display: inline-block;
`
