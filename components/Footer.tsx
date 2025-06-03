import { useContext } from "preact/hooks";
import { TitleContext } from "../context/TitleContext.tsx";

export function Footer() {
  const context = useContext(TitleContext);
  return (
    <footer class="site-footer">
      <p>&copy; {new Date().getFullYear()} {context?.title}</p>
      <div class="site-footer__links">
        <a href="https://github.com/seanbuckle/seanbuckle.com">Source</a>
      </div>
      
    </footer>
  );
}
