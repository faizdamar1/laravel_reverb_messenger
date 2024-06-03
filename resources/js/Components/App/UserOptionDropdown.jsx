import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

export default function UserOptionDropdown({ conversation }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-black/40"
                >
                    <EllipsisVerticalIcon className='h-5 w-5' />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration 75"
                >

                </Transition>
            </div>
        </Menu>
    );
}