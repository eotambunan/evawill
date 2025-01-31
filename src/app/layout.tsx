'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyNavbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname()
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          {pathName === "/login" ? "" : <MyNavbar />}
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
