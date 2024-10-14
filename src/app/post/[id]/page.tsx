/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import Page from '@/components/Page';
import ReadPage from '@/components/Post/ReadPage';

const ReadPostPage = (props: any) => {
  return (
    <Page>
      <ReadPage id={props.params.id} />
    </Page>
  );
};

export default ReadPostPage;
