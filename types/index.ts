export interface Item {
  id?: String
  slug: String
  name: String
  image: Image
  category: Category
  new: Boolean
  price: Number
  description: String
  features: String
  inculdes: Includes[]
  gallery: Gallery[]
  others: Other[]
}

export interface Category {
  id?: String
  type: String
  image: CategoryImage
  item?: Item
  itemId?: String
}

export interface CategoryImage {
  id?: String
  modile: String
  tablet: String
  desktop: String
  category?: Category
  categoryId?: String
}

export interface Image {
  id?: String
  mobile: String
  tablet: String
  desktop: String
  item?: Item
  itemId?: String
  other?: Other
  otherId?: String
}

export interface Includes {
  id?: String
  quantity: Number
  item: String
  includedIn?: Item
  itemId: String
}

export interface Gallery {
  id?: String
  first: FirstGallery
  second: SecondGallery
  third: ThirdGallery
  item?: Item
  itemId?: String
}

export interface FirstGallery {
  id?: String
  mobile: String
  tablet: String
  desktop: String
  gallery?: Gallery
  galleryId?: String
}

export interface SecondGallery {
  id?: String
  mobile: String
  tablet: String
  desktop: String
  gallery?: Gallery
  galleryId?: String
}

export interface ThirdGallery {
  id?: String
  mobile: String
  tablet: String
  desktop: String
  gallery?: Gallery
  galleryId?: String
}

export interface Other {
  id?: String
  slug: String
  name: String
  image: Image
  item?: Item
  itemId?: String
}
