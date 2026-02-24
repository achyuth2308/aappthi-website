import { NextResponse } from "next/server";

const PROJECTS = [
    {
        id: 1,
        title: "Metro Infrastructure Digital Monitoring System",
        description: "Comprehensive digital monitoring platform for urban metro infrastructure.",
        category: "Infrastructure Technology",
        year: 2023,
    },
    {
        id: 2,
        title: "Coastal Bridge ERP Implementation",
        description: "End-to-end ERP deployment for coastal bridge infrastructure.",
        category: "Enterprise Resource Planning",
        year: 2023,
    },
    {
        id: 3,
        title: "Smart Port Digital Operations Platform",
        description: "Digital operations platform for port management and cargo logistics.",
        category: "Logistics & Port Management",
        year: 2022,
    },
    {
        id: 4,
        title: "National Highway Performance Dashboard",
        description: "Analytics dashboard for national highway performance monitoring.",
        category: "Analytics & Reporting",
        year: 2022,
    },
    {
        id: 5,
        title: "Smart City Urban Planning System",
        description: "Digital architecture for smart city planning and urban development.",
        category: "Smart City Solutions",
        year: 2021,
    },
];

export async function GET() {
    return NextResponse.json({ success: true, data: PROJECTS });
}
