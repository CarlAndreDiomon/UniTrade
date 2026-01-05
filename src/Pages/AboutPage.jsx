import { ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 pb-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/home"
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <ArrowLeft className="size-6 text-gray-600" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">About UniTrade</h1>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div className="flex justify-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <Info className="size-12 text-blue-600" />
            </div>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">UniTrade</strong> is a dedicated
              marketplace for students to buy and sell school essentials like
              uniforms, textbooks, and other academic materials.
            </p>
            <p>
              We make connecting easy: simply post your item, and interested
              buyers can click the <strong>"Inquire"</strong> button to be
              instantly redirected to your Facebook Messenger for a seamless
              transaction.
            </p>
            <p>
              Our mission is to foster a helpful and vibrant community where
              students can support each other by making school supplies more
              accessible and affordable.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
              <li>Buy & Sell Uniforms and School Materials</li>
              <li>Direct "Inquire" to Facebook Messenger</li>
              <li>Student social feed</li>
              <li>Secure Authentication</li>
            </ul>
          </div>

          <div className="pt-4 text-center text-sm text-gray-400">
            <p>Version 1.0.0</p>
            <p>
              &copy; {new Date().getFullYear()} UniTrade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
