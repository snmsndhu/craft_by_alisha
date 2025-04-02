"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart, Package, Gift, Heart } from "lucide-react";
import { useState } from "react";
import { use } from "react";

// This would typically come from your database
const hampers = [
  // Birthday Hampers
  {
    id: "sweet-birthday-delight",
    name: "Sweet Birthday Delight",
    price: "$49.99",
    image: "/hampers/1.jpg",
    category: "birthday",
    description:
      "A delightful collection of sweet treats and birthday essentials perfect for celebrating special moments.",
    contents: [
      "Assorted chocolates and candies",
      "Birthday cake mix",
      "Decorative candles",
      "Birthday banner",
      "Confetti poppers",
      "Birthday card",
      "Mini balloons",
      "Party favors",
    ],
    features: [
      "Handcrafted with love",
      "Perfect for all ages",
      "Ready to celebrate",
      "Includes personalization",
    ],
    dimensions: '12" x 8" x 6"',
    weight: "2.5 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-celebration-box",
    name: "Birthday Celebration Box",
    price: "$59.99",
    image: "/hampers/2.jpg",
    category: "birthday",
    description:
      "A perfect celebration box filled with birthday delights and treats.",
    contents: [
      "Birthday cake",
      "Assorted chocolates",
      "Party decorations",
      "Birthday card",
      "Balloons",
      "Party favors",
    ],
    features: [
      "Fresh and delicious",
      "Beautiful presentation",
      "Ready to celebrate",
      "Customizable",
    ],
    dimensions: '14" x 10" x 8"',
    weight: "3 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-wishes-hamper",
    name: "Birthday Wishes Hamper",
    price: "$69.99",
    image: "/hampers/3.jpg",
    category: "birthday",
    description: "A wonderful hamper filled with birthday wishes and treats.",
    contents: [
      "Birthday treats",
      "Party supplies",
      "Decorative items",
      "Birthday card",
      "Gift items",
      "Special surprises",
    ],
    features: [
      "Beautifully packaged",
      "Perfect for celebrations",
      "Customizable options",
      "Premium quality",
    ],
    dimensions: '12" x 10" x 8"',
    weight: "2.8 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-joy-collection",
    name: "Birthday Joy Collection",
    price: "$54.99",
    image: "/hampers/4.jpg",
    category: "birthday",
    description: "A joyful collection of birthday treats and surprises.",
    contents: [
      "Birthday goodies",
      "Party essentials",
      "Celebration items",
      "Birthday card",
      "Special treats",
      "Party decorations",
    ],
    features: [
      "Carefully curated",
      "Perfect for all ages",
      "Ready to gift",
      "Premium selection",
    ],
    dimensions: '13" x 9" x 7"',
    weight: "2.6 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-special-bundle",
    name: "Birthday Special Bundle",
    price: "$64.99",
    image: "/hampers/5.jpg",
    category: "birthday",
    description: "A special bundle of birthday treats and party essentials.",
    contents: [
      "Premium chocolates",
      "Party decorations",
      "Birthday banner",
      "Gift items",
      "Party favors",
      "Special treats",
    ],
    features: [
      "Premium selection",
      "Perfect for parties",
      "Customizable options",
      "Beautiful presentation",
    ],
    dimensions: '14" x 11" x 8"',
    weight: "3.2 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-treat-box",
    name: "Birthday Treat Box",
    price: "$74.99",
    image: "/hampers/6.jpg",
    category: "birthday",
    description: "A delightful box of birthday treats and surprises.",
    contents: [
      "Gourmet treats",
      "Party essentials",
      "Birthday decorations",
      "Celebration items",
      "Special surprises",
      "Gift card",
    ],
    features: [
      "Luxury selection",
      "Perfect for gifting",
      "Customizable",
      "Premium packaging",
    ],
    dimensions: '15" x 12" x 9"',
    weight: "3.5 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-magic-hamper",
    name: "Birthday Magic Hamper",
    price: "$79.99",
    image: "/hampers/7.jpg",
    category: "birthday",
    description: "A magical hamper filled with birthday wonders and delights.",
    contents: [
      "Magic-themed treats",
      "Birthday decorations",
      "Special surprises",
      "Birthday card",
      "Party supplies",
      "Gift items",
    ],
    features: [
      "Magical presentation",
      "Perfect for celebrations",
      "Customizable",
      "Premium quality",
    ],
    dimensions: '16" x 12" x 10"',
    weight: "3.8 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-surprise-set",
    name: "Birthday Surprise Set",
    price: "$84.99",
    image: "/hampers/8.jpg",
    category: "birthday",
    description: "A surprise-filled set perfect for birthday celebrations.",
    contents: [
      "Surprise treats",
      "Birthday decorations",
      "Special items",
      "Birthday card",
      "Party essentials",
      "Gift surprises",
    ],
    features: [
      "Surprise elements",
      "Perfect for celebrations",
      "Customizable",
      "Premium quality",
    ],
    dimensions: '15" x 11" x 9"',
    weight: "3.5 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-delight-package",
    name: "Birthday Delight Package",
    price: "$89.99",
    image: "/hampers/9.jpg",
    category: "birthday",
    description: "A delightful package filled with birthday joy and treats.",
    contents: [
      "Premium treats",
      "Birthday decorations",
      "Special items",
      "Birthday card",
      "Party supplies",
      "Gift items",
    ],
    features: [
      "Delightful presentation",
      "Perfect for celebrations",
      "Customizable",
      "Premium quality",
    ],
    dimensions: '16" x 12" x 10"',
    weight: "4 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "birthday-premium-collection",
    name: "Birthday Premium Collection",
    price: "$94.99",
    image: "/hampers/10.jpg",
    category: "birthday",
    description: "A premium collection of birthday delights and treats.",
    contents: [
      "Luxury treats",
      "Birthday decorations",
      "Special items",
      "Birthday card",
      "Party supplies",
      "Gift items",
    ],
    features: [
      "Premium presentation",
      "Perfect for celebrations",
      "Customizable",
      "Premium quality",
    ],
    dimensions: '17" x 13" x 11"',
    weight: "4.2 kg",
    delivery: "Next day delivery available",
  },
  // Wedding Hampers
  {
    id: "wedding-bliss-hamper",
    name: "Wedding Bliss Hamper",
    price: "$89.99",
    image: "/hampers/11.jpg",
    category: "wedding",
    description:
      "A luxurious hamper perfect for celebrating the newlyweds' special day.",
    contents: [
      "Champagne",
      "Gourmet chocolates",
      "Fresh flowers",
      "Wedding card",
      "Decorative items",
      "Luxury treats",
    ],
    features: [
      "Premium quality",
      "Elegant presentation",
      "Perfect for couples",
      "Customizable",
    ],
    dimensions: '16" x 12" x 10"',
    weight: "4 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "newlyweds-gift-set",
    name: "Newlyweds Gift Set",
    price: "$99.99",
    image: "/hampers/12.jpg",
    category: "wedding",
    description: "A perfect gift set for the newlyweds to start their journey.",
    contents: [
      "Premium wine",
      "Luxury chocolates",
      "Wedding keepsakes",
      "Photo frame",
      "Scented candles",
      "Celebration card",
    ],
    features: [
      "Luxury packaging",
      "Memorable items",
      "Customizable",
      "Premium quality",
    ],
    dimensions: '18" x 14" x 12"',
    weight: "4.5 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "love-and-joy-hamper",
    name: "Love & Joy Hamper",
    price: "$109.99",
    image: "/hampers/13.jpg",
    category: "wedding",
    description: "A romantic hamper filled with love and joy for the couple.",
    contents: [
      "Premium champagne",
      "Luxury chocolates",
      "Romantic items",
      "Wedding card",
      "Decorative elements",
      "Special treats",
    ],
    features: [
      "Romantic presentation",
      "Perfect for couples",
      "Customizable",
      "Premium quality",
    ],
    dimensions: '17" x 13" x 11"',
    weight: "4.8 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "wedding-celebration-box",
    name: "Wedding Celebration Box",
    price: "$94.99",
    image: "/hampers/14.jpg",
    category: "wedding",
    description: "A celebration box perfect for the newlyweds.",
    contents: [
      "Celebration items",
      "Luxury treats",
      "Wedding keepsakes",
      "Wedding card",
      "Decorative elements",
      "Special surprises",
    ],
    features: [
      "Celebration themed",
      "Perfect for couples",
      "Customizable",
      "Premium quality",
    ],
    dimensions: '16" x 12" x 10"',
    weight: "4.2 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "wedding-elegance-set",
    name: "Wedding Elegance Set",
    price: "$104.99",
    image: "/hampers/15.jpg",
    category: "wedding",
    description: "An elegant set perfect for the wedding celebration.",
    contents: [
      "Elegant items",
      "Luxury treats",
      "Wedding keepsakes",
      "Wedding card",
      "Decorative elements",
      "Special surprises",
    ],
    features: [
      "Elegant presentation",
      "Perfect for couples",
      "Customizable",
      "Premium quality",
    ],
    dimensions: '17" x 13" x 11"',
    weight: "4.5 kg",
    delivery: "Next day delivery available",
  },
  // Corporate Hampers
  {
    id: "executive-gift-box",
    name: "Executive Gift Box",
    price: "$79.99",
    image: "/hampers/16.jpg",
    category: "corporate",
    description: "A sophisticated gift box perfect for business occasions.",
    contents: [
      "Premium items",
      "Business essentials",
      "Corporate card",
      "Professional treats",
      "Luxury accessories",
      "Gourmet snacks",
    ],
    features: [
      "Professional presentation",
      "Premium quality",
      "Business appropriate",
      "Customizable",
    ],
    dimensions: '14" x 10" x 8"',
    weight: "3 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "business-delight-hamper",
    name: "Business Delight Hamper",
    price: "$89.99",
    image: "/hampers/17.jpg",
    category: "corporate",
    description: "A delightful hamper for business associates and clients.",
    contents: [
      "Gourmet treats",
      "Corporate gifts",
      "Business card holder",
      "Premium stationery",
      "Luxury items",
      "Thank you card",
    ],
    features: [
      "Professional design",
      "Premium selection",
      "Customizable",
      "Elegant packaging",
    ],
    dimensions: '16" x 12" x 10"',
    weight: "3.5 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "professional-gift-set",
    name: "Professional Gift Set",
    price: "$99.99",
    image: "/hampers/18.jpg",
    category: "corporate",
    description: "A professional gift set perfect for business occasions.",
    contents: [
      "Professional items",
      "Business essentials",
      "Corporate card",
      "Premium treats",
      "Luxury accessories",
      "Business items",
    ],
    features: [
      "Professional presentation",
      "Premium quality",
      "Business appropriate",
      "Customizable",
    ],
    dimensions: '15" x 11" x 9"',
    weight: "3.2 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "corporate-excellence-box",
    name: "Corporate Excellence Box",
    price: "$84.99",
    image: "/hampers/19.jpg",
    category: "corporate",
    description: "An excellence-themed box for corporate occasions.",
    contents: [
      "Excellence items",
      "Business essentials",
      "Corporate card",
      "Premium treats",
      "Luxury accessories",
      "Business items",
    ],
    features: [
      "Excellence themed",
      "Premium quality",
      "Business appropriate",
      "Customizable",
    ],
    dimensions: '16" x 12" x 10"',
    weight: "3.5 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "business-success-hamper",
    name: "Business Success Hamper",
    price: "$94.99",
    image: "/hampers/20.jpg",
    category: "corporate",
    description: "A success-themed hamper for business achievements.",
    contents: [
      "Success items",
      "Business essentials",
      "Corporate card",
      "Premium treats",
      "Luxury accessories",
      "Business items",
    ],
    features: [
      "Success themed",
      "Premium quality",
      "Business appropriate",
      "Customizable",
    ],
    dimensions: '17" x 13" x 11"',
    weight: "3.8 kg",
    delivery: "Next day delivery available",
  },
  // Special Occasions
  {
    id: "special-moments-hamper",
    name: "Special Moments Hamper",
    price: "$69.99",
    image: "/hampers/21.jpg",
    category: "special",
    description: "A thoughtful hamper for any special occasion.",
    contents: [
      "Special treats",
      "Decorative items",
      "Gift card",
      "Celebration items",
      "Surprise elements",
      "Premium snacks",
    ],
    features: [
      "Versatile design",
      "Perfect for any occasion",
      "Beautiful presentation",
      "Customizable",
    ],
    dimensions: '13" x 9" x 7"',
    weight: "2.5 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "joy-and-celebration-box",
    name: "Joy & Celebration Box",
    price: "$79.99",
    image: "/hampers/22.jpg",
    category: "special",
    description: "A beautiful box filled with joy and celebration essentials.",
    contents: [
      "Celebration treats",
      "Premium items",
      "Decorative elements",
      "Gift card",
      "Special surprises",
      "Luxury snacks",
    ],
    features: [
      "Elegant design",
      "Premium selection",
      "Customizable",
      "Perfect for gifting",
    ],
    dimensions: '15" x 11" x 9"',
    weight: "3 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "memorable-moments-set",
    name: "Memorable Moments Set",
    price: "$89.99",
    image: "/hampers/23.jpg",
    category: "special",
    description: "A memorable set perfect for special occasions.",
    contents: [
      "Memorable items",
      "Premium treats",
      "Decorative elements",
      "Gift card",
      "Special surprises",
      "Luxury items",
    ],
    features: [
      "Memorable design",
      "Premium selection",
      "Customizable",
      "Perfect for gifting",
    ],
    dimensions: '16" x 12" x 10"',
    weight: "3.5 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "special-occasion-delight",
    name: "Special Occasion Delight",
    price: "$74.99",
    image: "/hampers/24.jpg",
    category: "special",
    description: "A delightful hamper for any special occasion.",
    contents: [
      "Delightful items",
      "Premium treats",
      "Decorative elements",
      "Gift card",
      "Special surprises",
      "Luxury items",
    ],
    features: [
      "Delightful design",
      "Premium selection",
      "Customizable",
      "Perfect for gifting",
    ],
    dimensions: '14" x 10" x 8"',
    weight: "3 kg",
    delivery: "Next day delivery available",
  },
  {
    id: "celebration-joy-box",
    name: "Celebration Joy Box",
    price: "$84.99",
    image: "/hampers/25.jpg",
    category: "special",
    description: "A joy-filled box perfect for celebrations.",
    contents: [
      "Joyful items",
      "Premium treats",
      "Decorative elements",
      "Gift card",
      "Special surprises",
      "Luxury items",
    ],
    features: [
      "Joyful design",
      "Premium selection",
      "Customizable",
      "Perfect for gifting",
    ],
    dimensions: '15" x 11" x 9"',
    weight: "3.2 kg",
    delivery: "Next day delivery available",
  },
];

export default function HamperPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const hamper = hampers.find((h) => h.id === resolvedParams.id);

  if (!hamper) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Hamper not found
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

  const handleAddToCart = () => {
    setAddedToCart(true);
    // Here you would typically integrate with your cart system
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/categories/${hamper.category}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Category
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src={hamper.image}
              alt={hamper.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {hamper.name}
              </h1>
              <p className="text-2xl font-semibold text-pink-600">
                {hamper.price}
              </p>
            </div>

            <p className="text-gray-600">{hamper.description}</p>

            {/* Contents */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                What is Inside
              </h2>
              <ul className="space-y-2">
                {hamper.contents.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <Package className="w-4 h-4 text-pink-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Features
              </h2>
              <ul className="space-y-2">
                {hamper.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <Gift className="w-4 h-4 text-pink-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium">Dimensions</p>
                <p>{hamper.dimensions}</p>
              </div>
              <div>
                <p className="font-medium">Weight</p>
                <p>{hamper.weight}</p>
              </div>
              <div>
                <p className="font-medium">Delivery</p>
                <p>{hamper.delivery}</p>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-gray-700">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded-md px-3 py-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors ${
                  addedToCart ? "bg-green-600" : "hover:bg-pink-700"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Heart className="w-5 h-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
