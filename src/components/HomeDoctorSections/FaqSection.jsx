import { Text } from "@switchdreams/ui";
import NewFaqSection from "./NewFaqSection";

const FaqSection = () => {
  return (
    <div className="mb-40 max-w-screen-big max-xl:px-6 max-lg:w-full" id="faq">
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20 text-center ">
        <Text className="font-poppins text-lg font-semibold text-primary-500">
          PERGUNTAS FREQUENTES (FAQ)
        </Text>
        <Text className="font-quickSand text-5xl font-semibold text-coolGray-950 max-md:text-4xl">
          Tire suas dúvidas
        </Text>
        <Text className="text-md font-regular font-poppins text-coolGray-600">
        Boas vindas à nossa seção de Perguntas Frequentes! Aqui, reunimos as dúvidas mais comuns sobre os nossos serviços e o nosso trabalho no Irrigam. Sabemos que iniciar o processo de terapia em outro país pode trazer questionamentos, e queremos ajudar você a se sentir mais seguro e informado nessa jornada.
        </Text>
      </div>
      <NewFaqSection />
    </div>
  );
};

export default FaqSection;
