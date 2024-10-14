import { makeAutoObservable } from 'mobx';

import { PostCreateModel, PostModel } from '@/models/post';

export type PostPageMode = 'list' | 'create' | 'read';

export class PostStore {
  posts: PostModel[] = [];
  pageMode: PostPageMode = 'list';
  currentId: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPageMode = (value: PostPageMode) => {
    this.pageMode = value;
  };

  setCurrentId = (value: string | null) => {
    this.currentId = value;
  };

  fetchPosts = async () => {
    try {
      const res = await fetch('/api/getPosts');

      if (res) {
        const { data } = await res.json();

        if (data) {
          this.posts = data;
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchPost = async ({ _id }: { _id: string }) => {
    try {
      const res = await fetch(`/api/getPost?_id=${_id}`);

      if (res) {
        const { status, data } = await res.json();

        return { status, data };
      }
    } catch (error) {
      console.error(error);
    }
  };

  createPost = async ({ title, userName, content }: PostCreateModel) => {
    try {
      const res = await fetch('/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, userName, content }),
      });

      if (res) {
        const { status } = await res.json();

        return { status };
      }
    } catch (error) {
      console.error(error);
    }
  };
}
