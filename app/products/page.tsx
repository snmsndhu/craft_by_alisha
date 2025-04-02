"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Cake, Heart, PartyPopper, Gift } from "lucide-react";

const categories = [
  {
    name: "Birthday Hampers",
    icon: Cake,
    description: "Perfect birthday celebrations with our curated hampers",
    color: "bg-pink-100",
    textColor: "text-pink-600",
    hampers: [
      {
        name: "Sweet Birthday Delight",
        price: "$49.99",
        image: "/hampers/PHOTO-2025-03-09-13-49-39.jpg",
      },
      {
        name: "Birthday Celebration Box",
        price: "$59.99",
        image: "/hampers/PHOTO-2025-03-09-13-49-26.jpg",
      },
      {
        name: "Birthday Wishes Hamper",
        price: "$69.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-42.jpg",
      },
      {
        name: "Birthday Joy Collection",
        price: "$54.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-42 4.jpg",
      },
      {
        name: "Birthday Special Bundle",
        price: "$64.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-42 3.jpg",
      },
      {
        name: "Birthday Treat Box",
        price: "$74.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-42 2.jpg",
      },
      {
        name: "Birthday Magic Hamper",
        price: "$79.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-41.jpg",
      },
      {
        name: "Birthday Surprise Set",
        price: "$84.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-41 2.jpg",
      },
      {
        name: "Birthday Delight Package",
        price: "$89.99",
        image: "/hampers/PHOTO-2025-02-28-13-55-16.jpg",
      },
      {
        name: "Birthday Premium Collection",
        price: "$94.99",
        image: "/hampers/PHOTO-2025-02-28-13-55-16 4.jpg",
      },
    ],
  },
  {
    name: "Wedding Gifts",
    icon: Heart,
    description: "Elegant wedding gifts for the special couple",
    color: "bg-red-100",
    textColor: "text-red-600",
    hampers: [
      {
        name: "Wedding Bliss Hamper",
        price: "$89.99",
        image: "/hampers/PHOTO-2025-02-28-13-55-16 3.jpg",
      },
      {
        name: "Newlyweds Gift Set",
        price: "$99.99",
        image: "/hampers/PHOTO-2025-02-28-13-55-16 2.jpg",
      },
      {
        name: "Love & Joy Hamper",
        price: "$109.99",
        image: "/hampers/PHOTO-2025-01-24-13-52-26.jpg",
      },
      {
        name: "Wedding Celebration Box",
        price: "$94.99",
        image: "/hampers/PHOTO-2025-01-06-11-20-46.jpg",
      },
      {
        name: "Wedding Elegance Set",
        price: "$104.99",
        image: "/hampers/PHOTO-2025-01-06-11-20-45.jpg",
      },
      {
        name: "Wedding Romance Hamper",
        price: "$114.99",
        image: "/hampers/PHOTO-2025-01-05-11-33-15.jpg",
      },
      {
        name: "Wedding Harmony Box",
        price: "$119.99",
        image: "/hampers/PHOTO-2025-01-05-11-33-15 2.jpg",
      },
      {
        name: "Wedding Love Collection",
        price: "$124.99",
        image: "/hampers/PHOTO-2025-01-05-11-33-14.jpg",
      },
      {
        name: "Wedding Joy Package",
        price: "$129.99",
        image: "/hampers/PHOTO-2025-01-05-11-33-14 2.jpg",
      },
      {
        name: "Wedding Premium Set",
        price: "$134.99",
        image: "/hampers/PHOTO-2024-09-12-17-23-43.jpg",
      },
    ],
  },
  {
    name: "Corporate Gifts",
    icon: PartyPopper,
    description: "Professional corporate gift hampers",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    hampers: [
      {
        name: "Executive Gift Box",
        price: "$79.99",
        image: "/hampers/PHOTO-2024-09-12-17-23-41.jpg",
      },
      {
        name: "Business Delight Hamper",
        price: "$89.99",
        image: "/hampers/PHOTO-2024-09-12-17-23-41 2.jpg",
      },
      {
        name: "Professional Gift Set",
        price: "$99.99",
        image: "/hampers/PHOTO-2024-09-12-17-01-36.jpg",
      },
      {
        name: "Corporate Excellence Box",
        price: "$84.99",
        image: "/hampers/PHOTO-2024-09-12-17-01-35.jpg",
      },
      {
        name: "Business Success Hamper",
        price: "$94.99",
        image: "/hampers/PHOTO-2024-09-12-17-01-34.jpg",
      },
      {
        name: "Corporate Achievement Set",
        price: "$104.99",
        image: "/hampers/PHOTO-2024-09-12-17-01-33.jpg",
      },
      {
        name: "Business Premium Box",
        price: "$109.99",
        image: "/hampers/PHOTO-2024-09-12-17-01-33 2.jpg",
      },
      {
        name: "Corporate Elite Hamper",
        price: "$114.99",
        image: "/hampers/PHOTO-2023-08-23-13-02-02.jpg",
      },
      {
        name: "Business Excellence Set",
        price: "$119.99",
        image: "/hampers/PHOTO-2025-03-09-13-49-39.jpg",
      },
      {
        name: "Corporate Luxury Box",
        price: "$124.99",
        image: "/hampers/PHOTO-2025-03-09-13-49-26.jpg",
      },
    ],
  },
  {
    name: "Special Occasions",
    icon: Gift,
    description: "Thoughtful gifts for any special moment",
    color: "bg-purple-100",
    textColor: "text-purple-600",
    hampers: [
      {
        name: "Special Moments Hamper",
        price: "$69.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-42.jpg",
      },
      {
        name: "Joy & Celebration Box",
        price: "$79.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-42 4.jpg",
      },
      {
        name: "Memorable Moments Set",
        price: "$89.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-42 3.jpg",
      },
      {
        name: "Special Occasion Delight",
        price: "$74.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-42 2.jpg",
      },
      {
        name: "Celebration Joy Box",
        price: "$84.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-41.jpg",
      },
      {
        name: "Special Moments Collection",
        price: "$94.99",
        image: "/hampers/PHOTO-2025-03-06-14-27-41 2.jpg",
      },
      {
        name: "Occasion Premium Hamper",
        price: "$99.99",
        image: "/hampers/PHOTO-2025-02-28-13-55-16.jpg",
      },
      {
        name: "Special Celebration Set",
        price: "$104.99",
        image: "/hampers/PHOTO-2025-02-28-13-55-16 4.jpg",
      },
      {
        name: "Joy & Happiness Box",
        price: "$109.99",
        image: "/hampers/PHOTO-2025-02-28-13-55-16 3.jpg",
      },
      {
        name: "Special Occasion Luxury",
        price: "$114.99",
        image: "/hampers/PHOTO-2025-02-28-13-55-16 2.jpg",
      },
    ],
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

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Combine all hampers from all categories
  const allHampers = categories.flatMap((category) =>
    category.hampers.map((hamper) => ({
      ...hamper,
      category: category.name,
      color: category.textColor,
    }))
  );

  // Filter hampers based on selected category
  const filteredHampers = selectedCategory
    ? allHampers.filter((hamper) => hamper.category === selectedCategory)
    : allHampers;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Hampers</h1>
          <p className="text-xl text-gray-600">
            Discover our complete collection of beautifully curated gift hampers
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              !selectedCategory
                ? "bg-pink-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.name
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredHampers.map((hamper) => (
            <motion.div
              key={hamper.name}
              variants={item}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link
                href={`/hampers/${hamper.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")}`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={hamper.image}
                    alt={hamper.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{hamper.name}</h3>
                  <p className={`font-medium ${hamper.color}`}>
                    {hamper.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
