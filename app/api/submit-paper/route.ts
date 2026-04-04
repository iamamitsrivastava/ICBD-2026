import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const enrollment = formData.get('enrollment');
        const document = formData.get('document'); // This is a File object

        if (!name || !email || !document) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQGhnQ3e-OI4LeGIAvNi2h3zgKxZdSpIpFKjxPU03MT5rth92cHzEki0JkjMQCEJjf9g/exec";

        // Convert file to base64 to send it JSON encoded
        const file = document as File;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64File = buffer.toString('base64');

        const responseData = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify({
                name,
                email,
                enrollment,
                filename: file.name,
                mimetype: file.type,
                filedata: base64File
            })
        });

        // Google Apps Script may redirect (302) to an HTML page or return JSON.
        // We safely read as text first, then try to parse as JSON.
        const responseText = await responseData.text();
        console.log("Google Script raw response:", responseText.substring(0, 500));

        let result;
        try {
            result = JSON.parse(responseText);
        } catch {
            // If parsing fails, check if the request was at least received (status 200/302)
            if (responseData.ok || responseData.status === 302) {
                return NextResponse.json({
                    success: true,
                    message: "Paper submitted successfully."
                });
            }
            console.error("Non-JSON response from Google Script:", responseText.substring(0, 200));
            return NextResponse.json(
                { error: "Unexpected response from server." },
                { status: 500 }
            );
        }

        if (result.success) {
            return NextResponse.json({
                success: true,
                message: "Paper submitted successfully and logged to Google Sheets."
            });
        } else {
            console.error("Google Script Error:", result.error);
            return NextResponse.json(
                { error: "Failed to log to Google Sheets: " + (result.error || "") },
                { status: 500 }
            );
        }

    } catch (error: any) {
        console.error("Submission error details:", error);
        return NextResponse.json(
            { error: "Internal Server Error: " + (error.message || "Unknown error") },
            { status: 500 }
        );
    }
}
