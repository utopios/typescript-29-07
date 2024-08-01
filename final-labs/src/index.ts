import { EventService } from "./services/EventService";
import { Event } from "./models/Event";
import { IEventService } from "./services/IEventService";

const eventService:IEventService = new EventService();

const concert: Event = { name: "Concert", date: "2024-09-01", description: "A live music concert." };
const conference: Event = { name: "Conference", date: "2024-09-10" };

eventService.addEvent(concert);
eventService.addEvent(conference);
eventService.listEvents();
eventService.printEventDetails(1);
eventService.deleteEvent("Conference");
eventService.listEvents();