import React, { useRef } from "react";
import { useState, type FormEvent } from "react";

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
  }

  return (
    <div className="mx-auto max-w-lg lg:max-w-none">
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
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950 dark:text-gray-200 ring-4 ring-transparent transition focus:border-blue-600 focus:outline-none focus:ring-blue-600/5 rounded-2xl"
            type="text"
            name="name"
            required
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-blue-600"
          >
            Nume
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            id="email"
            autoComplete="email"
            placeholder=" "
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950 dark:text-gray-200 ring-4 ring-transparent transition focus:border-blue-600 focus:outline-none focus:ring-blue-600/5 rounded-2xl"
            type="text"
            name="email"
            required
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-blue-600"
          >
            Email
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <input
            id="phone"
            autoComplete="phone"
            placeholder=" "
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950 dark:text-gray-200 ring-4 ring-transparent transition focus:border-blue-600 focus:outline-none focus:ring-blue-600/5 rounded-2xl"
            type="text"
            name="phone"
            required
          />
          <label
            htmlFor="phone"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-blue-600"
          >
            Număr de telefon
          </label>
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <textarea
            id="message"
            placeholder=" "
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950 dark:text-gray-200 ring-4 ring-transparent transition focus:border-blue-600 focus:outline-none focus:ring-blue-600/5 rounded-2xl"
            name="message"
            required
          ></textarea>
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-6 top-1/2 -mt-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-blue-600"
          >
            Mesajul tau...
          </label>
        </div>

        <div>
          <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            {responseMessage === "" ? buttonText : responseMessage}
          </button>
        </div>
      </form>
    </div>
  );
}
