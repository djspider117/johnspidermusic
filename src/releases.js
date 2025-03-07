document.addEventListener('DOMContentLoaded', function () {

    const coverList = document.querySelector('.cover-list');
    const activeReleaseImage = document.querySelector('.release-image img');
    const activeReleaseTitle = document.querySelector('.release-title');
    const activeReleaseSubtitle = document.querySelector('.release-subtitle');
    const activeReleaseText = document.querySelector('.release-text');
    const activeReleaseDate = document.querySelector('.release-date');
    const activeReleaseLabel = document.querySelector('.release-label');
    const activeReleaseLink = document.querySelector('.release-link');

    // Sort releases by date (newest first)
    releasesJson.sort((a, b) => new Date(b.DateReleased) - new Date(a.DateReleased));

    // Generate the cover list
    generateCoverList(releasesJson);

    // Set the latest release as active by default
    setActiveRelease(releasesJson[0]);

    function generateCoverList(releases) {
        coverList.innerHTML = ''; // Clear existing content

        releases.forEach((release, index) => {
            const cover = document.createElement('img');
            cover.src = release.Image;
            cover.alt = release.Title;
            cover.title = release.Title;

            // Add click event to set the active release
            cover.addEventListener('click', () => {
                setActiveRelease(release);
                updateActiveCover(cover);
            });

            // Highlight the first cover by default
            if (index === 0) {
                cover.classList.add('active');
            }

            coverList.appendChild(cover);
        });
    }

    function setActiveRelease(release) {
        activeReleaseImage.src = release.Image;
        activeReleaseImage.alt = release.Title;
        activeReleaseTitle.textContent = release.Title;
        activeReleaseSubtitle.textContent = release.Subtitle;
        activeReleaseText.textContent = release.ItemPageText;
        activeReleaseDate.textContent = `Released: ${release.DateReleased}`;
        activeReleaseLabel.textContent = `Label: ${release.Label}`;
        activeReleaseLink.href = release.MainLink;
    }

    function updateActiveCover(selectedCover) {
        // Remove active class from all covers
        document.querySelectorAll('.cover-list img').forEach(cover => {
            cover.classList.remove('active');
        });

        // Add active class to the selected cover
        selectedCover.classList.add('active');
    }
});


var releasesJson = [
    {
        "Title": "Nocturno",
        "Image": "images/covers/Nocturno.jpg",
        "Subtitle": "John Spider & Ricardo Elgardo",
        "ItemPageText": "We welcome back John Spider & Ricardo Elgardo with this stunning second release with 'Nocturno' on the progressive label for release 475. On remix duties we have Leon Hardy.\n\n'Nocturno' is a rich feel good piece packed with warm sounds, driving bassline and a real balearic ibiza sunset sound. Floating textures and great atmospherics throughout and those stunning guitar leads and vocal in the breakdown make this a stand up track from this talented producers.\n",
        "MainLink": "https://www.beatport.com/release/nocturno/3685361",
        "DateReleased": "2022-04-18",
        "Label": "Alter Ego Progressive"
    },
    {
        "Title": "Only You (Remix)",
        "Image": "images/covers/OnlyYou.jpg",
        "Subtitle": "Aldous, John Spider & Ricardo Elgardo Remix",
        "ItemPageText": "Bringing 'Only You' back to the lime light and needing no introduction is Aldous. With one of the best vocals of this year by far we saw fit to bring back a slightly different flavor of 'Only You' for release 481. On remix duties we have John Spider & Ricardo Elgardo & Varsente so a little something for everyone.\n\nJohn Spider & Ricardo Elgardo really do make amazing uses of their signature nylon guitar, Ibiza beach sound and really turn 'Only You' into a progressive beauty.",
        "MainLink": "https://www.beatport.com/release/only-you-remixes/3743799",
        "DateReleased": "2022-05-30",
        "Label": "Alter Ego Progressive"
    },
    {
        "Title": "Summer in Bali",
        "Image": "images/covers/summerinbali.jpg",
        "Subtitle": "John Spider & George Andreas",
        "ItemPageText": "We welcome back John Spider this time teaming up with George Andreas with this stunning release 'Summer in Bali' on the progressive label for release 482.\n\n'Summer in Bali' is a rich feel good piece with a chunky and driving bassline and a real balearic ibiza sunset sound. Floating textures and great atmospherics throughout and those stunning guitar leads and vocal in the breakdown make this a stand up track from this talented producers.",
        "MainLink": "https://www.beatport.com/track/summer-in-bali/16538309",
        "DateReleased": "2022-06-06",
        "Label": "Alter Ego Progressive"
    },
    {
        "Title": "Jay Fragibans",
        "Image": "images/covers/jayfragi.png",
        "Subtitle": "John Spider",
        "ItemPageText": "Our 18th release of 2023 is a single from John Spider his 3rd release this year, a lovely hard pumpin, Techno Marching Track",
        "MainLink": "https://www.beatport.com/release/jay-fragibans/4257422",
        "DateReleased": "2023-10-13",
        "Label": "Boomtic Records"
    },
    {
        "Title": "Wonderland (Remix)",
        "Image": "images/covers/Wonderlandrmx.jpg",
        "Subtitle": "Mario de Caine, John Spider",
        "ItemPageText": "Mario De Caine has released some fantastic tracks on the label and Wonderland has had two noble remixes. Label regular John Spider brings us a crisp uplifing version for those peak time feels. And new to the label, AFTERUS, bring their chunky progressive edge to make this the perfect package.",
        "MainLink": "https://www.beatport.com/release/wonderland-remixes/4107127",
        "DateReleased": "2023-05-15",
        "Label": "Alter Ego Records"
    },
    {
        "Title": "Moonlight",
        "Image": "images/covers/moonlight.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "Coming up on 2Rock B Side is 'Moonlight' by John Spider!",
        "MainLink": "https://www.beatport.com/release/moonlight/3983980",
        "DateReleased": "2023-02-13",
        "Label": "2Rock B Side"
    },
    {
        "Title": "Invaders",
        "Image": "images/covers/invaders.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "Vibrate Audio is back on the faster styles of Trance with this phenomenal track, 'Invaders' by John Spider!\n\nGet ready for a greedy bass, a hooky guitar lead, an energetic lead and a massive atmosphere! All that a track could have to deliver a dancefloor experience is packed in, so we're sure it will make you feel like dancing wherever you are!",
        "MainLink": "https://www.beatport.com/release/invaders/3405168",
        "DateReleased": "2021-05-28",
        "Label": "Boomtic Records"
    },
    {
        "Title": "Let It Ride",
        "Image": "images/covers/letitride.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "Our 2nd release of 2023 is none other than John Spider with a beautyful progressive EP, a great groovey bassline and stand out stabs to really set an atmosphere.",
        "MainLink": "https://www.beatport.com/release/let-it-ride/4004443",
        "DateReleased": "2023-03-03",
        "Label": "Boomtic Records"
    },
    {
        "Title": "Evolution",
        "Image": "images/covers/evolution.jpg",
        "Subtitle": "John Spider pres. Tempest3",
        "ItemPageText": "The Psylifter you always wanted.",
        "MainLink": "https://open.spotify.com/album/3HSuM5ZzQiVhHNzbkCdyRV",
        "DateReleased": "2018-03-13",
        "Label": "Self-Release"
    },
    {
        "Title": "Raindrops",
        "Image": "images/covers/Raindrops.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "John Spider makes his main label debut with his wonderful uplifting track, Raindrops. A producer who can definitely flex his skills across the Trance genre turns up the pace for this one so expect rumbling energy and delicious journey of hair raising euphoria.\n",
        "MainLink": "https://www.beatport.com/release/raindrops/3534958",
        "DateReleased": "2021-11-01",
        "Label": "Alter Ego Records"
    },
    {
        "Title": "All Of Your Love",
        "Image": "images/covers/AllOfYourLove.jpg",
        "Subtitle": "John Spider & Ricardo Elgardo",
        "ItemPageText": "Next up on Alter Ego Progressive we have new talent John Spider & Ricardo Elgardo with this stunning little debut release 'All Of Your Love' on the progressive label for release 444.\n\n'All Of Your Love' is a rich feel good piece packed with warm sounds, driving bassline and melodies and scream that summer feel really putting you on a beach somewhere. Floating textures and great atmospherics throughout and those stunning guitar leads and vocal in the breakdown make this a stand up track from this talented producers.",
        "MainLink": "https://www.beatport.com/release/all-of-your-love/3420022",
        "DateReleased": "2021-07-05",
        "Label": "Alter Ego Progressive"
    },
    {
        "Title": "Sunrise Over the Mediterranean",
        "Image": "images/covers/sunrise.jpg",
        "Subtitle": "Numedian, John Spider Remix",
        "ItemPageText": "Algerian-based producer, Numedian, is back on Soluna with yet another marvelous balearic wonder in his latest \"Sunrise Over the Mediterranean\" EP. Broad strokes of summer are trademarks of Numedian's penchant for dreamy, melodic progressive dance music.\n\n\"Sunrise Over the Mediterranean\" original mix is a gorgeous track with lush guitar plucks over a sweeping balearic soundscape. Romanian producer John Spider debuts with an amazing interpretation of \"Sunrise Over the Mediterranean\". Fresh melodic pads and motifs are quintessential elements of this balearic rendition. Numedian's \"Balearic Sunset\" original is a superb compliment to the Sunrise. More beautiful ear-charming chords and pads to smooth out any summer stress. This is paradise in the mind! Cullera delivers, once again, a balearic enchantment of his own accord. Guitar plucks straight off a Spanish acoustic guitar embellishes the already Ibiza-like atmosphere. Summer keeps sounding amazing!",
        "MainLink": "https://www.beatport.com/release/sunrise-over-the-mediterranean/3779327",
        "DateReleased": "2022-07-29",
        "Label": "Soluna Music"
    },
    {
        "Title": "Daybreak (EP)",
        "Image": "images/covers/daybreak.jpg",
        "Subtitle": "John Spider & Ricardo Elgardo",
        "ItemPageText": "SOL284",
        "MainLink": "https://www.beatport.com/release/daybreak/4200927",
        "DateReleased": "2023-08-25",
        "Label": "Soluna Music"
    },
    {
        "Title": "Vibe",
        "Image": "images/covers/vibe.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "Our 12th release of 2023 is a single from John Spider, his 2nd release with boomtic this year, a deep groove with saxophones and a airy atmosphere, with a vocal spreading the house message.",
        "MainLink": "https://www.beatport.com/release/vibe/4170265",
        "DateReleased": "2023-07-21",
        "Label": "Boomtic Records"
    },
    {
        "Title": "Sunset Dream",
        "Image": "images/covers/sunsetDream.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "It's here! Enter John Spider's debut on Arkham Digital with the enthralling and powerful 'Sunset Dream': a fine example of Uplifting Trance which is just what you need for your most unforgettable, late summer nights.\n",
        "MainLink": "https://www.beatport.com/release/sunset-dream/3110474",
        "DateReleased": "2020-09-18",
        "Label": "Arkham Digital"
    },
    {
        "Title": "That Summer Day",
        "Image": "images/covers/thatsummerday.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "Red Soho welcomes John Spider to make his label debut on Red Soho with an aptly named track 'That Summer day'\n\nThis medium paced proglifter is bound to warm you up on these cold winter days. Rhymical kick and bass grooves with a laidback piano melody give you a really summary beach vibe. The break is upbeat and happy and will have you nodding your head whilst smiling.\n'That summer day' will transport you to your happy place, hit repeat and get yourself out of a funk with this one.",
        "MainLink": "https://www.beatport.com/release/that-summer-day/3217232",
        "DateReleased": "2020-12-25",
        "Label": "Red Soho"
    },
    {
        "Title": "Cast Away",
        "Image": "images/covers/castaway.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "Romanian Trance DJ/producer JOHN SPIDER returns with CAST AWAY, the follow up to his Tuned:Flow debut release \"Time to Change\".\n\nProducing since 2005, Ionut Popovici in real life, has earned his spurs developing his unique production style and is now ready to blast back into the scene with his newest melodic Trance uplifter released on the Swiss label.",
        "MainLink": "https://www.beatport.com/release/cast-away/2696786",
        "DateReleased": "2019-09-09",
        "Label": "Tuned:Flow"
    },
    {
        "Title": "Desert Winds",
        "Image": "images/covers/desertwindds.jpg",
        "Subtitle": "John Spider & Theodore Engel",
        "ItemPageText": "Romania teams up with Romania... Tuned:Flow presents the Psylift Trance collab DESERT WINDS of JOHN SPIDER & THEODORE ENGEL.\n\nJohn and Theodore both previously had releases on the Switzerland based label. John returns after his three tracks \"Worlds\", \"Time to Change\" and \"Cast Away\". Theodore released his 2-track EP \"Hyperion / Morningstar\" and a remix for Psyco's \"One\" both in 2020.",
        "MainLink": "https://www.beatport.com/release/desert-winds/3679410",
        "DateReleased": "2022-04-01",
        "Label": "Tuned:Flow"
    },
    {
        "Title": "Worlds",
        "Image": "images/covers/worlds.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "After his release \"Sunset Dream\" on Arkham Digital and his two melodic uplifters \"Time to Change\" and \"Cast Away\" the Romanian John Spider returns with his new very spherical hit \"Worlds\".",
        "MainLink": "https://www.beatport.com/release/worlds/3222983",
        "DateReleased": "2021-01-11",
        "Label": "Tuned:Flow"
    },
    {
        "Title": "Breeze",
        "Image": "images/covers/Breeze.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "We welcome another new and exciting talent to surface out of the Romania, Ionut Popovici aka Yasin Guven with his debut solo release 'Breeze' bringing in release 469 on Alter Ego Progressive.\n\nThis stunning debut release has deep and warm atmospherics, beach ware melodic elements, playful percussion and bass work. Dropping in to a stunning breakdown.",
        "MainLink": "https://www.beatport.com/release/breeze/3641836",
        "DateReleased": "2022-03-07",
        "Label": "Alter Ego Progressive"
    },
    {
        "Title": "Time To Change",
        "Image": "images/covers/ttc.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "Tuned:Flow presents Romanian DJ/producer JOHN SPIDER with his comeback release TIME TO CHANGE.\n\nProducing since 2005, Ionut Popovici in real life, has earned his spurs developing his unique production style and is now ready to blast back into the scene with his newest melodic Trance uplifter released on the Swiss label.\n",
        "MainLink": "https://www.beatport.com/release/time-to-change/2589543",
        "DateReleased": "2019-05-27",
        "Label": "Tuned:Flow"
    },
    {
        "Title": "Lost Cafe",
        "Image": "images/covers/lostcafe.jpg",
        "Subtitle": "John Spider",
        "ItemPageText": "Kicking off this year with a real groove! We'd like to welcome aboard our new artist John Spider with his progressive beauty called 'Lost Cafe'!",
        "MainLink": "https://www.beatport.com/release/lost-cafe/3647380",
        "DateReleased": "2022-02-25",
        "Label": "Grooves (Synchronized Music)"
    },
    {
        "Title": "Icebreaker (Remix)",
        "Image": "images/covers/icebreaker.jpg",
        "Subtitle": "Ricardo Elgardo, John Spider Remix",
        "ItemPageText": "A banging uplifting remix of the breakbeat track Icebreaker.",
        "MainLink": "https://www.beatport.com/track/icebreaker/15219425",
        "DateReleased": "2021-05-28",
        "Label": "Vibrate Audio"
    }
];