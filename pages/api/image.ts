import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import imageSize from 'image-size'


async function album(req: NextApiRequest, res: NextApiResponse<any>) {
	const { i } = req.query
	if (i && i.length > 0) {
		const request = await axios(i as string, { responseType: 'arraybuffer' })
		if (!request) return res.status(400).json({})

		const imageBuffer = request.data as Buffer

		const sizes = imageSize(imageBuffer)

		const png = new Promise<null>((resolve, reject) => {
			
		})

		res.setHeader('Content-Type', 'image/png')
		res.setHeader('Content-Length', request.data.length)
		return res.status(202).end(request.data)
	} else {
		return res.status(400).json({})
	}
}

export default album