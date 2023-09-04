
"use client"; // Using client-side rendering

import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react';
import { Fragment } from 'react';

import IconButton from '@/components/ui/icon-button';

// Define the props interface for the Modal component
interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

// Define the Modal component as a functional component
const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children
}) => {
    return (
        <Transition show={open} appear as={Fragment}>
            {/* Modal dialog */}
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                {/* Background overlay */}
                <div className="fixed inset-0 bg-black bg-opacity-50" />

                {/* Modal content */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">

                        {/* Transition animation */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {/* Modal panel */}
                            <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                                {/* Close button */}
                                <div className="absolute right-4 top-4">
                                    <IconButton onClick={onClose} icon={<X size={15} />} />
                                </div>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
};

// Export the Modal component as the default export
export default Modal;
