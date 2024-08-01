
import { Event } from "../models/Event";

export interface IEventService {
    addEvent(event: Event): void;
    listEvents(): void;
    deleteEvent(name: string): void;
    printEventDetails(index: number): void;
}