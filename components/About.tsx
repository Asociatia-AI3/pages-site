import { JSX } from "preact/jsx-runtime";

export function About(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <section
        {...props}
        class={`${props.class} px-4 lg:px-0 p-8  w-full flex justify-center bg-gray-50 `}
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <figure class="mt-0 lg:mt-10 flex flex-auto flex-col justify-between">
                <blockquote class="text-lg leading-6 text-gray-900">
                  <div class="g:row-span-4 lg:w-72 text-2xl lg:text-4xl">
                    <h2 class="pb-2">
                      <b>Cine suntem</b>
                    </h2>
                  </div>
                  <p class="tracking-tight">
                    AI3 este o comunitate de pasionați de tehnologie,
                    antreprenori și inovatori pasionați de construirea unui
                    ecosistem tehnologic înfloritor în Alba. Suntem un grup
                    divers de oameni cu medii și experiențe diferite, dar
                    împărtășim cu toții aceeași viziune: să facem din Alba un
                    loc mai bun pentru a trăi și a lucra.
                  </p>
                </blockquote>
              </figure>
            </div>
            <div class="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <figure class="mt-0 lg:mt-10 flex flex-auto flex-col justify-between">
                <blockquote class="text-lg leading-6 text-gray-900">
                  <div class="lg:row-span-4  text-2xl lg:text-4xl">
                    <h2 class="pb-2">
                      <b>Obiectivele noastre</b>
                    </h2>
                  </div>
                  <p class="tracking-tight">
                    Obiectivele noastre sunt să promovăm și să dezvoltăm
                    scheme/instrumente de sprijin pentru companiile și
                    instituțiile din sectorul IT&C din județul Alba pentru
                    creșterea competitivității acestora la nivel național și
                    internațional, promovarea antreprenoriatului, identificarea
                    opțiunilor de carieră și reprezentare internațională a
                    ecosistemului IT local.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-20 flex items-center justify-center gap-x-6">
            <a
              href="#"
              class="rounded-md bg-blue-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Află mai multe...
            </a>
          </div>
        </div>
      </section>
    </>
  );
}