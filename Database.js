
class Database {
    constructor() {
        this.users = [
            { id: 2, name: "Cristian", last_name: "Estrada", email: "cristian.estrada@savener.es", password: '?Z8jh623q'}
        ];
        this.emails = {};
        this.executions = {};
        this.last_known_uids = {};
    }
    
    saveExecution(user_id) {
        this.executions[user_id] = new Date()
    }

    getExecution(user_id) {
        return this.executions[user_id]
    }

    setEmails(user_id, emails) {
        this.emails[user_id] = this.emails[user_id] ? [...this.emails[user_id], ...emails] : emails;
    }
  
    getEmails(user_id) {
      return this.emails[user_id];
    }

    getUsers() {
        return this.users;
    }
    
    getUser(user_id) {
        return this.users.find((user) => user.id === user_id);
    }

    saveLastKnownUID(user_id, uid) {
        this.last_known_uids[user_id] = uid
    }

    getLastKnownUID(user_id) {
        return this.last_known_uids[user_id]
    }

    getUnreadEmails(user_id) {
        return this.emails[user_id] ? this.emails[user_id].filter(email => !email.read) : [];
    }

    setReadEmails(user_id, uids){
        if (!this.emails[user_id]) return;
        this.emails[user_id].filter((email) => uids.includes(email.uid)).forEach((email) => email.read = true)
    }
  
  }
  
  module.exports = new Database();