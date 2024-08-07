'use client';

import { observer } from 'mobx-react-lite';

import Page from '@/components/Page';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { Tech } from '@/components/Tech/Tech';
import { TechList } from '@/components/Tech/TechList';

const TechPage = observer(() => {
  return (
    <Page>
      <TechList categoryName="Front-end">
        <Tech name="JavaScript" textColor="black" backgroundColor1="#F7DF1E" />
        <Tech name="TypeScript" textColor="white" backgroundColor1="#3178C6" core />
        <Tech name="React" textColor="white" backgroundColor1="#61DAFB" core />
        <Tech name="MobX" textColor="white" backgroundColor1="#EA6618" core />
        <Tech
          name="Next.js"
          textColor="white"
          backgroundColor1="#484848"
          customImage="Nextjs.svg"
        />

        <Tech name="Vercel" textColor="white" backgroundColor1="#484848" />
      </TechList>

      <TechList categoryName="Style Sheet & Design">
        <Tech name="CSS3" textColor="white" backgroundColor1="#2965F1" />
        <Tech
          name="styled components"
          textColor="white"
          backgroundColor1="#F3B661"
          backgroundColor2="#DA6B90"
          customImage="styled components.png"
          core
        />
        <Tech name="Figma" textColor="white" backgroundColor1="#2E3038" core />
      </TechList>

      <TechList categoryName="Database">
        <Tech name="MongoDB" textColor="white" backgroundColor1="#00684A" />
        <Tech
          name="MySQL"
          textColor="white"
          backgroundColor1="#00758F"
          backgroundColor2="#F29111"
        />
        <Tech
          name="Firebase"
          textColor="white"
          backgroundColor1="#1E88E5"
          customImage="Firebase.svg"
        />
      </TechList>

      <TechList categoryName="Version Control">
        <Tech name="Git" textColor="white" backgroundColor1="#F05133" core />
        <Tech name="GitHub" textColor="white" backgroundColor1="#444c54" />
        <Tech name="GitLab" textColor="white" backgroundColor1="#FC6D26" core />
      </TechList>

      <ScrollToTopButton />
    </Page>
  );
});

export default TechPage;
