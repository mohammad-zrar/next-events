import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";
import EventsSearch from "./events-search";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
