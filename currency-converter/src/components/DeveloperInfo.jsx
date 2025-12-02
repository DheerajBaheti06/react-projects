import { Github, Linkedin, FileUser, Code } from "lucide-react";

const DeveloperInfo = () => {
  // Hardcoded developer profile data
  const profile = {
    identity: {
      fullName: "Dheeraj Baheti",
      role: "Full Stack Developer",
    },
    links: {
      github: "https://github.com/DheerajBaheti06",
      linkedin: "https://www.linkedin.com/in/dheeraj-baheti1",
      resume:
        "https://drive.google.com/file/d/1LGdqrdugh_ZtLSGsWLY9UugJcbT35LbO/view?usp=drive_link",
      sourceCode:
        "https://github.com/DheerajBaheti06/react-projects/tree/main/currency-converter",
    },
  };

  const name = profile.identity.fullName;
  const role = profile.identity.role;
  const githubUrl = profile.links.github;
  const linkedinUrl = profile.links.linkedin;
  const resumeUrl = profile.links.resume;
  const sourceCode = profile.links.sourceCode;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1.5 bg-slate-800/95 backdrop-blur-md px-3 py-2 rounded-full border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-700/90 group">
        <div className="hidden sm:flex flex-col">
          <span className="text-xs text-slate-300 font-medium leading-tight">
            Built by {name.split(" ")[0]}
          </span>
          <span className="text-[12px] text-slate-400 leading-tight">
            {role}
          </span>
        </div>

        {/* GitHub Link */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
            title={`${name} on GitHub`}
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        )}

        {/* LinkedIn Link */}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 hover:scale-110"
            title={`Connect with ${name} on LinkedIn`}
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        )}

        {/* Resume Link (if available) */}
        {resumeUrl && (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white transition-all duration-200 hover:scale-110"
            title={`View ${name}'s Resume`}
          >
            <FileUser className="w-3.5 h-3.5" />
          </a>
        )}

        {/* Source Code Link */}
        {sourceCode && (
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-green-600 hover:bg-green-500 text-white transition-all duration-200 hover:scale-110"
            title="View Source Code"
          >
            <Code className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default DeveloperInfo;
