
import HomeClient from "./components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | MyApp",
  description: "Welcome to MyApp homepage",
};

export default function Home() {
  return (
    <HomeClient /> 
  );
}