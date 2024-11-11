import Image from 'next/image';
import styled from 'styled-components';

export const Title = styled('h1')`
  font-size: 7.2rem;
  font-weight: 700;
  color: white;
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(14.4vw, 7.2rem);
  }
`;

export const Subtitle = styled('h2')`
  font-size: 2.4rem;
  font-weight: 500;
  color: white;
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1200px) {
    font-size: min(4.8vw, 2.4rem);
  }
`;

export const CardvisorLogo = styled(Image)`
  width: 240px;
  height: 48px;

  @media (pointer: coarse) or (max-width: 1200px) {
    width: min(30vw, 240px);
    height: min(6vw, 48px);
  }
`;

export const Label = styled('h3')`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray[500]};
  word-break: keep-all;
  position: absolute;
  bottom: 80px;
  left: 80px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.6vw, 1.8rem);
    bottom: min(10vw, 80px);
    left: min(5vw, 80px);
  }
`;

export const DiagramImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const YouTubePlayerWrapper = styled('div')`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  border-radius: 8px;
  float: none;
  clear: both;
`;

export const YouTubePlayer = styled('iframe')`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8px;
`;
