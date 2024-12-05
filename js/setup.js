document.addEventListener("DOMContentLoaded", () => {
    const blogData = {
        breadcrumbs: {
            background: "images/breadcrumbs-bg-2.jpg",
            title: "The Struggle with Fellowship in Student Ministry",
            caption: "Get closer to God every Thursday at our church",
            path: [
                { name: "Home", url: "index.html" },
                { name: "Events", url: "events.html" },
                { name: "Single Event", url: "", active: true }
            ]
        },
        eventDetails: {
            preTitle: "overview",
            title: "Exploring The Attitude to Fellowship in Student Ministries",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Vestibulum sed elit a urna mollis varius nec at ligula."
            ],
            date: "Jan 24, 2020",
            location: {
                address: "178 West 27th Street New York, NY 10012",
                url: "#"
            },
            registerUrl: "about-us.html",
            image: "images/main-event.jpg" // Default main image
        },
        upcomingEvents: [
            {
                image: "images/event-4-390x273.jpg",
                date: "January 23, 2020",
                location: "Green Pasture Life Church",
                title: "Why Do Sermons Matter? Live Discussion",
                url: "#",
                dynamicContent: {
                    title: "Why Do Sermons Matter?",
                    description: [
                        "Discussing the importance of sermons in building faith.",
                        "Understanding how messages can resonate with believers."
                    ],
                    date: "Jan 30, 2020",
                    location: "Central Hall, New York",
                    image: "images/event-dynamic-1.jpg" // Dynamic main image
                }
            },
            {
                image: "images/event-4-390x273.jpg",
                date: "January 24, 2020",
                location: "Green Pasture Life Church",
                title: "Why Do Sermons Matter? Live Discussion",
                url: "#",
                dynamicContent: {
                    title: "Why Do Sermons Matter?",
                    description: [
                        "Discussing the importance of sermons in building faith.",
                        "Understanding how messages can resonate with believers."
                    ],
                    date: "Jan 30, 2020",
                    location: "Central Hall, New York",
                    image: "images/event-dynamic-1.jpg" // Dynamic main image
                }
            },
            {
                image: "images/event-5-390x273.jpg",
                date: "Feb 10, 2020",
                location: "Green Pasture Life Church",
                title: "Why Disappointment With Your Pastor Could Be a Good Thing",
                url: "#",
                dynamicContent: {
                    title: "Why Disappointment Can Be Good",
                    description: [
                        "Examining challenges in pastoral relationships.",
                        "Discovering growth through disappointments."
                    ],
                    date: "Feb 10, 2020",
                    location: "Grace Hall, Brooklyn",
                    image: "images/event-dynamic-2.jpg" // Dynamic main image
                }
            }
        ]
    };

    // Populate Upcoming Events
    const upcomingEventsContainer = document.querySelector(".row-xl");
    blogData.upcomingEvents.forEach((event, index) => {
        const eventElement = document.createElement("div");
        eventElement.className = "col-lg-4";
        eventElement.innerHTML = `
            <div class="post-classic sm">
                <div class="post-classic__media">
                    <a href="#" data-index="${index}" class="event-link">
                        <img src="${event.image}" alt="${event.title}" width="390" height="273" />
                    </a>
                </div>
                <div class="post-classic__caption">
                    <span class="post-info">${event.location}, ${event.date}</span>
                    <h3 class="post-title">
                        <a href="#" data-index="${index}" class="event-link">${event.title}</a>
                    </h3>
                </div>
            </div>
        `;
        upcomingEventsContainer.appendChild(eventElement);
    });

    // Event Listener for Clicking an Event
    document.querySelectorAll(".event-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const index = e.target.getAttribute("data-index");
            const selectedEvent = blogData.upcomingEvents[index].dynamicContent;

            // Update Breadcrumbs
            document.querySelector(".breadcrumbs-custom-title").textContent = selectedEvent.title;
            // document.querySelector(".breadcrumbs-custom-caption").textContent =
            //     "Dynamic content updated for the selected event";

                document.getElementById("dynamic-event-title").textContent = selectedEvent.title;
                document.getElementById("dynamic-description-1").textContent = selectedEvent.description[0];
                document.getElementById("dynamic-description-2").textContent = selectedEvent.description[1];
                document.getElementById("dynamic-date").textContent = selectedEvent.date;
                document.getElementById("dynamic-location").textContent = selectedEvent.location;

           // Update Event Image Dynamically
           const eventImage = document.getElementById("event-img"); // Image element by ID
           eventImage.src = selectedEvent.image; // Set the dynamic image source
           eventImage.alt = selectedEvent.title; // Optionally, update the alt attribute for better accessibility
           document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initial Page Load Setup
    const initialEvent = blogData.eventDetails;
    document.querySelector(".breadcrumbs-custom-title").textContent = blogData.breadcrumbs.title;
    document.querySelector(".breadcrumbs-custom-caption").textContent = blogData.breadcrumbs.caption;
    document.querySelector(".breadcrumbs-custom.bg-image").style.backgroundImage = `url(${blogData.breadcrumbs.background})`;

    blogData.breadcrumbs.path.forEach((breadcrumb) => {
        const li = document.createElement("li");
        li.className = breadcrumb.active ? "active" : "";
        li.innerHTML = breadcrumb.url
            ? `<a href="${breadcrumb.url}">${breadcrumb.name}</a>`
            : breadcrumb.name;
        document.querySelector(".breadcrumbs-custom-path").appendChild(li);
    });
});
