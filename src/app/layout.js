import { Poppins } from "next/font/google";
import "./globals.css";
import { Head } from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Munni Welfare Foundation",
  description:
    "Munni Foundation is a beacon of hope and support for underprivileged girls, nestled in the heart of communities where poverty often overshadows dreams. Founded with a vision to empower and uplift, Munni Foundation tirelessly works towards providing opportunities and resources for girls who face economic hardships and social barriers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
