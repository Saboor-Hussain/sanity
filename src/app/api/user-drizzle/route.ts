import { NextResponse, NextRequest } from "next/server";
import { db, userTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const GET = async (req: NextRequest) => {
    const res = await db.select().from(userTable)
    // .where(eq(userTable.user_id,1));    // finding a specific record from database

    return NextResponse.json(res);
}

export const POST = async (req: NextRequest) => {
    const name = req.nextUrl.searchParams.get('name');
    const body = req.json();
    const res = await db.insert(userTable).values({user_name: name}).returning();
    return NextResponse.json(res);
}