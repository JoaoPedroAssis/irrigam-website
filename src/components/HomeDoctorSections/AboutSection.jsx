import { Text } from "@switchdreams/ui";

const AboutSection = () => {
  return (
    <div
      id="video"
      className="relative flex w-full items-center justify-center gap-10 pt-10 max-lg:mb-10 max-lg:flex-col xl:h-[40rem]"
    >
      <div className="absolute right-0 top-0 w-1/5 rounded-l-2xl bg-secondary-75 max-lg:hidden max-lg:w-1/2 max-md:h-1/4 md:h-1/2 lg:h-3/5" />
      <div className="flex w-1/2 flex-col justify-center gap-5 py-20 max-lg:w-full max-lg:items-center max-lg:pb-5 max-lg:text-center lg:px-10 xl:px-24">
        <Text className="font-poppins text-lg font-semibold text-secondary-900">APRESENTAÇÃO</Text>
        <Text className="font-quickSand text-5xl font-semibold text-coolGray-950 max-lg:px-6 max-md:text-4xl">
          Conheça as soluções da nossa plataforma!
        </Text>
        <Text className="text-md font-regular font-poppins text-coolGray-600 max-lg:px-6">
          Descubra como o <b>viaconsultas</b> pode transformar sua clínica ou consultório,
          proporcionando uma alta captação de pacientes particulares de maneira acessível, rápida e
          conveniente. Assista ao nosso vídeo institucional e mergulhe em uma visão detalhada de
          como nossa plataforma pode impulsionar o crescimento e a visibilidade do seu negócio na
          área da saúde.
        </Text>
      </div>
      <iframe
        title="Vídeo Institucional"
        allow="fullscreen;"
        loading="lazy"
        className="z-10 h-[65%] w-2/5 rounded-3xl max-xl:h-80 max-lg:w-[85%]"
        src="https://www.youtube.com/embed/jeS2gUWy5CI"
      />
    </div>
  );
};

export default AboutSection;
