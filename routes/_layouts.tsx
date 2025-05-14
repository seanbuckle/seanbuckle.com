import { ComponentChildren } from "preact";
import { Footer } from "../components/Footer.tsx";
import { useContext } from "preact/hooks";
import { TitleContext } from "../context/TitleContext.tsx";

interface LayoutProps {
  children: ComponentChildren;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const context = useContext(TitleContext);
  return (
    <>
      {children}
      <Footer title={context?.title} />
    </>
  );
}
