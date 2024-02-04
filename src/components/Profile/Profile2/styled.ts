'use client';
import styled from 'styled-components';
import Image from 'next/image';

export const PageWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorkingExperienceWrapper = styled('div')`
  width: 50vw;
  border-bottom: 1px solid white;
  padding-bottom: 60px;
  margin-bottom: 60px;
  position: relative;
`;

export const WorkingExperienceDays = styled('span')`
  font-size: 12rem;
  font-weight: 600;
  color: white;
`;

export const WorkingExperienceLabel = styled('span')`
  font-size: 2rem;
  position: absolute;
  margin-top: 40px;
  top: 0px;
  right: 0px;
  color: darkgray;
`;

export const CompanyWrapper = styled('div')`
  width: 50vw;
  display: grid;
  align-items: center;
  grid-template-columns: fit-content(100%) 1fr fit-content(100%);
  gap: 20px;
`;

export const CompanyLogo = styled(Image)`
  width: 320px;
  height: 40px;
`;

export const CompanyName = styled('span')`
  font-size: 1.6rem;
  color: white;
`;

export const CompanyDays = styled('span')`
  font-size: 1.6rem;
  color: gray;
`;
