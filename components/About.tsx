import { JSX } from "preact/jsx-runtime";
import Title from "./Title.tsx";
import Paragraph from "./Paragraph.tsx";

export function About(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <section
        {...props}
        class={`${props.class} px-4 lg:px-0 p-8 w-full flex justify-center bg-gray-50`}
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none md:grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <figure class="mt-0 lg:mt-10 flex flex-auto flex-col justify-between">
                <blockquote class="text-lg leading-6 text-gray-900">
                  <Title>Cine Suntem</Title>
                  <Paragraph>
                    <>
                      AI3 este o comunitate de pasionați de tehnologie, antreprenori și inovatori pasionați de construirea unui ecosistem tehnologic 
                      înfloritor în Alba. Împărtășim cu toții aceeași viziune: să facem din Alba un loc mai bun pentru a trăi și a lucra. AI3 este 
                       <strong>primul cluster de IT&C din Alba</strong>, asociație profesională fără scop lucrativ, neguvernamentală, apolitică.
                    </>
                  </Paragraph>
                </blockquote>
              </figure>
            </div>
            <div class="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <figure class="mt-0 lg:mt-10 flex flex-auto flex-col justify-between">
                <blockquote class="text-lg leading-6 text-gray-900">
                  <Title>Obiectivele Noastre</Title>
                  <Paragraph>
                    <>
                      AI3 își propune să propulseze Alba în topul județelor
                      inovatoare tehnologic prin creșterea competivității
                      companiilor și instituțiilor din sectorul IT&C din județul
                      nostru și prin promovarea antreprenoriatului,
                      identificarea opțiunilor de carieră și reprezentarea
                      internațională a comunității de IT locală.
                    </>
                  </Paragraph>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
