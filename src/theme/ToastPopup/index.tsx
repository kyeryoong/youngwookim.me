'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { useStore } from '@/stores';

import * as S from './styled';

const ToastPopup = observer(() => {
  const { uiStore } = useStore();
  const theme = useTheme();

  useEffect(() => {
    if (uiStore.showToastPopup) {
      setTimeout(() => {
        uiStore.setShowToastPopup(false);
      }, uiStore.timer * 1000);
    }
  }, [uiStore.showToastPopup]);

  const handleCloseButtonClick = () => {
    uiStore.setShowToastPopup(false);
  };

  const toastPopupBackgroundColor = () => {
    switch (uiStore.toastType) {
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
    switch (uiStore.toastType) {
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
    switch (uiStore.toastType) {
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
      showToastPopup={uiStore.showToastPopup}
      backgroundColor={toastPopupBackgroundColor()}
      textColor={toastPopupTextColor()}
    >
      {toastPopupIcon()}
      {uiStore.toastString}
      <S.CloseButton buttonColor={toastPopupTextColor()} onClick={handleCloseButtonClick} />
    </S.ToastPopupWrapper>
  );
});

export default ToastPopup;
