function calendarEvent(dateUnix, title, myFunc) {
    this.date = dateUnix;
    this.title = title;
    this.myFunc = setTimeout(myFunc, dateUnix - Date.now());
}

var events = {
    allEvents: [],
    add: function(dateUnix, title, myFunc) {
        this.allEvents[this.allEvents.length] = new calendarEvent(dateUnix, title, myFunc);
    },
    get: {
        day: function(year, month, day) {
            var result = [];
            var searchDay = new Date(year, month - 1, day).getTime();
            var nextDay = new Date(year, month - 1, day + 1).getTime();
            events.allEvents.forEach(function(i, key, value) {
                if (value[key].date >= searchDay && value[key].date < nextDay) {
                    result[result.length] = value[key];
                }
            });
            return result;
        },
        week: function(year, month, day) {
            var result = [];
            var searchDay = new Date(year, month - 1, day).getTime();
            var nextDay = new Date(year, month - 1, day + 7).getTime();
            events.allEvents.forEach(function(i, key, value) {
                if (value[key].date >= searchDay && value[key].date <= nextDay) {
                    result[result.length] = value[key];
                }
            });
            return result;
        },
        month: function(year, month) {
            var result = [];
            var searchDay = new Date(year, month - 1).getTime();
            var nextDay = new Date(year, month).getTime();
            events.allEvents.forEach(function(i, key, value) {
                if (value[key].date >= searchDay && value[key].date < nextDay) {
                    result[result.length] = value[key];
                }
            });
            return result;
        },
        interval: function(firstYear, firstMonth, firstDay, firstHour, firstMinute, lastYear, lastMonth, lastDay, lastHour, lastMinute) {
            var result = [];
            var searchDay = new Date(firstYear, firstMonth - 1, firstDay, firstHour, firstMinute).getTime();
            var nextDay = new Date(lastYear, lastMonth - 1, lastDay, lastHour, lastMinute).getTime();
            events.allEvents.forEach(function(i, key, value) {
                if (value[key].date >= searchDay && value[key].date <= nextDay) {
                    result[result.length] = value[key];
                }
            });
            return result;
        }

    },
    del: function(id) {
        this.allEvents.splice(id, 1);
    },
    changeName: function(id, newTitle) {
        this.allEvents[id].title = newTitle;
    },
    changeDate: function(id, newDateUnix) {
        this.allEvents[id].title = newDateUnix;
    }
};

var date = {
    timeToUnix: function(year, month, day, hour, minute, seconds) {
        return new Date(year, month - 1, day, hour, minute, seconds).getTime()
    }
};

events.add(date.timeToUnix(2017, 9, 20, 19, 28, 20), "hello", function() {
    console.log("yeah");
});
events.add(date.timeToUnix(2017, 8, 21, 15, 56, 0), "hello", "123");
events.add(date.timeToUnix(2017, 8, 21, 15, 56, 0), "hello", "123");