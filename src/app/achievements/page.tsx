'use client';

import { observer } from 'mobx-react-lite';

import Achievements from '@/components/Achievements';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

const AchievementsPage = observer(() => {
  return (
    <>
      <Achievements />

      <ScrollToTopButton />
    </>
  );
});

export default AchievementsPage;
