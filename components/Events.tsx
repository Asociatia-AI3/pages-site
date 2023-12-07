import { JSX } from "preact";

export function Events(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <section
        {...props}
        class={`${props.class} bg-white pt-10 max-w-[1600px] flex flex-col items-center px-12`}
      >
        <div class="gap-x-12 flex items-center justify-center">
          <figure class="flex items-center gap-x-10 gap-y-4 lg:gap-x-12 ">
            <div class="flex">
              <img src="/photos/antiatelier.png" alt="anti-ateliere"/>
            </div>
            <div class="flex ">
              <blockquote class=" leading-6 text-gray-900  sm:text-lg sm:leading-6">
                <p class="text-md lg:text-xl tracking-tight"> <b class="text-blue-500 tracking-normal">Anti-atelierele </b>noastre periodice au loc în fiecare joi de la ora 18:00, la
                Framm’s.</p>
                <p class="text-md lg:text-xl tracking-tight max-w-[1280px]">
                  De la întâlnirile noastre informale săptămânale până la
                  sesiunile noastre de CoderDojo, vino cu noi să discutăm
                  diferite strategii de îmbunătățire și planificare a
                  proiectelor și evenimentelor conturând rolul județului Alba în
                  ecosistemul tehnologic al regiunii.
                </p>
              </blockquote>
            </div>
            <div class="flex flex-col w-16 lg:w-72 w-full text-lg">
              <h2 class="w-full lg:w-16 lg:row-span-4 lg:w-72 sm:text-2xl leading-10 font-semibold tracking-wide">Unde?</h2>
              <a href="https://framms.ro/" class="text-blue-500 font-medium hover:text-blue-600 transition" >Framm's</a>
              <p class="font-medium">
                Strada Păcii 13, Alba Iulia
              </p>
            </div>
          </figure>
        </div>

        <div class="gap-x-12 flex items-center justify-center pt-12">
          <figure class="flex items-center gap-x-10 gap-y-4 lg:gap-x-12 ">
            <div class="flex">
              <blockquote class=" leading-6 text-gray-900  sm:text-lg sm:leading-6">
                <div>
                  <p class="text-md lg:text-xl tracking-tight max-w-[1300px]">
                  <span class="font-semibold text-blue-500">AI3</span> plănuiește să organizeze o conferință anuală în care oricine poate rezerva un stand 
                  și poate aduce ceva nou și inovator, precum hackathon, speakeri, prezentări care vor 
                  aduce un nou nivel de experiență participanților.
                  </p>
                </div>
                <div class="flex justify-end mt-6">
                  <button class="rounded-md bg-blue-300 px-3.5 py-2.5 text-md font-medium text-black shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">În curând</button>
                </div>
              </blockquote>
            </div>
            <div class="flex flex-col w-16 lg:w-72 w-full">
            </div>
            <div>
              <img src="/photos/antiatelier.png" alt="anti-ateliere"/>
            </div>
          </figure>
        </div>

        <div class="gap-x-12 pt-12 w-full">
          <figure class="flex gap-x-10 gap-y-4 lg:gap-x-12">
            <div class="flex flex-2">
              <blockquote class=" leading-6 text-gray-900  sm:text-lg sm:leading-6">
                <div class="pb-6 text-blue-500">
                  <h1 class="text-4xl font-medium">Coder Dojo</h1>
                </div>
                <div class="flex flex-col text-md lg:text-xl tracking-tight ">
                  <p class="pb-2 ">
                    CoderDojo este un club de informatică bazat pe voluntariat, care se adresează copiilor cu 
                    vârste intre 7 si 17 ani.
                  </p>
                  <p class="pb-2">
                    Dojo-urile sunt un spațiu pentru copii și adolescenți pentru a explora tehnologia într-un 
                    mediu informal, creativ, sigur și social. La CoderDojo vrem să ajutăm copiii și adolescenții 
                    să realizeze că își pot construi un viitor pozitiv prin programare.
                  </p>
                  <p class="pb-6">
                    Mișcarea CoderDojo consideră că înțelegerea limbajelor de programare este din ce în 
                    ce mai importantă în lumea modernă, că este mai bine și mai ușor să înveți aceste abilități 
                    devreme și că nimănui nu ar trebui să i se refuze oportunitatea de a face acest lucru.
                  </p>
                  <p class="mb-8">Mai multe detalii pe <a href="https://www.facebook.com/coderdojoalbaiulia/" class="text-blue-500 font-medium hover:text-blue-600 transisiton">facebook</a>.</p>
                </div>
              </blockquote>
            </div>
            <div class="w-[40rem]">
              <img src="/photos/coderdojo.jpeg" alt="anti-ateliere"/>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
