import { JSX } from "preact";

export function Events(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <section
        {...props}
        class={`${props.class} p-2 bg-white flex justify-center`}
      >
        <div class="relative mx-auto max-w-2xl py-0 sm:py-32 lg:max-w-6xl">
          <figure class="grid grid-cols-1  items-center gap-x-10 gap-y-4 lg:gap-x-10">
            <div class="relative col-span-2 lg:col-start-1 lg:row-start-2">
              <blockquote class=" leading-6 text-gray-900  sm:text-lg sm:leading-6">
                <div class="w-16 lg:row-span-4 lg:w-72 sm:text-2xl leading-10">
                  <h2>
                    <b>Anti-atelierele</b>
                  </h2>
                </div>
                <br />
                noastre periodice au loc în fiecare joi de la ora 18:00, la
                Framm’s.
                <p>
                  De la întâlnirile noastre informale săptămânale până la
                  sesiunile noastre de CoderDojo, vino cu noi să discutăm
                  diferite strategii de îmbunătățire și planificare a
                  proiectelor și evenimentelor conturând rolul județului Alba în
                  ecosistemul tehnologic al regiunii.
                </p>
              </blockquote>
            </div>
            <div class=" col-end-1 w-16 lg:row-span-6 lg:w-72 w-full">
              <h2>Framm's</h2>
              <p>
                <strong>Strada Păcii 13, Alba Iulia 510009</strong>
              </p>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
