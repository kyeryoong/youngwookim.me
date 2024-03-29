import styled from 'styled-components';

type LineProps = {
  $delay?: number;
};

type TextHoverProps = {
  $hover?: boolean;
};

export const ProfilePageWrapper = styled('div')`
  font-size: ${({ theme }) => theme.font.xxxl};
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxl};
  }
`;

export const YoungWoo = styled('div')``;

export const Line = styled('div')<LineProps>`
  animation: Float 1.5s;
  animation-fill-mode: forwards;
  animation-delay: ${({ $delay }) => ($delay ? `${$delay / 1000}s` : '0s')};
  opacity: 0;
  transform: translateY(50px);

  @keyframes Float {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const TextBase = styled('span')`
  font-family: 'JetBrains Mono';
  font-weight: 600;
  transition: 0.5s;
`;

export const Text = {
  Red: styled(TextBase)`
    color: #f92672;
  `,

  Orange: styled(TextBase)`
    color: #fd971f;
  `,

  Yellow: styled(TextBase)<TextHoverProps>`
    color: #e6db74;

    &:hover {
      color: ${({ $hover }) => $hover && 'aqua'};
      cursor: ${({ $hover }) => $hover && 'pointer'};
    }
  `,

  Green: styled(TextBase)`
    color: #a6e22e;
  `,

  Blue: styled(TextBase)`
    color: #66d9ef;
    font-style: italic;
  `,

  Purple: styled(TextBase)`
    color: #ae81ff;
  `,

  Gray: styled(TextBase)`
    color: #919288;
  `,

  DarkGray: styled(TextBase)`
    color: #6e7066;
    font-style: italic;
  `,

  White: styled(TextBase)`
    color: ${({ theme }) => theme.color.white};
  `,
};
