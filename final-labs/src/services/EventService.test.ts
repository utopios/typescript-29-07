import { EventService } from "./EventService";
import { Event } from "../models/Event";

describe("EventService", () => {
    let eventService: EventService;

    beforeEach(() => {
        eventService = new EventService();
    });

    test("should add an event", () => {
        const event: Event = { name: "Test Event", date: "2024-12-01" };
        eventService.addEvent(event);
        expect(eventService['events']).toContainEqual(event); // Accessing private field for testing
    });

    test("should list all events", () => {
        const event1: Event = { name: "Event 1", date: "2024-11-01" };
        const event2: Event = { name: "Event 2", date: "2024-11-15" };
        eventService.addEvent(event1);
        eventService.addEvent(event2);
        console.log = jest.fn(); // Mock console.log
        eventService.listEvents();
        expect(console.log).toHaveBeenCalledWith("Listing all events:");
        expect(console.log).toHaveBeenCalledWith(`${event1.name} on ${event1.date}: No description`);
        expect(console.log).toHaveBeenCalledWith(`${event2.name} on ${event2.date}: No description`);
    });

    test("should delete an event", () => {
        const event: Event = { name: "Event to Delete", date: "2024-10-01" };
        eventService.addEvent(event);
        eventService.deleteEvent(event.name);
        expect(eventService['events']).not.toContainEqual(event); // Accessing private field for testing
    });

    test("should print event details", () => {
        const event: Event = { name: "Event Details", date: "2024-09-01" };
        eventService.addEvent(event);
        console.log = jest.fn(); // Mock console.log
        eventService.printEventDetails(0);
        expect(console.log).toHaveBeenCalledWith(`Event Details: ${event.name} on ${event.date}: No description`);
    });

    test("should handle event not found for deletion", () => {
        console.error = jest.fn(); // Mock console.error
        eventService.deleteEvent("Nonexistent Event");
        expect(console.error).toHaveBeenCalledWith("Event not found:", "Nonexistent Event");
    });

    test("should handle invalid index for printing details", () => {
        console.error = jest.fn(); // Mock console.error
        eventService.printEventDetails(-1);
        expect(console.error).toHaveBeenCalledWith("Invalid index");
    });
});