import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '../../../utils/database';

export async function PUT(req: NextRequest) {
  try {
    const database = (await connectDB).db(process.env.DATABASE_NAME);

    const searchParams = req.nextUrl.searchParams;
    const _id = searchParams.get('_id');

    if (_id) {
      const objectId = new ObjectId(_id);

      const body = await req.json();
      const res = await database.collection(process.env.COLLECTION_NAME as string).updateOne(
        { _id: objectId },
        {
          $set: { 'replies.$[reply].isDeleted': true },
        },
        {
          arrayFilters: [{ 'reply.replyId': new ObjectId(body.replyId) }],
        },
      );

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
}
