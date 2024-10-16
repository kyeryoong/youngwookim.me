export type PostModel = {
  _id: string;
  title: string;
  userName: string;
  createdAt: string;
  content: string;
  password: string;
};

export type PostCreateModel = {
  title: string;
  userName: string;
  content: string;
  password: string;
};

export type PostEditModel = PostCreateModel & {
  _id: string;
};

export type PostItemModel = {
  _id: string;
  title: string;
  userName: string;
};
