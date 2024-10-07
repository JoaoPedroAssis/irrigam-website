import { Bars3Icon } from "@heroicons/react/24/outline";
import { Text } from "@switchdreams/ui";
import { useState } from "react";
import { imagePath } from "../../../utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const HeaderLinksDesktop = () => {
    return (
      <div className="flex h-8 w-fit flex-none items-center justify-center gap-6 border-r px-10">
        <a href="#about">
          <Text className="font-poppins text-sm font-medium text-coolGray-600 opacity-80 duration-500">
            Quem somos
          </Text>
        </a>
        <a href="/">
          <Text className="font-poppins text-sm font-medium text-coolGray-600 opacity-80 duration-500">
            Sou paciente
          </Text>
        </a>
        <Text
          className="cursor-pointer text-sm font-medium text-coolGray-600 duration-500 hover:text-primary-600"
          onClick={() => (window.location.href = "https://wa.me/61996652148")}
        >
          Contato
        </Text>
      </div>
    );
  };

  const HeaderLinksMobile = () => {
    return (
      <div className="mb-4 flex w-full flex-col">
        <a href="#about" className="mt-8 flex w-full justify-between">
          <Text className="font-poppins text-sm font-medium text-coolGray-600 opacity-70 duration-500">
            Quem somos
          </Text>
        </a>
        <a href="/" className="mt-8 flex w-full justify-between">
          <Text className="font-poppins text-sm font-medium text-coolGray-600 opacity-70 duration-500">
            Sou paciente
          </Text>
        </a>
        <div
          className="mt-8 flex w-full justify-between"
          onClick={() => {
            setOpen(false);
            window.location.href = "https://wa.me//61996652148";
          }}
        >
          <Text className="text-sm font-medium text-coolGray-600 duration-500">Contato</Text>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed top-0 z-40 w-full">
        <div className="flex h-20 items-center justify-between border-b bg-white px-6 md:px-28">
          <div className="h-8 w-40 cursor-pointer">
            <img
              src={imagePath("logo_text_vector.svg")}
              className="size-full"
              onClick={() => (window.location.href = "/")}
              alt="logo"
            />
          </div>
          <Bars3Icon
            className="size-8 cursor-pointer lg:hidden"
            onClick={() => setOpen(!open)}
          />
          <div className="flex w-fit items-center justify-between gap-6 max-lg:hidden">
            {HeaderLinksDesktop()}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 z-20 size-full bg-gray-500 opacity-40 lg:hidden ${
          !open && "hidden"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div
        className={`fixed z-40 mt-20 flex ${open ? "h-80" : "h-0"} w-full flex-col items-center gap-6 overflow-hidden rounded-b-2xl bg-white px-8 duration-500 ease-in-out md:px-28 lg:hidden`}
      >
        {HeaderLinksMobile()}
      </div>
    </>
  );
};

export default Navbar;