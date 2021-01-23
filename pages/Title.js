import styled from "styled-components";

function Title() {
  return (
    <StyledTitle>
      <h1>Compound APY Dashboard</h1>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  height: 10vh;
  display: flex;
	align-items: center;
`;

export default Title;
