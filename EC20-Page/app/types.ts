import React from "react";

export interface MenuItemSimple {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItemSimple[];
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
