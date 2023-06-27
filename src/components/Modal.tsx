"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

type Inputs = { email: string };
type ModalToggleType = {
  checked: boolean;
};

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    const modalToggle = document.getElementById(
      "form_modal"
    ) as unknown as ModalToggleType;

    if (modalToggle) {
      modalToggle.checked = false;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const modalToggle = document.getElementById(
        "form_modal"
      ) as unknown as ModalToggleType;

      if (modalToggle) modalToggle.checked = true;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <label htmlFor="form_modal" className="btn mb-6 w-full max-w-lg">
        <EnvelopeIcon className="h-6 w-6" />
        Share email
      </label>

      <input type="checkbox" id="form_modal" className="modal-toggle" />

      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box rounded-md">
          <h3 className="text-lg font-bold">Welcome to the SRM gallery 👀</h3>

          <p className="py-4">Sharing your email would be awesome 🔥</p>

          <form
            className="form-control gap-3"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="srm@gmail.com"
              {...register("email", { required: true })}
              className="rounded-md p-3"
            />

            {errors.email && <span>This field is required</span>}

            <input
              type="submit"
              onClick={() => onSubmit}
              className="btn mb-3"
            />
          </form>

          {/* <div className="modal-action m-0">
            <label htmlFor="form_modal" className="btn w-full">
              Close
            </label>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
