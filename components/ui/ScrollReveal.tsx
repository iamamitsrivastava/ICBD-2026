'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
    delay?: 0 | 100 | 200 | 300 | 400 | 500;
    className?: string;
    threshold?: number;
    style?: React.CSSProperties;
}

export default function ScrollReveal({
    children,
    animation = 'fade-up',
    delay = 0,
    className = '',
    threshold = 0.1,
    style,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-left': return 'reveal-left';
            case 'fade-right': return 'reveal-right';
            case 'zoom-in': return 'reveal-zoom';
            default: return 'reveal';
        }
    };

    const delayClass = delay > 0 ? `delay-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`${getAnimationClass()} ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}
