"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const GoBackHistoryBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="font-bold hover:text-wild-blue-yonder"
    >
      Go Back
    </button>
  );
};

export default GoBackHistoryBtn;
