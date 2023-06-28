"use client";

import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

type Inputs = { email: string };
type ModalToggleType = { checked: boolean };

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [submitting, setSubmitting] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const modalToggle = document.getElementById(
  //       "form_modal"
  //     ) as unknown as ModalToggleType;

  //     if (modalToggle) modalToggle.checked = true;
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitting(true);

    const email = data.email;

    await fetch("/api/form-submission", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    const modalToggle = document.getElementById(
      "form_modal"
    ) as unknown as ModalToggleType;

    if (modalToggle) modalToggle.checked = false;

    setSubmitting(false);
  };

  return (
    <>
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
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              })}
              className="rounded-md p-3"
            />

            {errors.email && (
              <span className="text-red-500">Invalid email</span>
            )}

            {!submitting && (
              <input type="submit" onClick={() => onSubmit} className="btn" />
            )}

            {submitting && (
              <div className="btn">
                <span className="loading loading-dots loading-md"></span>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
