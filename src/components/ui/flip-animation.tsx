'use client';
import * as React from 'react';
import {
  type HTMLMotionProps,
  type Transition,
  type Variant,
  motion,
} from 'motion/react';
import { cn } from '@/lib/utils';

type FlipDirection = 'top' | 'bottom' | 'left' | 'right';

type FlipCardProps = HTMLMotionProps<'div'> & {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  transition?: Transition;
  from?: FlipDirection;
  isFlipped: boolean; // controlled flip state
};

const DEFAULT_SIDE_CLASS =
  'absolute inset-0 w-full h-full backface-hidden';

function FlipCard({
  frontContent,
  backContent,
  transition = { type: 'spring', stiffness: 280, damping: 20 },
  className,
  from = 'top',
  isFlipped,
  ...props
}: FlipCardProps) {
  const isVertical = from === 'top' || from === 'bottom';
  const rotateAxis = isVertical ? 'rotateX' : 'rotateY';

  const buildVariant = (rotation: number): Variant => ({
    [rotateAxis]: rotation,
    transition,
  });

  const containerVariants = {
    initial: buildVariant(0),
    flipped: buildVariant(from === 'top' || from === 'left' ? 180 : -180),
  };

  return (
    <motion.div
      data-slot="flip-card"
      className={cn(
        'relative w-full h-full perspective-[1000px]',
        className,
      )}
      {...props}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        variants={containerVariants}
        initial="initial"
        animate={isFlipped ? 'flipped' : 'initial'}
      >
        {/* FRONT */}
        <div
          className={cn(
            DEFAULT_SIDE_CLASS,
            'z-20',
          )}
        >
          {frontContent}
        </div>

        {/* BACK */}
        <div
          className={cn(
            DEFAULT_SIDE_CLASS,
            'rotate-y-180',
          )}
        >
          {backContent}
        </div>
      </motion.div>
    </motion.div>
  );
}

export { FlipCard, type FlipCardProps };
