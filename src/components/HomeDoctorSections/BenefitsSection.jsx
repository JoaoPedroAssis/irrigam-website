import {
  UserGroupIcon,
  PuzzlePieceIcon,
  GlobeAmericasIcon,
  HeartIcon
} from "@heroicons/react/24/outline";
import { Text } from "@switchdreams/ui";

const Cells = [
  {
    icon: <GlobeAmericasIcon alt="ícone de uma televisão" />,
    name: "Apoio para Adaptação Cultural",
    description:
      "Sessões de psicoterapia individual para pessoas que enfrentam diferentes emocionais de viver em outro país.",
  },
  {
    icon: <HeartIcon alt="ícone de calendário" />,
    name: "Terapia Afirmativa",
    description:
      "Psicoterapia individual voltada para a população LGBTQIAP+ que vive no exterior, compreendendo as vivências desta comunidade nos diferentes contextos.",
  },
  {
    icon: <UserGroupIcon alt="ícone de cursor do mouse" />,
    name: "Valorização da diversidade",
    description:
      "Atendimentos qualificados para trabalhar com as diferentes questões que atravessam as experiências de pessoas de variados gêneros, sexualidades, raças e etnias.",
  },
  {
    icon: <PuzzlePieceIcon alt="ícone de ferramentas" />,
    name: "Atenção ao luto",
    description:
      "Acompanhamento voltado às perdas significativas referentes aos diversos contextos vividos no processo migratório.",
  },
];

const BenefitsSection = () => {
  return (
    <div className="flex max-w-screen-big flex-col items-center gap-10 md:py-32" id="diferenciais">
      <div className="flex w-full flex-col items-center justify-center gap-5 text-center">
        <Text className="font-poppins text-lg font-semibold text-primary-500 max-xl:mt-16">
          DIFERENCIAIS
        </Text>
        <Text className="font-quickSand text-5xl font-semibold text-coolGray-950">
          Psicoterapia com um olhar culturalmente sensível
        </Text>
        <Text className="text-md font-regular w-[55%] font-poppins text-coolGray-600">
        Oferecemos o serviço de psicoterapia individual online para adultos, focado em apoiar a saúde mental de brasileiros que vivem no exterior. Nosso atendimento é personalizado, respeitando as suas necessidades e contexto intercultural.
        </Text>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-5 py-10">
        {Cells.map((cardCell, idx) => {
          return (
            <div
              key={idx}
              className="flex h-80 w-72 flex-col gap-5 rounded-lg bg-white p-6 shadow-lg max-lg:items-center"
            >
              <div className="size-11 rounded-lg bg-primary-25 p-3 text-primary-400">
                {cardCell.icon}
              </div>
              <Text className="font-quickSand text-xl font-bold text-coolGray-900 max-lg:text-center">
                {cardCell.name}
              </Text>
              <Text className="font-regular font-poppins text-sm text-coolGray-600 max-lg:text-center">
                {cardCell.description}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsSection;
