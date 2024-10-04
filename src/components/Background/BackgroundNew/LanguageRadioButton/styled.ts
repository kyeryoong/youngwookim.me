import styled from 'styled-components';

export const LanguageRadioButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (pointer: coarse) or (max-width: 800px) {
    gap: min(2.5vw, 20px);
  }
`;

export const RadioButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (pointer: coarse) or (max-width: 800px) {
    gap: min(1vw, 8px);
  }
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

  @media (pointer: coarse) or (max-width: 800px) {
    width: min(5vw, 40px);
    height: min(5vw, 40px);
  }
`;

export const Radio = styled('div')`
  width: 50%;
  height: 50%;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.gray[500]};
`;

export const Label = styled('label')`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 800px) {
    font-size: min(2.4vw, 1.2rem);
  }
`;
