document.addEventListener("DOMContentLoaded", () => {
    // Simulating a fetch from JSON or API
    const events = [
        {
            id: "1",
            title: "The Importance of Faithful Laymen",
            preTitle: "Overview",
            description: [
                "Discussing the importance of sermons in building faith.",
                "Understanding how messages can resonate with believers."
            ],
            date: "Jan 30, 2025",
            location: "Central Hall, New York",
            image: "images/event-3-390x273.jpg"
        },
        {
            id: "2",
            title: "Why Disappointment Can Be Good",
            preTitle: "Learning Growth",
            description: [
                "Examining challenges in pastoral relationships.",
                "Discovering growth through disappointments."
            ],
            date: "Feb 10, 2025",
            location: "Grace Hall, Brooklyn",
            image: "images/event-2-390x273.jpg"
        },
        {
            id: "3",
            title: "The Struggle with Fellowship",
            preTitle: "Learning Growth",
            description: [
                "Examining challenges in pastoral relationships.",
                "Discovering growth through disappointments."
            ],
            date: "Feb 10, 2025",
            location: "Grace Hall, Brooklyn",
            image: "images/event-1-390x273.jpg"
        },
        {
            id: "4",
            title: "Sunday Worship Celebration ",
            preTitle: "Learning Growth",
            description: [
                "We’d love for you to be part of this amazing experience! Everyone is welcome, so join us next Sunday as we celebrate, connect, and grow in faith together. See you there"
               
            ],
            date: "Dec 02, 2025",
            location: "San Pablo City Laguna, Philippines",
            image: "images/sunday-service.jpg"
        }
    ];

    // Get event ID from the URL
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("id");

    // Find the corresponding event data
    const event = events.find(e => e.id === eventId);

    if (!event) {
        console.error("Event not found!");
        document.body.innerHTML = "<h1>Event not found!</h1>";
        return;
    }

    // Populate the page
    document.getElementById("dynamic-title").textContent = event.title;
    document.getElementById("dynamic-caption").textContent = event.preTitle;
    document.getElementById("dynamic-event-title").textContent = event.title;
    document.getElementById("dynamic-description-1").textContent = event.description[0];
    document.getElementById("dynamic-description-2").textContent = event.description[1];
    document.getElementById("dynamic-date").textContent = `Date: ${event.date}`;
    document.getElementById("dynamic-location").textContent = `Location: ${event.location}`;
    document.getElementById("event-img").src = event.image;
    document.getElementById("event-img").alt = event.title;
});