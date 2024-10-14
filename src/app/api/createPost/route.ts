import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '../../../utils/database';

export async function POST(req: NextRequest) {
  try {
    const database = (await connectDB).db(process.env.DATABASE_NAME);
    const body = await req.json();
    const res = await database.collection(process.env.COLLECTION_NAME as string).insertOne(body);

    return NextResponse.json({ status: 201, data: res });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
}
