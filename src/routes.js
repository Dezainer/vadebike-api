import LocksController from 'controllers/locksController'

export default (app, io) => {

    app.route('/')
        .get((req, res) => res.send('vaidebike API!'))

    app.route('/locks/:id')
    	.put((req, res) => LocksController.switchLock(req, res, io))
}