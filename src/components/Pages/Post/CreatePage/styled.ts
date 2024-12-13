import { PencilFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const CreatePageWrapper = styled('section')``;

export const PasswordComment = styled('span')`
  font-size: ${({ theme }) => theme.font.m};
  width: 100%;
  height: 16px;
  line-height: 16px;
  display: block;
  color: ${({ theme }) => theme.color.red[300]};
  margin-top: 8px;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
    margin-top: min(1vw, 8px);
  }
`;

export const WriteIcon = styled(PencilFill)`
  color: ${({ theme }) => theme.color.white};
`;

export const ReCAPTCHAWrapper = styled('div')`
  width: fit-content;
  margin-top: 32px;
  margin-bottom: -48px;
  overflow: hidden;

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-top: min(4vw, 32px);
  }

  @media (pointer: coarse) or (max-width: 600px) {
    margin-bottom: min(4vw, 32px);
  }
`;
