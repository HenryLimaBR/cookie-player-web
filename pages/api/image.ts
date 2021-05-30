import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

async function album(req: NextApiRequest, res: NextApiResponse<ArrayBuffer | object>) {
	const { i } = req.query
	if (i && i.length > 0 ) {
		const img = await axios(i as string, { responseType: 'arraybuffer' })
		if (!img) return res.status(400).json({})
		res.setHeader('Content-Type', img.headers['content-type'])
		res.setHeader('Content-Length', img.data.length)
		return res.status(202).end(img.data)
	} else {
		return res.status(400).json({})
	}
}

export default album