'use client';

/**
 * PresentationDeck
 * ------------------------------------------------------------------
 * Self-playing, immersive presentation for hackathon demos.
 * Built for LOW-END ANDROID performance:
 *   - Only `transform` + `opacity` are ever animated (GPU compositor
 *     path — never triggers layout/paint).
 *   - One setTimeout drives slide advance. No requestAnimationFrame
 *     loop, no per-frame JS.
 *   - Progress bar is a single CSS `@keyframes` animation
 *     (transform: scaleX), not a JS-ticked width value.
 *   - Ken Burns background pan/zoom is pure CSS, GPU-composited.
 *   - Tap/click pauses & resumes. Arrow keys / swipe also work.
 *   - Respects prefers-reduced-motion (kills pan+zoom, keeps a plain
 *     cross-fade so it still "presents itself").
 * ------------------------------------------------------------------
 */

import { useCallback, useEffect, useRef, useState } from 'react';

export interface Slide {
  id: string;
  eyebrow?: string;
  title: string;
  body?: string;
  /** Optional background image/video poster for the Ken Burns layer */
  image?: string;
}

interface PresentationDeckProps {
  slides: Slide[];
  /** How long each slide stays on screen, in ms */
  durationMs?: number;
  /** Loop back to slide 0 after the last slide */
  loop?: boolean;
  /** Called when the deck reaches the end (only fires if loop=false) */
  onComplete?: () => void;
}

export function PresentationDeck({
  slides,
  durationMs = 7000,
  loop = true,
  onComplete,
}: PresentationDeckProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const goTo = useCallback(
    (next: number) => {
      const count = slides.length;
      if (next >= count) {
        if (loop) {
          setIndex(0);
        } else {
          setIndex(count - 1);
          onComplete?.();
        }
        return;
      }
      setIndex(((next % count) + count) % count);
    },
    [slides.length, loop, onComplete]
  );

  // Single timer per slide — this is the ONLY interval/timeout in the
  // whole component. No rAF loop anywhere.
  useEffect(() => {
    if (paused) return;
    clearTimer();
    timerRef.current = setTimeout(() => goTo(index + 1), durationMs);
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, durationMs]);

  // Keyboard fallback (useful when mirroring to a laptop for judges)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(index + 1);
      if (e.key === 'ArrowLeft') goTo(index - 1);
      if (e.key === ' ') {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, goTo]);

  // Basic swipe support for touch devices
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta < 0 ? index + 1 : index - 1);
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="deck"
      onClick={() => setPaused((p) => !p)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="button"
      tabIndex={0}
      aria-label="Presentation deck. Tap to pause or resume."
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`deck-slide ${i === index ? 'is-active' : ''}`}
          aria-hidden={i !== index}
        >
          {slide.image && (
            <div
              className="deck-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}
          <div className="deck-scrim" />
          <div className="deck-content">
            {slide.eyebrow && <p className="deck-eyebrow label">{slide.eyebrow}</p>}
            <h2 className="deck-title text-display-md display-italic">{slide.title}</h2>
            {slide.body && <p className="deck-body text-body-lg">{slide.body}</p>}
          </div>
        </div>
      ))}

      {/* Progress bar: pure CSS keyframe per active slide, restarts via `key` */}
      <div className="deck-progress-track">
        <div
          key={`${index}-${paused}`}
          className="deck-progress-fill"
          style={{
            animationDuration: `${durationMs}ms`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        />
      </div>

      {/* Slide dots — purely decorative, no per-frame updates */}
      <div className="deck-dots">
        {slides.map((s, i) => (
          <span key={s.id} className={`deck-dot ${i === index ? 'is-active' : ''}`} />
        ))}
      </div>

      {paused && <div className="deck-paused-badge label">PAUSED — tap to resume</div>}
    </div>
  );
}
