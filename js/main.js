"use strict";

class Habits {
	get days_of_code() {
		return this._days_of_code;
	}

	constructor() {
		const _days_of_code = 100; // 1 hr per day to achieve "something"
		const _mastery = 10000; // 10,000 hours to achieve "mastery".
		const _habit_permanent_days_minimum = 66; // measured in days to be a habbit.
		const _habit_new_days_fast = 18; //To form a new habbit to replace the old is 18 days to 254 days.
		const _habit_new_days_slow = 254;
		const _visualize_acceptance = 21; // measured in days to visualize acceptance or belief.
	}
}

class Day {
	constructor() {
		const _hours = 24; // total hours in a day
		const _meals = 3; // 1 hour meals each (1/2 hour cook time + eating)
		const _sleep = 8;
		const _work = 8;
		const _commute = 2;
	}
}

class Week {
	constructor() {
		const _days_of_week = [
			Monday,
			Tuesday,
			Wednesday,
			Thursday,
			Friday,
			Saturday,
			Sunday,
		];
	}
}

class Month {
	constructor() {
		const _days_of_months =  {
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
	}
}

class Quarter {
	constructor() {
		const _months_in_quarter = {
			Q1: ["January", "February", "March"],
			Q2: ["April", "May", "June"],
			Q3: ["July", "August", "September"],
			Q4: ["October", "November", "December"],
		};
	}

}

class Year extends Day{
 	constructor() {
		const _week = ""; // 7 Days [Mon,Tue,Wed,Thu,Fri,Sat,Sun]
		const _month = ""; // any of 28,29,30 or 31 days
		const _quarter = ""; // of 1st (Jan,Feb,Mar == 90 or 91 days), 2nd (Apr,May,Jun ==), 3rd or 4th 
 	}
}

class Decade extends Year {
}

class Century extends Decade {
}

class LifeTime {
	get basicLifeUnit() {
		return "Measure life in: " + this._basicLifeUnit
	}

	set basicLifeUnit(updatedLifeUnit) {
		alert('works')
		console.log('works')
		this._basicLifeUnit = updatedLifeUnit
	}
	
	constructor(originalLifeUnit) {
		const defaultLifeUnit = 'Months'
		if(!originalLifeUnit) {
			originalLifeUnit = defaultLifeUnit
		}
		this._basicLifeUnit = originalLifeUnit
	}
}

class LifeMap {
	get basicLifeUnit() {
		return "Measure life in: " + this._basicLifeUnit
	}

	set basicLifeUnit(updatedLifeUnit) {
		alert('works')
		console.log('works')
		this._basicLifeUnit = updatedLifeUnit
	}
	
	constructor(originalDirection) {
		const defaultDirection = 'Months'
		if(!originalLifeUnit) {
			originalLifeUnit = defaultLifeUnit
		}
		this._basicLifeUnit = originalLifeUnit
	}
} 

function visualize() {
	const myLife = new LifeTime()
	console.log(myLife._basicLifeUnit) //reading the value directly, but not calling the function
	console.log(myLife.basicLifeUnit)
	myLife.basicLifeUnit = 'Days'
	console.log(myLife.basicLifeUnit)
}


