import AnimatedSection from "./AnimatedSection";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

const About = () => {
  const { content } = useSiteConfig();
  const { about } = content;

  return (
    <section id="sobre" className="py-28 md:py-36">
      <div className="container max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            {about.sectionTitle}
          </h2>
          <div className="gold-line mb-10" />
          {about.paragraph1 && (
            <p className="text-body text-muted-foreground leading-[1.9] text-base md:text-lg mb-6">
              {about.paragraph1}
            </p>
          )}
          {about.paragraph2 && (
            <p className="text-body text-muted-foreground leading-[1.9] text-base md:text-lg mb-6">
              {about.paragraph2}
            </p>
          )}
          {about.paragraph3 && (
            <p className="text-body text-muted-foreground leading-[1.9] text-base md:text-lg">
              {about.paragraph3}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
