
class User{
    tickets = [];
    addTicket(seatNum,flightNum,departureAirport,arrivalAirport,travelDate){
        let ticket = {seatNum,flightNum,departureAirport,arrivalAirport,travelDate};
        this.tickets.push(ticket);
    }
    getTickets(){
        return this.tickets;
    }
    displayTickets(){
        for(let i=0;i<this.tickets.length;i++){
            console.log(`Seat Number:${this.tickets[i].seatNum}\nFlight Number:${this.tickets[i].flightNum}\nDeparture Airport:${this.tickets[i].departureAirport}\nArrival Airport:${this.tickets[i].arrivalAirport}\nTravelling Date:${this.tickets[i].travelDate}`)
        }
    }
    updateTicket(seatNum,flightNum,departureAirport,arrivalAirport,travelDate,i){
        this.tickets[i].seatNum=seatNum;
        this.tickets[i].flightNum=flightNum;
        this.tickets[i].departureAirport=departureAirport;
        this.tickets[i].arrivalAirport=arrivalAirport;
        this.tickets[i].travelDate=travelDate;
    }
}

module.exports = {
    User
}
/*class User{
    constructor(seatNum,flightNum,departureAirport,arrivalAirport,travelDate){
        this.seatNum=seatNum;
        this.flightNum=flightNum;
        this.departureAirport=departureAirport;
        this.arrivalAirport=arrivalAirport;
        this.travelDate=travelDate;
    }
    displayTicket=function (){console.log(`Seat Number:${this.seatNum}\nFlight Number:${this.flightNum}\nDeparture Airport:${this.departureAirport}\nArrival Airport:${this.arrivalAirport}\nTravelling Date:${this.travelDate}`)}
    updateTicket=function(seatNum,flightNum,departureAirport,arrivalAirport,travelDate){
        this.seatNum=seatNum;
        this.flightNum=flightNum;
        this.departureAirport=departureAirport;
        this.arrivalAirport=arrivalAirport;
        this.travelDate=travelDate;
    }
}

module.exports = {
    User
}*/