"use strict";

class LifeMap {
    constructor(props) {
        let user = {
            help: "huh"
        };
        function func() {
            console.log(this.help);
        }
        let helping  = func.bind(user);
        helping();
    }
} 

function showLeapYearValue() {
    let myLife = new LifeMap();
    console.log(myLife);
}

/*
        days_of_months =  {
            Jan: [31, "Jan", "January"],
            Feb: [28, "Feb", "February"],
            Mar: [31, "Mar", "March"],
            Apr: [30, "Apr", "April"],
            May: [31, "May", "May"],
            Jun: [30, "Jun", "June"],
            Jul: [31, "Jul", "July"],
            Aug: [31, "Aug", "August"],
            Sep: [30, "Sep", "September"],
            Oct: [31, "Oct", "October"],
            Nov: [30, "Nov", "November"],
            Dec: [31, "Dec", "December"],
        };
*/


