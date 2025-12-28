"use client";

import React from "react";
import { ArrowRight, Shield, Zap, RefreshCw } from "lucide-react";
import { Feature } from "../types";

const Hero: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Secure Transactions",
      description: "Industry-leading security protocols for your ERC20 tokens",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Lightning Fast",
      description:
        "Execute trades in milliseconds with our optimized smart contracts",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      title: "Auto-Compounding",
      description:
        "Maximize your yields with automated reinvestment strategies",
    },
  ];

  return (
    <div className="bg-gray-900 pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            <span className="block">Trade ERC20 Tokens</span>
            <span className="block text-blue-500">With Confidence</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Experience the next generation of decentralized token trading. Fast,
            secure, and powerful tools for the modern crypto trader.
          </p>

          <div className="mt-10 flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-900 rounded-md">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
