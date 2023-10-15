import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nationality Predictor",
  description: "Nationality Prediction base on name of the person",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center mt-20 text-white bg-[#111010]">
        {children}
      </body>
    </html>
  );
}
