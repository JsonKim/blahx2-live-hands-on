// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import MessageCtrl from '@/controllers/message/message.controller';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  console.info(method);
  try {
    await MessageCtrl.postReplay(req, res);
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
}
