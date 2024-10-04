import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventSummary from "../event-detail/event-summary";
import EventLogistics from "../event-detail/event-logistics";
import EventContent from "../event-detail/event-content";

function EventsDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventsDetailPage;
