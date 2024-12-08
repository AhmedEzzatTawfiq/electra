import { client } from "@/sanity/lib/client";
import { bannerQuery, bestSellerQuery, productQuery } from "./query";

export const revalidate = 0;

const getBannerData = async () => {
  const bannerData = await client.fetch(bannerQuery);
  return bannerData;
}
const getProductData = async () => {
  const productData = await client.fetch(productQuery);
  return productData;
}
const getBestSellerData = async () => {
  const bestSellerData = await client.fetch(bestSellerQuery);
  return bestSellerData;
}

export {getBannerData, getProductData, getBestSellerData};