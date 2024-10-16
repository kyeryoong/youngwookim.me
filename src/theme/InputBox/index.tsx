import { ChangeEvent, CSSProperties } from 'react';

import * as S from './styled';

type InputBoxProps = {
  type: 'text' | 'number' | 'password' | 'textarea';
  value: string | number;
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onTextAreaChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  minLength?: number;
  maxLength?: number;
  label?: string;
  showCounter?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
};

const InputBox = ({
  type,
  value,
  onInputChange,
  onTextAreaChange,
  minLength,
  maxLength,
  label,
  showCounter,
  disabled,
  style,
}: InputBoxProps) => {
  return (
    <S.InputBoxWrapper>
      {label && <S.Label>{label}</S.Label>}

      {type === 'textarea' ? (
        <S.TextArea
          value={value}
          onChange={onTextAreaChange}
          minLength={minLength}
          maxLength={maxLength}
          spellCheck={false}
          disabled={disabled}
          style={style}
        />
      ) : (
        <S.InputBox
          type={type}
          value={value}
          onChange={onInputChange}
          minLength={minLength}
          maxLength={maxLength}
          spellCheck={false}
          disabled={disabled}
          style={style}
        />
      )}

      {showCounter && (
        <S.TextLength isMaxLength={String(value).length === maxLength}>
          {String(value).length} {maxLength && `/ ${maxLength}`}
        </S.TextLength>
      )}
    </S.InputBoxWrapper>
  );
};

export default InputBox;
