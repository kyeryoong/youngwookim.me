import { EnvelopeFill, Github, Linkedin } from 'react-bootstrap-icons';
import styled from 'styled-components';

type FooterWrapperProps = {
  $hide: boolean;
};

export const FooterWrapper = styled('footer')<FooterWrapperProps>`
  padding-left: 15vw;
  padding-right: 15vw;
  padding-bottom: 15vh;
  background-color: ${({ theme }) => theme.color.black};
  display: ${({ $hide }) => $hide && 'none'};
  color: ${({ theme }) => theme.color.gray[500]};

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-bottom: 7.5vh;
  }
`;

export const FooterTop = styled('div')`
  padding-top: 100px;
  border-top: 1px solid ${({ theme }) => theme.color.gray[600]};
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const FooterTopLeft = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const FooterTopRight = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterBottom = styled('div')`
  text-align: center;
  margin-top: 50px;
`;

export const Name = styled('span')`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 500;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
  }
`;

export const ContactLabel = styled('label')`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 500;
  text-align: right;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
  }
`;

export const ContactButtonWrapper = styled('div')`
  display: flex;
  gap: 15px;
`;

export const GitHubButton = styled(Github)`
  width: 40px;
  height: 40px;
  padding: 2px;
  cursor: pointer;
  transition: 0.5s;
  color: ${({ theme }) => theme.color.gray[400]};

  &:hover {
    transform: scale(1.25);
    color: ${({ theme }) => theme.color.white};
  }
`;

export const LinkedInButton = styled(Linkedin)`
  width: 40px;
  height: 40px;
  padding: 3px;
  cursor: pointer;
  transition: 0.5s;
  color: ${({ theme }) => theme.color.gray[400]};

  &:hover {
    transform: scale(1.25);
    color: ${({ theme }) => theme.color.white};
  }
`;

export const EmailButton = styled(EnvelopeFill)`
  width: 40px;
  height: 40px;
  padding: 1px;
  cursor: pointer;
  transition: 0.5s;
  color: ${({ theme }) => theme.color.gray[400]};

  &:hover {
    transform: scale(1.25);
    color: ${({ theme }) => theme.color.white};
  }
`;
