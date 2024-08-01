import { IEventService } from "./IEventService";
import { Event } from "../models/Event";

export declare class EventService implements IEventService {
    private events: Event[];

    addEvent(event: Event): void;
    listEvents(): void;
    deleteEvent(name: string): void;
    printEventDetails(index: number): void;
}