import { VolumeOffFill, X } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const VolumeSliderWrapper = styled('div')`
  height: 80px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const VolumeSlider = styled('input')`
  -webkit-appearance: none;
  appearance: none;
  width: 120px;
  height: 8px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  // 슬라이더 바
  &::-webkit-slider-runnable-track {
    height: 12px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.gray[600]};
    cursor: pointer;
  }
  &::-moz-range-track {
    height: 12px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.gray[600]};
    cursor: pointer;
  }
  &::-ms-track {
    height: 12px;
    border-radius: 6px;
    background-color: transparent;
    color: transparent;
    border-color: transparent;
    cursor: pointer;
  }

  // 슬라이딩 핸들
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray[300]};
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.25s;
    margin-top: -6px;
  }
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray[300]};
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.25s;
  }
  &::-ms-thumb {
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.gray[300]};
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.25s;
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
`;

export const VolumeLabelIcon = styled(VolumeOffFill)`
  width: 32px;
  height: 32px;
`;

export const MuteIcon = styled(X)`
  width: 24px;
  height: 24px;
  margin-left: -10px;
`;

export const Level1Icon = styled('span')`
  width: 2px;
  height: 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.white};
  margin-left: -4px;
  margin-right: 3px;
`;

export const Level2Icon = styled('span')`
  width: 2px;
  height: 14px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.white};
  margin-right: 3px;
`;

export const Level3Icon = styled('span')`
  width: 2px;
  height: 20px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.white};
`;
