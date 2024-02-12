import { useState } from "react";
import MembershipForm from "./MembershipForm";

export default function ShowModal() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        DEVINO MEMBRU
      </button>
      <dialog
        id="my_modal_2"
        className="modal"
      >
        <div className="modal-box">
          <h2 className=" dark:text-gray-50 pb-6">
            Avem nevoie doar de câteva informații iar noi te vom contacta în cel
            mai scurt timp!
          </h2>
          <MembershipForm buttonText="Trimite" />
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button>Închide</button>
        </form>
      </dialog>
    </>
  );
}
