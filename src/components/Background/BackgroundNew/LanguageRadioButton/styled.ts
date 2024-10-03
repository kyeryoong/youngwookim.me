import styled from 'styled-components';

export const LanguageRadioButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const RadioButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RadioButton = styled('div')`
  width: 40px;
  height: 40px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.gray[700]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Radio = styled('div')`
  width: 50%;
  height: 50%;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.gray[500]};
`;

export const Label = styled('label')`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.white};
`;
