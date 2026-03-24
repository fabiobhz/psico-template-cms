import { Heart, Brain, Users, Globe, Star, Leaf, Sun, Moon, Smile, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Heart,
  Brain,
  Users,
  Globe,
  Star,
  Leaf,
  Sun,
  Moon,
  Smile,
  Shield,
};

const Services = () => {
  const { content } = useSiteConfig();
  const { services } = content;

  return (
    <section className="py-28 md:py-36 bg-secondary/50">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
              {services.sectionTitle}
            </h2>
            <div className="gold-line" />
            {services.sectionSubtitle && (
              <p className="text-body text-sm text-muted-foreground mt-4 tracking-wider">
                {services.sectionSubtitle}
              </p>
            )}
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon] ?? Heart;
            return (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div className="bg-background/70 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-border hover:shadow-lg transition-shadow duration-500 group">
                  <IconComponent
                    size={28}
                    className="text-accent mb-5 transition-transform duration-500 group-hover:scale-110"
                  />
                  <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
