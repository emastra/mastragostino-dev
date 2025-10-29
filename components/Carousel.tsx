'use client';
import React, { useState, useRef, useEffect } from 'react';

interface Story {
  id: number;
  imageUrl: string;
  title: string;
}

const storiesData: Story[] = [
  {
    id: 1,
    imageUrl:
      'https://i.pinimg.com/736x/d6/8a/12/d68a121e960094f99ad8acd37505fb7d.jpg',
    title: 'Crimson Forest',
  },
  {
    id: 2,
    imageUrl:
      'https://i.pinimg.com/736x/21/16/f7/2116f71f9d51d875e44d809f074ff079.jpg',
    title: 'Misty Mountains',
  },
  {
    id: 3,
    imageUrl:
      'https://i.pinimg.com/1200x/fe/c2/0d/fec20d2958059b8463bffb138d4eaac6.jpg',
    title: 'Floating Islands',
  },
  {
    id: 4,
    imageUrl:
      'https://i.pinimg.com/736x/84/dc/62/84dc62de850a34a9d420c97f3a2d58f4.jpg',
    title: 'Crystal Cave',
  },
  {
    id: 5,
    imageUrl:
      'https://i.pinimg.com/1200x/be/c3/7e/bec37e2c43e703f922f887db2578ce2e.jpg',
    title: 'Sunset Peaks',
  },
  {
    id: 6,
    imageUrl:
      'https://i.pinimg.com/736x/47/dd/47/47dd47b0d66c2fa641e03e370bcb5433.jpg',
    title: 'Night Sky',
  },
  {
    id: 7,
    imageUrl:
      'https://i.pinimg.com/736x/05/01/bc/0501bcd327d9df915e83154bbf9456e3.jpg',
    title: 'Ancient Ruins',
  },
  {
    id: 8,
    imageUrl:
      'https://i.pinimg.com/736x/c1/46/be/c146bebffca026d2c4fa76cc85aac917.jpg',
    title: 'Magical Tree',
  },
  {
    id: 9,
    imageUrl:
      'https://i.pinimg.com/736x/91/7a/51/917a51df0d444def3cade8d626305a67.jpg',
    title: 'Celestial Waters',
  },
];

const StoryCard = ({ story }: { story: Story }) => {
  return (
    <div
      className="group relative h-96 w-72 flex-shrink-0 overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:-translate-y-2"
      aria-hidden="false"
    >
      <img
        src={story.imageUrl}
        alt={story.title}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold tracking-wide">{story.title}</h3>
      </div>
    </div>
  );
};

export default function CarouselCards() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [minTranslate, setMinTranslate] = useState(0); // negative or 0
  const prevTranslateRef = useRef(0);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const calculateConstraints = () => {
      if (!containerRef.current || !trackRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;
      const min = Math.min(0, containerWidth - trackWidth);
      setMinTranslate(min);
      // ensure current translate is within bounds
      prevTranslateRef.current = clamp(prevTranslateRef.current, min, 0);
      applyTranslate(prevTranslateRef.current);
    };

    calculateConstraints();
    window.addEventListener('resize', calculateConstraints);
    return () => window.removeEventListener('resize', calculateConstraints);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onPointerDown = (e: PointerEvent) => {
      // only primary button
      if (e.button !== 0) return;
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      container.setPointerCapture(e.pointerId);
      container.style.cursor = 'grabbing';
      // prevent text/image dragging
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const delta = e.clientX - startXRef.current;
      const next = clamp(prevTranslateRef.current + delta, minTranslate, 0);
      // use rAF to avoid layout thrash
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => applyTranslate(next));
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const delta = e.clientX - startXRef.current;
      prevTranslateRef.current = clamp(
        prevTranslateRef.current + delta,
        minTranslate,
        0
      );
      isDraggingRef.current = false;
      container.style.cursor = 'grab';
      try {
        container.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    // set initial cursor
    container.style.cursor = 'grab';

    return () => {
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [minTranslate]);

  function applyTranslate(value: number) {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${value}px, 0, 0)`;
    }
  }

  function clamp(v: number, a: number, b: number) {
    return Math.max(a, Math.min(b, v));
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div
          ref={containerRef}
          className="cursor-grab overflow-hidden"
          aria-label="Stories carousel"
        >
          <div
            ref={trackRef}
            className="flex space-x-6 px-4 pb-6 will-change-transform"
            style={{
              touchAction: 'pan-y',
            }} /* allow vertical scroll on mobile */
          >
            {storiesData.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="group font-semibold text-gray-300 transition-colors duration-300 hover:text-white"
          >
            Discover More
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
