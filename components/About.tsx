import { JSX } from "preact/jsx-runtime";

export function About(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      class={`${props.class} p-8 bg-base-200 w-full flex justify-center`}
    >
      {
        /* <div class="max-w-screen-xl">
        <h2 class="font-montserrat text-4xl mb-12">Cine suntem</h2>


         <div class="flex">
          <p class="grow max-w-xl">
            AI3 este o comunitate de pasionați de tehnologie, antreprenori și
            inovatori pasionați de construirea unui ecosistem tehnologic
            înfloritor în Alba. Suntem un grup divers de oameni cu medii și
            experiențe diferite, dar împărtășim cu toții aceeași viziune: să
            facem din Alba un loc mai bun pentru a trăi și a lucra.
          </p>
          <div>
            <p class="grow max-w-xl">
              <mark class="bg-blue-300 text-base-500">
                Anti-atelierele noastre periodice
              </mark>
              <br />
              De la întâlnirile noastre informale săptămânale până la sesiunile
              noastre de CoderDojo, vino cu noi să conturăm rolul județului Alba
              în ecosistemul tehnologic al regiunii.
            </p>
          </div>
      </div>
      </div> */
      }
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto w-full lg:mx-0 flex justify-center">
            <h2 class="w-full flex justify-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cine suntem
            </h2>
            <p class="mt-4 text-lg leading-8 text-gray-600">
              AI3 este o comunitate de pasionați de tehnologie, antreprenori și
              inovatori pasionați de construirea unui ecosistem tehnologic
              înfloritor în Alba. Suntem un grup divers de oameni cu medii și
              experiențe diferite, dar împărtășim cu toții aceeași viziune: să
              facem din Alba un loc mai bun pentru a trăi și a lucra.
            </p>
          </div>
          <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article class="flex max-w-xl flex-col items-start justify-start">
              <div class="flex items-center gap-x-4 text-xs">
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Anti-atelierele noastre periodice
                  </a>
                </h3>
                <p class="mt-5 text-sm leading-6 text-gray-600">
                  De la întâlnirile noastre informale săptămânale până la
                  sesiunile noastre de CoderDojo, vino cu noi să conturăm rolul
                  județului Alba în ecosistemul tehnologic al regiunii.
                </p>
              </div>
            </article>
            <article class="flex max-w-xl flex-col items-start justify-start">
              <div class="flex items-center gap-x-4 text-xs">
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Festival Digital
                  </a>
                </h3>
                <p class="mt-5 text-sm leading-6 text-gray-600">
                  Festival anual unde trecutul longeviv întâlnește manifestarea
                  artistică digitală în cel mai important oraș istoric din
                  România: Alba Iulia, Cealaltă Capitală.
                </p>
              </div>
            </article>
            <article class="flex max-w-xl flex-col items-start justify-start">
              <div class="flex items-center gap-x-4 text-xs">
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    CoderDojo
                  </a>
                </h3>
                <p class="mt-5  text-sm leading-6 text-gray-600">
                  CoderDojo este un club de informatică bazat pe voluntariat,
                  care se adresează copiilor cu vârste intre 7 si 17 ani.
                  Dojo-urile sunt un spațiu pentru copii și adolescenți pentru a
                  explora tehnologia într-un mediu informal, creativ, sigur și
                  social.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
