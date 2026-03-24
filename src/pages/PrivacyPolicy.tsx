import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">{title}</h2>
    <div className="text-body text-sm text-muted-foreground leading-[1.9] space-y-3">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <div className="bg-secondary/40 border-b border-border py-16 md:py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="heading-display text-4xl md:text-5xl text-foreground mb-4"
        >
          Política de Privacidade
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="gold-line"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-body text-xs text-muted-foreground mt-6"
        >
          Última atualização: março de 2026
        </motion.p>
      </div>

      {/* Content */}
      <div className="container max-w-3xl py-16 md:py-24 px-6">

        <Section title="1. Quem somos">
          <p>
            A <strong className="text-foreground">Vínculo Psicologia</strong> é uma clínica de psicologia que oferece
            atendimento psicoterapêutico online, especialmente para brasileiros residentes no exterior. Somos os
            responsáveis pelo tratamento dos seus dados pessoais recolhidos através do site{" "}
            <span className="text-foreground">vinculo-psicologia.com.br</span>.
          </p>
          <p>
            Para quaisquer questões relacionadas com a sua privacidade, pode contactar-nos através do formulário
            disponível no nosso site ou diretamente com um dos nossos profissionais pelo WhatsApp.
          </p>
        </Section>

        <Section title="2. Dados que recolhemos">
          <p>Recolhemos apenas os dados estritamente necessários para prestar os nossos serviços:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              <strong className="text-foreground">Formulário de contacto:</strong> nome completo, endereço de
              e-mail e mensagem que nos envia voluntariamente.
            </li>
            <li>
              <strong className="text-foreground">Cookies de publicidade</strong> (apenas com o seu consentimento
              expresso): identificadores anónimos utilizados pelo Google Ads para apresentar anúncios relevantes.
            </li>
          </ul>
          <p>
            Não recolhemos dados de saúde, dados de pagamento, dados de menores de 18 anos, nem qualquer
            informação sensível através do site.
          </p>
        </Section>

        <Section title="3. Finalidade e base legal">
          <p>Os seus dados são utilizados exclusivamente para:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              <strong className="text-foreground">Responder ao seu contacto</strong> — base legal: execução de
              diligências pré-contratuais / interesse legítimo (LGPD, Art. 7.º, V; RGPD, Art. 6.º, 1, b/f).
            </li>
            <li>
              <strong className="text-foreground">Publicidade personalizada via Google Ads</strong> — base legal:
              consentimento explícito (LGPD, Art. 7.º, I; RGPD, Art. 6.º, 1, a). Pode revogar o consentimento a
              qualquer momento através do banner de cookies.
            </li>
          </ul>
        </Section>

        <Section title="4. Partilha com terceiros">
          <p>Os seus dados nunca são vendidos. São partilhados apenas com os seguintes prestadores de serviço:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-foreground">EmailJS</strong> (emailjs.com) — serviço de envio de e-mail
              utilizado para encaminhar as mensagens do formulário de contacto para os nossos profissionais. O
              EmailJS processa os dados como subcontratante, nos termos da sua{" "}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                política de privacidade
              </a>
              .
            </li>
            <li>
              <strong className="text-foreground">Google Ads / Google LLC</strong> — utilizado para exibir anúncios
              apenas com o seu consentimento. A Google pode utilizar cookies para medir conversões e apresentar
              anúncios personalizados. Consulte a{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                política de privacidade da Google
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section title="5. Cookies">
          <p>
            Utilizamos apenas cookies essenciais ao funcionamento do site e, com o seu consentimento, cookies de
            publicidade do Google Ads. Não utilizamos cookies de análise de tráfego (como o Google Analytics) sem
            consentimento.
          </p>
          <p>
            Pode aceitar ou recusar os cookies através do banner apresentado na sua primeira visita. A sua
            preferência é guardada no seu navegador e pode ser alterada a qualquer momento apagando os dados de
            navegação do site.
          </p>
        </Section>

        <Section title="6. Retenção de dados">
          <p>
            Os dados submetidos através do formulário de contacto são conservados apenas pelo tempo necessário para
            responder à sua mensagem e, eventualmente, estabelecer uma relação terapêutica. Não mantemos bases de
            dados de marketing nem listas de e-mail.
          </p>
        </Section>

        <Section title="7. Os seus direitos">
          <p>
            Ao abrigo da Lei Geral de Proteção de Dados (LGPD — Lei n.º 13.709/2018) e do Regulamento Geral de
            Proteção de Dados da União Europeia (RGPD), tem os seguintes direitos:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-foreground">Acesso</strong> — saber quais dados temos sobre si.</li>
            <li><strong className="text-foreground">Retificação</strong> — corrigir dados incorretos.</li>
            <li><strong className="text-foreground">Eliminação</strong> — solicitar a exclusão dos seus dados.</li>
            <li><strong className="text-foreground">Portabilidade</strong> — receber os seus dados em formato legível.</li>
            <li><strong className="text-foreground">Oposição</strong> — opor-se ao tratamento baseado em interesse legítimo.</li>
            <li><strong className="text-foreground">Revogação do consentimento</strong> — retirar o consentimento para cookies a qualquer momento.</li>
          </ul>
          <p>
            Para exercer qualquer um destes direitos, entre em contacto connosco através do formulário de contacto
            do site ou pelo WhatsApp dos nossos profissionais.
          </p>
        </Section>

        <Section title="8. Segurança">
          <p>
            O nosso site utiliza o protocolo HTTPS para encriptar todas as comunicações. Os dados do formulário são
            transmitidos de forma segura através do serviço EmailJS e não são armazenados em servidores próprios.
          </p>
        </Section>

        <Section title="9. Alterações a esta política">
          <p>
            Podemos atualizar esta política periodicamente. Em caso de alterações significativas, publicaremos a
            nova versão nesta página com a data de atualização. Recomendamos que consulte esta página regularmente.
          </p>
        </Section>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md text-sm font-body tracking-wider hover:bg-primary/90 transition-colors duration-300"
          >
            Voltar ao início
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
