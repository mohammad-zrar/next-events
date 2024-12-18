// import { getEventById } from "@/dummy-data";
import { getEventById, getFeaturedEvents } from "@/helpers/api-utils";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import Comments from "@/components/input/comments";

function EventsDetailPage(props) {
  const event = props.selectedEvent;

  if (event === null) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
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
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  let event = await getEventById(eventId);

  if (!event) {
    event = null;
  }
  return {
    props: {
      selectedEvent: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default EventsDetailPage;
