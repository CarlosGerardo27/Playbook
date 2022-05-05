const User = require('./../models/users')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "sin bio")
    }
    static getInfo(user){
        return [user._id, user._username, user._name, user._bio,user._dateCreated, user._lastUpdated]
    }

    static UpdateUserUsername(user, string){
        return user._username = string;
    }
    
    static getAllUsernames(users){
        const listAllUserNames = users.map(user =>{
            return user._username
        })
        return listAllUserNames
    }
}

module.exports = UserService