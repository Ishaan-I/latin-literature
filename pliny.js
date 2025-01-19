function translateText() {
    const plinySection = document.getElementById('pliny');
    const plinyLatin = `
	<p id="latin1">
            <strong>Lines 1-12</strong><br>
            ante lucem ibat ad Vespasianum imperatorem (nam ille quoque<br>
            noctibus utebatur), deinde ad officium sibi delegatum.<br>
            reversus domum reliquum tempus studiis dabat.<br>
            saepe post cibum (qui veterum more interdiu levis<br>
            et facilis erat) aestate, si quid otii erat, iacebat in sole,<br>
            liber legebatur, adnotabat excerpebatque. nihil enim legit<br>
            quod non excerperet; dicere etiam solebat nullum librum<br>
            esse tam malum ut non aliqua parte prodesset. post solem<br>
            plerumque aqua frigida lavabatur, deinde gustabat<br>
            dormiebatque minimum; mox quasi alio die studebat<br>
            in cenae tempus. super cenam liber legebatur adnotabatur,<br>
            et quidem cursim.
        </p>
        <p id="latin2">
            <strong>Lines 13-23</strong><br>
            haec inter medios labores urbisque fremitum. in secessu<br>
            solum balinei tempus studiis eximebatur (cum dico "balinei",<br>
            de interioribus loquor; nam dum destringitur tergiturque,<br>
            audiebat aliquid aut dictabat), in itinere quasi solutus<br>
            ceteris curis, huic uni vacabat: ad latus notarius cum libro<br>
            et pugillaribus, cuius manus hieme manicis muniebantur,<br>
            ut ne caeli quidem asperitas ullum studii tempus eriperet;<br>
            qua ex causa Romae quoque sella vehebatur. repeto<br>
            me correptum ab eo, quod ambularem: 'poteras' inquit<br>
            'has horas non perdere'; nam perire omne tempus<br>
            arbitrabatur, quod studiis non impenderetur. vale.
        </p>
    `;
    const plinyEnglish = `
        <p id="english1">
            <strong>Lines 1-12</strong><br>
            Before dawn, he used to go to the emperor Vespasian<br>
            (for he also used the nights), then to the duty assigned to<br>
            him. Having returned home, he would allot the rest of<br>
            the time to his studies. Often after food (which, after the<br>
            custom of his forefathers during the day was light and<br>
            easy on the stomach), in summertime, if there was any<br>
            free time, he would lie in the sun, a book would be read,<br>
            he would make notes and take extracts (from it). For he<br>
            read nothing from which he would not take extracts;<br>
            indeed, he used to say that no book was so bad that it<br>
            was not useful in some part. After sunbathing he<br>
            generally bathed in cold water, then had a snack, and<br>
            slept fora very short time. Soon afterwards, as if it were<br>
            on another day, he would study till dinnertime. Over<br>
            dinner, a book would be read and notes taken, but<br>
            hastily.
        </p>
        <p id="english2">
            <strong>Lines 13-23</strong><br>
            These things took place during the middle of the toils and<br>
            noise of the city. In (his country) retreat, only bath time<br>
            was taken away from studies (when I say 'bath', I am<br>
            talking about the inner (rooms); for while he was being<br>
            scraped and wiped down, he would listen to something<br>
            or dictate). On a journey, as if released from all other<br>
            anxieties, he had time for this alone: at his side (there<br>
            would be) a secretary with a book and writing tablet,<br>
            whose hands were protected with mittens in winter, so<br>
            that not even the harshness of the weather might take<br>
            away any study time; for this reason he rode in a sedan<br>
            chair at Rome also. I recall that I was rebuked by him<br>
            because I walked: he said, You could have not wasted<br>
            these hours'; for he thought that all time, which was not<br>
            spent on studies, was wasted. Farewell.
        </p>
    `;
    
    plinySection.innerHTML = plinySection.innerHTML.includes('Before') ? plinyLatin : plinyEnglish;
}


function toggleGuidedTranslation() {
    const latinTextDiv = document.getElementById("pliny");
    latinTextDiv.classList.toggle("guided-on");
}


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('theme-dark');

    const themeIcon = document.getElementById('theme-icon');
    themeIcon.classList.toggle('icon-sun');  // Switch to sun icon when dark mode is activated
    themeIcon.classList.toggle('icon-moon'); // Switch to moon icon when light mode is activated
}



// Load theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("theme-dark");
        themeIcon.classList.add("icon-moon");
    } else {
        themeIcon.classList.add("icon-sun");
    }
});


// Add click event listeners to all elements with the annotation classes
document.addEventListener("DOMContentLoaded", () => {
    const annotationElements = document.querySelectorAll(".sound, .position, .choice, .context");

    annotationElements.forEach((element) => {
        element.addEventListener("click", (event) => {
            // Remove the 'clicked' class from all elements
            annotationElements.forEach((el) => el.classList.remove("clicked"));

            // Add the 'clicked' class to the clicked element
            element.classList.add("clicked");

            // Prevent the event from propagating further (to avoid body click)
            event.stopPropagation();
        });
    });

    // Remove 'clicked' class when clicking anywhere else on the page
    document.addEventListener("click", () => {
        annotationElements.forEach((el) => el.classList.remove("clicked"));
    });
});
