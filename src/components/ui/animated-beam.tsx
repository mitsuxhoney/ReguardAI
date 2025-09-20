"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startYOffset?: number;
  startXOffset?: number;
  endYOffset?: number;
  endXOffset?: number;
}

export const AnimatedBeam = forwardRef<SVGSVGElement, AnimatedBeamProps>(
  (
    {
      className,
      containerRef,
      fromRef,
      toRef,
      curvature = 0,
      reverse = false,
      duration = Math.random() * 3 + 4,
      delay = 0,
      pathColor = "gray",
      pathWidth = 2,
      pathOpacity = 0.2,
      gradientStartColor = "#ffaa40",
      gradientStopColor = "#9c40ff",
      startYOffset = 0,
      startXOffset = 0,
      endYOffset = 0,
      endXOffset = 0,
    },
    ref,
  ) => {
    const id = useRef(Math.random().toString(36).substr(2, 9));
    const [pathD, setPathD] = useState("");
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlPointX = (startX + endX) / 2;
        const controlPointY = (startY + endY) / 2 - curvature;

        const d = `M ${startX},${startY} Q ${controlPointX},${controlPointY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    useEffect(() => {
      updatePath();
      window.addEventListener("resize", updatePath);
      return () => window.removeEventListener("resize", updatePath);
    }, [
      containerRef,
      fromRef,
      toRef,
      curvature,
      startXOffset,
      startYOffset,
      endXOffset,
      endYOffset,
    ]);

    return (
      <svg
        ref={ref}
        className={cn(
          "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
          className,
        )}
        width={svgDimensions.width}
        height={svgDimensions.height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      >
        <defs>
          <linearGradient
            className={cn("transform-gpu")}
            id={`gradient-${id.current}`}
            gradientUnits="userSpaceOnUse"
            gradientTransform={reverse ? "rotate(180)" : "rotate(0)"}
          >
            <stop stopColor={gradientStartColor} stopOpacity="0" offset="0%" />
            <stop stopColor={gradientStartColor} offset="32.5%" />
            <stop stopColor={gradientStopColor} offset="67.5%" />
            <stop stopColor={gradientStopColor} stopOpacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <path
          d={pathD}
          stroke={pathColor}
          strokeWidth={pathWidth}
          strokeOpacity={pathOpacity}
          fill="none"
        />
        <path
          d={pathD}
          strokeWidth={pathWidth}
          stroke={`url(#gradient-${id.current})`}
          strokeOpacity="1"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="20 20"
        >
          <animate
            attributeName="stroke-dashoffset"
            values={reverse ? "0;-40" : "0;40"}
            dur={`${duration}s`}
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </path>
      </svg>
    );
  },
);

AnimatedBeam.displayName = "AnimatedBeam";