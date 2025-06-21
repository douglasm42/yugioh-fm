import type { Metadata } from "next";
import { Lato, Roboto_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Content from "@/components/content/Content";
import Footer from "@/components/footer/Footer";
import NavbarItem from "@/components/header/NavbarItem";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['100', '300', '400']
})

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: '100'
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: '300'
})

export const metadata: Metadata = {
  title: "Yu-Gi-Oh: FM - Helper",
  description: "Helper guide for Yu-Gi-Oh Forbidden Memories",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${robotoSlab.variable} ${robotoMono.variable}`}>
        <div className="container">
          <Header>
            <NavbarItem title="Home" href="/" />
            <NavbarItem title="Drops" href="/drops" />
            <NavbarItem title="Cards" href="/cards" />
            <NavbarItem title="Fusions" href="/fusions" />
          </Header>
          <Content>
            {children}
          </Content>
          <Footer />
        </div>
      </body>
    </html>
  )
}
