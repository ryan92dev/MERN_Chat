import React from "react";

const Chat = () => {
  return (
    <>
      <div className="w-full mb-6 sm:w-96">
        <div className="py-4 pl-4 pr-8 mb-3 bg-gray-600 rounded-2xl">
          <p className="flex justify-start mb-1">
            <span className="text-xs font-semibold tracking-wide text-gray-400">
              Ryan Pereira
            </span>
          </p>
          <p className="text-xs font-medium leading-normal text-gray-300">
            Auctor urna, varius duis suspendisse mi in dictum. Interdum egestas
            ut porttitor tortor aliquet massa.
          </p>
          <p className="flex justify-end mt-1">
            <span className="text-xs font-semibold text-gray-400">
              08:23 AM
            </span>
          </p>
        </div>
      </div>

      <div className="w-full mb-6 ml-auto sm:w-72">
        <div className="py-4 pl-4 pr-8 mb-3 bg-blue-500 rounded-2xl">
          <p className="flex justify-start mb-1">
            <span className="text-xs font-semibold tracking-wide text-gray-400">
              Ryan Pereira
            </span>
          </p>
          <p className="text-xs font-medium leading-normal text-blue-50">
            Auctor urna, varius duis suspendisse mi in dictum
          </p>
          <p className="flex justify-end">
            <span className="text-xs font-semibold text-gray-400">
              08:23 AM
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Chat;
