"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "birthday",
    name: "Birthday Hampers",
    description: "Perfect birthday celebrations with our curated hampers",
    image: "/images/birthday-category.jpg",
    count: 12,
  },
  {
    id: "wedding",
    name: "Wedding Gifts",
    description: "Elegant wedding gifts for the special couple",
    image: "/images/wedding-category.jpg",
    count: 8,
  },
  {
    id: "corporate",
    name: "Corporate Gifts",
    description: "Professional corporate gift hampers",
    image: "/images/corporate-category.jpg",
    count: 15,
  },
  {
    id: "baby",
    name: "Baby Gifts",
    description: "Adorable hampers for celebrating new arrivals",
    image: "/images/baby-category.jpg",
    count: 10,
  },
  {
    id: "anniversary",
    name: "Anniversary Gifts",
    description: "Romantic gifts for celebrating love",
    image: "/images/anniversary-category.jpg",
    count: 9,
  },
  {
    id: "sympathy",
    name: "Sympathy Gifts",
    description: "Thoughtful gifts to show your support",
    image: "/images/sympathy-category.jpg",
    count: 6,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Shop by Category
          </h1>
          <p className="text-xl text-black">
            Discover our collection of beautifully curated gift hampers for
            every occasion
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="group relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80">
                      {category.count} products
                    </span>
                    <Link
                      href={`/products?category=${category.id}`}
                      className="flex items-center text-white hover:text-pink-200 transition-colors"
                    >
                      View All
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Categories Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-xl overflow-hidden group"
            >
              <Image
                src="/images/luxury-hampers.jpg"
                alt="Luxury Hampers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Luxury Hampers</h3>
                <p className="text-lg mb-6">
                  Indulge in our collection of premium gift hampers
                </p>
                <Link
                  href="/products?collection=luxury"
                  className="inline-flex items-center text-white hover:text-pink-200 transition-colors"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-xl overflow-hidden group"
            >
              <Image
                src="/images/seasonal-gifts.jpg"
                alt="Seasonal Gifts"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Seasonal Gifts</h3>
                <p className="text-lg mb-6">
                  Celebrate the seasons with our themed gift collections
                </p>
                <Link
                  href="/products?collection=seasonal"
                  className="inline-flex items-center text-white hover:text-pink-200 transition-colors"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
