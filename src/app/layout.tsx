import "../styles/globals.css";
import "../styles/reset.css";

import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

import { env } from "@/env";
import MobileLayout from "@/layout/Mobile/MobileLayout";
import { MSWProvider } from "@/lib/MSWProvider";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import { cn } from "@/utils/cn";

import { Pretendard } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className={Pretendard.variable}>
      <body className={cn(Pretendard.className)} suppressHydrationWarning>
        <MSWProvider>
          <ReactQueryProvider>
            <MobileLayout>
              <Script
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
                strategy="beforeInteractive"
              />
              {children}
            </MobileLayout>
          </ReactQueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
