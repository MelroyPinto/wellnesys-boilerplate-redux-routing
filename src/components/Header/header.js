import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "src/utils/navigation";
import { Link } from "react-router-dom";
import { IMAGES } from "src/assets/images";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenu = () => (
    <Dialog
      as="div"
      className="lg:hidden font-body bg-zinc-300"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-zinc-300">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="-m-1.5 p-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Wellnesys</span>
            <img
              src={IMAGES.logo}
              alt="wellnesys logo"
              width="60px"
              height="60px"
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50 font-normal"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );

  const desktopMenu = () => (
    <nav
      className="lg:w-4/5 lg:m-auto flex items-center justify-between p-6 lg:px-8 font-body"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link to="/" className="w-56">
          <span className="sr-only">wellnesys Global</span>
          <img
            src={IMAGES.logo}
            alt="wellnesys logo"
            width="60px"
            height="60px"
          />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-sm font-semibold leading-6 text-gray-900 font-body font-normal"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
  return (
    <header className="inset-x-0 top-0 z-50">
      {desktopMenu()}
      {mobileMenu()}
    </header>
  );
};

export default Header;
