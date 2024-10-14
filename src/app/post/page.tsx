'use client';

import { observer } from 'mobx-react-lite';

import Page from '@/components/Page';
import CreatePage from '@/components/Post/CreatePage';
import ListPage from '@/components/Post/ListPage';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { useStore } from '@/stores';

const PostPage = observer(() => {
  const { postStore } = useStore();

  return (
    <Page>
      {postStore.pageMode === 'list' && <ListPage />}
      {postStore.pageMode === 'create' && <CreatePage />}
      <ScrollToTopButton />
    </Page>
  );
});

export default PostPage;
