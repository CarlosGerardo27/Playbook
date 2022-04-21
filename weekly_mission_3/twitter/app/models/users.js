class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this._id =id
        this._username = username
        this._name = name
        this._bio = bio
        this._dateCreated = new Date()
        this._lastUpdate = new Date()
    }
}

module.exports = User