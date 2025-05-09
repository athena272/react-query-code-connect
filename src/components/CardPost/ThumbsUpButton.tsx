"use client";

import { IconButton } from "../IconButton";
import { Spinner } from "../Spinner";
import { ThumbsUp } from "../icons/ThumbsUp";
import { useFormStatus } from "react-dom";

type ThumbsUpButtonProps = {
  disable?: boolean;
};

export default function ThumbsUpButton({ disable = false }: ThumbsUpButtonProps) {
  const { pending } = useFormStatus();

  return (
    <IconButton disabled={disable}>
      {pending ? <Spinner /> : <ThumbsUp />}
    </IconButton>
  );
}