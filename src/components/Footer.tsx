
import { Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[#222222] text-white">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.youtube.com/@virtuart4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007586] hover:text-[#00EDEB] transition-colors duration-300"
          >
           <Youtube
              size={36}
              className="transition-all duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://Linkedin.com/company/virtuart4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007586] hover:text-[#00EDEB] transition-colors duration-300"
          >
            <Linkedin
              size={26}
              className="transition-all duration-300 hover:scale-110"
            />
          </a>
        </div>
        <div className="flex justify-center items-center">
          {/* Text to change in different languages */}
          <p>
            &copy; {new Date().getFullYear()} Virtuart Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
