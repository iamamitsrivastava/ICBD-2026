import { ReactNode } from 'react';

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    submittedAt: string;
    forwardTo?: string;
}

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface HighlightItem {
    text: string;
    icon?: ReactNode;
}

export interface GuidelineItem {
    title: string;
    text: string;
}

export interface CommitteeMember {
    name: string;
    role?: string;
    affiliation?: string;
    image?: string;
    details?: string;
}

export interface TimelineItem {
    label: string;
    date: string;
}
