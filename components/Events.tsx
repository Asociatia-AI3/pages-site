import { JSX } from "preact";
import Title from "./Title.tsx";
import Paragraph from "./Paragraph.tsx";

export function Events(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <section
        {...props}
        class={`${props.class} bg-white px-4 lg:px-0 p-8 w-full flex justify-center md:max-w-2xl lg:max-w-7xl md:px-0`}
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <h1 class="text-4xl font-bold pb-4">Acțiunile noastre</h1>
          <div class="pb-4">
            <figure>
              <blockquote class=" leading-6 text-gray-900  sm:text-lg sm:leading-6 w-full lg:w-2/3">
                <Title>Ateliere și Anti-Ateliere</Title>
                <Paragraph>
                  <>
                    Ne întâlnim în fiecare Joi de la ora 18:00. La <strong>Ateliere</strong> facem schimb de know-how tehnic,
                    la centrul <a href="https://maps.app.goo.gl/EHSHyNzvwVYskex77" target="_blank" title="Centru Conventum"
                          class="text-base leading-6 tracking-tight lg:text-lg text-blue-500 hover:text-blue-600 transition">Conventum</a>, 
                    în săptămânile impare. La <strong>Anti-Ateliere</strong>, în săptămânile pare, socializăm informal la &nbsp;
                    <a href="https://maps.app.goo.gl/aZ3hJtaeMQJTbYobA" target="_blank" title="Framm's"
                          class="text-base leading-6 tracking-tight lg:text-lg text-blue-500 hover:text-blue-600 transition">framm's</a>.
                  </>
                </Paragraph>
              </blockquote>
            </figure>
          </div>

          <div class="pb-4">
            <figure>
              <blockquote class=" leading-6 text-gray-900 sm:text-lg sm:leading-6 w-full lg:w-2/3">
                <Title>Festival Digital</Title>
                <Paragraph>
                  <>
                   Te invităm să explorezi primul Festival Digital din
                    județul Alba, unde trecutul longeviv întâlnește manifestarea
                    artistică digitală în cel mai important oraș istoric din
                    România: Alba Iulia, Cealaltă Capitală.
                  </>
                </Paragraph>
              </blockquote>
            </figure>
          </div>

          <div>
            <figure class="flex flex-col lg:flex-row items-center gap-x-10">
              <div>
                <blockquote>
                  <Title>Coder Dojo</Title>
                  <Paragraph>
                    <>
                      CoderDojo este un club de programare pentru copii și adolescenți în care 
                      copiii (“ninjas” - între 7 și 17 ani) învață programare de la voluntari (“mentors”) 
                      din comunitatea locală.
                    </>
                  </Paragraph>
                  <Paragraph>
                    <>
                      Dojo-ul are loc în fiecare joi de la ora 16:00 &nbsp;
                      <a href="https://maps.app.goo.gl/rguUaLxb9ctmKuMg6" target="_blank" title="CoderDojo"
                          class="text-base leading-6 tracking-tight lg:text-lg text-blue-500 hover:text-blue-600 transition">pe strada Gladiolelor numărul 3A</a>, 
                      dar asigură-te că urmărești grupul de facebook pentru modificări de program.
                    </>
                  </Paragraph>
                  <div class="flex gap-x-1 ">
                    <Paragraph>
                      <>
                        Mai multe detalii pe{"  "}
                        <a
                          href="https://coderdojo.ai3.ro/despre/" target="_blank"
                          class="text-base leading-6 tracking-tight lg:text-lg text-blue-500 hover:text-blue-600 transition"
                        >
                          pagina oficială a Dojo-ului
                        </a>
                      </>
                    </Paragraph>
                  </div>
                </blockquote>
              </div>
              <div class="w-2/4">
                <img src="/photos/coderdojo.jpeg" alt="CoderDojo Alba Iulia" />
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
