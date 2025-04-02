"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Gift, Star, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Crafted with Love",
    description:
      "Every hamper is carefully curated with attention to detail and a personal touch.",
  },
  {
    icon: Gift,
    title: "Quality Products",
    description:
      "We source only the finest products to ensure your gifts are truly special.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service and products.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your satisfaction is our top priority, and we're here to help every step of the way.",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Crafting beautiful hampers for your special moments
          </p>
        </div>

        {/* Values Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={item}
              className="bg-white rounded-xl shadow-sm p-6 text-center"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-xl overflow-hidden"
          >
            <Image
              src="/images/about-us.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded with a passion for creating beautiful gift experiences, we
              started our journey with a simple idea: to make every special
              occasion even more memorable with thoughtfully curated hampers.
            </p>
            <p className="text-gray-600">
              Today, we're proud to offer a wide range of hampers for every
              occasion, from birthdays and weddings to corporate events and
              special celebrations. Each hamper is carefully crafted with
              attention to detail and a personal touch.
            </p>
            <p className="text-gray-600">
              We believe that the perfect gift is one that shows how much you
              care. That's why we go above and beyond to source the finest
              products and create beautiful presentations that will delight your
              loved ones.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
