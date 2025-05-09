"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";
import { ArrowFoward } from "../icons/ArrowFoward";
import Button from "../Button";

type SubmitButtonProps = {
  children: ReactNode;
};

export default function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit">
      {pending ? (
        <Spinner />
      ) : (
        <>
          {children} <ArrowFoward />
        </>
      )}
    </Button>
  );
}