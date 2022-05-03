class User{
    constructor(id, username, name, bio){
        this._id =id
        this._username = username
        this._name = name
        this._bio = bio
        this._dateCreated = new Date()
        this._lastUpdated = new Date()
    }
    get getUserName(){
        return this._username
    }
    get getBio(){
        return this._bio
    }
    get getDateCreated(){
        return this._dateCreated
    }
    get getLastUpdated(){
        return this._lastUpdated
    }

    set setUserName (newUsername){
        this._username = newUsername
    }

    set setBio (newBio){
        this._bio = newBio
    }

}

module.exports = User