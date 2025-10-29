'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  UserPlus,
} from 'lucide-react';

interface AutomationCard {
  id: number;
  category: string;
  title: string;
  description: string;
  result: string;
  icon: React.ReactNode;
  iconBg: string;
}

const automationData: AutomationCard[] = [
  {
    id: 1,
    category: 'Gestione nuovi clienti',
    title: 'Da modulo a CRM, senza toccare nulla',
    description:
      "Quando un potenziale cliente compila un form sul tuo sito o social, i suoi dati vengono salvati nel CRM, riceve subito un'email personalizzata e tu ricevi una notifica con tutte le informazioni.",
    result: 'Nessuna perdita di lead, nessun copia-incolla manuale.',
    icon: <Users className="h-6 w-6" />,
    iconBg: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    category: 'Fatturazione automatica',
    title: 'Fatture che si generano e si inviano da sole',
    description:
      'Ogni volta che un pagamento arriva, il sistema crea la fattura, la archivia nel gestionale e la invia al cliente.',
    result: 'Tutto preciso, puntuale e senza dimenticanze.',
    icon: <FileText className="h-6 w-6" />,
    iconBg: 'from-emerald-500 to-teal-500',
  },
  {
    id: 3,
    category: 'Follow-up intelligenti',
    title: 'Promemoria automatici per i clienti (anche quando non hai tempo)',
    description:
      "Se un cliente non risponde dopo X giorni, parte un'email o un messaggio di follow-up automatico. Puoi personalizzare tono, canale e tempi.",
    result: 'Ogni opportunità gestita al momento giusto, senza stress.',
    icon: <MessageSquare className="h-6 w-6" />,
    iconBg: 'from-violet-500 to-purple-500',
  },
  {
    id: 4,
    category: 'Gestione documenti e report',
    title: 'Report e documenti che si compilano da soli',
    description:
      'Raccogli dati da più fonti (Excel, CRM, Google Analytics) e genera un report PDF pronto da inviare al cliente o al team.',
    result: 'Niente più ore perse a formattare tabelle o aggiornare numeri.',
    icon: <BarChart3 className="h-6 w-6" />,
    iconBg: 'from-amber-500 to-orange-500',
  },
  {
    id: 5,
    category: 'Onboarding collaboratori o clienti',
    title: "Un'accoglienza automatica e professionale",
    description:
      'Quando un nuovo cliente o collaboratore entra, riceve email, accessi e materiali in automatico.',
    result:
      'Un processo fluido e coerente che trasmette professionalità fin dal primo contatto.',
    icon: <UserPlus className="h-6 w-6" />,
    iconBg: 'from-pink-500 to-rose-500',
  },
];

const AutomationCard = ({ card }: { card: AutomationCard }) => {
  return (
    <div className="group h-auto w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex h-full flex-col p-6">
        {/* Category Badge */}
        <span className="mb-4 inline-block w-fit rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {card.category}
        </span>

        {/* Icon */}
        <div className="mb-4 flex items-center justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}
          >
            {card.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold leading-tight text-neutral-900 dark:text-neutral-50">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-grow text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {card.description}
        </p>

        {/* Result Badge */}
        <div className="rounded-lg bg-primary-500/10 p-3 dark:bg-primary-500/20">
          <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
            {card.result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [minTranslate, setMinTranslate] = useState(0);
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
      if (e.button !== 0) return;
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      container.setPointerCapture(e.pointerId);
      container.style.cursor = 'grabbing';
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const delta = e.clientX - startXRef.current;
      const next = clamp(prevTranslateRef.current + delta, minTranslate, 0);
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
      <div
        ref={containerRef}
        className="w-full cursor-grab overflow-hidden"
        aria-label="Automation examples carousel"
      >
        <div
          ref={trackRef}
          className="flex space-x-6 px-4 pb-6 will-change-transform"
          style={{
            touchAction: 'pan-y',
          }}
        >
          {automationData.map((card) => (
            <AutomationCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
