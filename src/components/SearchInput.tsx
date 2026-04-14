"use client";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { ProductData } from "../../types";
import { getProductsData } from "@/lib/getData";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const SearchInput = ({ isMobile = false, onSuggestionClick }: { isMobile?: boolean; onSuggestionClick?: () => void }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<ProductData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allProducts, setAllProducts] = useState<ProductData[]>([]);
  const [mounted, setMounted] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const fetchProducts = async () => {
      const products = await getProductsData();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions(allProducts.slice(0, 5));
    }
  }, [search, allProducts]);

  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  return (
    <>
      <div ref={searchRef} className={`relative w-full ${isMobile ? '' : 'hidden sm:inline-flex'} ${isMobile ? 'flex' : 'flex-1'} h-12 text-base items-center gap-2 justify-between`}>
        <CiSearch className="text-lg absolute left-2.5 mt-.5 text-lightOrange" />
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 h-full outline-none bg-transparent placeholder:text-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-12"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onClick={handleInputClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (suggestions.length > 0) {
                if (typeof window !== 'undefined') {
                  window.location.href = `/product/${suggestions[0].slug.current}`;
                }
              }
              setShowSuggestions(false);
              onSuggestionClick?.();
            }
          }}
        />
        {search && (
          <IoMdClose
            className="text-accent/50 hover:text-lightRed hoverEffect cursor-pointer absolute right-4"
            onClick={() => {
              setSearch("");
              setShowSuggestions(false);
            }}
          />
        )}
        {mounted && showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
            {suggestions.map((product) => (
              <Link
                key={product._id}
                href={`/product/${product.slug.current}`}
                className="flex items-center gap-4 p-3 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                onClick={() => {
                  setSearch("");
                  setShowSuggestions(false);
                  onSuggestionClick?.();
                }}
              >
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <p className="font-medium text-sm text-gray-900 line-clamp-1">{product.title}</p>
                  <p className="text-xs text-gray-500 line-clamp-1">{product.brand}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
