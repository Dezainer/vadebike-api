import LocksController from 'controllers/locksController'

export default io => {
    io.of('/locks').on('connection', socket => {
        LocksController.connectLock(socket)
    })
}