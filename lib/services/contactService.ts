import fs from 'fs';
import path from 'path';
import { ContactSubmission } from '@/types';
import { ContactInput } from '../validations/contact';

const CONTACT_EMAIL = '2303051240028@paruluniversity.ac.in';
const DATA_DIR = path.join(process.cwd(), 'data');
const SUBMISSIONS_DIR = path.join(DATA_DIR, 'submissions');
const CONTACT_FILE = path.join(SUBMISSIONS_DIR, 'contact.json');

export class ContactService {
    static async saveSubmission(input: ContactInput): Promise<ContactSubmission> {
        const submission: ContactSubmission = {
            id: Date.now().toString(),
            ...input,
            submittedAt: new Date().toISOString(),
            forwardTo: CONTACT_EMAIL,
        };

        try {
            this.ensureDirectory();
            const submissions = this.getAllSubmissions();
            submissions.push(submission);
            fs.writeFileSync(CONTACT_FILE, JSON.stringify(submissions, null, 2));
        } catch (error) {
            console.warn('Could not write to local filesystem. If in serverless environment (like Vercel), use a DB instead:', error);
        }

        return submission;
    }

    private static getAllSubmissions(): ContactSubmission[] {
        if (!fs.existsSync(CONTACT_FILE)) return [];

        try {
            const content = fs.readFileSync(CONTACT_FILE, 'utf-8');
            return JSON.parse(content);
        } catch (error) {
            console.error('Error reading contact submissions:', error);
            return [];
        }
    }

    private static ensureDirectory() {
        [DATA_DIR, SUBMISSIONS_DIR].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }
}
