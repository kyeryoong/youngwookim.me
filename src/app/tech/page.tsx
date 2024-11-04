'use client';

import TechList from '@/components/Badge/BadgeList';
import CustomBadge from '@/components/Badge/CustomBadge';
import Page from '@/components/Page';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

const TechPage = () => {
  return (
    <Page>
      <TechList name="Front-end">
        <CustomBadge name="JavaScript" textColor="black" backgroundColor1="#F7DF1E" />
        <CustomBadge name="TypeScript" textColor="white" backgroundColor1="#3178C6" core />
        <CustomBadge name="React" textColor="white" backgroundColor1="#61DAFB" core />
        <CustomBadge name="MobX" textColor="white" backgroundColor1="#EA6618" core />
        <CustomBadge
          name="Next.js"
          textColor="white"
          backgroundColor1="#484848"
          customImage="Nextjs.svg"
        />

        <CustomBadge name="Vercel" textColor="white" backgroundColor1="#484848" />
      </TechList>

      <TechList name="Style Sheet & Design">
        <CustomBadge name="CSS3" textColor="white" backgroundColor1="#2965F1" />
        <CustomBadge
          name="styled components"
          textColor="white"
          backgroundColor1="#F3B661"
          backgroundColor2="#DA6B90"
          customImage="styled components.png"
          core
        />
        <CustomBadge name="Figma" textColor="white" backgroundColor1="#2E3038" core />
      </TechList>

      <TechList name="Database">
        <CustomBadge name="MongoDB" textColor="white" backgroundColor1="#00684A" />
        <CustomBadge
          name="MySQL"
          textColor="white"
          backgroundColor1="#00758F"
          backgroundColor2="#F29111"
        />
        <CustomBadge
          name="Firebase"
          textColor="white"
          backgroundColor1="#1E88E5"
          customImage="Firebase.svg"
        />
      </TechList>

      <TechList name="Version Control">
        <CustomBadge name="Git" textColor="white" backgroundColor1="#F05133" core />
        <CustomBadge name="GitHub" textColor="white" backgroundColor1="#444c54" />
        <CustomBadge name="GitLab" textColor="white" backgroundColor1="#FC6D26" core />
      </TechList>

      <ScrollToTopButton />
    </Page>
  );
};

export default TechPage;
