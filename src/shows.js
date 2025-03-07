const showsData = [
    {
        date: "2025-03-08",
        title: "RUM & BASS 360 [as VJ & Lighting]",
        venue: "Underground Pub",
        city: "Iasi",
        address: "Galeria Stefan Cel Mare, Bulevardul Ștefan cel Mare și Sfânt",
        poster: "https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/480551901_661012209776885_3765827168475767186_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=75d36f&_nc_ohc=wjaya9uQ_pkQ7kNvgE_h07L&_nc_oc=Adhx3z5unNOTML3T8QrF4CSQ-Y7h3zcUyDkBW1WUV_PRZX7JoKmbiMgX4UDoj0KgY-g&_nc_zt=23&_nc_ht=scontent.fias1-1.fna&_nc_gid=ANJUKFXw9K2kgWbPj9zlzxt&oh=00_AYGHm9v3jXQRj5Liv7OvBFtgalOEO9aZ0AARLQ7cL98EzA&oe=67D06BF9",
        ticketLink: "https://www.livetickets.ro/bilete/fk-it-i-lied-its-rumbass-360-edition-2"
    },
    {
        date: "2025-03-15",
        title: "TBA",
        venue: "Underground Pub",
        city: "Iasi",
        address: "Galeria Stefan Cel Mare, Bulevardul Ștefan cel Mare și Sfânt",
        poster: null,
        ticketLink: "#"
    },
    {
        date: "2025-04-05",
        title: "TBA",
        venue: "Underground Pub",
        city: "Iasi",
        address: "Galeria Stefan Cel Mare, Bulevardul Ștefan cel Mare și Sfânt",
        poster: null,
        ticketLink: "#"
    },
];

// Function to format the date
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return { day, month, year };
}

// Function to populate the shows container
function populateShows() {
    const container = document.querySelector('.shows-container');
    const template = document.getElementById('show-template');

    showsData.forEach(show => {
        const clone = template.content.cloneNode(true);
        const { day, month, year } = formatDate(show.date);

        // Populate the template
        clone.querySelector('.day').textContent = day;
        clone.querySelector('.month-year').textContent = `${month} ${year}`;
        clone.querySelector('.title').textContent = show.title;
        clone.querySelector('.details1').textContent = `${show.venue}, ${show.city}`;
        clone.querySelector('.details2').textContent = `${show.address}`;
        clone.querySelector('.poster').src = show.poster || 'images/placeholder.jpg';
        clone.querySelector('.show-link').href = show.ticketLink;

        // Append the populated template to the container
        container.appendChild(clone);
    });
}

// Call the function to populate shows when the page loads
document.addEventListener('DOMContentLoaded', populateShows);