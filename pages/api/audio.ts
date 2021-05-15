import { NextApiRequest, NextApiResponse } from 'next'
import ytdl from 'ytdl-core'

async function source(req: NextApiRequest, res: NextApiResponse<ytdl.videoInfo | object>) {
	const { id } = req.query
	if (id && id.length > 0) {
		const info = await ytdl.getInfo(id as string)
		return res.status(202).json(info)
	} else {
		res.status(400).json({})
	}
}

export default source