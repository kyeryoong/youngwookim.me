import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '../../../utils/database';

export const DELETE = async (req: NextRequest) => {
  try {
    const database = (await connectDB).db(process.env.DATABASE_NAME);

    const searchParams = req.nextUrl.searchParams;
    const _id = searchParams.get('_id');

    if (_id) {
      const objectId = new ObjectId(_id);

      const res = await database
        .collection(process.env.COLLECTION_NAME as string)
        .deleteOne({ _id: objectId });

      if (res) {
        return NextResponse.json({ status: 200 });
      } else {
        return NextResponse.json({ status: 404 });
      }
    } else {
      return NextResponse.json({ status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
};
