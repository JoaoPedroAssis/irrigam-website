import { useState } from 'react';
import { Text } from '@switchdreams/ui';
import { toast } from 'react-toastify';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cidade: '',
    pais: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK
    const embed = {
      embeds: [
        {
          title: 'Novo Formulário Preenchido',
          color: 3447003,
          fields: [
            { name: 'Nome', value: formData.nome, inline: true },
            { name: 'Telefone (WhatsApp)', value: formData.telefone, inline: true },
            { name: 'Email', value: formData.email, inline: true },
            { name: 'Cidade', value: formData.cidade, inline: true },
            { name: 'País', value: formData.pais, inline: true }
          ]
        }
      ]
    };

    fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(embed),
    })
      .then((response) => {
        if (response.ok) {
          toast.success('Formulário enviado com sucesso! 🎉');
        } else {
          toast.error('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
        }
      })
      .catch(() => {
        toast.error('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
      });
  };

  return (
    <div className="max-w-screen-big max-xl:px-6 max-lg:w-full bg-primary-500 rounded-t-[30px]" id="form">
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20 text-center ">
        <Text className="font-poppins text-lg font-semibold text-secondary-900">
          Formulário de Contato
        </Text>
        <Text className="font-quickSand text-5xl font-semibold text-secondary-900 max-md:text-4xl">
          Fale Conosco!
        </Text>
        <Text className="text-md font-regular font-poppins text-white pb-6 lg:mx-24">
          Se você deseja saber mais sobre nossos serviços, agendar uma sessão ou tem alguma dúvida, preencha o formulário abaixo. Nossa equipe está pronta para acolher suas necessidades e responder o mais rápido possível!
        </Text>
        <div className="w-full max-w-lg border-2 border-primary rounded-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block uppercase tracking-wide text-secondary-900 text-sm font-bold mb-2" htmlFor="nome">
                Nome
              </label>
              <input
                className="appearance-none block w-full text-secondary-900 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                id="nome"
                type="text"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block uppercase tracking-wide text-secondary-900 text-sm font-bold mb-2" htmlFor="telefone">
                Telefone (WhatsApp)
              </label>
              <input
                className="appearance-none block w-full text-secondary-900 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                id="telefone"
                type="text"
                placeholder="Seu telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block uppercase tracking-wide text-secondary-900 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full text-secondary-900 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                id="email"
                type="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block uppercase tracking-wide text-secondary-900 text-sm font-bold mb-2" htmlFor="cidade">
                Cidade
              </label>
              <input
                className="appearance-none block w-full text-secondary-900 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                id="cidade"
                type="text"
                placeholder="Sua cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block uppercase tracking-wide text-secondary-900 text-sm font-bold mb-2" htmlFor="pais">
                País
              </label>
              <input
                className="appearance-none block w-full text-secondary-900 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                id="pais"
                type="text"
                placeholder="Seu país"
                value={formData.pais}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-secondary-600 hover:bg-primary text-white font-bold py-2 px-4 rounded duration-500 hover:bg-secondary-900"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Formulario;