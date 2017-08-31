import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background-color: #50b5ae;
  padding: 0.3rem;
  margin: 0;
  border: none;
  flex-grow: 1;
  cursor: pointer;
  &:disabled {
    color: #ffffff33;
    cursor: not-allowed;
  }
`

export default Button
