import { Button } from "@/components/Button";
import { ArrowRight, 
        ChevronDown, 
        Facebook, 
        Linkedin, 
        Twitter,
        Download, } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "Hematology",
  "Blood Banking",
  "Immunology",
  "Molecular Diagnostics",
  "Clinical Research",
  "Laboratory Management",
  "Quality Control",
  "Clinical Pathology",
  "Flow Cytometry",
  "Microbiology",
  "Histopathology",
  "CLIA/ISO compliance",
  "Statistical analysis (SPSS, R, Python)",
  "Data visualization & interpretation",
  "Literature review & research methodology",
  "Clinical trial management",
  "Scientific writing & publications",
  "Lab information systems (LIS)",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/assets/img2.png"
          alt="Bg image"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Rainbow Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: `hsl(${i * 12}, 100%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Column - Text Content  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Medical Laboratory Research Scientist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Passionate{" "}
                <span className="text-primary glow-text">scientist</span>
                <br />
                Exploring the mysteries
                <br />
                <span className="font-serif italic font-normal text-white">
                  of life through research
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Enwuru Christian.A. - a medical laboratory research
                scientist specializing in hematology, blood banking, and
                immunology. With a passion for advancing healthcare through
                research, I am dedicated to exploring the mysteries of life and
                contributing to scientific knowledge. Welcome to my portfolio,
                where I share my journey and insights in the field of medical
                laboratory science.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton >
                    <Download className="w-5 h-5"/>
                    Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => {
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Right Column - Profile Image*/}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md m-auto">
              <div
                className="absolute inset-0
                rounded-3xl bg-gradient-to-br
                from-primary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/assets/img1.png"
                  alt="Enwuru Christian"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-4 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technical Laboratory Skills/ Research & Data Skills
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4 ">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
