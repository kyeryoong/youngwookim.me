import {
  CameraReelsFill,
  Diagram3Fill,
  FileEarmarkCodeFill,
  ImageFill,
  PeopleFill,
  TerminalFill,
  TextLeft,
  TrophyFill,
} from 'react-bootstrap-icons';
import styled from 'styled-components';

type NavigatorWrapper = {
  top: string;
};

type NavigatorButtonProps = {
  isFocused: boolean;
};

type NavigatorIconProps = {
  isFocused: boolean;
};

export const NavigatorWrapper = styled('div')<NavigatorWrapper>`
  width: 250px;
  height: fit-content;
  border-radius: 5px;
  padding: 28px;
  position: fixed;
  background-color: ${({ theme }) => theme.color.gray[950]};
  top: ${({ top }) => top};
  right: 15vw;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1500px) {
    right: 5vw;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    display: none;
  }
`;

export const NavigatorButton = styled('button')<NavigatorButtonProps>`
  font-size: 1.2rem;
  text-align: left;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: 0px;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.3)};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 1;

    * {
      max-width: 24px;
      margin-right: 12px;
    }
  }
`;

export const OverviewIcon = styled(TextLeft)<NavigatorIconProps>`
  width: 24px;
  height: 24px;
  max-width: ${({ isFocused }) => (isFocused ? '24px' : '0px')};
  margin-right: ${({ isFocused }) => (isFocused ? '12px' : '0px')};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const AchievementIcon = styled(TrophyFill)<NavigatorIconProps>`
  width: 24px;
  height: 24px;
  max-width: ${({ isFocused }) => (isFocused ? '24px' : '0px')};
  margin-right: ${({ isFocused }) => (isFocused ? '12px' : '0px')};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const TeamMembersIcon = styled(PeopleFill)<NavigatorIconProps>`
  width: 24px;
  height: 24px;
  max-width: ${({ isFocused }) => (isFocused ? '24px' : '0px')};
  margin-right: ${({ isFocused }) => (isFocused ? '12px' : '0px')};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const ArchitectureIcon = styled(Diagram3Fill)<NavigatorIconProps>`
  width: 24px;
  height: 24px;
  max-width: ${({ isFocused }) => (isFocused ? '24px' : '0px')};
  margin-right: ${({ isFocused }) => (isFocused ? '12px' : '0px')};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const SourceCodeIcon = styled(FileEarmarkCodeFill)<NavigatorIconProps>`
  width: 24px;
  height: 24px;
  max-width: ${({ isFocused }) => (isFocused ? '24px' : '0px')};
  margin-right: ${({ isFocused }) => (isFocused ? '12px' : '0px')};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const TechIcon = styled(TerminalFill)<NavigatorIconProps>`
  width: 24px;
  height: 24px;
  max-width: ${({ isFocused }) => (isFocused ? '24px' : '0px')};
  margin-right: ${({ isFocused }) => (isFocused ? '12px' : '0px')};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const ScreenshotIcon = styled(ImageFill)<NavigatorIconProps>`
  width: 24px;
  height: 24px;
  max-width: ${({ isFocused }) => (isFocused ? '24px' : '0px')};
  margin-right: ${({ isFocused }) => (isFocused ? '12px' : '0px')};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const VideoIcon = styled(CameraReelsFill)<NavigatorIconProps>`
  width: 24px;
  height: 24px;
  max-width: ${({ isFocused }) => (isFocused ? '24px' : '0px')};
  margin-right: ${({ isFocused }) => (isFocused ? '12px' : '0px')};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;
