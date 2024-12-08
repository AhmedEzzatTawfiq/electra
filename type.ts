export interface BannerData {
  _id: string;
  _type: string;
  _createdAt: string;
  _rev: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  title: string;
  subtitle: string;
  price: number;
  description: string;
}

type ImageAsset = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};
type Slug = {
  current: string;
  _type: "slug";
};
type Category = {
  _id: string;
  name: string;
};

export interface ProductData {
  title: string;
  image: ImageAsset;
  _createdAt: string;
  price: number;
  ratings: number;
  category: Category[];
  slug: Slug;
  brand: string;
  description: string;
  _updatedAt: string;
  quantity: number;
  rowprice: number;
  position: string;
  _id: string;
  _type: "product";
}

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

export interface StoreSate {
  shopper: {
    cart: ProductData[];
    wishList: ProductData[];
    userInfo: UserInfo | null;
  }
}
