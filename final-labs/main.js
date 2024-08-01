let events = [];

function addEvent(name, date, description) {
    if (!name || !date) {
        console.error("Event name and date are required");
        return;
    }
    events.push({ name: name, date: date, description: description });
    console.log("Event added:", name);
}

function listEvents() {
    console.log("Listing all events:");
    for (let i = 0; i < events.length; i++) {
        console.log(`${events[i].name} on ${events[i].date}: ${events[i].description}`);
    }
}

function deleteEvent(name) {
    for (let i = 0; i < events.length; i++) {
        if (events[i].name === name) {
            events.splice(i, 1);
            console.log("Event deleted:", name);
            return;
        }
    }
    console.error("Event not found:", name);
}

function printEventDetails(index) {
    if (index < 0 || index >= events.length) {
        console.error("Invalid index");
        return;
    }
    const event = events[index];
    console.log(`Event Details: ${event.name} on ${event.date}: ${event.description}`);
}


addEvent("Concert", "2024-09-01", "A live music concert.");
addEvent("Conference", "2024-09-10"); 
listEvents();
printEventDetails(1);
deleteEvent("Conference");
listEvents();