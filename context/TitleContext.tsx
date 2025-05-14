import { createContext } from "preact";
import { ComponentChildren } from "preact";

interface TitleContextProps {
  title: string;
}

export const TitleContext = createContext<TitleContextProps | null>(null);

export function TitleProvider(
  { children, title }: { children: ComponentChildren; title: string },
) {
  return (
    <TitleContext.Provider value={{ title }}>
      {children}
    </TitleContext.Provider>
  );
}
