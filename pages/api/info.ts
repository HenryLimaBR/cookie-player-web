import { NextApiRequest, NextApiResponse } from 'next'
import ytdl from 'ytdl-core'

async function info(req: NextApiRequest, res: NextApiResponse<ytdl.videoInfo | object>) {
	const { id } = req.query
	if (id && id.length > 0) {
		let data: ytdl.videoInfo | object = {}
		try {
			data = await ytdl.getBasicInfo(id as string)
		} catch (err) {
			console.error(err)
			return res.status(400).json({})
		}
		return res.status(202).json(data)
	} else {
		return res.status(400).json({})
	}
}

export default info
