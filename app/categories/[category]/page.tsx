"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Cake,
  Heart,
  PartyPopper,
  Gift,
  ChevronDown,
} from "lucide-react";
import { use, useState } from "react";

const categories = [
  {
    id: "birthday",
    name: "Birthday Hampers",
    icon: Cake,
    description: "Perfect birthday celebrations with our curated hampers",
    color: "bg-pink-100",
    textColor: "text-pink-600",
    hoverColor: "hover:bg-pink-200",
    hampers: [
      {
        id: "sweet-birthday-delight",
        name: "Sweet Birthday Delight",
        price: "$49.99",
        image: "/hampers/1.jpg",
      },
      {
        id: "birthday-celebration-box",
        name: "Birthday Celebration Box",
        price: "$59.99",
        image: "/hampers/2.jpg",
      },
      {
        id: "birthday-wishes-hamper",
        name: "Birthday Wishes Hamper",
        price: "$69.99",
        image: "/hampers/3.jpg",
      },
      {
        id: "birthday-joy-collection",
        name: "Birthday Joy Collection",
        price: "$54.99",
        image: "/hampers/4.jpg",
      },
      {
        id: "birthday-special-bundle",
        name: "Birthday Special Bundle",
        price: "$64.99",
        image: "/hampers/5.jpg",
      },
      {
        id: "birthday-treat-box",
        name: "Birthday Treat Box",
        price: "$74.99",
        image: "/hampers/6.jpg",
      },
      {
        id: "birthday-magic-hamper",
        name: "Birthday Magic Hamper",
        price: "$79.99",
        image: "/hampers/7.jpg",
      },
      {
        id: "birthday-surprise-set",
        name: "Birthday Surprise Set",
        price: "$84.99",
        image: "/hampers/8.jpg",
      },
      {
        id: "birthday-delight-package",
        name: "Birthday Delight Package",
        price: "$89.99",
        image: "/hampers/9.jpg",
      },
      {
        id: "birthday-premium-collection",
        name: "Birthday Premium Collection",
        price: "$94.99",
        image: "/hampers/10.jpg",
      },
    ],
  },
  {
    id: "wedding",
    name: "Wedding Gifts",
    icon: Heart,
    description: "Elegant wedding gifts for the special couple",
    color: "bg-red-100",
    textColor: "text-red-600",
    hoverColor: "hover:bg-red-200",
    hampers: [
      {
        id: "wedding-bliss-hamper",
        name: "Wedding Bliss Hamper",
        price: "$89.99",
        image: "/hampers/11.jpg",
      },
      {
        id: "newlyweds-gift-set",
        name: "Newlyweds Gift Set",
        price: "$99.99",
        image: "/hampers/12.jpg",
      },
      {
        id: "love-and-joy-hamper",
        name: "Love & Joy Hamper",
        price: "$109.99",
        image: "/hampers/13.jpg",
      },
      {
        id: "wedding-celebration-box",
        name: "Wedding Celebration Box",
        price: "$94.99",
        image: "/hampers/14.jpg",
      },
      {
        id: "wedding-elegance-set",
        name: "Wedding Elegance Set",
        price: "$104.99",
        image: "/hampers/15.jpg",
      },
      {
        id: "wedding-romance-hamper",
        name: "Wedding Romance Hamper",
        price: "$114.99",
        image: "/hampers/16.jpg",
      },
      {
        id: "wedding-harmony-box",
        name: "Wedding Harmony Box",
        price: "$119.99",
        image: "/hampers/17.jpg",
      },
      {
        id: "wedding-love-collection",
        name: "Wedding Love Collection",
        price: "$124.99",
        image: "/hampers/18.jpg",
      },
      {
        id: "wedding-joy-package",
        name: "Wedding Joy Package",
        price: "$129.99",
        image: "/hampers/19.jpg",
      },
      {
        id: "wedding-premium-set",
        name: "Wedding Premium Set",
        price: "$134.99",
        image: "/hampers/20.jpg",
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate Gifts",
    icon: PartyPopper,
    description: "Professional corporate gift hampers",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    hoverColor: "hover:bg-blue-200",
    hampers: [
      {
        id: "executive-gift-box",
        name: "Executive Gift Box",
        price: "$79.99",
        image: "/hampers/21.jpg",
      },
      {
        id: "business-delight-hamper",
        name: "Business Delight Hamper",
        price: "$89.99",
        image: "/hampers/22.jpg",
      },
      {
        id: "professional-gift-set",
        name: "Professional Gift Set",
        price: "$99.99",
        image: "/hampers/23.jpg",
      },
      {
        id: "corporate-excellence-box",
        name: "Corporate Excellence Box",
        price: "$84.99",
        image: "/hampers/24.jpg",
      },
      {
        id: "business-success-hamper",
        name: "Business Success Hamper",
        price: "$94.99",
        image: "/hampers/25.jpg",
      },
      {
        id: "corporate-achievement-set",
        name: "Corporate Achievement Set",
        price: "$104.99",
        image: "/hampers/26.jpg",
      },
      {
        id: "business-premium-box",
        name: "Business Premium Box",
        price: "$109.99",
        image: "/hampers/27.jpg",
      },
      {
        id: "corporate-elite-hamper",
        name: "Corporate Elite Hamper",
        price: "$114.99",
        image: "/hampers/28.jpg",
      },
      {
        id: "business-excellence-set",
        name: "Business Excellence Set",
        price: "$119.99",
        image: "/hampers/PHOTO-2025-03-09-13-49-39.jpg",
      },
      {
        id: "corporate-luxury-box",
        name: "Corporate Luxury Box",
        price: "$124.99",
        image: "/hampers/PHOTO-2025-03-09-13-49-26.jpg",
      },
    ],
  },
  {
    id: "special",
    name: "Special Occasions",
    icon: Gift,
    description: "Thoughtful gifts for any special moment",
    color: "bg-purple-100",
    textColor: "text-purple-600",
    hoverColor: "hover:bg-purple-200",
    hampers: [
      {
        id: "special-moments-hamper",
        name: "Special Moments Hamper",
        price: "$69.99",
        image: "/hampers/IMG_20250228_135516_28.jpg",
      },
      {
        id: "joy-and-celebration-box",
        name: "Joy & Celebration Box",
        price: "$79.99",
        image: "/hampers/IMG_20250228_135516_29.jpg",
      },
      {
        id: "memorable-moments-set",
        name: "Memorable Moments Set",
        price: "$89.99",
        image: "/hampers/IMG_20250228_135516_30.jpg",
      },
      {
        id: "special-occasion-delight",
        name: "Special Occasion Delight",
        price: "$74.99",
        image: "/hampers/IMG_20250228_135516_31.jpg",
      },
      {
        id: "celebration-joy-box",
        name: "Celebration Joy Box",
        price: "$84.99",
        image: "/hampers/IMG_20250228_135516_32.jpg",
      },
      {
        id: "special-moments-collection",
        name: "Special Moments Collection",
        price: "$94.99",
        image: "/hampers/IMG_20250228_135516_33.jpg",
      },
      {
        id: "occasion-premium-hamper",
        name: "Occasion Premium Hamper",
        price: "$99.99",
        image: "/hampers/IMG_20250228_135516_34.jpg",
      },
      {
        id: "special-celebration-set",
        name: "Special Celebration Set",
        price: "$104.99",
        image: "/hampers/IMG_20250228_135516_35.jpg",
      },
      {
        id: "joy-and-happiness-box",
        name: "Joy & Happiness Box",
        price: "$109.99",
        image: "/hampers/IMG_20250228_135516_36.jpg",
      },
      {
        id: "special-occasion-luxury",
        name: "Special Occasion Luxury",
        price: "$114.99",
        image: "/hampers/IMG_20250228_135516_37.jpg",
      },
    ],
  },
];

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = use(params);
  const [showAll, setShowAll] = useState(false);
  const category = categories.find(
    (c) => c.id.toLowerCase().replace(/\s+/g, "-") === resolvedParams.category
  );

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Category not found
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const displayedHampers = showAll
    ? category.hampers
    : category.hampers.slice(0, 4);

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Category Header */}
        <div className={`${category.color} rounded-xl p-6 mb-8`}>
          <div className="flex items-center gap-3 mb-3">
            {category.icon && (
              <category.icon className={`w-10 h-10 ${category.textColor}`} />
            )}
            <h1 className="text-2xl font-semibold text-gray-900">
              {category.name}
            </h1>
          </div>
          <p className="text-gray-600">{category.description}</p>
        </div>

        {/* Hampers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedHampers.map((hamper, index) => (
            <motion.div
              key={hamper.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <Link
                href={`/hampers/${hamper.id}`}
                className="flex flex-col h-full"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={hamper.image}
                    alt={hamper.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-3 flex-grow">
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                    {hamper.name}
                  </h3>
                  <p
                    className={`font-medium ${category.textColor} text-sm mt-1`}
                  >
                    {hamper.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {category.hampers.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                showAll
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : `${category.color} ${category.textColor} ${category.hoverColor}`
              }`}
            >
              {showAll ? "Show Less" : "View More"}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
