import fetch from 'node-fetch';

export default async function getAddress(cep: string) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  return response.json();
}
