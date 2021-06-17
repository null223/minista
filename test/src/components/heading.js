import styled from "styled-components"

const Heading = ({ children }) => {
  return <StHeading>{children}</StHeading>
}

export default Heading

const StHeading = styled.h1`
  color: red;
`
