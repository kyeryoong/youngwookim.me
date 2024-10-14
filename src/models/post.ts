export type PostModel = {
  _id: string;
  title: string;
  userName: string;
  content: string;
};

export type PostCreateModel = {
  title: string;
  userName: string;
  content: string;
};

export type PostItemModel = {
  _id: string;
  title: string;
  userName: string;
};
