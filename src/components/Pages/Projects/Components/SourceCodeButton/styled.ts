import { Github } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const SourceCodeButtonWrapper = styled('button')`
  height: 48px;
  background-color: ${({ theme }) => theme.color.gray[50]};
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    svg {
      transform: scale(1.2);
    }
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    height: min(6vw, 48px);
    padding-left: min(2.5vw, 20px);
    padding-right: min(2.5vw, 20px);
    gap: min(1vw, 8px);
  }
`;

export const GitHubIcon = styled(Github)`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.color.black};
  margin-right: 4px;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(3.5vw, 28px);
    height: min(3.5vw, 28px);
    margin-right: min(0.5vw, 4px);
  }
`;

export const Prefix = styled('p')`
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.black};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(2.667vw, 20px);
  }
`;

export const Slash = styled(Prefix)``;

export const Suffix = styled('p')`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(2.667vw, 20px);
  }
`;
