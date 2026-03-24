import { motion } from "framer-motion";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

const Hero = () => {
  const { content } = useSiteConfig();
  const { hero } = content;

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <img
        src={hero.backgroundImage}
        alt={hero.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/30" />

      <div className="relative text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-display text-7xl md:text-9xl text-foreground"
        >
          {hero.title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="gold-line mt-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-body text-sm tracking-[0.3em] text-muted-foreground mt-4 uppercase"
        >
          {hero.subtitle}
        </motion.p>

        {hero.ctaText && (
          <motion.a
            href={hero.ctaHref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-8 inline-block border border-foreground/40 text-foreground text-xs tracking-[0.2em] uppercase px-8 py-3 font-body hover:bg-foreground/10 transition-colors duration-300"
          >
            {hero.ctaText}
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default Hero;
