import { PostModel } from '@/models/post';

import ListPage from './ListPage';

async function getPosts(): Promise<PostModel[]> {
  try {
    const res = await fetch('https://youngwookim.me/api/getPosts', {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('API Route 호출 실패, 상태 코드:', res.status);
      return [];
    }
    const resBody = await res.json();
    return resBody.data;
  } catch (error) {
    console.error('fetch 에러:', error);
    return [];
  }
}

export default async function ListPageSSRWrapper() {
  const posts = await getPosts();
  return <ListPage posts={posts} />;
}
