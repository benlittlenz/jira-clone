import styled from "styled-components";

const paddingLeft = 64 + 230 + 40;

export const ProjectPage = styled.div`
  padding: 25px 32px 50px ${paddingLeft}px;

  @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  }
  @media (max-width: 999px) {
    padding-left: ${paddingLeft - 20 - 230}px;
  }
`;
