'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';

import {
  closeToastPopupAtom,
  showToastPopupAtom,
  toastStringAtom,
  toastTimerAtom,
  toastTypeAtom,
} from '@/stores/toastPopupAtom';

import * as S from './styled';

const ToastPopup = () => {
  const theme = useTheme();

  const showToastPopup = useAtomValue(showToastPopupAtom);
  const toastType = useAtomValue(toastTypeAtom);
  const toastString = useAtomValue(toastStringAtom);
  const toastTimer = useAtomValue(toastTimerAtom);

  const closeToastPopup = useSetAtom(closeToastPopupAtom);

  useEffect(() => {
    if (showToastPopup) {
      setTimeout(() => {
        closeToastPopup();
      }, toastTimer * 1000);
    }
  }, [showToastPopup]);

  const handleCloseButtonClick = () => {
    closeToastPopup();
  };

  const toastPopupBackgroundColor = () => {
    switch (toastType) {
      case 'default':
        return theme.color.gray[200];
      case 'success':
        return theme.color.cyan[300];
      case 'warning':
        return theme.color.yellow[300];
      case 'error':
        return theme.color.red[300];
      default:
        return theme.color.gray[500];
    }
  };

  const toastPopupTextColor = () => {
    switch (toastType) {
      case 'default':
        return theme.color.black;
      case 'success':
        return 'white';
      case 'warning':
        return 'black';
      case 'error':
        return 'white';
      default:
        return theme.color.black;
    }
  };

  const toastPopupIcon = () => {
    switch (toastType) {
      case 'default':
        return <div></div>;
      case 'success':
        return <S.SuccessIcon iconColor={'white'} />;
      case 'warning':
        return <S.WarningIcon iconColor={'black'} />;
      case 'error':
        return <S.ErrorIcon iconColor={'white'} />;
      default:
        return <div></div>;
    }
  };

  return (
    <S.ToastPopupWrapper
      showToastPopup={showToastPopup}
      backgroundColor={toastPopupBackgroundColor()}
      textColor={toastPopupTextColor()}
    >
      {toastPopupIcon()}
      {toastString}
      <S.CloseButton buttonColor={toastPopupTextColor()} onClick={handleCloseButtonClick} />
    </S.ToastPopupWrapper>
  );
};

export default ToastPopup;
