"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";
import { useCartStore } from "../../../store/cart";

// In a real app, this would come from an API or database
const product = {
  id: 1,
  name: "Birthday Celebration Hamper",
  price: 89.99,
  image: "/images/birthday-hamper.jpg",
  rating: 4.8,
  category: "Birthday",
  description:
    "A delightful collection of treats perfect for birthday celebrations",
  longDescription: `Our Birthday Celebration Hamper is carefully curated to bring joy and delight to any birthday celebration. This beautiful hamper includes:

• Premium chocolates and sweets
• Artisanal cookies and baked goods
• Fresh flowers arrangement
• Birthday candles and decorations
• Personalized birthday card
• Elegant gift wrapping

Perfect for making someone's special day even more memorable.`,
  specifications: {
    dimensions: "30cm x 20cm x 15cm",
    weight: "2.5 kg",
    materials: "Premium gift box, fresh flowers, various treats",
    shelfLife: "7-10 days",
  },
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Absolutely beautiful hamper! The presentation was stunning and the contents were high quality.",
      date: "2024-03-15",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment:
        "Great variety of items and very well packaged. Would definitely recommend!",
      date: "2024-03-10",
    },
  ],
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] rounded-xl overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              ${product.price}
            </p>
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold mb-4">Product Details</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-line">
                  {product.longDescription}
                </p>
              </div>
            </div>

            {/* Specifications */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="ml-2 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 font-medium">{review.name}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
