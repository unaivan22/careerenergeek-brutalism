'use client';;
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export function BorderTrail({
  className,
  size = 60,
  transition,
  onAnimationComplete,
  style
}) {
  const defaultTransition = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  };

  return (
    (<div
      className='pointer-events-none absolute inset-0 rounded-[inherit] border border-stone-200 border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]' dark:border-stone-800>
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={transition || defaultTransition}
        onAnimationComplete={onAnimationComplete} />
    </div>)
  );
}
