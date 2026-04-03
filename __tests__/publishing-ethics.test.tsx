import { render, screen } from '@testing-library/react';
import PublishingEthicsPage from '@/app/resources/publishing-ethics/page';

describe('PublishingEthicsPage', () => {
    it('renders new sections', () => {
        render(<PublishingEthicsPage />);
        expect(screen.getByRole('heading', { name: /Data Availability & Reproducibility/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Conflict of Interest/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Open Access & Licensing/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Ethical Review Process/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Author Responsibilities & Contributions/i })).toBeInTheDocument();
    });
});
