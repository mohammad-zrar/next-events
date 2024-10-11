const DUMMY_EVENTS = [
  {
    id: "0",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "1",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Advanced JavaScript Workshop",
    description:
      "Take your JavaScript skills to the next level in this hands-on workshop. We will dive deep into advanced topics like closures, asynchronous programming, and performance optimization.",
    location: "Tech Plaza 9, 45678 Code City",
    date: "2022-07-21",
    image: "images/js-workshop.jpg",
    isFeatured: false,
  },
  {
    id: "4",
    title: "React for Beginners",
    description:
      "If you are new to React or want a refresh, this event is perfect for you. We will cover the core concepts of React, including components, props, and state management.",
    location: "React Street 45, 67890 Web Dev Town",
    date: "2022-09-15",
    image: "images/react-event.jpg",
    isFeatured: true,
  },
  {
    id: "5",
    title: "Mastering CSS Flexbox & Grid",
    description:
      "CSS layout techniques can be tricky. This event will focus on mastering Flexbox and Grid, giving you the tools to build responsive and efficient layouts.",
    location: "Design Avenue 10, 54321 Layout City",
    date: "2022-11-02",
    image: "images/css-event.jpg",
    isFeatured: false,
  },
  {
    id: "6",
    title: "Python Data Science Bootcamp",
    description:
      "A comprehensive event for anyone interested in Data Science. Learn how to use Python for data analysis, visualization, and machine learning.",
    location: "Data Park 77, 11223 Analysis City",
    date: "2023-01-14",
    image: "images/python-event.jpg",
    isFeatured: true,
  },
  {
    id: "7",
    title: "Full-Stack Web Development",
    description:
      "In this event, we will cover both frontend and backend development using modern technologies like React, Node.js, and MongoDB.",
    location: "Stack Hub 12, 33456 Devland",
    date: "2023-03-10",
    image: "images/fullstack-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
