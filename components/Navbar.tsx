"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import CartIcon from "./CartIcon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-pink-600">
            Craft by Alisha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-600 hover:text-pink-600"
            >
              All Hampers
            </Link>
            <Link
              href="/categories"
              className="text-gray-600 hover:text-pink-600"
            >
              Categories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-pink-600">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-pink-600">
              Contact
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-pink-600">
              <User className="w-5 h-5" />
            </Link>
            <CartIcon />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-pink-600">
              <User className="w-5 h-5" />
            </Link>
            <CartIcon />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-pink-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/products"
              className="block text-gray-600 hover:text-pink-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              All Hampers
            </Link>
            <Link
              href="/categories"
              className="block text-gray-600 hover:text-pink-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-pink-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-pink-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="block text-gray-600 hover:text-pink-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Account</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
