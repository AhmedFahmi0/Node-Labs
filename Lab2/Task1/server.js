var myMod = require("./module.js");
let User = myMod.User;
let user1 = new User();
user1.addTicket("35","500","Sharjah Airport","Borg el Arab","16/8/2023")
user1.displayTickets();
user1.updateTicket("98","56464","Cairo Airport","Dubai Airport","1/2/2020",0);
user1.displayTickets();
user1.addTicket("5","52200","Sharjah Airport","Borg el Arab","1/11/2019")
user1.displayTickets();
user1.getTickets();

