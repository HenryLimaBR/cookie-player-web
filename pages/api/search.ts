import { NextApiRequest, NextApiResponse } from 'next'
import yts from 'yt-search'

async function search(req: NextApiRequest, res: NextApiResponse<yts.VideoSearchResult[] | object>) {
	const { q } = req.query
	if (q && q.length > 0) {
		const search = await yts({
			query: q as string,
			pages: 10
		})
		return res.status(202).json(search.videos)
	} else {
		return res.status(400).json([])
  }
}

export default search