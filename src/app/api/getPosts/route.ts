import { NextResponse } from 'next/server';

import { connectDB } from '../../../utils/database';

export async function GET() {
  try {
    const database = (await connectDB).db(process.env.DATABASE_NAME);
    const res = await database
      .collection(process.env.COLLECTION_NAME as string)
      .find()
      .toArray();

    return NextResponse.json({ status: 201, data: res.reverse() });
  } catch (error) {
    console.error('[mongoDB Error]:', error);
    return NextResponse.json({ status: 500 });
  }
}
