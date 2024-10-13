import { Button, Text } from "@switchdreams/ui";

import Lottie from "lottie-react";
import lottie from "../../utils/lottie.json";

const HeroSection = () => {
  return (
    <div className="relative flex h-auto w-full flex-col justify-center bg-primary-500 max-xl:items-center max-lg:pt-16 lg:w-[96%] lg:rounded-b-2xl xl:h-[39rem]">
      <div className="z-10 flex size-full flex-col justify-center gap-6 max-xl:items-center max-xl:px-6 xl:absolute xl:w-3/5 xl:pl-32 2xl:w-3/5 3xl:w-1/2">
        <Text className="font-poppins text-xl font-semibold text-secondary-800 max-xl:mt-16">
          Coletivo de Psicologia Irrigam
        </Text>
        <Text className="font-quickSand text-6xl font-semibold leading-snug text-white max-xl:text-center">
        Cuidado psicológico voltado para brasileiros no exterior
        </Text>
        <div className="flex flex-col gap-5">
          <Text className="font-regular text-md font-poppins text-coolGray-300 max-xl:text-center">
           Fornecemos um espaço acolhedor e respeitoso, onde você pode expressar suas preocupações e desafios, com um olhar que valoriza a sua identidade cultural.
          </Text>
        </div>
        <div className="mt-4 flex w-full gap-4 max-xl:flex-col xl:w-4/5">
          <a href="#form" className="w-full xl:w-4/5">
            <Button
              label="Entre em contato"
              className="flex rounded-2xl bg-secondary-600 px-9 py-2 font-poppins text-sm font-medium text-white duration-500 hover:bg-secondary-900"
            />
          </a>
        </div>
      </div>
      {/* <img
        src={imagePath("logo_azul.svg")}
        width="600px"
        className="z-5 bottom-7 right-7 xl:absolute"
        alt="Mapa do Brasil formado por raízes em azul"
      /> */}
      <div>
        <Lottie
            animationData={lottie}
            loop={true}
            autoplay={true}
            className="z-5 bottom-7 right-7 xl:absolute"
            style={{height: 600}}
          />
      </div>
    </div>
  );
};

export default HeroSection;
