import styled from 'styled-components'

export default styled.div`
  float: left;
  background-color: ${props => props.theme.secondary};
  height: 3px;
  width: 100%;
  transform: scaleX(${props => props.progress / 100});
`
