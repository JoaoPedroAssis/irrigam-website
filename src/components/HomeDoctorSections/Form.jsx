import { useState } from 'react';

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
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1292677631904317511/wwcTokzDx2oNfgaPBHVMk8dc2fM50sk0mOf5sUtnOJqi-uUFFbcKB8QlJckNiU8e5OYi';

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

      await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(embed)
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white py-10 px-4">
      <div className="w-full max-w-lg border-2 border-primary rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-primary mb-4 text-center">Formulário de Contato</h1>
        <p className="text-gray-700 text-center mb-8">Preencha os dados abaixo para nos enviar sua mensagem.</p>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
              Nome
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              id="nome"
              type="text"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="telefone">
              Telefone (WhatsApp)
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              id="telefone"
              type="text"
              placeholder="Seu telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              id="email"
              type="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="cidade">
              Cidade
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              id="cidade"
              type="text"
              placeholder="Sua cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="pais">
              País
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
  );
};

export default Formulario;