import { AccordionMenu, Text } from "@switchdreams/ui";

const FaqSection = () => {
  return (
    <div className="mb-40 max-w-screen-big max-xl:px-6 max-lg:w-full">
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20 text-center ">
        <Text className="font-poppins text-lg font-semibold text-secondary-900">
          PERGUNTAS FREQUENTES (FAQ)
        </Text>
        <Text className="font-quickSand text-5xl font-semibold text-coolGray-950 max-md:text-4xl">
          Tire suas dúvidas
        </Text>
        <Text className="text-md font-regular font-poppins text-coolGray-600">
          Bem-vindo à nossa seção de Perguntas Frequentes (FAQ)! Aqui, reunimos as dúvidas mais
          comuns dos nossos usuários para oferecer respostas claras e abrangentes. Se você tem
          perguntas sobre como funciona o <b>viaconsultas</b>, como se cadastrar, ou qualquer outro
          aspecto relacionado à nossa plataforma, você está no lugar certo! Explore as perguntas
          abaixo para encontrar as respostas que você precisa:
        </Text>
      </div>
      <AccordionMenu title="Quais são os principais benefícios de me cadastrar na plataforma viaconsultas?">
        <Text className="font-poppins">
          Ao se cadastrar no <b>viaconsultas</b>, você terá acesso a uma série de benefícios
          exclusivos, incluindo maior visibilidade para sua clínica, prospecção ativa de pacientes,
          independência dos planos de saúde, facilidade no faturamento, redução do absenteísmo e
          cancelamentos de consultas, flexibilidade na agenda e a possibilidade de oferecer
          atendimento através da melhor plataforma de telemedicina disponível.
        </Text>
      </AccordionMenu>
      <AccordionMenu title="Como funciona o processo de agendamento de consultas pelos pacientes através do viaconsultas?">
        <Text className="font-poppins">
          O processo de agendamento de consultas é simples e intuitivo para os pacientes. Eles podem
          acessar nossa plataforma, encontrar sua clínica ou consultório, verificar sua
          disponibilidade de horários e agendar uma consulta diretamente, sem complicações. Isso
          proporciona uma experiência conveniente e eficiente para os pacientes, aumentando as
          chances de agendamentos bem-sucedidos.
        </Text>
      </AccordionMenu>
      <AccordionMenu title="Como o viaconsultas garante a segurança e privacidade dos meus dados e dos meus pacientes?">
        <Text className="font-poppins">
          No <b>viaconsultas</b>, levamos a segurança e privacidade dos dados muito a sério.
          Implementamos medidas robustas de proteção de dados para garantir a segurança tanto dos
          profissionais cadastrados quanto dos pacientes. Além disso, seguimos estritamente as
          regulamentações de proteção de dados, proporcionando tranquilidade e confiança a todos os
          usuários da nossa plataforma.
        </Text>
      </AccordionMenu>
      <AccordionMenu title="Como posso obter suporte técnico em caso de dúvidas ou problemas com a plataforma?">
        <Text className="font-poppins">
          Estamos aqui para ajudar! Caso você tenha alguma dúvida ou problema técnico, nossa equipe
          de suporte está disponível para fornecer assistência rápida e eficiente. Você pode entrar
          em contato conosco através dos nossos canais de atendimento, garantindo uma experiência
          tranquila e satisfatória com o <b>viaconsultas</b>.
        </Text>
      </AccordionMenu>
    </div>
  );
};

export default FaqSection;
