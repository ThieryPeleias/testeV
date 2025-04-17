tsx
// src/components/ScrollToTopButton.tsx
"use client";

import {Button} from "@/components/ui/button";
import {ArrowUp} from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <div className="fixed bottom-10 right-10">
      <Button
        onClick={scrollToTop}
        className="rounded-full p-4 shadow-md"
        size="icon"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;