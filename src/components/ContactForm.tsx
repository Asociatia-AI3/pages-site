import React, { useRef } from "react";
import { useState, type FormEvent } from "react";

export default function ContactForm({ buttonText }: { buttonText: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResponseMessage("Se trimite...");
    const formData = new FormData(e.target as HTMLFormElement);
    const query = `
      mutation ContactMutation($data: ContactFormCreateInput!){
        createContactForm(data: $data) {
          id
          name
          email
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
  }

  return (
    <div className="mx-auto py-16 md:py-0  md:px-8 lg:px-0">
      <form
        ref={formRef}
        onSubmit={submit}
        className="grid grid-cols-1 gap-y-6"
      >
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            id="name"
            autoComplete="name"
            placeholder=" "
            className="peer block w-full border border-gray-600 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950  ring-4 ring-transparent transition focus:border-accent focus:outline-none focus:ring-accent/5 rounded-2xl"
            type="text"
            name="name"
            required
            minLength={1}
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent"
          >
            Nume
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            id="email"
            autoComplete="email"
            placeholder=" "
            className="peer block w-full border border-gray-600 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950  ring-4 ring-transparent transition focus:border-accent focus:outline-none focus:ring-accent/5 rounded-2xl"
            type="email"
            name="email"
            required
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent"
          >
            Email
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <textarea
            id="message"
            placeholder=" "
            className="peer block w-full border border-gray-600 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950  ring-4 ring-transparent transition focus:border-accent focus:outline-none focus:ring-accent/5 rounded-2xl"
            name="message"
            required
            minLength={3}
          ></textarea>
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-6 top-1/2 -mt-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent"
          >
            Mesajul tau...
          </label>
        </div>

        <button className="px-7 py-3.5 border-2 border-darkBg text-darkBg hover:bg-darkBg hover:text-white transition block text-center rounded-2xl">
          {responseMessage === "" ? buttonText : responseMessage}
        </button>
      </form>
    </div>
  );
}
