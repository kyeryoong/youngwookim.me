import Image from 'next/image';
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

export const ContactButton = styled(Image)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.5s;
  filter: ${({ theme }) =>
    theme.mode === 'light' &&
    'invert(100%) sepia(100%) saturate(0%) hue-rotate(218deg) brightness(104%) contrast(102%)'};

  &:hover {
    transform: scale(1.2);
  }
`;
