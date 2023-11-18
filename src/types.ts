export type Content = {
  title: string;
  description: string;
};

export type Tab = {
  name: string;
  slug: string;
  content: Content[];
};

export type Feature = {
  image: string;
  title: string;
  description: string;
};

export type PageFeature = {
  title: string;
  description: string;
  features: Feature[];
};
