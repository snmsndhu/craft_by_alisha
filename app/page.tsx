"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gift, Heart, PartyPopper, Cake } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Birthday Hampers",
    icon: Cake,
    description: "Perfect birthday celebrations with our curated hampers",
    color: "bg-pink-100",
    hampers: [
      {
        name: "Sweet Birthday Delight",
        price: "$49.99",
        image: "/hampers/1.jpg",
      },
      {
        name: "Birthday Celebration Box",
        price: "$59.99",
        image: "/hampers/2.jpg",
      },
      {
        name: "Birthday Wishes Hamper",
        price: "$69.99",
        image: "/hampers/3.jpg",
      },
      {
        name: "Birthday Joy Collection",
        price: "$54.99",
        image: "/hampers/4.jpg",
      },
      {
        name: "Birthday Special Bundle",
        price: "$64.99",
        image: "/hampers/5.jpg",
      },
      {
        name: "Birthday Treat Box",
        price: "$74.99",
        image: "/hampers/6.jpg",
      },
      {
        name: "Birthday Magic Hamper",
        price: "$79.99",
        image: "/hampers/7.jpg",
      },
      {
        name: "Birthday Surprise Set",
        price: "$84.99",
        image: "/hampers/8.jpg",
      },
      {
        name: "Birthday Delight Package",
        price: "$89.99",
        image: "/hampers/9.jpg",
      },
      {
        name: "Birthday Premium Collection",
        price: "$94.99",
        image: "/hampers/10.jpg",
      },
    ],
  },
  {
    name: "Wedding Gifts",
    icon: Heart,
    description: "Elegant wedding gifts for the special couple",
    color: "bg-red-100",
    hampers: [
      {
        name: "Wedding Bliss Hamper",
        price: "$89.99",
        image: "/hampers/11.jpg",
      },
      {
        name: "Newlyweds Gift Set",
        price: "$99.99",
        image: "/hampers/12.jpg",
      },
      {
        name: "Love & Joy Hamper",
        price: "$109.99",
        image: "/hampers/13.jpg",
      },
      {
        name: "Wedding Celebration Box",
        price: "$94.99",
        image: "/hampers/14.jpg",
      },
      {
        name: "Wedding Elegance Set",
        price: "$104.99",
        image: "/hampers/15.jpg",
      },
      {
        name: "Wedding Romance Hamper",
        price: "$114.99",
        image: "/hampers/16.jpg",
      },
      {
        name: "Wedding Harmony Box",
        price: "$119.99",
        image: "/hampers/17.jpg",
      },
      {
        name: "Wedding Love Collection",
        price: "$124.99",
        image: "/hampers/18.jpg",
      },
      {
        name: "Wedding Joy Package",
        price: "$129.99",
        image: "/hampers/19.jpg",
      },
      {
        name: "Wedding Premium Set",
        price: "$134.99",
        image: "/hampers/20.jpg",
      },
    ],
  },
  {
    name: "Corporate Gifts",
    icon: PartyPopper,
    description: "Professional corporate gift hampers",
    color: "bg-blue-100",
    hampers: [
      {
        name: "Executive Gift Box",
        price: "$79.99",
        image: "/hampers/21.jpg",
      },
      {
        name: "Business Delight Hamper",
        price: "$89.99",
        image: "/hampers/22.jpg",
      },
      {
        name: "Professional Gift Set",
        price: "$99.99",
        image: "/hampers/23.jpg",
      },
      {
        name: "Corporate Excellence Box",
        price: "$84.99",
        image: "/hampers/24.jpg",
      },
      {
        name: "Business Success Hamper",
        price: "$94.99",
        image: "/hampers/25.jpg",
      },
      {
        name: "Corporate Achievement Set",
        price: "$104.99",
        image: "/hampers/26.jpg",
      },
      {
        name: "Business Premium Box",
        price: "$109.99",
        image: "/hampers/27.jpg",
      },
      {
        name: "Corporate Elite Hamper",
        price: "$114.99",
        image: "/hampers/28.jpg",
      },
      {
        name: "Business Excellence Set",
        price: "$119.99",
        image: "/hampers/1.jpg",
      },
      {
        name: "Corporate Luxury Box",
        price: "$124.99",
        image: "/hampers/2.jpg",
      },
    ],
  },
  {
    name: "Special Occasions",
    icon: Gift,
    description: "Thoughtful gifts for any special moment",
    color: "bg-purple-100",
    hampers: [
      {
        name: "Special Moments Hamper",
        price: "$69.99",
        image: "/hampers/3.jpg",
      },
      {
        name: "Joy & Celebration Box",
        price: "$79.99",
        image: "/hampers/4.jpg",
      },
      {
        name: "Memorable Moments Set",
        price: "$89.99",
        image: "/hampers/5.jpg",
      },
      {
        name: "Special Occasion Delight",
        price: "$74.99",
        image: "/hampers/6.jpg",
      },
      {
        name: "Celebration Joy Box",
        price: "$84.99",
        image: "/hampers/7.jpg",
      },
      {
        name: "Special Moments Collection",
        price: "$94.99",
        image: "/hampers/8.jpg",
      },
      {
        name: "Occasion Premium Hamper",
        price: "$99.99",
        image: "/hampers/9.jpg",
      },
      {
        name: "Special Celebration Set",
        price: "$104.99",
        image: "/hampers/10.jpg",
      },
      {
        name: "Joy & Happiness Box",
        price: "$109.99",
        image: "/hampers/11.jpg",
      },
      {
        name: "Special Occasion Luxury",
        price: "$114.99",
        image: "/hampers/12.jpg",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crafted with Love
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Beautiful hampers for every special occasion
          </p>
          <Link
            href="/products"
            className="bg-pink-600 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-pink-700 transition-colors"
          >
            Explore Hampers
          </Link>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-50" />
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>

          {/* Birthday Hampers Section */}
          <div className="mb-16">
            <div className="bg-pink-100 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Cake className="w-10 h-10 text-pink-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Birthday Hampers
                </h3>
              </div>
              <p className="text-gray-600">
                Perfect birthday celebrations with our curated hampers
              </p>
            </div>
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory -mx-4 px-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:overflow-visible sm:mx-0 sm:px-0">
                {categories[0].hampers.slice(0, 4).map((hamper, index) => (
                  <motion.div
                    key={hamper.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-[calc(50%-8px)] sm:w-auto snap-center"
                  >
                    <Link
                      href={`/hampers/${hamper.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
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
                          className={`font-medium ${categories[0].color} text-sm mt-1`}
                        >
                          {hamper.price}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  href="/categories/birthday"
                  className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-200 transition-colors"
                >
                  View All Birthday Hampers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Wedding Gifts Section */}
          <div className="mb-16">
            <div className="bg-red-100 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-10 h-10 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Wedding Gifts
                </h3>
              </div>
              <p className="text-gray-600">
                Elegant wedding gifts for the special couple
              </p>
            </div>
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory -mx-4 px-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:overflow-visible sm:mx-0 sm:px-0">
                {categories[1].hampers.slice(0, 4).map((hamper, index) => (
                  <motion.div
                    key={hamper.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-[calc(50%-8px)] sm:w-auto snap-center"
                  >
                    <Link
                      href={`/hampers/${hamper.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
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
                          className={`font-medium ${categories[1].color} text-sm mt-1`}
                        >
                          {hamper.price}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  href="/categories/wedding"
                  className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-200 transition-colors"
                >
                  View All Wedding Gifts
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Corporate Gifts Section */}
          <div className="mb-16">
            <div className="bg-blue-100 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <PartyPopper className="w-10 h-10 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Corporate Gifts
                </h3>
              </div>
              <p className="text-gray-600">
                Professional corporate gift hampers
              </p>
            </div>
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory -mx-4 px-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:overflow-visible sm:mx-0 sm:px-0">
                {categories[2].hampers.slice(0, 4).map((hamper, index) => (
                  <motion.div
                    key={hamper.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-[calc(50%-8px)] sm:w-auto snap-center"
                  >
                    <Link
                      href={`/hampers/${hamper.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
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
                          className={`font-medium ${categories[2].color} text-sm mt-1`}
                        >
                          {hamper.price}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  href="/categories/corporate"
                  className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors"
                >
                  View All Corporate Gifts
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Special Occasions Section */}
          <div className="mb-16">
            <div className="bg-purple-100 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="w-10 h-10 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Special Occasions
                </h3>
              </div>
              <p className="text-gray-600">
                Thoughtful gifts for any special moment
              </p>
            </div>
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory -mx-4 px-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:overflow-visible sm:mx-0 sm:px-0">
                {categories[3].hampers.slice(0, 4).map((hamper, index) => (
                  <motion.div
                    key={hamper.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-[calc(50%-8px)] sm:w-auto snap-center"
                  >
                    <Link
                      href={`/hampers/${hamper.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
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
                          className={`font-medium ${categories[3].color} text-sm mt-1`}
                        >
                          {hamper.price}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  href="/categories/special"
                  className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors"
                >
                  View All Special Occasions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
