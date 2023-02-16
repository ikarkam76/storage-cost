import styled from "@emotion/styled";

export const SlidersContainer = styled.div`
  position: absolute;
  bottom:0;
  right: 0;
  left: 0;
  text-align: center;

  @media screen and (min-width: 420px){
    display: flex;
    top: 0;
  }
`;

export const ChartContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  transform: rotate(270deg);

  @media screen and (min-width: 420px) {
    bottom: 100px;
    transform: rotate(0);
  }
`;