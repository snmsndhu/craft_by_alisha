import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Craft by Alisha
            </h3>
            <p className="text-black">
              Creating beautiful gift hampers for all occasions with love and
              care.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-black hover:text-pink-600"
                >
                  All Hampers
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-black hover:text-pink-600"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-pink-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black hover:text-pink-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="text-black hover:text-pink-600"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-black hover:text-pink-600"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-black hover:text-pink-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-black">
              <li>Email: info@craftbyalisha.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Gift Street, City, Country</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-black hover:text-pink-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-pink-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-pink-600"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-black">
          <p>
            &copy; {new Date().getFullYear()} Craft by Alisha. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
