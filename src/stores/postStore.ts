import { makeAutoObservable } from 'mobx';

import { PostCreateModel, PostEditModel, ReplyCreateModel } from '@/models/post';

export class PostStore {
  title: string = '';
  userName: string = '';
  content: string = '';
  password: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTitle = (value: string) => {
    this.title = value;
  };

  setUserName = (value: string) => {
    this.userName = value;
  };

  setContent = (value: string) => {
    this.content = value;
  };

  setPassword = (value: string) => {
    this.password = value;
  };

  clearPost = () => {
    this.title = '';
    this.userName = '';
    this.content = '';
    this.password = '';
  };

  createPost = async ({
    title,
    userName,
    createdAt,
    content,
    password,
    isAdmin,
  }: PostCreateModel) => {
    try {
      const res = await fetch('/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          userName,
          createdAt,
          content,
          password,
          replies: [],
          isAdmin,
        }),
      });

      if (res) {
        const { status, _id, error } = await res.json();

        if (error) {
          console.error(error);
        }

        return { status, _id };
      }
    } catch (error) {
      console.error(error);
    }
  };

  deletePost = async ({ _id }: { _id: string }) => {
    try {
      const res = await fetch(`/api/deletePost?_id=${_id}`, { method: 'DELETE' });

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

  editPost = async ({ _id, title, userName, content, password }: PostEditModel) => {
    try {
      const res = await fetch(`/api/editPost?_id=${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, userName, content, password }),
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

  createReply = async ({
    _id,
    userName,
    createdAt,
    content,
    password,
    isAdmin,
  }: ReplyCreateModel) => {
    try {
      const res = await fetch(`/api/createReply?_id=${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, content, createdAt, password, isAdmin, isDeleted: false }),
      });

      if (res) {
        const { status, replyId, error } = await res.json();

        if (error) {
          console.error(error);
        }

        return { status, replyId };
      }
    } catch (error) {
      console.error(error);
    }
  };

  deleteReply = async ({ _id, replyId }: { _id: string; replyId: string }) => {
    try {
      const res = await fetch(`/api/deleteReply?_id=${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id, replyId }),
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
}
