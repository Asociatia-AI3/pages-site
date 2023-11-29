import { JSX } from "preact";

export function Header(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section {...props} class={`${props.class} flex p-16`}>
      <div class="grow">
        <img src="/logos/ai3-ro.png" alt="AI3" class="max-h-32"></img>
      </div>
      <div>
      </div>
    </section>
  );
}
