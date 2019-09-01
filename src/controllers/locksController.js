let locks = {}

const connectLock = socket => {
	const { id } = socket.handshake.query

	socket.join(id)
	locks[id] = false
}

const switchLock = (req, res, io) => {
	const { id } = req.params

	locks[id] = !locks[id]
	io.of('/locks').to(id).emit('switch', locks[id])

	res.send('switched')
}

export default { connectLock, switchLock }