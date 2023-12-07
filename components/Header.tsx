import { JSX } from "preact";

export function Header(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section {...props} class={`${props.class} flex justify-center items-center px-8 lg:px-16 lg:py-16`}>
      <div class="grow flex justify-start">
        <img src="/logos/ai3-ro.png" alt="AI3" class="max-h-32"></img>
      </div>
      <div>
      </div>
    </section>
  );
}
