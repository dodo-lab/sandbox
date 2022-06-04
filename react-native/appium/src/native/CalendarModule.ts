import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

interface CalenderIF {
  createCalendarEvent(name: string, location: string, callback: (eventId: number) => void): void;
  createCalendarEventPromise(name: string, location: string): Promise<number>;
}

export default CalendarModule as CalenderIF;

export const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants() as {DEFAULT_EVENT_NAME: string};
