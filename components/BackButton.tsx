"use client";

import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>
        <FaArrowLeft className="text-white" size={24} />
      </button>
    </div>
  );
};

export default BackButton;
