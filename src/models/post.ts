export type PostModel = {
  _id: string;
  title: string;
  userName: string;
  createdAt: string;
  content: string;
  password: string | null;
  replies: ReplyModel[];
  isAdmin: boolean;
};

export type ReplyModel = {
  replyId: string;
  userName: string;
  createdAt: Date;
  content: string;
  password: string | null;
  isAdmin: boolean;
  isDeleted: boolean;
};

export type PostCreateModel = {
  title: string;
  userName: string;
  createdAt: Date;
  content: string;
  password: string | null;
  isAdmin: boolean;
};

export type ReplyCreateModel = {
  _id: string;
  userName: string;
  createdAt: Date;
  content: string;
  password: string | null;
  isAdmin: boolean;
};

export type PostEditModel = {
  _id: string;
  title: string;
  userName: string;
  content: string;
  password: string | null;
  isAdmin: boolean;
};

export type PostItemModel = {
  _id: string;
  title: string;
  userName: string;
  createdAt: string;
  isAdmin: boolean;
};
