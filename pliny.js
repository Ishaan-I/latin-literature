function translateText() {
    const plinySection = document.getElementById('pliny');
    const plinyLatin = `
	    <p id="latin1">
            <strong>Lines 1-12</strong><br>
            <span class="position" title="emphatic positioning"><span class="translation-number">1</span>ante <span class="translation-number">2</span>lucem</span> <span class="choice" title="imperfect tense implies repetition"><span class="translation-number">3</span>ibat</span> <span class="translation-number">4</span>ad <span class="translation-number">6</span>Vespasianum <span class="translation-number">5</span>imperatorem (<span class="translation-number">7</span>nam <span class="context" title="refers toVespasian"><span class="translation-number">8</span>ille</span> <span class="translation-number">9</span>quoque<br>
            <span class="translation-number">11</span>noctibus <span class="translation-number">10</span>utebatur), <span class="translation-number">12</span>deinde <span class="translation-number">13</span>ad <span class="position" title="ewo"><span class="translation-number">14</span>officium <span class="translation-number">16</span>sibi <span class="translation-number">15</span>del</span><span class="context" title="official work e.g. for Vespasian or as admiral">ega</span><span class="position" title="emphatic positioning">tum</span>.<br>
            <span class="translation-number">1</span>reversus <span class="translation-number">2</span>domum <span class="translation-number">4</span>reliquum <span class="translation-number">6</span>tempus <span class="translation-number">6</span>studiis <span class="translation-number">3</span>dabat.<br>
            <span class="translation-number">1</span>saepe <span class="translation-number">2</span>post <span class="context" title="lunch"><span class="translation-number">3</span>cibum</span> (<span class="translation-number">4</span>qui <span class="position" title="emphatic positioning"><span class="translation-number">6</span>veterum</span> <span class="translation-number">5</span>more <span class="context" title="being like ancestors is better"><span class="translation-number">7</span>interdiu</span> <span class="choice" title="tautology - not extravagant - moral character"><span class="translation-number">9</span>levis</span><br>
            <span class="choice" title="tautology - not extravagant - moral character"><span class="translation-number">10</span>et <span class="translation-number">11</span>facilis</span> <span class="translation-number">8</span>erat) <span class="translation-number">12</span>aestate, <span class="translation-number">13</span>si <span class="translation-number">15</span>quid <span class="translation-number">16</span>otii <span class="translation-number">14</span>erat, <span class="position" title="chiasmus - contrasts relaxing and studying"><span class="translation-number">17</span>iacebat <span class="translation-number">18</span>in <span class="translation-number">19</span>sole</span>,<br>
            <span class="position" title="chiasmus - contrasts relaxing and studying"><span class="translation-number">20</span>liber <span class="translation-number">21</span>lege</span><span class="choice" title="tricolon + same language as line 11 emphasises dedication">batur, <span class="translation-number">22</span>adnotabat <span class="translation-number">24</span>excerpebat</span><span class="translation-number">23</span>que. <span class="choice" title="litotes implies taking notes on everything"><span class="translation-number">3</span>nihil</span> <span class="translation-number">1</span>enim <span class="translation-number">2</span>legit<br>
            <span class="translation-number">4</span>quod <span class="choice" title="litotes implies taking notes on everything"><span class="translation-number">5</span>non</span> <span class="translation-number">6</span>excerperet; <span class="translation-number">3</span>dicere <span class="translation-number">1</span>etiam <span class="translation-number">2</span>solebat <span class="translation-number">4</span>nullum <span class="translation-number">5</span>librum<br>
            <span class="translation-number">6</span>esse <span class="choice" title="intensifier - value placed on books"><span class="translation-number">7</span>tam</span> <span class="translation-number">8</span>malum <span class="translation-number">9</span>ut <span class="translation-number">10</span>non <span class="translation-number">12</span>aliqua <span class="translation-number">13</span>parte <span class="translation-number">11</span>prodesset. <span class="translation-number">1</span>post <span class="translation-number">2</span>solem<br>
            <span class="translation-number">3</span>plerumque <span class="sound" title="assonance - stands out + strength of will"><span class="translation-number">6</span>aqua <span class="translation-number">5</span>frigida <span class="translation-number">4</span>lava</span><span class="choice" title="tricolon">batur, <span class="translation-number">7</span>deinde <span class="translation-number">8</span>gust</span><span class="context" title="snack">abat</span><br>
            <span class="choice" title="tricolon"><span class="translation-number">10</span>dormiebat<span class="translation-number">9</span>que <span class="translation-number">11</span>min</span><span class="choice" title="superlative">imum</span>; <span class="choice" title="exaggeration"><span class="translation-number">1</span>mox <span class="translation-number">2</span>quasi <span class="translation-number">3</span>alio <span class="translation-number">4</span>die</span> <span class="translation-number">5</span>studebat<br>
            <span class="translation-number">6</span>in <span class="context" title="dinner"><span class="translation-number">8</span>cenae</span> <span class="translation-number">7</span>tempus. <span class="translation-number">1</span>super <span class="translation-number">2</span>cenam <span class="translation-number">3</span>liber <span class="choice" title="same structure as line 6 emphasises dedication"><span class="translation-number">4</span>legebatur <span class="translation-number">5</span>adnotabatur</span>,<br>
            <span class="translation-number">(6)</span>et <span class="translation-number">7</span>quidem <span class="choice" title="doing a lot therefore working quickly"><span class="translation-number">8</span>cursim</span>.
        </p>
        <p id="latin2">
            <strong>Lines 13-23</strong><br>
            <span class="translation-number">1</span>haec <span class="translation-number">2</span>inter <span class="translation-number">3</span>medios <span class="position" title="ewo"><span class="translation-number">4</span>labores <span class="translation-number">7</span>urbis<span class="translation-number">5</span>que <span class="translation-number">6</span>frem</span><span class="position" title="emphatic positioning">itum</span>. <span class="translation-number">1</span>in <span class="translation-number">2</span>secessu<br>
            <span class="translation-number">3</span>solum <span class="position" title="promoted emphatic positioning"><span class="translation-number">4</span>balinei</span> <span class="translation-number">5</span>tempus <span class="translation-number">7</span>studiis <span class="translation-number">6</span>eximebatur (<span class="translation-number">8</span>cum <span class="translation-number">9</span>dico "<span class="translation-number">10</span>balinei",<br>
            <span class="translation-number">12</span>de <span class="translation-number">13</span>interioribus <span class="translation-number">11</span>loquor; <span class="translation-number">1</span>nam <span class="translation-number">2</span>dum <span class="translation-number">3</span>destringitur <span class="translation-number">5</span>tergitur<span class="translation-number">4</span>que,<br>
            <span class="sound" title="assonance"><span class="translation-number">6</span>audiebat <span class="translation-number">7</span>aliquid <span class="translation-number">8</span>aut <span class="translation-number">9</span>dictabat</span>), <span class="translation-number">1</span>in <span class="translation-number">2</span>itinere <span class="translation-number">3</span>quasi <span class="translation-number">4</span>solutus<br>
            <span class="sound" title="harsh 'c' sounds"><span class="translation-number">5</span>ceteris <span class="translation-number">6</span>c</span><span class="choice" title="calm CoW - studying is relaxing for him">uris</span>, <span class="choice" title="stands out"><span class="translation-number">8</span>huic <span class="translation-number">9</span>uni</span> <span class="translation-number">7</span>vacabat: <span class="translation-number">1</span>ad <span class="translation-number">2</span>latus <span class="translation-number">3</span>notarius <span class="translation-number">4</span>cum <span class="translation-number">5</span>libro<br>
            <span class="translation-number">6</span>et <span class="translation-number">7</span>pugillaribus, <span class="translation-number">8</span>cuius <span class="sound" title="'m' and 'n' sounds - harshness of weather"><span class="translation-number">9</span>manus <span class="translation-number">12</span>hieme <span class="translation-number">11</span>manicis <span class="translation-number">10</span>munie</span><span class="choice" title="imperfect tense - repeated action">bantur</span>,<br>
            <span class="translation-number">13</span>ut <span class="translation-number">14*</span>ne <span class="translation-number">16</span>caeli <span class="translation-number">14*</span>quidem <span class="translation-number">15</span>asperitas <span class="translation-number">18</span>ullum <span class="translation-number">19</span>studii <span class="translation-number">20</span>tempus <span class="translation-number">17</span>eriperet;<br>
            <span class="translation-number">2</span>qua <span class="translation-number">1</span>ex <span class="translation-number">3</span>causa <span class="translation-number">6</span>Romae <span class="translation-number">7</span>quoque <span class="translation-number">5</span>sella <span class="choice" title="imperfect tense - repeated action"><span class="translation-number">4</span>vehebatur</span>. <span class="translation-number">1</span>repeto<br>
            <span class="translation-number">2</span>me <span class="choice" title="strong CoW"><span class="translation-number">3</span>correptum</span> <span class="translation-number">4</span>ab <span class="translation-number">5</span>eo, <span class="translation-number">6</span>quod <span class="translation-number">7</span>ambularem: '<span class="translation-number">2</span>poteras' <span class="translation-number">1</span>inquit<br>
            '<span class="translation-number">5</span>has <span class="translation-number">6</span>horas <span class="translation-number">3</span>non <span class="sound" title="p alliteration with 'perire'"><span class="translation-number">4</span>per</span><span class="choice" title="strong CoW">dere</span>'; <span class="translation-number">1</span>nam <span class="sound" title="p alliteration with 'perdere'"><span class="translation-number">5</span>per</span><span class="choice" title="strong CoW">ire</span> <span class="translation-number">3</span>omne <span class="translation-number">4</span>tempus<br>
            <span class="translation-number">2</span>arbitrabatur, <span class="translation-number">6</span>quod <span class="translation-number">9</span>studiis <span class="translation-number">7</span>non <span class="translation-number">8</span>impenderetur. <span class="context" title="end of letter"><span class="translation-number">1</span>vale</span>.
        </p>
    `;
    const plinyEnglish = `
        <p id="english1">
            <strong>Lines 1-12</strong><br>
            Before dawn, he used to go to the emperor Vespasian<br>
            (for he also used the nights), then to the duty assigned to<br>
            him.  Having returned home, he would allot the rest of<br>
            the time to his studies.  Often after food (which, after the<br>
            custom of his forefathers during the day was light and<br>
            easy on the stomach), in summertime, if there was any<br>
            free time, he would lie in the sun, a book would be read,<br>
            he would make notes and take extracts (from it).  For he<br>
            read nothing from which he would not take extracts;<br>
            indeed, he used to say that no book was so bad that it<br>
            was not useful in some part.  After sunbathing he<br>
            generally bathed in cold water, then had a snack, and<br>
            slept for a very short time. Soon afterwards, as if it were<br>
            on another day, he would study till dinnertime.  Over<br>
            dinner, a book would be read and notes taken, but<br>
            hastily.
        </p>
        <p id="english2">
            <strong>Lines 13-23</strong><br>
            These things took place during the middle of the toils and<br>
            noise of the city.  In (his country) retreat, only bath time<br>
            was taken away from studies (when I say "bath", I am<br>
            talking about the inner (rooms); for while he was being<br>
            scraped and wiped down, he would listen to something<br>
            or dictate).  On a journey, as if released from all other<br>
            anxieties, he had time for this alone: at his side (there<br>
            would be) a secretary with a book and writing tablet,<br>
            whose hands were protected with mittens in winter, so<br>
            that not even the harshness of the weather might take<br>
            away any study time; for this reason he rode in a sedan<br>
            chair at Rome also.  I recall that I was rebuked by him<br>
            because I walked: he said, "You could have not wasted<br>
            these hours"; for he thought that all time, which was not<br>
            spent on studies, was wasted.  Farewell.
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
