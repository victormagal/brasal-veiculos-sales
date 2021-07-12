import Image from "next/image";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>Brasal Veículos - Venda seu veículo</title>
        <meta name="description" content="Venda seu veículo na Brasal Veículos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="bg-blue">
          <div className="lg:container mx-auto">
            <ul className="flex justify-end py-2">
              <li>
                <a className="text-sm text-white uppercase" href="https://www.brasal.com.br/veiculos_brasal/perfil-institucional/" target="_blank" rel="noreferrer" title="Perfil institucional">Perfil institucional</a>
              </li>
              <li>
                <a className="border-l ml-2 pl-2 text-sm text-white uppercase" href="https://www.brasal.com.br/veiculos_brasal/empresas-brasal/" target="_blank" rel="noreferrer" title="Empresas Brasal">Empresas Brasal</a>
              </li>
              <li>
                <a className="border-l ml-2 pl-2 text-sm text-white uppercase" href="https://app.ativa360.com.br/User/brasal/site/AppFormVeiculos/cadastrarProtocolo" target="_blank" rel="noreferrer" title="Fale conosco">Fale conosco</a>
              </li>
              <li>
                <a className="border-l ml-2 pl-2 text-sm text-white uppercase" href="https://www.brasal.com.br/" target="_blank" rel="noreferrer" title="Portal Brasal">Portal Brasal</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:container mx-auto">
          <Image
            src="/logo.svg"
            alt="Brasal Veículos"
            width={300}
            height={150}
          />
        </div>
      </header>
    </>
  );
}
