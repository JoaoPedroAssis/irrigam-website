import { Text } from '@switchdreams/ui'; // Assumindo que você usa uma biblioteca de UI personalizada

const TeamMemberRight = ({ nome, descricao, imagem, abordagem }) => {
  return (
    <div className={`relative flex w-full items-center justify-center gap-10 py-14 max-lg:flex-col`}>
      <div className="absolute right-0 top-0 w-1/4 h-full bg-secondary-900 rounded-l-2xl max-lg:w-1/2 max-md:h-[30%] md:h-full" />
      {/* Para dispositivos móveis, a imagem virá antes da div z-10 */}
      <div className="z-10 flex w-1/2 flex-col justify-center gap-5 max-lg:w-full max-lg:items-center max-lg:pb-5 max-lg:text-center max-md:px-6 lg:px-10 xl:px-28 max-lg:order-2">
        <Text className="font-poppins text-lg font-semibold text-primary-500">
          {abordagem}
        </Text>
        <Text className="font-quickSand text-5xl font-semibold text-coolGray-950 max-md:text-4xl">
          {nome}
        </Text>
        <div className="flex flex-col gap-5">
          {descricao.map((paragrafo, index) => (
            <Text
              key={index}
              className="text-md font-regular font-poppins text-coolGray-600"
            >
              {paragrafo}
            </Text>
          ))}
        </div>
      </div>
      
      {/* Para dispositivos móveis, a imagem terá ordem 1 */}
      <img
        src={imagem}
        className="rounded-full z-10 w-[25%] max-lg:w-3/5 max-lg:order-1"
        alt={`${nome} - Imagem`}
      />
    </div>
  );
};

export default TeamMemberRight;