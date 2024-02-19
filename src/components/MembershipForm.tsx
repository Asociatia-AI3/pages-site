import React, { useRef } from "react";
import { useState, type FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MembershipForm({ buttonText }: { buttonText: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResponseMessage("Se trimite...");
    const formData = new FormData(e.target as HTMLFormElement);
    const query = `
      mutation MembershipMutation($data: MembershipFormCreateInput!){
        createMembershipForm(data: $data) {
          id
          name
          email
          phone
          message
        }
      }
    `;
    await fetch("http://localhost:3000/api/graphql", {
      method: "POST",
      body: JSON.stringify({
        query,
        variables: {
          data: {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
          },
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setResponseMessage("");
    if (formRef.current) {
      formRef.current.reset();
    }
    toast.success("Mesajul tău a fost trimis cu succes!");
  }

  return (
    <div className="mx-auto px-8 sm:px-0 lg:max-w-lg">
      <form
        ref={formRef}
        onSubmit={submit}
        className="grid grid-cols-1 md:mx-auto gap-y-6 rounded-lg shadow-custom px-4 sm:px-12 py-16 max-w-xl  relative z-40 bg-white"
      >
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            id="name"
            autoComplete="name"
            placeholder=" "
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950  ring-4 ring-transparent transition focus:border-accent focus:outline-none focus:ring-accent/5 rounded-2xl"
            type="text"
            name="name"
            required
            minLength={1}
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500  transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent"
          >
            Nume
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            id="email"
            autoComplete="email"
            placeholder=" "
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950  ring-4 ring-transparent transition focus:border-accent focus:outline-none focus:ring-accent/5 rounded-2xl"
            type="email"
            name="email"
            required
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500  transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent"
          >
            Email
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            id="phone"
            autoComplete="phone"
            placeholder=" "
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-accent focus:outline-none focus:ring-accent/5 rounded-2xl"
            type="tel"
            name="phone"
            required
          />
          <label
            htmlFor="phone"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent"
          >
            Număr de telefon
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <textarea
            id="message"
            placeholder=" "
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950  ring-4 ring-transparent transition focus:border-accent focus:outline-none focus:ring-accent/5 rounded-2xl"
            name="message"
            required
            minLength={3}
          ></textarea>
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-6 top-1/2 -mt-6 origin-left text-base/6 text-neutral-500  transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent"
          >
            Mesaj
          </label>
        </div>

        <div className="grid">
          <button className="rounded-lg bg-accent max-w-none hover:bg-accent/90 px-7 py-3.5 text-sm text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {responseMessage === "" ? buttonText : responseMessage}
          </button>
          <a
            href="/Statut_AI3.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium mx-auto mt-4  group leading-6 text-accent  flex items-center gap-x-2 rounded-lg shadow-custom  px-4 py-2"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                ></path>
              </svg>
            </span>
            <span className="group-hover:underline">Statut AI3</span>
          </a>
        </div>
      </form>
    </div>
  );
}
