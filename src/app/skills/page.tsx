'use client';
import { observer } from 'mobx-react';
import Page from '@/components/Page';
import Skill from '@/components/Skills/Skill';

const Tech = observer(() => {
  return (
    <Page>
      <Skill name="TypeScript" textColor="white" backgroundColor1={[49, 120, 198]} />

      <Skill name="React" textColor="white" backgroundColor1={[0, 216, 255]} />
    </Page>
  );
});

export default Tech;
