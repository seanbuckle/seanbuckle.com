import { ComponentChildren } from "preact";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

interface LayoutProps {
  children: ComponentChildren;
  title: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
