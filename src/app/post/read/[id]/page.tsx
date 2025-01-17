import ReadPage from '@/components/Pages/Post/ReadPage';
import Page from '@/theme/Page';

type ReadPostPageProps = {
  params: { id: string };
};

const getPost = async (_id: string) => {
  const res = await fetch(`https://youngwookim.me/api/getPost?_id=${_id}`, { cache: 'no-store' });

  if (res.ok) {
    const { data, error } = await res.json();

    if (data) {
      return data;
    } else if (error) {
      console.error(error);
    }
  }
};

const ReadPostPage = async ({ params }: ReadPostPageProps) => {
  const { id } = params;
  const post = await getPost(id);

  return (
    <Page>
      <ReadPage post={post} />
    </Page>
  );
};

export default ReadPostPage;
