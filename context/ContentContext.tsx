import { ComponentChildren } from "preact";
import { createContext } from "preact";

// Define the ContentContext with a default value
export const ContentContext = createContext<{ content: any }>({
  content: null,
});

interface ContentProviderProps {
  children: ComponentChildren;
  content: string[]; // Replace 'any' with a more specific type if available
}

export function ContentProvider({ children, content }: ContentProviderProps) {
  return (
    <ContentContext.Provider value={{ content }}>
      {children}
    </ContentContext.Provider>
  );
}
