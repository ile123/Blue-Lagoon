import { PalmTreeSize } from "@/types/PalmTreeSize";
import Image from "next/image";

export default function PalmTree({ height, width }: PalmTreeSize) {
  return (
    <div className="flex items-center justify-center mt-[5%]">
      <Image
        priority
        alt="Palm trees in front a sunset"
        src="https://worldofprintables.com/wp-content/uploads/2024/02/Palm-Tree-Beach-SVG.svg"
        height={height}
        width={width}
      />
    </div>
  );
}
