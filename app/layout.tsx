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
  title: "Plearn Cargo - บริการนำเข้าสินค้าครบวงจร",
  description: "บริการนำเข้าสินค้าจากต่างประเทศ ครบวงจร รวดเร็ว เชื่อถือได้",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className={`${prompt.variable} font-prompt`}>
        {children}
      </body>
    </html>
  )
}
