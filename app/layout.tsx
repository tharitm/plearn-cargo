import type React from "react"
import "./globals.css"
import { Prompt } from "next/font/google"

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-prompt",
})

export const metadata = {
  title: "Plearn Cargo - บริการขนส่งสินค้าระหว่างประเทศครบวงจร",
  description: "Plearn Cargo ให้บริการนำเข้าสินค้าจากต่างประเทศ จัดส่งรวดเร็ว ปลอดภัย พร้อมระบบติดตามพัสดุ 24 ชั่วโมง และบริการสอนสั่งสินค้าจากจีนฟรี",
  keywords: ["นำเข้าสินค้า", "ขนส่งจีน", "ส่งของต่างประเทศ", "Plearn Cargo", "ติดตามพัสดุ", "shipping", "logistics", "สอนสั่งของจากจีน", "นำเข้าสินค้าจากจีน"],
  openGraph: {
    title: "Plearn Cargo - บริการขนส่งสินค้าระหว่างประเทศครบวงจร",
    description: "Plearn Cargo ให้บริการนำเข้าสินค้าจากต่างประเทศ จัดส่งรวดเร็ว ปลอดภัย พร้อมระบบติดตามพัสดุ 24 ชั่วโมง และบริการสอนสั่งสินค้าจากจีนฟรี",
    images: [{ url: "/images/plearn_logo.webp" }],
    type: "website",
    url: "https://www.plearncargo.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/plearn_logo.webp" type="image/webp" />
      </head>
      <body className={`${prompt.variable} font-prompt`}>
        {children}
      </body>
    </html>
  )
}
