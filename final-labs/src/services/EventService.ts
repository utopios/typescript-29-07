import { Event } from "../models/Event";
import { IEventService } from "./IEventService";
import { Log } from "../decorators/LogDecorator";
import { HandleException } from "../decorators/ExceptionDecorator";

export class EventService implements IEventService {
    private events: Event[] = [];

    @Log
    @HandleException
    addEvent(event: Event): void {
        if (!event.name || !event.date) {
            console.error("Event name and date are required");
            return;
        }
        this.events.push(event);
        console.log("Event added:", event.name);
    }

    @Log
    listEvents(): void {
        console.log("Listing all events:");
        this.events.forEach(event => {
            console.log(`${event.name} on ${event.date}: ${event.description || "No description"}`);
        });
    }

    @Log
    @HandleException
    deleteEvent(name: string): void {
        const index = this.events.findIndex(event => event.name === name);
        if (index !== -1) {
            this.events.splice(index, 1);
            console.log("Event deleted:", name);
        } else {
            console.error("Event not found:", name);
        }
    }

    @Log
    @HandleException
    printEventDetails(index: number): void {
        if (index < 0 || index >= this.events.length) {
            console.error("Invalid index");
        }
        const event = this.events[index];
        console.log(`Event Details: ${event.name} on ${event.date}: ${event.description || "No description"}`);
    }
}