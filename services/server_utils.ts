import { Readable } from 'stream'

export function bufferToStream(buffer: Buffer) {
	const readableInstanceStream = new Readable()
	readableInstanceStream.push(buffer)
	readableInstanceStream.push(null)
	return readableInstanceStream
}