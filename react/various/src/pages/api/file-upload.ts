import {NextApiRequest, NextApiResponse} from 'next';

export default async function api(req: NextApiRequest, res: NextApiResponse) {
  console.log('file-upload', req);
  res.status(200).json({});
}
