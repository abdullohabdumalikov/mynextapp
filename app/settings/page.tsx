import type { Metadata } from "next";

import SettingsClient from "../components/SettingsClient";


export const metadata: Metadata = {
  title: "Settings | MyApp",
  description: "Manage your account settings and preferences",
};
 export default function Settings() {

  return (
    <SettingsClient />
  )
}