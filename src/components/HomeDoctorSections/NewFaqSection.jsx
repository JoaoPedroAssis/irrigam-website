import { useState } from 'react';

const FAQAccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full p-1">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer py-7 px-8 bg-white bg-opacity-60 border-2 rounded-2xl shadow-10xl ${
          isOpen ? 'border-primary-500' : 'border-gray-200'
        }`}
      >
        <div className="flex flex-wrap justify-between -m-2">
          <div className="flex-1 p-2">
            <h3 className={`text-lg font-semibold leading-normal ${
                isOpen ? 'text-primary-500' : ''
            }`}>
              {question}
            </h3>
            {isOpen && (
              <div className="mt-4 text-gray-600 font-medium">
                {answer}
              </div>
            )}
          </div>
          <div className="w-auto p-2">
            {isOpen ? (
              <svg
                className="relative top-1"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                  stroke="#778F7B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="relative top-1"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 6.75L9 12L3.75 6.75"
                  stroke="#18181B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NewFaqSection = () => {
  const faqs = [
    {
      question: 'Por qual plataforma são feitas as sessões?',
      answer:
        'Os atendimentos ocorrem prioritariamente via Google Meet.',
    },
    {
      question: 'Como são feitos os pagamentos?',
      answer:
        'Os pagamentos podem ser realizados por sessão ou mensalmente. Podem ser feitos de forma simples e segura via PIX, transferência bancária ou PayPal, dependendo da sua preferência.',
    },
    {
      question: 'Qual o valor das sessões?',
      answer:
        'De acordo com as diretrizes do Conselho Federal de Psicologia (CFP), não divulgamos valores em materiais publicitários, incluindo mídias e redes sociais. Nos colocamos à disposição para conversar sobre valores e formas de pagamento diretamente com cada interessado.',
    },
    {
      question: 'Qual o tempo de duração de cada sessão?',
      answer:
        'As sessões de psicoterapia individual duram em média 50 minutos.',
    },
    {
        question: 'Quanto tempo dura o processo de terapia?',
        answer: 'O Conselho Federal de Psicologia (CFP) não estabelece uma duração fixa para o processo terapêutico, justamente porque a terapia depende das necessidades de cada pessoa e da abordagem do profissional. O CFP orienta que o psicólogo deve seguir princípios éticos e técnicos, respeitando a singularidade e o tempo de cada um.',
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <div className="mb-11 flex flex-wrap -m-1">
            {faqs.map((faq, index) => (
              <FAQAccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFaqSection;