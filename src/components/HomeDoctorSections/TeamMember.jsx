import { Text } from '@switchdreams/ui'; // Assumindo que você usa uma biblioteca de UI personalizada

const TeamMember = ({ nome, descricao, imagem, abordagem }) => {
  return (
    <div className={"relative flex w-full items-center justify-center gap-10 py-14 max-lg:flex-col"}>
    <div className="absolute opacity-50 left-0 top-0 w-1/5 rounded-r-2xl bg-primary-500 max-lg:w-1/2 max-md:h-[30%] md:h-[42%] lg:h-full" />     
     <img
        src={imagem}
        className="rounded-full z-10 w-[25%] max-lg:w-3/5"
        alt={`${nome} - Imagem`}
      />
      <div className="z-10 flex w-1/2 flex-col justify-center gap-5 max-lg:w-full max-lg:items-center max-lg:pb-5 max-lg:text-center max-md:px-6 lg:px-10 xl:px-28">
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
    </div>
  );
};

export default TeamMember;