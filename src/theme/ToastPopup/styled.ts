import { CheckCircleFill, ExclamationTriangleFill, X, XCircleFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

type ToastPopupWrapperProps = {
  showToastPopup: boolean;
  backgroundColor: string;
  textColor: string;
};

type ToastIconProps = {
  iconColor: string;
};

type CloseButtonProps = {
  buttonColor: string;
};

export const ToastPopupWrapper = styled('div')<ToastPopupWrapperProps>`
  font-size: ${({ theme }) => theme.font.m};
  width: min(320px, 90vw);
  height: 60px;
  border-radius: 6px;
  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: grid;
  grid-template-columns: fit-content(100%) 1fr fit-content(100%);
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  bottom: ${({ showToastPopup }) => (showToastPopup ? '50px' : '-70px')};
  left: calc(50vw - min(160px, 45vw));
  box-shadow: 0px 0px 10px 5px rgba(100, 100, 100, 0.25);
  transition-property: bottom;
  transition-duration: 0.5s;
  z-index: 20000;

  @media (pointer: coarse) or (max-width: 300px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
  }
`;

export const SuccessIcon = styled(CheckCircleFill)<ToastIconProps>`
  width: 20px;
  height: 20px;
  color: ${({ iconColor }) => iconColor};
  margin-right: 8px;
`;

export const WarningIcon = styled(ExclamationTriangleFill)<ToastIconProps>`
  width: 20px;
  height: 20px;
  color: ${({ iconColor }) => iconColor};
  margin-right: 8px;
`;

export const ErrorIcon = styled(XCircleFill)<ToastIconProps>`
  width: 20px;
  height: 20px;
  color: ${({ iconColor }) => iconColor};
  margin-right: 8px;
`;

export const CloseButton = styled(X)<CloseButtonProps>`
  width: 24px;
  height: 24px;
  color: ${({ buttonColor }) => buttonColor};
  margin-right: -6px;
  cursor: pointer;
`;
