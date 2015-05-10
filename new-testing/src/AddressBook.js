var AddressBook = function()
{
    this.contacts = [];
    this.initialComplete = false;
};
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

    setTimeout(function(){
        self.initialComplete = true;
        if(cb) {
            return cb();
        }
    },3);
};
AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
};
AddressBook.prototype.getContact = function(ind){
    return this.contacts[ind];
};
AddressBook.prototype.deleteContact = function(ind){
    this.contacts.splice(ind,1);
};