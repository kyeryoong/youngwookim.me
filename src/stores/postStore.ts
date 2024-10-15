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
        const { data, error } = await res.json();

        if (data) {
          this.posts = data;
        } else if (error) {
          console.error(error);
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
        const { status, data, error } = await res.json();

        if (error) {
          console.error(error);
        }

        return { status, data };
      }
    } catch (error) {
      console.error(error);
    }
  };

  createPost = async ({ title, userName, content, password }: PostCreateModel) => {
    try {
      const res = await fetch('/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, userName, createdAt: new Date(), content, password }),
      });

      if (res) {
        const { status, error } = await res.json();

        if (error) {
          console.error(error);
        }

        return { status };
      }
    } catch (error) {
      console.error(error);
    }
  };

  deletePost = async ({ _id }: { _id: string }) => {
    try {
      const res = await fetch(`/api/deletePost?_id=${_id}`, { method: 'DELETE' });

      if (res) {
        const { status, data, error } = await res.json();

        if (error) {
          console.error(error);
        }

        return { status, data };
      }
    } catch (error) {
      console.error(error);
    }
  };
}
