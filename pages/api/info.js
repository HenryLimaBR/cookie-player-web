import ytdl from 'ytdl-core'

async function info(req, res) {
	const { id } = req.query
	if (id && id.length > 0) {
		const data = await ytdl.getBasicInfo(id)
		return res.json(data)
	} else {
		return res.json({ error: true })
  }
}

export default info
