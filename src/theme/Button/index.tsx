import { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import * as S from './styled';

export type ButtonTypes = 'primary' | 'secondary' | 'success' | 'warning';

export type SizeTypes = 'small' | 'medium' | 'large';

type ButtonProps = {
  type?: ButtonTypes;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ type = 'primary', icon, children, onClick, disabled }: ButtonProps) => {
  const theme = useTheme();

  const primaryColor = {
    default: {
      text: theme.color.white,
      background: theme.color.gray[900],
    },
    hovered: {
      text: theme.color.white,
      background: theme.color.gray[800],
    },
    pressed: {
      text: theme.color.white,
      background: theme.color.gray[700],
    },
    disabled: {
      text: theme.color.gray[700],
      background: theme.color.gray[950],
    },
  };

  const secondaryColor = {
    default: {
      text: theme.color.white,
      background: theme.color.gray[800],
    },
    hovered: {
      text: theme.color.white,
      background: theme.color.gray[700],
    },
    pressed: {
      text: theme.color.white,
      background: theme.color.gray[600],
    },
    disabled: {
      text: theme.color.gray[700],
      background: theme.color.gray[900],
    },
  };

  const successColor = {
    default: {
      text: 'white',
      background: theme.color.blue[600],
    },
    hovered: {
      text: 'white',
      background: theme.color.blue[500],
    },
    pressed: {
      text: 'white',
      background: theme.color.blue[400],
    },
    disabled: {
      text: theme.color.blue[300],
      background: theme.color.blue[800],
    },
  };

  const warningColor = {
    default: {
      text: 'white',
      background: theme.color.red[500],
    },
    hovered: {
      text: 'white',
      background: theme.color.red[400],
    },
    pressed: {
      text: 'white',
      background: theme.color.red[300],
    },
    disabled: {
      text: theme.color.red[200],
      background: theme.color.red[700],
    },
  };

  const getDefaultColor = () => {
    switch (type) {
      case 'primary':
        return primaryColor.default;
      case 'secondary':
        return secondaryColor.default;
      case 'success':
        return successColor.default;
      case 'warning':
        return warningColor.default;
    }
  };

  const getHoveredColor = () => {
    switch (type) {
      case 'primary':
        return primaryColor.hovered;
      case 'secondary':
        return secondaryColor.hovered;
      case 'success':
        return successColor.hovered;
      case 'warning':
        return warningColor.hovered;
    }
  };

  const getPressedColor = () => {
    switch (type) {
      case 'primary':
        return primaryColor.pressed;
      case 'secondary':
        return secondaryColor.pressed;
      case 'success':
        return successColor.pressed;
      case 'warning':
        return warningColor.pressed;
    }
  };

  const getDisabledColor = () => {
    switch (type) {
      case 'primary':
        return primaryColor.disabled;
      case 'secondary':
        return secondaryColor.disabled;
      case 'success':
        return successColor.disabled;
      case 'warning':
        return warningColor.disabled;
    }
  };

  return (
    <S.ButtonWrapper
      type={type}
      onClick={onClick}
      disabled={disabled}
      textColor={getDefaultColor().text}
      backgroundColor={getDefaultColor().background}
      hoveredTextColor={getHoveredColor().text}
      hoveredBackgroundColor={getHoveredColor().background}
      pressedTextColor={getPressedColor().text}
      pressedBackgroundColor={getPressedColor().background}
      disabledTextColor={getDisabledColor().text}
      disabledBackgroundColor={getDisabledColor().background}
    >
      {icon && (
        <S.IconWrapper disabled={disabled ?? false} disabledIconColor={getDisabledColor().text}>
          {icon}
        </S.IconWrapper>
      )}
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.ButtonWrapper>
  );
};

export default Button;
