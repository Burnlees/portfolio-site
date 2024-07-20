import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export const EmailSuccessful = ({ handleClose }) => {
  return (
    <div
      role="alert"
      className="alert alert-success fixed bottom-0 left-0 mt-4 ml-2 mb-2 p-4 text-sm flex items-center w-fit"
    >
      <FaCheckCircle className="mr-2" />
      <span>Message sent successfully.</span>
      <button
        onClick={handleClose}
        className="bg-transparent text-primary-900 w-fit"
      >
        <IoClose />
      </button>
    </div>
  );
};

export const EmailFailed = ({ handleClose }) => {
  return (
    <div
      role="alert"
      className="alert alert-error fixed bottom-0 left-0 mt-4 ml-2 mb-2 p-4 text-sm flex items-center w-fit"
    >
      <MdErrorOutline className="mr-2" />
      <span>Error! Message failed to send.</span>
      <button
        onClick={handleClose}
        className="bg-transparent text-primary-900 w-fit"
      >
        <IoClose />
      </button>
    </div>
  );
};
