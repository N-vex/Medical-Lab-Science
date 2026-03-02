import { ArrowUpRight, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Molecular Diagnostics",
    description:
      "Development of a PCR-based assay for detecting emerging pathogens in clinical samples, improving diagnostic accuracy and turnaround time.",
    technologies: [
      "PCR",
      "Gel Electrophoresis",
      "Primer Design",
      "Bioinformatics",
    ],
    link: "#",
    image: "/assets/img4.png",
  },
  {
    title: "Biomarker Research",
    description:
      "Identifying novel biomarkers for early detection of diabetes complications",
    technologies: [
      "ELISA",
      "Mass Spectrometry",
      "Data Analysis",
      "Clinical Sample Handling",
    ],
    link: "#",
    image: "/assets/img5.png",
  },
  {
    title: "Quality Control & Standardization",
    description:
      "Designing a quality assurance protocol for hematology analyzers",
    technologies: [
      "Quality Control",
      "Standard Operating Procedures",
      "Regulatory Compliance",
      "Data Analysis",
    ],
    link: "#",
    image: "/assets/img6.png",
  },
  {
    title: "Antimicrobial Resistance",
    description:
      "Study on prevalence of multidrug-resistant bacteria in hospital samples",
    technologies: [
      "Microbiology Cultures",
      "Antibiotic Susceptibility Testing",
      "Data Analysis",
      "Clinical Sample Handling",
    ],
    link: "#",
    image: "/assets/img6.png",
  },
  {
    title: "Point-of-Care Testing",
    description: "Evaluation of rapid diagnostic kits for malaria or HIV",
    technologies: [
      "Rapid Diagnostic Tests",
      "Clinical Sample Handling",
      "Data Analysis",
      "Regulatory Compliance",
    ],
    link: "#",
    image: "/assets/img7.png",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that showcase
            <span className="font-serif italic font-normal text-white">
              {" "}
              my expertise in medical laboratory research, diagnostics, and
              innovation.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            These projects highlight my contributions to advancing medical
            research, improving diagnostic techniques, and enhancing patient
            care through innovative solutions in the field of medical laboratory
            science.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* images */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    aria-label={`Open ${project.title}`}
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5 " />
                  </a>

                  <a
                    href={project.Linkedin}
                    aria-label={`Share ${project.title}`}
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Linkedin className="w-5 h-5 " />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                     {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 
                  text-muted-foreground 
                  group-hover:text-primary 
                  group-hover:translate-x-1 
                  group-hover:-translate-y-1 
                  transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
