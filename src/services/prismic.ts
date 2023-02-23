import Prismic from '@prismicio/client';

export const apiEndpoint = process.env.PRISMIC_END_POINT;
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export const PrismicClient = (req = null) =>
  Prismic.client(apiEndpoint, {
    req,
    accessToken
  });
