import { VolumeOffFill, X } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const VolumeSliderWrapper = styled('div')`
  height: 80px;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: min(10vw, 80px);
  }
`;

export const VolumeSlider = styled('input')`
  -webkit-appearance: none;
  appearance: none;
  width: 120px;
  height: 12px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  opacity: 0.7;
  transition: 0.25s;

  &:hover {
    opacity: 1;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(15vw, 120px);
    height: min(1.5vw, 12px);
  }

  // 슬라이더 바
  &::-webkit-slider-runnable-track {
    height: 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.gray[600]};
    cursor: pointer;

    @media (pointer: coarse) or (max-width: 1000px) {
      height: min(1.5vw, 12px);
    }
  }
  &::-moz-range-track {
    height: 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.gray[600]};
    cursor: pointer;

    @media (pointer: coarse) or (max-width: 1000px) {
      height: min(1.5vw, 12px);
    }
  }
  &::-ms-track {
    height: 12px;
    border-radius: 12px;
    background-color: transparent;
    color: transparent;
    border-color: transparent;
    cursor: pointer;

    @media (pointer: coarse) or (max-width: 1000px) {
      height: min(1.5vw, 12px);
    }
  }

  // 슬라이딩 핸들
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray[300]};
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: 0.25s;
    margin-top: -6px;

    @media (pointer: coarse) or (max-width: 1000px) {
      width: min(3vw, 24px);
      height: min(3vw, 24px);
      margin-top: max(-0.75vw, -6px);
    }
  }
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray[300]};
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: 0.25s;

    @media (pointer: coarse) or (max-width: 1000px) {
      width: min(3vw, 24px);
      height: min(3vw, 24px);
    }
  }
  &::-ms-thumb {
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray[300]};
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: 0.25s;

    @media (pointer: coarse) or (max-width: 1000px) {
      width: min(3vw, 24px);
      height: min(3vw, 24px);
    }
  }

  // 슬라이딩 핸들 클릭 중
  &:active::-webkit-slider-thumb {
    background-color: ${({ theme }) => theme.color.gray[400]};
  }
  &:active::-moz-range-thumb {
    background-color: ${({ theme }) => theme.color.gray[400]};
  }
  &:active::-ms-thumb {
    background-color: ${({ theme }) => theme.color.gray[400]};
  }

  // 슬라이딩 트랙
  &::-webkit-slider-runnable-track {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }
  &::-moz-range-track {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }
  &::-ms-fill-lower {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }
  &::-ms-fill-upper {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }
`;

export const VolumeButtonWrapper = styled('button')`
  width: 48px;
  height: 48px;
  border: none;
  background-color: transparent;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(6vw, 48px);
    height: min(6vw, 48px);
  }
`;

export const VolumeLabelIcon = styled(VolumeOffFill)`
  width: 75%;
  height: 75%;
  color: ${({ theme }) => theme.color.gray[300]};
`;

export const MuteIcon = styled(X)`
  width: 50%;
  height: 50%;
  margin-left: -25%;
  color: ${({ theme }) => theme.color.gray[300]};
`;

export const Level1Icon = styled('span')`
  width: 2px;
  height: 15%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.gray[300]};
  margin-left: -4px;
  margin-right: 3px;

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-left: max(-0.5vw, -4px);
    margin-right: min(0.375vw, 3px);
  }
`;

export const Level2Icon = styled('span')`
  width: 2px;
  height: 30%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.gray[300]};
  margin-right: 3px;

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-right: min(0.375vw, 3px);
  }
`;

export const Level3Icon = styled('span')`
  width: 2px;
  height: 45%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.gray[300]};
`;
