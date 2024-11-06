'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import CreatePage from '@/components/Pages/Post/CreatePage';
import ListPage from '@/components/Pages/Post/ListPage';
import ReadPage from '@/components/Pages/Post/ReadPage';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useStore } from '@/stores';
import Page from '@/theme/Page';

const PostPage = observer(() => {
  const { postStore } = useStore();

  useEffect(() => {
    postStore.setPageMode('list');
  }, []);

  return (
    <Page>
      {postStore.pageMode === 'list' && <ListPage />}
      {(postStore.pageMode === 'create' || postStore.pageMode === 'edit') && <CreatePage />}
      {postStore.pageMode === 'read' && postStore.currentId && <ReadPage />}
      <ScrollToTopButton />
    </Page>
  );
});

export default PostPage;
