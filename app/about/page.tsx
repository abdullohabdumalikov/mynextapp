
import React from 'react'
import type { Metadata } from "next";
import AboutClient from "../components/AboutClient";


export const metadata: Metadata = {
  title: "About Us | MyApp",
  description: "Learn more about MyApp and our mission",
};

export default function About() {


  return (
    <AboutClient />
  )
}