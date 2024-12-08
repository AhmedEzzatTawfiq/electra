import Container from "@/components/Container";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProductInfo from "@/components/ProductInfo";
import ProductCard from "@/components/ProductCard";
import { getBestSellerData } from "@/lib/getData";
import { ProductData } from "@/type";

// Type definition for PageProps
interface PageProps {
  params: Promise<{ slug: string }>;  // params is now a Promise
}

const SingleProductPage = async ({ params }: PageProps) => {
  // Await the resolution of params
  const resolvedParams = await params; // Resolves to { slug: string }

  const { slug } = resolvedParams; // Extract the slug from the resolved params

  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
        ...
      }`;

  const product: ProductData = await client.fetch(query, { slug });
  const bestSellersData: ProductData[] = await getBestSellerData();

  return (
    <Container className="my-10 bg-bgLight">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full p-4">
        <div className="h-full xl:col-span-2">
          <Image
            src={urlFor(product?.image).url()}
            alt="product image"
            className="w-full h-full object-contain"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {bestSellersData?.map((item) => (
          <ProductCard item={item} key={item?._id} />
        ))}
      </div>
    </Container>
  );
};

export default SingleProductPage;
