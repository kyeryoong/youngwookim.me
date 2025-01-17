import { NextResponse } from 'next/server';

import { connectDB } from '../../../utils/database';

export const GET = async () => {
  try {
    const database = (await connectDB).db(process.env.DATABASE_NAME);
    const res = await database
      .collection(process.env.COLLECTION_NAME as string)
      .find()
      .toArray();

    return NextResponse.json({ status: 200, data: res.reverse() });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
};
