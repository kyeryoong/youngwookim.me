import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import getEmailHtml from '@/utils/getEmailHtml';

import { connectDB } from '../../../utils/database';

export const POST = async (req: NextRequest) => {
  try {
    const database = (await connectDB).db(process.env.DATABASE_NAME);

    const body = await req.json();
    const objectId = new ObjectId();

    const res = await database
      .collection(process.env.COLLECTION_NAME as string)
      .insertOne({ _id: objectId, ...body });

    if (res) {
      if (!body.isAdmin) {
        const transporter = nodemailer.createTransport({
          service: process.env.MAIL_SERVICE,
          host: process.env.MAIL_HOST,
          port: Number(process.env.MAIL_PORT),
          secure: false,
          auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PW,
          },
        });

        const mailOptions = {
          from: process.env.MAIL_ID,
          to: process.env.MAIL_ID,
          subject: '[youngwookim.me] 게시글 작성 알림',
          html: getEmailHtml({
            type: 'post',
            title: body.title,
            userName: body.userName,
            createdAt: new Date(body.createdAt).toLocaleString('ko-KR', {
              timeZone: 'Asia/Seoul',
            }),
          }),
        };

        try {
          transporter.sendMail(mailOptions);

          return NextResponse.json({ status: 200, _id: objectId });
        } catch (emailError) {
          console.error(emailError);

          return NextResponse.json({ status: 500, emailError });
        }
      } else {
        return NextResponse.json({ status: 200, _id: objectId });
      }
    } else {
      return NextResponse.json({ status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
};
