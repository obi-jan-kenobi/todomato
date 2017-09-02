import styled from 'styled-components'

export default styled.div`
  float: left;
  background-color: ${props => props.theme.highlight};
  height: 12px;
  width: 100%;
  transform: scaleX(${props => props.progress});
`
