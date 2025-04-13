import React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";

// Note: Both the dialog title & description are hidden
export const DialogComponent = ({ button, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {button}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2  w-[90vw] border-1 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title hidden className="m-0 text-[17px] font-medium">
            Article
          </Dialog.Title>
          <Dialog.Description
            hidden
            className="mb-5 mt-2.5 text-[15px] leading-normal"
          >
            Article
          </Dialog.Description>
          {children}

          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full hover:bg-gray-300 focus:outline-none transition-colors"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
