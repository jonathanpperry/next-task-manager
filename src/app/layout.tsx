import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";
import { ClerkProvider, auth } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Task Manager",
  description: "Task manager app generated from create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={inter.className}>
          <ContextProvider>
            <GlobalStyleProvider>
              {userId && <Sidebar />}
              <div className="w-full">{children}</div>
            </GlobalStyleProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}