import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CompletedProjects } from "../data/CompletedProjects";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/seperator";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

import {
  ArrowLeft,
  Github,
  ExternalLink,
  Linkedin,
  Link as LinkIcon,
  Calendar,
  Users,
  Briefcase,
  TrendingUp,
  Target,
  Lightbulb,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);


  const [activeCollab, setActiveCollab] = useState();

  const openMobileCard = (collab) => {
    setActiveCollab(collab);
  };

  const closeMobileCard = () => {
    setActiveCollab(null);
  };

  const project = CompletedProjects.find((p) => p.id === id);

  // hero ref (used for hero transitions if needed)
  const ref = useRef(null);

  // timeline container & nodes
  const containerRef = useRef(null);
  const nodesRef = useRef([]); // element refs for cards
  const svgPathRef = useRef(null);

  // SVG path data & length
  const [d, setD] = useState("");
  const [pathLength, setPathLength] = useState(0);

  // stable alignments (left/right) so randomization doesn't change on rerenders
  const alignmentsRef = useRef([]);

  // hero scroll (you used this earlier; kept for compatibility)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // timeline scroll progress (used to animate stroke reveal)
  const { scrollYProgress: timelineScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.2"],
  });

  // dash 1 -> 0
  const dash = useTransform(timelineScrollProgress, [0, 1], [1, 0]);
  // multiply by pixel length for strokeDashoffset
  const dashOffset = useTransform(dash, (v) => v * pathLength);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    // initialize nodesRef to project.timeline length (avoid leftover refs)
    nodesRef.current = [];
  }, []);

  // generate stable random left/right alignment per timeline item
  useEffect(() => {
    if (!project?.timeline) return;
    alignmentsRef.current = project.timeline.map(() => Math.random() > 0.5);
  }, [project?.timeline]);

  // helper to attach card refs
  const setNode = (el, idx) => {
    nodesRef.current[idx] = el;
  };

  // compute bezier path connecting the anchors of each card
  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      if (!container || !nodesRef.current.length) {
        setD("");
        setPathLength(0);
        return;
      }

      const anchors = nodesRef.current
        .map((el) => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          const c = container.getBoundingClientRect();

          const elCenterX = r.left + r.width / 2;
          const containerCenterX = c.left + c.width / 2;
          const isLeft = elCenterX < containerCenterX;

          // anchor at right edge for left items, left edge for right items (relative to container)
          const anchorX = isLeft ? r.right - c.left : r.left - c.left;
          const anchorY = r.top + r.height / 2 - c.top;
          return { x: anchorX, y: anchorY };
        })
        .filter(Boolean);

      if (anchors.length < 2) {
        setD("");
        setPathLength(0);
        return;
      }

      // Build smooth cubic bezier chain connecting anchors
      let path = `M ${anchors[0].x.toFixed(2)} ${anchors[0].y.toFixed(2)}`;
      for (let i = 0; i < anchors.length - 1; i++) {
        const a = anchors[i];
        const b = anchors[i + 1];
        const midX = (a.x + b.x) / 2;

        path += ` C ${midX.toFixed(2)} ${a.y.toFixed(2)}, ${midX.toFixed(2)} ${b.y.toFixed(2)}, ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
      }

      setD(path);

      // after paint, measure length if path exists
      requestAnimationFrame(() => {
        if (!svgPathRef.current) {
          setPathLength(0);
          return;
        }
        try {
          const len = svgPathRef.current.getTotalLength();
          setPathLength(len);
        } catch (e) {
          setPathLength(0);
        }
      });
    };

    // initial compute
    compute();

    // recompute when window resizes or DOM mutates inside container (cards/labels change)
    window.addEventListener("resize", compute);
    const mo = new MutationObserver(() => compute());
    if (containerRef.current) mo.observe(containerRef.current, { childList: true, subtree: true });

    // small interval to handle SPA layout shifts during mount
    const id = setInterval(compute, 300);
    setTimeout(() => clearInterval(id), 1200);

    return () => {
      window.removeEventListener("resize", compute);
      mo.disconnect();
      clearInterval(id);
    };
  }, [project?.timeline]);

  if (!project) {
    return (
      <div className="text-center py-32 text-2xl text-muted-foreground">Project Not Found</div>
    );
  }


  const techColors = {
    React: "from-[#61DBFB]/80 to-[#0A84FF]/80",
    JavaScript: "from-[#F7DF1E]/90 to-[#FACC15]/90 text-black",
    TypeScript: "from-[#3178C6]/90 to-[#1A5B98]/90",
    NodeJS: "from-[#3C873A]/80 to-[#2F6E2E]/80",
    Tailwind: "from-[#38BDF8]/80 to-[#0EA5E9]/80",
    HTML: "from-[#E44D26]/80 to-[#F16529]/80",
    CSS: "from-[#264DE4]/80 to-[#2965F1]/80",
    GitHub: "from-[#333]/80 to-[#000]/80",
  };


  const lineRef = useRef(null);
  const [lineHeight2, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      setLineHeight(lineRef.current.offsetHeight);
    }
  }, [project.timeline]);



  return (
    <div className="min-h-screen bg-background">
      {/* <div className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-10" />
        <img
          src={project.imgSrc}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-1000 ${isVisible ? "scale-100" : "scale-110"}`}
        />

        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-8 bg-background/80 backdrop-blur-sm hover:bg-background/90 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>

            <div className={`max-w-4xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">{project.title}</h1>
              <p className="text-xl md:text-2xl text-white/95 drop-shadow-lg">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button asChild size="lg" className="group shadow-lg">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild size="lg" variant="secondary" className="group shadow-lg">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.linkedinUrl && (
                  <Button asChild size="lg" variant="outline" className="group bg-white/90 hover:bg-white shadow-lg">
                    <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Connect
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* New Gradient Overlay – stronger fade at bottom */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/10 via-black/30 via-40% to-black/80"
        />

        {/* Optional: Slight top fade for better aesthetics */}
        <div className="absolute inset-x-0 top-0 h-32 z-10 bg-gradient-to-b from-black/20 to-transparent" />

        {/* Hero Image */}
        <img
          src={project.imgSrc}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-1000 ${isVisible ? "scale-100" : "scale-110"}`}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container mx-auto px-4 pb-16">

            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-20 bg-black/30 backdrop-blur-sm hover:bg-black/50 group text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>

            <div
              className={`max-w-4xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                {project.title}
              </h1> */}

              <h1 className="relative text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                <span className="relative z-10">{project.title}</span>

                {/* Blur behind text */}
                <span className="absolute inset-0 blur-xl opacity-40 bg-black/10"></span>
              </h1>



              <p className="md:text-1xl text-white/95 drop-shadow-lg">
                {project.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.githubUrl && (
                  <Button asChild size="lg" className="group shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/70 text-black font-bold">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5 transition-transform" />
                      View Code
                    </a>
                  </Button>
                )}

                {project.liveUrl && (
                  <Button asChild size="lg" variant="secondary" className="group shadow-lg bg-black/40 backdrop-blur-sm hover:bg-black/40 text-white">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {/* {project.linkedinUrl && (
                  <Button asChild size="lg" variant="outline" className="group bg-white/90 hover:bg-white shadow-lg">
                    <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Connect
                    </a>
                  </Button>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Main Content - Magazine Layout */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Column */}
          <article className="flex-1 max-w-3xl">
            {/* Project Overview */}
            <section className="mb-16 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Project Overview</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.fullDescription}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{project.detailedDescription}</p>
              </div>
            </section>



            {/* Project Overview */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Project Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                {project.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="relative px-5 py-2 rounded-lg text-white font-semibold bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_2px_20px_rgba(255,255,255,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)]  transition-all duration-300 hover:text-white/90 ">
                    <span className="absolute inset-0 rounded-xl opacity-0 bg-gradient-to-r from-white/40 to-transparent group-hover:opacity-100 transition-opacity duration-300 " />

                    <span className="absolute inset-0 -z-10 blur-xl opacity-20 bg-gradient-to-r from-white/20 to-white/5 " />

                    <span className="relative">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

















            <Separator className="my-12" />

            {/* Key Features */}
            <section className="mb-16 animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Key Features</h2>
              </div>
              <div className="grid gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</p>
                  </div>
                ))}
              </div>
            </section>





            <Separator className="my-12" />

            {/* {project.timeline && (
              <section
                ref={ref}
                className="relative mb-20 overflow-hidden py-10"
              >
                <div className="flex items-center gap-3 mb-10">
                  <Calendar className="h-7 w-7 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tight">
                    Development Timeline
                  </h2>
                </div>

                <div ref={containerRef} className="relative">


                  <svg
                    className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-32 opacity-40"
                    viewBox="0 0 100 500"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M50 0 Q65 150 50 300 T50 600 T50 900"
                      stroke="url(#grad)"
                      strokeWidth="4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgb(139,92,246)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>


                  <div className="relative space-y-28">
                    {project.timeline.map((phase, index) => {
                      const isLeft = index % 2 === 0;

                      return (
                        <motion.div
                          key={phase.phase + index}
                          className={`relative flex items-center w-full ${isLeft ? "justify-start" : "justify-end"
                            }`}
                          initial={{ opacity: 0, y: 80 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: index * 0.15 }}
                          viewport={{ once: true, amount: 0.4 }}
                        >

                          <motion.div
                            className="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-primary flex items-center justify-center z-20 border-4 border-background shadow"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-xs font-medium text-foreground">
                              {index + 1}
                            </span>
                          </motion.div>

                          <motion.div
                            className={`relative w-[46%] p-6 bg-card border border-border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${isLeft ? "mr-auto -translate-x-6" : "ml-auto translate-x-6"
                              }`}
                            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <h3 className="text-lg font-semibold text-foreground">
                                {phase.phase}
                              </h3>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {phase.description}
                            </p>

                            <motion.div
                              className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? "right-[-35px]" : "left-[-35px]"
                                }`}
                              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-7 h-6 overflow-visible">
                                <svg width="40" height="30">
                                  <motion.path
                                    d={
                                      isLeft
                                        ? "M 0 15 Q 20 0 40 15"
                                        : "M 40 15 Q 20 0 0 15"
                                    }
                                    stroke="#6366f1"
                                    strokeWidth="3"
                                    fill="transparent"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                  />
                                </svg>
                              </div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )} */}




            {project.timeline && (
              <section
                ref={ref}
                className="relative mb-20 overflow-hidden py-10"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-10">
                  <Calendar className="h-7 w-7 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tight">
                    Development Timeline
                  </h2>
                </div>

                <div ref={containerRef} className="relative">

                  {/* Wavy Line — HIDDEN IN MOBILE */}
                  <svg
                    className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-32 opacity-40 hidden md:block"
                    viewBox="0 0 100 500"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M50 0 Q65 150 50 300 T50 600 T50 900"
                      stroke="url(#grad)"
                      strokeWidth="4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgb(139,92,246)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* TIMELINE ITEMS */}
                  <div className="relative space-y-28">
                    {project.timeline.map((phase, index) => {
                      const isLeft = index % 2 === 0;

                      return (
                        <motion.div
                          key={phase.phase + index}
                          className={`relative flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}
                          initial={{ opacity: 0, y: 80 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: index * 0.15 }}
                          viewport={{ once: true, amount: 0.4 }}
                        >

                          {/* STEP NUMBER — CENTERED ALWAYS */}
                          <motion.div
                            className="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-primary flex items-center justify-center z-20 border-4 border-background shadow"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-xs font-medium text-foreground">
                              {index + 1}
                            </span>
                          </motion.div>

                          {/* TIMELINE CARD */}
                          <motion.div
                            className={`relative p-6 bg-card border border-border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-[46%] ${isLeft ? "md:mr-auto md:-translate-x-6" : "md:ml-auto md:translate-x-6"}`}
                            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <h3 className="text-lg font-semibold text-foreground">
                                {phase.phase}
                              </h3>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {phase.description}
                            </p>

                            {/* Curved connector — HIDDEN ON MOBILE */}
                            <motion.div
                              className={`absolute top-1/2 -translate-y-1/2 hidden md:block ${isLeft ? "right-[-35px]" : "left-[-35px]"}`}
                              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-7 h-6 overflow-visible">
                                <svg width="40" height="30">
                                  <motion.path
                                    d={isLeft
                                      ? "M 0 15 Q 20 0 40 15"
                                      : "M 40 15 Q 20 0 0 15"
                                    }
                                    stroke="#6366f1"
                                    strokeWidth="3"
                                    fill="transparent"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                  />
                                </svg>
                              </div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}






            <Separator className="my-12" />

            {/* Technical Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <section className="mb-16 animate-fade-in-left" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Technical Challenges</h2>
                </div>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all border-l-4 border-l-primary animate-fade-in"
                      style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>)}

            {/* CTA */}
            <section className="mt-10 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "1.1s" }}>
              <h3 className="text-2xl font-bold mb-3">Like what you see?</h3>
              <p className="text-muted-foreground mb-6">Let's discuss my next project</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" onClick={() => navigate(-1)} variant="outline">
                  {/* <Link to="/portfolio"> */}
                  <ArrowLeft className="mr-2 h-4 w-4 " />
                  More Projects
                  {/* </Link> */}
                </Button>
                {/* {project.linkedinUrl && (
                  <Button asChild size="lg">
                    <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Get in Touch
                    </a>
                  </Button>
                )} */}
              </div>
            </section>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:w-80 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="sticky top-24 space-y-6">
              {/* Project Info Card */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Project Info
                  </h3>

                  <div className="space-y-4">
                    {project.role && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Role</div>
                        <div className="font-semibold">{project.role}</div>
                      </div>
                    )}

                    {project.duration && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="font-semibold flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          {project.duration}
                        </div>
                      </div>
                    )}

                    {project.teamSize && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Team Size</div>
                        <div className="font-semibold flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          {project.teamSize}
                        </div>
                      </div>
                    )}

                    {/* <div>
                      <div className="text-sm text-muted-foreground mb-1">Status</div>
                      <Badge className="bg-accent text-accent-foreground flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Live & Active
                      </Badge>
                    </div> */}

                    {/* Collaborators Section */}
                    {/* {project.collaborators && project.collaborators.length > 0 && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Collaborators</div>
                        <div className="flex -space-x-3">
                          {project.collaborators.map((collab, idx) => (
                            <div key={idx} className="relative group">
                              <img
                                src={`https://github.com/${collab.username}.png`}
                                alt={collab.name}
                                className="w-10 h-10 rounded-full border-2 border-white shadow cursor-pointer object-cover transition-transform duration-300 hover:scale-110 relative z-0 group-hover:z-10" // ✅ Bring to front on hover
                              />

                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 bg-white text-gray-800 rounded-xl shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-md"></div>

                                <div className="font-semibold text-sm mb-2">{collab.name}</div>
                                <div className="flex flex-col gap-2 text-xs">
                                  {collab.linkedin && (
                                    <a
                                      href={collab.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-blue-600 hover:underline"
                                    >
                                      <FaLinkedin className="w-3 h-3" />
                                      LinkedIn
                                    </a>
                                  )}
                                  {collab.portfolio && (
                                    <a
                                      href={collab.portfolio}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-blue-600 hover:underline"
                                    >
                                      <BsGlobe className="w-3 h-3" />
                                      Portfolio
                                    </a>
                                  )}
                                  <a
                                    href={`https://github.com/${collab.username}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-800 hover:text-black hover:underline"
                                  >
                                    <FaGithub className="w-3 h-3" />
                                    GitHub
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )} */}




                    {project.collaborators && project.collaborators.length > 0 && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Collaborators</div>

                        <div className="flex -space-x-3">
                          {project.collaborators.map((collab, idx) => (
                            <div
                              key={idx}
                              className="relative group"
                            >
                              {/* Avatar */}
                              <img
                                src={`https://github.com/${collab.username}.png`}
                                alt={collab.name}
                                className="w-10 h-10 rounded-full border-2 border-white shadow cursor-pointer object-cover transition-transform duration-300 hover:scale-110 relative z-0 group-hover:z-10" // ✅ Bring to front on hover
                                onClick={() => openMobileCard(collab)} // OPEN on mobile
                              />

                              {/* DESKTOP Hover Card */}
                              <div
                                className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 bg-white text-gray-800 rounded-xl shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                              >
                                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-md"></div>

                                <div className="flex place-items-center justify-around gap-4 mb-3">
                                  <div className="font-semibold text-sm mb-2">{collab.name}</div>
                                  <img
                                    src={`https://github.com/${collab.username}.png`}
                                    className="w-10 h-10 rounded-full border-2 border-gray-200 shadow"
                                  />

                                </div>
                                <div className="flex flex-col gap-2 text-xs">
                                  {collab.linkedin && (
                                    <a
                                      href={collab.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-blue-600 hover:underline"
                                    >
                                      <FaLinkedin className="w-3 h-3" />
                                      LinkedIn
                                    </a>
                                  )}

                                  {collab.portfolio && (
                                    <a
                                      href={collab.portfolio}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-blue-600 hover:underline"
                                    >
                                      <BsGlobe className="w-3 h-3" />
                                      Portfolio
                                    </a>
                                  )}

                                  <a
                                    href={`https://github.com/${collab.username}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-800 hover:underline"
                                  >
                                    <FaGithub className="w-3 h-3" />
                                    GitHub
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* MOBILE Bottom Sheet Popup */}
                    {activeCollab && (
                      <div className="fixed inset-0 z-50 md:hidden">
                        {/* Background overlay */}
                        <div
                          className="absolute inset-0 bg-black/50"
                          onClick={closeMobileCard}
                        ></div>

                        {/* Bottom Card */}
                        <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-2xl p-5 shadow-xl animate-slide-up">
                          <button
                            className="absolute top-3 right-4 text-xl font-bold text-gray-700"
                            onClick={closeMobileCard}>✕
                          </button>

                          <div className="flex items-center gap-4">
                            <img
                              src={`https://github.com/${activeCollab.username}.png`}
                              className="w-14 h-14 rounded-full border-2 border-gray-200 shadow"
                            />
                            <h3 className="text-lg font-semibold text-black">{activeCollab?.name}</h3>
                            {activeCollab.username}
                          </div>




                          <div className="mt-4 flex flex-col gap-3 text-lg">
                            {activeCollab.portfolio && (
                              <a
                                href={activeCollab.portfolio}
                                target="_blank"
                                className="flex items-center gap-3 text-blue-600"
                              >
                                <BsGlobe />
                                Portfolio
                              </a>
                            )}


                            {activeCollab.linkedin && (
                              <a
                                href={activeCollab.linkedin}
                                target="_blank"
                                className="flex items-center gap-3 text-blue-600"
                              >
                                <FaLinkedin />
                                LinkedIn
                              </a>
                            )}


                            <a
                              href={`https://github.com/${activeCollab.username}`}
                              target="_blank"
                              className="flex items-center gap-3 text-gray-800"
                            >
                              <FaGithub />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Animation */}
                    <style>{`@keyframes slide-up {from { transform: translateY(100%); }to { transform: translateY(0); }}.animate-slide-up {animation: slide-up 0.3s ease-out;}`}</style>
                  </div>
                </CardContent>
              </Card>


              {/* Quick Links Card */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    {project.githubUrl && (
                      <Button asChild variant="outline" className="w-full justify-start group">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          GitHub Repository
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild variant="outline" className="w-full justify-start group">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {/* {project.linkedinUrl && (
                      <Button asChild variant="outline" className="w-full justify-start group">
                        <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    )} */}
                  </div>
                </CardContent>
              </Card>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;




