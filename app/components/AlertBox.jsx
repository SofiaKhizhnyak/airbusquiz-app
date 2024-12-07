"use client";
import React from "react";
import { GrStatusGood, GrStatusWarning } from "react-icons/gr";
import { IoCloseCircleOutline } from "react-icons/io5";

function AlertBox({ msg, status, onClose }) {
  const statusIcon =
    status === "success" ? (
      <GrStatusGood color="green" />
    ) : (
      <GrStatusWarning color="red" />
    );

  return (
    <div
      role="alert"
      className="relative w-full rounded-xl border border-gray-100 bg-white p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 transition hover:text-gray-600 opacity-70"
      >
        <span className="sr-only">Dismiss popup</span>
        <IoCloseCircleOutline size={20} />
      </button>

      <div className="flex items-center justify-center gap-2 mt-4 pr-2 opacity-80">
        {statusIcon}
        <strong className="font-medium text-gray-900">{msg}</strong>
      </div>
    </div>
  );
}

export default AlertBox;
