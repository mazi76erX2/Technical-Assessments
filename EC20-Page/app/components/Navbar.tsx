"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Bell, ChevronDown, User, Moon, Sun } from "lucide-react";
import { MenuItem } from "../types";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [notifications] = useState<number>(3);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Exchange",
      href: "#",
      submenu: [
        { label: "Spot Trading", href: "#" },
        { label: "Margin Trading", href: "#" },
        { label: "Liquidity Pools", href: "#" },
      ],
    },
    {
      label: "Markets",
      href: "#",
      submenu: [
        { label: "Top Gainers", href: "#" },
        { label: "New Listings", href: "#" },
        { label: "Market Cap", href: "#" },
      ],
    },
    {
      label: "Earn",
      href: "#",
      submenu: [
        { label: "Staking", href: "#" },
        { label: "Yield Farming", href: "#" },
        { label: "Referral Program", href: "#" },
      ],
    },
    {
      label: "Learn",
      href: "#",
    },
  ];

  const toggleDropdown = (label: string) => {
    if (dropdownOpen === label) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(label);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-2">
              <span className="font-bold text-white text-lg">M</span>
            </div>
            <span className="text-white font-bold text-xl">
              Mazi<span className="text-blue-500">Trade</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                      >
                        {item.label}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {dropdownOpen === item.label && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                          >
                            {item.submenu.map((subitem) => (
                              <a
                                key={subitem.label}
                                href={subitem.href}
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                role="menuitem"
                              >
                                {subitem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <div className="relative">
              <button className="text-gray-400 hover:text-white">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
            </div>

            <button className="flex items-center text-gray-300 hover:text-white">
              <User className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Account</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Connect
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-800 shadow-xl rounded-b-xl mt-2 border border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        <div className="flex justify-between items-center">
                          {item.label}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`}
                          />
                        </div>
                      </button>
                      {dropdownOpen === item.label && (
                        <div className="pl-4 pb-1 border-l border-gray-700 ml-3 mt-1">
                          {item.submenu.map((subitem) => (
                            <a
                              key={subitem.label}
                              href={subitem.href}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white"
                            >
                              {subitem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="text-gray-400 hover:text-white">
                    <Bell className="h-6 w-6" />
                  </button>
                  <button
                    className="text-gray-400 hover:text-white"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {darkMode ? (
                      <Sun className="h-6 w-6" />
                    ) : (
                      <Moon className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
