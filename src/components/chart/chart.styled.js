import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const LegendContainer = styled(Box)`
  width: 200px;
  height: 750px;
  box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 10%);
  border-radius: 5px;
  background-color: #fff;

  @media screen and (min-width: 420px) {
    height: 400px;
  }
`;

export const LegendItem = styled(Box)`
  width: 100%;
  height: 25%;
  text-align: center;
  transform: rotate(90deg);
  @media screen and (min-width: 420px) {
    transform: rotate(0deg);
  }
`;

export const ResultContainer = styled(Box)`
  width: 600px;
`;

export const ResultItem = styled(Box)`
  display: flex;
  height: 125px;
  margin-top: 50px;
  border-radius: 0 5px 5px 0;
  align-items: center;
  @media screen and (min-width: 420px) {
    height: 50px;
    margin-top: 40px;
  }
`;

export const Result = styled(Typography)`
  transform: rotate(90deg);
  
  @media screen and (min-width: 420px) {
    transform: rotate(0deg);
  }
`;