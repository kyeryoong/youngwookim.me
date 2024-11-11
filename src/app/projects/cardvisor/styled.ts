import Image from 'next/image';
import styled from 'styled-components';

export const CardvisorIntroWrapper = styled('div')`
  width: 100%;
  height: 100%;
  background-color: #00c8c8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled('h3')`
  font-size: min(3.6vw, 2.4rem);
  font-weight: 600;
  width: 84vw;
  text-align: left;
  color: white;
  margin-bottom: -3vw;
`;

export const Title = styled(Image)`
  width: 84vw;
  height: 28vw;
`;

export const SubTitle = styled('h2')`
  font-size: min(3vw, 2rem);
  font-weight: 300;
  width: 84vw;
  text-align: right;
  color: white;
  margin-top: -5vw;
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
