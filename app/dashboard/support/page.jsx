import Link from "next/link";

export default function ChatSupport() {
    return (
        <div className="p-3">
            <div>
                <div className="px-4 py-3 border">
                    <h5>Chat Support Page</h5>
                    <p>This page is currently empty.</p>
                    <Link href="/dashboard" className="btn btn-danger">Go to Dashboard</Link>
                </div>
            </div>
        </div>
    )
}
