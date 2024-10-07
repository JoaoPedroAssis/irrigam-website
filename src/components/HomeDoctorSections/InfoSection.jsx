import { Text } from "@switchdreams/ui";

import { imagePath } from "../../utils";
import TeamMember from "./TeamMember";
import TeamMemberRight from "./TeamMemberRight";

const InfoSection = () => {
  return (
    <div className="flex flex-col gap-8 pb-10 pt-20" id="about">
      <div className="flex w-full flex-col items-center justify-center gap-5 text-center pb-10">
        <Text className="font-poppins text-lg font-semibold text-primary-500 max-xl:mt-16">
          CONHEÇA NOSSO TIME
        </Text>
        <Text className="font-quickSand text-5xl font-semibold text-coolGray-950">
          Profissionais éticos e dedicados
        </Text>
        <Text className="text-md font-regular w-[55%] font-poppins text-coolGray-600">
        Nosso time é formado por psicólogos competentes que compartilham o compromisso de oferecer um atendimento ético, humano e culturalmente sensível. Conheça os profissionais que fazem parte do Irrigam e descubra como podemos ajudar você.        </Text>
      </div>
      <TeamMember
        abordagem="CRP-01/28309"
        nome="Daniela Benelli"
        descricao={[
          "Minha atuação como psicóloga é fundamentada nos preceitos da psicanálise, que valoriza a singularidade de cada experiência e os atravessamentos que moldam a vida psíquica.",
          "A análise é um espaço de construção conjunta, no qual a associação livre possibilita a elaboração de sentimentos e a exploração profunda de aspectos inconscientes que podem contribuir para quadros de angústia, como ansiedade, depressão e outros transtornos psíquicos."
        ]}
        imagem={imagePath("dani.webp")}
      />
      <TeamMemberRight
        abordagem="CRP-01/28287"
        nome="Rodrigo Mendes"
        descricao={[
          "Oriento-me pela Psicologia Histórico-Cultural, enxergando o desenvolvimento humano como resultado da interação entre o biológico e o ambiente sócio-histórico. Procuro analisar essas questões por meio de intervenções reflexivas, visando promover a autonomia.",
          "Na minha experiência clínica diante de demandas de relacionamento, sexualidade e pessoas LGBT+, procuro analisar essas questões por meio de intervenções reflexivas, visando promover a autonomia."
        ]}
        imagem={imagePath("rodrigo.webp")}
      />
      <TeamMember
        abordagem="CRP-01/28363"
        nome="Renata Cardoso"
        descricao={[
          "Somos um coletivo de profissionais que, por meio de amigos e familiares que também moram no exterior, identificamos a demanda relacionada aos desafios emocionais que surgem ao viver fora do país.",
          "Nossa missão é proporcionar um atendimento que considere as particularidades culturais e os aspectos emocionais únicos desta experiência, compreendendo a singularidade de cada processo."
        ]}
        imagem={imagePath("renata.webp")}
      />
      <TeamMemberRight
        abordagem="CRP-01/28510"
        nome="Gustavo Dantas"
        descricao={[
          "Somos um coletivo de profissionais que, por meio de amigos e familiares que também moram no exterior, identificamos a demanda relacionada aos desafios emocionais que surgem ao viver fora do país.",
          "Nossa missão é proporcionar um atendimento que considere as particularidades culturais e os aspectos emocionais únicos desta experiência, compreendendo a singularidade de cada processo."
        ]}
        imagem={imagePath("gustavo.webp")}
      />
    </div>
  );
};

export default InfoSection;
