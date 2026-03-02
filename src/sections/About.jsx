import { Microscope, Rocket, Users, Lightbulb, Award } from "lucide-react";

const highlights = [
  {
    icon: Microscope,
    title: "Research Work",
    description:
      "Conducted research on the impact of climate change on marine biodiversity, resulting in a published paper in a peer-reviewed journal.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Developed a novel method for early disease detection using machine learning algorithms, leading to a patent application.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborated with a multidisciplinary team of scientists to successfully complete a large-scale research project on renewable energy solutions.",
  },
  {
    icon: Lightbulb,
    title: "Public Engagement",
    description:
      "Organized and led community workshops to educate the public about the importance of scientific literacy and environmental conservation.",
  },
  {
    icon: Award,
    title: "Recognition",
    description:
      "Received the prestigious XYZ Award for outstanding contributions to the field of medical research.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z=10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Solving Real world problems through research and innovation,
              <span className="font-serif italic font-normal text-white">
                {""}
                one discovery at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a dedicated Medical Laboratory Research Scientist with
                expertise in clinical diagnostics, biomedical research, and
                laboratory management. My work bridges the gap between
                scientific discovery and patient care, ensuring accurate test
                results, advancing medical knowledge, and contributing to
                innovations in healthcare. With a strong foundation in molecular
                biology, microbiology, and biochemistry, I thrive in
                environments that demand precision, analytical thinking, and
                problem-solving.
              </p>
              <p>
                Specialize in: Laboratory Techniques: PCR, ELISA, flow
                cytometry, spectrophotometry, electrophoresis, microscopy, and
                immunohistochemistry. Research Skills: Experimental design, data
                analysis, statistical interpretation, and publication writing.
                Clinical Diagnostics: Hematology, microbiology cultures,
                serology, histopathology, and molecular diagnostics. Quality
                Assurance: Compliance with GLP, ISO standards, and biosafety
                protocols. Technology Proficiency: Laboratory Information
                Systems (LIS), data visualization tools, and advanced
                instrumentation.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My long-term vision is to contribute to innovative medical
                research that improves diagnostic accuracy, enhances patient
                outcomes, and supports the development of new therapeutic
                strategies. I aspire to lead research projects that tackle
                pressing health challenges such as antimicrobial resistance,
                cancer diagnostics, and emerging infectious diseases.
              </p>
            </div>
          </div>

          {/* Right Column - Highlight */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
