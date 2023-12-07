import { JSX } from "preact";

export function Hero(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section {...props} class={`${props.class} hero flex max-w-screen-xl`}>
      <div class="hero-content flex-col lg:flex-row-reverse max-w-[100rem]">
        <img
          alt="a13"
          src="/photos/citadel.jpg"
          class="w-screen lg:max-w-xl rounded-lg shadow-2xl mask mask-hexagon-2 rotate-30 mb-4"
        />
        <div class="max-w-[60rem]">
          <h1 class="text-6xl font-extrabold">
            <mark class="bg-blue-300 text-base-500">
              Fuziune
            </mark>{" "}
            creativ-tehnologică{"  "}pentru dezvoltare durabilă.
          </h1>
          <p class="py-6">
            Vino în clusterul companiilor din industria IT&amp;C din județul
            tău!<br />Fii parte din peisajul inovativ din Alba!
          </p>
          <button class="btn btn-primary bg-orange-300 hover:bg-orange-400 transition">Devino membru</button>
        </div>
      </div>
    </section>
  );
}
