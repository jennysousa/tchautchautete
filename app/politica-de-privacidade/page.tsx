import type { Metadata } from "next";
import { asset } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Privacidade | Duda Bertocco",
  robots: { index: false, follow: false },
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="section-lp">
      <div className="container-lp max-w-[720px]">
        <a href={asset("/")} className="text-[13px] text-muted underline underline-offset-2 hover:text-dark">
          Voltar para a página
        </a>

        <h1 className="mt-6 text-[30px] font-medium leading-tight text-ink md:text-[38px]">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-[13px] text-muted">Última atualização em 02/11/2026.</p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-ink/90">
          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">Quem somos</h2>
            <p>
              Esta página é mantida por Maria Eduarda Ferrandi Vilas Boas Bertocco LTDA, CNPJ
              56.203.675/0001-92, que atua como Duda Bertocco. Somos a responsável pelos dados
              tratados aqui. Contato, contato@dudabertocco.com.br.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">Quais dados coletamos</h2>
            <p>
              Coletamos dados de navegação por meio de cookies e ferramentas de medição. São
              informações como as páginas que você visita, cliques, tempo de permanência, tipo de
              dispositivo e navegador, e o endereço IP. Não pedimos seu nome, e-mail ou outros dados
              pessoais nesta página.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">Para que usamos</h2>
            <p>
              Para entender como a página é usada e melhorá-la, e para medir a eficácia dos nossos
              anúncios.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">Ferramentas que usamos</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Google Analytics e Google Tag Manager</strong>, para medir o uso da página.
                Só funcionam se você permitir.
              </li>
              <li>
                <strong>Pixel da Meta (Facebook e Instagram)</strong>, para medir anúncios e mostrar
                conteúdo relevante. Só funciona se você permitir.
              </li>
              <li>
                <strong>Microsoft Clarity</strong>, que registra como as pessoas interagem com a
                página (cliques, rolagem e movimentos), para melhorarmos o layout.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">Compra</h2>
            <p>
              A compra é feita na Hotmart. Os dados de pagamento são tratados por ela, de acordo
              com a política de privacidade dela. Nós não temos acesso aos dados do seu cartão.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">
              Compartilhamento e transferência
            </h2>
            <p>
              Compartilhamos dados apenas com as ferramentas citadas acima. Algumas delas podem
              armazenar dados fora do Brasil.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">Cookies</h2>
            <p>
              Você escolhe no aviso exibido na página. Se você disser “Não permito”, não usamos
              cookies de análise nem de publicidade. Você também pode apagar os cookies pelo seu
              navegador a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">Seus direitos</h2>
            <p>
              Conforme a LGPD, você pode pedir confirmação do tratamento, acesso, correção,
              anonimização ou exclusão dos seus dados, informações sobre compartilhamento e a
              revogação do seu consentimento. Basta escrever para contato@dudabertocco.com.br.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[18px] font-medium text-ink">Atualizações</h2>
            <p>
              Podemos atualizar esta política. A data no topo mostra a última versão.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
