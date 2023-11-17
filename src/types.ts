export type Content = {
  title: string;
  description: string;
};

export type Tab = {
  name: string;
  slug: string;
  content: Content[];
};
