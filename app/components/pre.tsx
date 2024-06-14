"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCheck, Copy } from "lucide-react";
import {
  SiJavascript,
  SiJson,
  SiTypescript,
  SiCss3,
  SiGnubash,
  SiMarkdown,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const iconMap = {
  js: <SiJavascript className="text-neutral-400 rounded-sm" size={16} />,
  jsx: <SiJavascript className="text-neutral-400 rounded-sm" size={16} />,
  json: <SiJson className="text-neutral-400 rounded-sm" size={16} />,
  ts: <SiTypescript className="text-neutral-400 rounded-sm" size={16} />,
  css: <SiCss3 className="text-neutral-400 rounded-sm" size={16} />,
  bash: <SiGnubash className="text-neutral-400 rounded-sm" size={16} />,
  md: <SiMarkdown className="text-neutral-400 rounded-sm" size={16} />,
  diff: <SiGithub className="text-neutral-400 rounded-sm" size={16} />,
  // Add more mappings as needed
};

const fadeIn = {
  animation: "fade-in 0.5s ease-in-out",
  "@keyframes fade-in": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
};

const fadeOut = {
  animation: "fade-out 0.5s ease-in-out",
  "@keyframes fade-out": {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
};

const Pre = (props) => {
  const preRef = useRef<HTMLPreElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [title, setTitle] = useState("");

  const lang = props["data-language"];
  const icon = iconMap[lang] || lang; // Fallback to text if no icon is found

  useEffect(() => {
    if (containerRef.current) {
      const figcaption = containerRef.current.previousElementSibling;
      if (figcaption && figcaption.tagName.toLowerCase() === "figcaption") {
        setTitle(figcaption.innerHTML);
        figcaption.remove();
      }
    }
  }, []);

  const onCopy = () => {
    setCopied(true);

    if (preRef.current && preRef.current.textContent) {
      navigator.clipboard.writeText(preRef.current.textContent);
    }

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div ref={containerRef} className="relative my-4">
      {/* {lang} */}
      <div className="flex overflow-x-auto justify-between items-center rounded-t-lg px-4 py-3 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-900 border-neutral-100 dark:border-neutral-500 border-y border-x border-y-neutral-200 border-x-neutral-200 dark:border-y-neutral-700 dark:border-x-neutral-700">
        <div className="flex items-center mr-4 sm:mr-0">
          <span className="text-sm">{icon}</span>
          {title && (
            <figcaption
              className="text-sm ml-4 text-neutral-400"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        </div>
        <button
          aria-label="Copy code"
          type="button"
          className="transition-all h-4 w-4 active:opacity-50"
          onClick={onCopy}
        >
          {copied ? (
            <CheckCheck width={16} height={16} className="text-neutral-500" />
          ) : (
            <Copy
              width={16}
              height={16}
              className="transition-all duration-300 cursor-pointer text-neutral-500 hover:text-neutral-400"
            />
          )}
        </button>
      </div>

      <pre ref={preRef}>{props.children}</pre>
    </div>
  );
};

export default Pre;
