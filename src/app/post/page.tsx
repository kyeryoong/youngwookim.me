'use client';

import { observer } from 'mobx-react-lite';

import Page from '@/components/Page';
import CreatePage from '@/components/Post/CreatePage';
import ListPage from '@/components/Post/ListPage';
import ReadPage from '@/components/Post/ReadPage';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { useStore } from '@/stores';

export const dynamic = 'force-dynamic';

const PostPage = observer(() => {
  const { postStore } = useStore();

  return (
    <Page>
      {postStore.pageMode === 'list' && <ListPage />}
      {postStore.pageMode === 'create' && <CreatePage />}
      {postStore.pageMode === 'read' && postStore.currentId && <ReadPage />}
      <ScrollToTopButton />
    </Page>
  );
});

export default PostPage;
