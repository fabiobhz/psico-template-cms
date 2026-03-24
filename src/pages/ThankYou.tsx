import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Redireciona para home se o usuário acessar a URL diretamente
  useEffect(() => {
    if (!location.state?.fromForm) {
      navigate("/", { replace: true });
    }
  }, [location.state, navigate]);

  if (!location.state?.fromForm) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-display text-5xl md:text-6xl text-foreground mb-4"
        >
          Obrigado!
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="gold-line mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-body text-muted-foreground text-base md:text-lg leading-[1.9] mb-10"
        >
          Sua mensagem foi recebida com sucesso. Em breve um dos nossos psicólogos
          entrará em contato pelo e-mail informado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md text-sm font-body tracking-wider hover:bg-primary/90 transition-colors duration-300"
          >
            Voltar ao início
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ThankYou;
