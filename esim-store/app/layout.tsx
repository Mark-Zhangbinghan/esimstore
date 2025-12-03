import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh-CN">
      <head>
        <title>My eSIM Store</title>
      </head>
      <body>
        <Providers>
          {/* <Navbar /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
