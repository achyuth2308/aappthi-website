import { NextResponse } from "next/server";

const AWARDS = [
    {
        id: 1,
        title: "Asia Infrastructure Digital Excellence Award",
        organization: "Asia Digital Innovation Council",
        category: "Infrastructure Technology",
        description: "Recognized for outstanding contribution to digital monitoring in urban infrastructure.",
    },
    {
        id: 2,
        title: "Construction Technology Innovation Award",
        organization: "BuildTech Asia Forum",
        category: "Construction & Real Estate",
        description: "Honored for innovative digital coordination tools in large-scale construction.",
    },
    {
        id: 3,
        title: "Maritime Digital Transformation Award",
        organization: "Asia-Pacific Maritime Technology Council",
        category: "Logistics & Ports",
        description: "Excellence in port operations digitization and smart logistics development.",
    },
    {
        id: 4,
        title: "Infrastructure Analytics Excellence Award",
        organization: "National Infrastructure Analytics Forum",
        category: "Data & Analytics",
        description: "Recognition for analytics dashboards supporting government infrastructure stakeholders.",
    },
    {
        id: 5,
        title: "Smart City Innovation Recognition",
        organization: "Urban Innovation Foundation",
        category: "Smart City Solutions",
        description: "Contributions to smart city digital architecture and urban data processing.",
    },
];

export async function GET() {
    return NextResponse.json({
        success: true,
        disclaimer: "Awards listed are part of a concept website demonstration only.",
        data: AWARDS,
    });
}
