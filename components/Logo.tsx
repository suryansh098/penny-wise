import { PhilippinePeso } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <PhilippinePeso className="stroke h-7 w-7 md:h-11 md:w-11 stroke-amber-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-xl md:text-3xl font-bold leading-tight tracking-tight text-transparent font-logo">
        PennyWise
      </p>
    </Link>
  );
}

export default Logo;
