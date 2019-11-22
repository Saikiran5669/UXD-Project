// author: lohitha bhethalam 
const DataStore = require('nedb')
const LOG = require('../utils/logger.js')
const players=require('../data/players.json')
const events=require('../data/events.json')
const users=require('../data/users.json')

module.exports = (app) => {
    LOG.info('START seeder.')
    const db = {}
    
    db.users = new DataStore()
    db.users.loadDatabase()
    db.users.insert(users)
    app.locals.users = db.users.find(users)
    LOG.debug(`${app.locals.users.query.length} user seeded`)

    db.events = new DataStore()
    db.events.loadDatabase()
    db.events.insert(events)
    app.locals.events = db.events.find(events)
    LOG.debug(`${app.locals.events.query.length} event seeded`)

    db.players = new DataStore()
    db.players.loadDatabase()
    db.players.insert(players)
    app.locals.players = db.players.find(players)
    LOG.debug(`${app.locals.players.query.length} player seeded`)

    
  
    LOG.info('END Seeder.Sample data read and verified.')
}
