import { JSX } from "preact";

export function Hero(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      class={`${props.class} hero flex lg:max-w-screen-xl md:max-w-2xl`}
    >
      <div class="hero-content flex-col lg:flex-row-reverse max-w-[100rem]">
        <img
          alt="a13"
          src="/photos/citadel.jpg"
          class="w-screen lg:max-w-xl rounded-lg shadow-2xl mask mask-hexagon-2 rotate-30 mb-4"
        />
        <div class="flex flex-col lg:block max-w-[60rem]">
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
          <div class="flex justify-center items-center lg:block">
            <a href="mailto:salut+site@ai3.ro?subject=Înscriere în AI3" class="btn btn-primary bg-orange-300 hover:bg-orange-400 transition">
              Devino membru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
