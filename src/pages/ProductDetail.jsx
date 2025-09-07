import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductDescription from '../components/product/ProductDescription';
import CustomerReviews from '../components/product/CustomerReviews';
import SimilarProducts from '../components/sections/SimilarProducts';
import TopPicks from '../components/sections/TopPicks';
import { productData, reviews, similarProducts } from '../data/mockData';

const ProductDetail = () => {
  const breadcrumbItems = ['Home', 'Jewellery', 'Gifts', 'Necklace', 'Chains', 'Sterling Silver'];
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductImageGallery images={productData.images} productName={productData.name} />
          <ProductInfo product={productData} />
        </div>
        
      
        <ProductDescription product={productData} />
        
        
        <CustomerReviews reviews={reviews} />
        
      
        <SimilarProducts products={similarProducts} />
        
        {/* Top Picks */}
        <TopPicks products={similarProducts} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
