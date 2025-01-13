import { NextResponse } from 'next/server';

import { connectDB } from '../../../utils/database';

export async function GET() {
  try {
    const database = (await connectDB).db(process.env.DATABASE_NAME);
    const res = await database
      .collection(process.env.COLLECTION_NAME as string)
      .find()
      .toArray();

    return new NextResponse(JSON.stringify(res.reverse()), {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('API Route 오류:', error); // 에러 로깅 추가
    return new NextResponse(
      JSON.stringify({ error: '데이터를 가져오는 중 오류가 발생했습니다.' }),
      {
        status: 500,
      },
    );
  }
}
