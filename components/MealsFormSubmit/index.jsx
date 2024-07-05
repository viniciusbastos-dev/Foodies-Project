"use client";

import React from "react";
import { useFormState } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = useFormState();
  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
};

export default MealsFormSubmit;
