import { groq } from "next-sanity";

const bannerQuery = groq`*[_type == 'banner'] {
  ...
}|order(_createdAt asc)`;
const productQuery = groq`*[_type == 'product'] {
  ...
}|order(_createdAt asc)`;
const bestSellerQuery = groq`*[_type == 'product' && position == 'new'] {
  ...
}|order(_createdAt asc)`;

export {bannerQuery, productQuery, bestSellerQuery};