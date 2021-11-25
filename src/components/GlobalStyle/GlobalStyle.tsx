import styled, { css, keyframes } from "styled-components";

export const ButtonStyle: any = styled.button`
  background-color: ${(props: any) => props.backgroundColor};
  border-radius: ${(props: any) => props.borderRadius}px;
`;
export const scrollPulse: any = keyframes`
    0% {
      opacity: 0.3;
      transform: translate(0, 0);
    }
    100%{
      opacity: 0.8;
      transform: translate(0, 10);
    },
  `;
const animation = (props: any) =>
  css`
    ${scrollPulse} ${props.speed}s infinite alternate;
  `;

export const ScrollUpStyles: any = styled.div`
  border: ${(props: any) => `1px solid ${props.color}`};
  animation: ${animation};
  &:before {
    border-left: ${(props: any) => `2px solid ${props.color}`};
    border-bottom: ${(props: any) => `2px solid ${props.color}`};
  }
`;
