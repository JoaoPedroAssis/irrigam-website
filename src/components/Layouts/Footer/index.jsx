import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Text } from "@switchdreams/ui";

import { imagePath } from "../../../utils";

const Footer = () => {

  return (
    <div className="bottom-0 flex w-full flex-col items-center justify-center gap-10 bg-primary-500 px-20 py-16 max-xl:flex-col max-xl:p-5 md:h-fit">
      <div className="flex w-full items-center max-lg:flex-col max-lg:gap-6 md:justify-between">
        <img height={100} src={imagePath("logo_text_vector.svg")} alt="Logo via consultas no rodapé" />
        <div className="flex gap-4 max-lg:gap-8">
          <a href="https://www.instagram.com/irrigampsi" target="_blank" rel="noreferrer">
            <img
              src={imagePath("Instagram.png")}
              className="size-6"
              alt="Logo da plataforma instagram"
            />
          </a>
        </div>
      </div>
      <div className="w-full border border-primary-400 max-md:w-[70%]" />
      <div className="flex w-full items-center md:justify-between">
        <Text className="font-poppins text-xs text-gray-200 max-lg:hidden">
          © 2024 Irrigam. Todos os direitos reservados
        </Text>
        <div className="flex gap-6 max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <div className="flex gap-2 font-semibold text-white">
            <PhoneIcon className="size-6" />
            <a href="https://wa.me/61991897450">
              <Text className="font-poppins">+55 (61) 99189-7450</Text>
            </a>
          </div>
          <div className="flex gap-2 font-semibold text-white">
            <EnvelopeIcon className="size-6" />
            <Text className="font-poppins">irrigamcoletivopsi@gmail.com</Text>
          </div>
        </div>
      </div>
      <Text className="text-center font-poppins text-sm text-gray-200 lg:hidden">
        © 2024 Irrigam. Todos os direitos reservados
      </Text>
    </div>
  );
};

export default Footer;
