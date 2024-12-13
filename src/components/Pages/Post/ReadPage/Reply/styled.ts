import { styled } from 'styled-components';

type ReplyInputWrapperProps = {
  isFocused: boolean;
};

type ReplyContentProps = {
  isDeleted: boolean;
};

type PasswordCommentProps = {
  isValidPassword: boolean;
};

export const ReplyWrapper = styled('section')`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ReplyTitle = styled('div')`
  font-size: ${({ theme }) => theme.font.xl};
  margin-top: 24px;
  display: flex;
  gap: 6px;
`;

export const ReplyTitleLabel = styled('span')`
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const ReplyTitleValue = styled('span')`
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;

export const RepliesWrapper = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const ReplyItem = styled('li')`
  list-style: none;
`;

export const ReplyItemHeader = styled('div')`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const ReplyUserName = styled('p')`
  font-size: ${({ theme }) => theme.font.m};
  color: ${({ theme }) => theme.color.white};
`;

export const ReplyCreatedAt = styled('p')`
  font-size: ${({ theme }) => theme.font.s};
  color: ${({ theme }) => theme.color.gray[400]};
  margin-left: 16px;
`;

export const ReplyContent = styled('p')<ReplyContentProps>`
  font-size: ${({ theme }) => theme.font.l};
  width: 100%;
  word-break: break-all;
  color: ${({ theme, isDeleted }) => (isDeleted ? theme.color.gray[700] : theme.color.white)};
`;

export const DeleteReplyButton = styled('button')`
  font-size: ${({ theme }) => theme.font.s};
  color: ${({ theme }) => theme.color.gray[400]};
  background-color: transparent;
  padding: 0px;
  margin: 0px;
  margin-left: 8px;
  border: none;
  outline: none;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.gray[300]};
  }
`;

export const ReplyInputWrapper = styled('div')<ReplyInputWrapperProps>`
  line-height: 24px;
  padding: 16px;
  color: ${({ theme }) => theme.color.gray[600]};
  background-color: ${({ theme }) => theme.color.gray[950]};
  border-radius: 6px;
  position: relative;
  transition: 0.5s;
  cursor: ${({ isFocused }) => !isFocused && 'pointer'};

  &:hover {
    background-color: ${({ theme, isFocused }) => !isFocused && theme.color.gray[900]};
  }
`;

export const ReplyInputBox = styled('input')`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: 600;
  width: 100%;
  height: 24px;
  line-height: 24px;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    font-size: ${({ theme }) => theme.font.m};
    font-weight: 300;
    line-height: 24px;
    color: ${({ theme }) => theme.color.gray[600]};
  }
`;

export const ReplyContentInputBox = styled('textarea')`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: 600;
  width: 100%;
  min-height: 48px;
  line-height: 24px;
  border: none;
  outline: none;
  margin: 12px 0px;
  background-color: transparent;
  resize: none;

  &::placeholder {
    font-size: ${({ theme }) => theme.font.m};
    font-weight: 300;
    line-height: 24px;
    color: ${({ theme }) => theme.color.gray[600]};
  }
`;

export const PasswordComment = styled('span')<PasswordCommentProps>`
  font-size: ${({ theme }) => theme.font.s};
  width: 100%;
  height: ${({ isValidPassword }) => (isValidPassword ? '0px' : '16px')};
  line-height: 16px;
  display: block;
  color: ${({ theme }) => theme.color.red[300]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
    margin-top: min(1vw, 8px);
  }
`;

export const ReplyButtonWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

export const CreateReplyButton = styled('button')`
  font-size: ${({ theme }) => theme.font.mobile.l};
  width: fit-content;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[800]};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.gray[700]};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.gray[600]};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray[700]};
    background-color: ${({ theme }) => theme.color.gray[900]};
    cursor: not-allowed;
  }
`;

export const ModalForm = styled('form')``;
