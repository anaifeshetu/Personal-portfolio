import { ArrowRight, Download } from "lucide-react";

export const AnimatedBorderButton = ({ children }) => {
  return (
    <div className="flex items-center gap-4">
      <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:opacity-90 transition">
        Contact Me <ArrowRight className="w-5 h-5" />
      </button>

      <button className="relative px-6 py-3 rounded-full overflow-hidden group">
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
        >
          <path
            d="M 30,1 A 29,29 0 0 0 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 A 29,29 0 0 0 170,1 Z"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="400 550"
            strokeDashoffset="400"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animated-border-path"
          />
        </svg>
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
         {children}
          <Download className="w-5 h-5" />
          Download CV
        </span>
      </button>
    </div>
  );
};

export default AnimatedBorderButton;