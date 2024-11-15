import styled from 'styled-components';

type DescriptionsWrapperProps = {
  show: boolean;
};

type DescriptionListWrapper = {
  progress: number;
};

type DescriptionProps = {
  isFocused: boolean;
};

export const Page4Wrapper = styled('section')`
  width: 100%;
  height: 400dvh;
  display: flex;
  flex-direction: row;
  top: 0px;
  position: sticky;
  transition: 0.5s;
`;

export const DescriptionsWrapper = styled('article')<DescriptionsWrapperProps>`
  width: 100%;
  height: 70dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0px;
  transform: ${({ show }) => (show ? 'translateY(0%)' : 'translateY(50%)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 0.5s;
`;

export const DescriptionList = styled('li')<DescriptionListWrapper>`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, fit-content(100%));
  transform: ${({ progress }) => `translateX(calc(50% - 480px - ${progress * 960}px))`};
  transition: 0.5s;
`;

export const Description = styled('figure')<DescriptionProps>`
  width: 960px;
  height: 50dvh;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.4)};
  transform: ${({ isFocused }) => (isFocused ? 'scale(1)' : 'scale(0.75)')};
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.color.gray[900] : theme.color.black};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 24px 12px rgba(50, 50, 50, 0.15);
  transition: 0.5s;
  display: flex;
  flex-direction: column;
`;

export const DescriptionTitle = styled('h2')`
  font-size: 3.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray[200]};
`;

export const DescriptionSubtitle = styled('h3')`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray[500]};
  margin-bottom: 32px;
`;

export const DescriptionContentList = styled('ul')`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const DescriptionContent = styled('li')`
  font-size: 1.6rem;
  font-weight: 400;
  width: 220px;
  height: 220px;
  border-radius: 220px;
  padding: 20px;
  color: ${({ theme }) => theme.color.gray[300]};
  background-color: ${({ theme }) => theme.color.gray[950]};
  box-shadow: 0px 0px 12px 6px rgba(50, 50, 50, 0.15);
  list-style: none;
  word-break: keep-all;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
