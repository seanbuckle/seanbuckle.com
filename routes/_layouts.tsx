import { ComponentChildren } from "preact";

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  );
}