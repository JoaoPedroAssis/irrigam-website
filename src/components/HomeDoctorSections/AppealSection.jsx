import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Button, Text } from "@switchdreams/ui";

import { imagePath } from "../../utils";

const AppealSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-16 bg-primary-500 py-36 max-lg:px-6">
      <div className="flex items-center justify-center sm:justify-between sm:gap-10">
        <Text className="font-quickSand text-5xl font-semibold text-white max-xl:text-4xl max-lg:text-center">
          Cuidado adaptado à sua realidade
        </Text>
      </div>
      <div className="flex items-center justify-between gap-8 max-xl:flex-col">
        <div className="flex items-center justify-center gap-6 ">
          <img
            src={imagePath("user.svg")}
            alt="ícone de pessoa de braços abertos"
            className="size-[55px]"
          />
          <div className="w-80 max-md:w-full">
            <div className="flex gap-1">
              <Text className="font-quickSand text-xl font-semibold text-white">No seu</Text>
              <Text className="font-quickSand text-xl font-semibold text-secondary-900">
                ritmo
              </Text>
            </div>
            <Text className="font-regular text-md font-poppins text-coolGray-200">
              Oferecemos um cuidado que respeite o seu ritmo, num ambiente confortável e acolhedor para o processo terapêutico.
            </Text>
          </div>
        </div>
        <div className="h-20 w-px bg-coolGray-200 max-xl:h-px max-xl:w-4/5" />
        <div className="flex items-center justify-center gap-6 ">
          <img
            src={imagePath("globe.svg")}
            alt="ícone com grupo de pessoas"
            className="size-[55px]"
          />
          <div className="w-80 max-md:w-full">
            <div className="flex gap-1">
              <Text className="font-quickSand text-xl font-semibold text-white">Onde você</Text>
              <Text className="font-quickSand text-xl font-semibold text-secondary-900">
                estiver
              </Text>
            </div>
            <Text className="font-regular text-md font-poppins text-coolGray-200">
            Atendimento online de qualidade, valorizando seu conforto e liberdade geográfica.
            </Text>
          </div>
        </div>
        <div className="h-20 w-px bg-coolGray-200 max-xl:h-px max-xl:w-4/5" />
        <div className="flex items-center justify-center gap-6 ">
          <img src={imagePath("clock.svg")} alt="Ícone de estetoscópio" className="size-[55px]" />
          <div className="w-80 max-md:w-full">
            <div className="flex gap-1">
              <Text className="font-quickSand text-xl font-semibold text-white">A qualquer</Text>
              <Text className="font-quickSand text-xl font-semibold text-secondary-900">
                hora
              </Text>
            </div>
            <Text className="font-regular text-md font-poppins text-coolGray-200">
              Ao agendar o seu horário levamos em conta o seu fuso, para que você não tenha que se preocupar com isso.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppealSection;
