import { JSX } from "preact/jsx-runtime";

export function Footer(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <footer class="footer p-10 bg-base-200 text-base-content justify-items-center">
        <nav>
          <header class="footer-title">Asociație</header>
          <a class="link link-hover">Despre noi</a>
          <a class="link link-hover">Contact</a>
        </nav>
        <nav>
          <header class="footer-title">Legal</header>
          <a class="link link-hover">Termeni și condiții</a>
          <a class="link link-hover">Politică de securitate</a>
          <a class="link link-hover">Politică de cookies</a>
        </nav>
      </footer>
      <footer class="footer px-10 py-4 border-t bg-base-300 text-base-content border-base-300">
        <aside class="items-center grid-flow-col">
          <img src="/logos/ai3-ro.png" alt="AI3" class="max-h-24"></img>
          <p>
            Construit cu mândrie în Alba Iulia{" "}
            <br />Creșterea comunității îndrumată de tehnologie.
          </p>
        </aside>
      </footer>
    </>
  );
}
