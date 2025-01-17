import ListPage from '@/components/Pages/Post/ListPage';
import Page from '@/theme/Page';

const getPosts = async () => {
  const res = await fetch('https://youngwookim.me/api/getPosts', { cache: 'no-store' });

  if (res.ok) {
    const { data, error } = await res.json();

    if (data) {
      return data;
    } else if (error) {
      console.error(error);
    }
  }
};

const PostPage = async () => {
  const posts = await getPosts();

  return (
    <Page>
      <ListPage posts={posts} />
    </Page>
  );
};

export default PostPage;
