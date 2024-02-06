'use client';
import styled from 'styled-components';

export const StarIconWrapper = styled('div')`
  width: 10px;
  height: 10px;
  margin-top: 15px;
  margin-left: 10px;
  align-self: flex-start;
  position: relative;
`;

export const StarIcon = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  background-color: gold;
  transition: 0.5s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const Tooltip = styled('div')`
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  bottom: 20px;
  left: 0px;
  background-color: white;
  color: gray;
  transition: 0.5s;
  white-space: nowrap;

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
  }
`;