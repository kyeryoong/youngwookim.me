import { PostModel } from '@/models/post';

import ReadPage from './ReadPage';

async function getPost(id: string): Promise<PostModel | null> {
  try {
    const res = await fetch(`https://youngwookim.me/api/getPost?_id=${id}`, {
      cache: 'no-store',
    });

    const resBody = await res.json();
    return resBody.data as PostModel;
  } catch (error) {
    console.error('fetch 에러:', error);
    return null;
  }
}

export default async function ReadPageSSRWrapper({ _id }: { _id: string }) {
  const post = await getPost(_id);

  return <ReadPage post={post} id={_id} />;
}
