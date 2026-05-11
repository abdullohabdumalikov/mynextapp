import ContactClient from "../components/ContactsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page ",
    description: "Get in touch with us",
};
export default function Contact() {



    return (
        <ContactClient />
    )
}