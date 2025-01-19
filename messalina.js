function translateText() {
    const messalinaSection = document.getElementById('messalina');
    const messalinaLatin = `
        <p id="latin1">
            <strong>Lines 1-8</strong><br>
            <span class="translation-number">1</span>Messalina <span class="translation-number">3</span>novo <span class="translation-number">4</span>et <span class="choice" title="quasi draws attention to insano - perhaps also shows Tacitus's disbelief"><span class="translation-number">5</span>quasi <span class="translation-number">6</span>insano</span> <span class="translation-number">7</span>amore <span class="choice" title="metaphor; 'fired' suggests it is destructive"><span class="translation-number">2</span>incensa est</span>.<br>
            <span class="translation-number">1</span>nam <span class="translation-number">3</span>in <span class="translation-number">4</span>C. Silium, <span class="translation-number">7</span>iuventutis <span class="translation-number">6</span>Romanae <span class="choice" title="superlative; he is the 'most handsome'"><span class="translation-number">5</span>pulcherrimum</span>, <span class="choice" title="multiple fire words building up destructive imagery"><span class="translation-number">8</span>ita <span class="translation-number">2</span>exarserat</span><br>
            <span class="translation-number">9</span>ut <span class="context" title="2nd woman; context for Silius' wife"><span class="translation-number">11</span>Iuniam <span class="translation-number">12</span>Silanam</span>, <span class="choice" title="she is noble; for context"><span class="translation-number">13</span>nobilem <span class="translation-number">14</span>feminam</span>, <span class="translation-number">15</span>matrimonio <span class="translation-number">16</span>eius<br>
            <span class="choice" title="delayed; 'to remove' from Silius' side"><span class="translation-number">10</span>exturbaret <span class="translation-number">19</span>libero</span><span class="translation-number">17</span>que <span class="translation-number">20</span>adultero <span class="translation-number">18</span>potiretur. <span class="choice" title="double negative litotes—exaggerates that Silius knew"><span class="translation-number">3</span>neque</span> <span class="translation-number">1</span>Silius <span class="choice" title="crime"><span class="translation-number">5</span>flagitii</span><br>
            <span class="translation-number">6</span>aut <span class="translation-number">7</span>periculi <span class="choice" title="not unaware"><span class="translation-number">4</span>nescius</span> <span class="translation-number">2</span>erat: <span class="translation-number">1</span>sed <span class="translation-number">2</span>intell<span class="sound" title="repetition of syllable 'ex'">exit <span class="translation-number">3</span>exit</span>ium, <span class="position" title="clauses interject here"><span class="translation-number">6</span>si <span class="translation-number">7</span>abnueret</span>,<br>
            <span class="translation-number">4</span>fore <span class="position" title="setting out Silius's choice clearly"><span class="translation-number">5</span>certum</span> <span class="translation-number">8</span>et, <span class="position" title="tautology emphasizes 'ruin' for Silius"><span class="translation-number">9</span>si <span class="translation-number">10</span>consentiret</span>, <span class="choice" title="some chance of hiding the crime"><span class="translation-number">12</span>nonnullam</span> <span class="translation-number">15</span>facinori<span class="sound" title="sibilance">s</span> <span class="translation-number">14</span>celandi<br>
            <span class="position" title="delay emphasises this outcome"><span class="translation-number">13</span>spem</span><span class="sound" title="sibilance"> <span class="translation-number">11</span>esse; <span class="translation-number">2</span>simul<span class="translation-number">1</span>que <span class="translation-number">3</span>se</span> <span class="choice" title="great rewards"><span class="translation-number">5</span>magna</span> <span class="translation-number">6</span>praemia <span class="translation-number">4</span>accepturum.<br>
            <span class="sound" title="repetition of t sound"><span class="translation-number">1</span>igitur <span class="translation-number">2</span>placuit <span class="translation-number">3</span>neglegere <span class="translation-number">4</span>futura <span class="translation-number">5</span>et <span class="translation-number">7</span>praesentibus</span> <span class="choice" title="disgraceful—chooses enjoyment over honour and kin"><span class="translation-number">6</span>frui</span>.
        </p>
        <p id="latin2">
            <strong>Lines 8-17</strong><br>
            <span style="margin-left: 300px;">illa <span class="choice" title="litotes">non fu</span><span class="position" title="Emphatic positioning">rtim</span><br></span>
            sed multis cum comitibus <span class="choice" title="historic present - more vivid">ventitat</span> <span class="position" title="delay of domum highlights that she is obviously going to his house">domum</span><span class="position" title="Bs are juxtabosed to show that Messalina is with S all the time">, egredienti</span><br>
            adhaeret, dat opes honoresque; postremo <span class="choice" title="tricolon">servi, liberti,</span><br>
            <span class="sound" title="condemnation through p sounds">p</span><span class="choice" title="3rd part of tricolon is different - surprising">aratus</span> <span class="sound" title="condemnation through p sounds">p</span><span class="choice" title="reminder of adultery">rincipis</span> apud adulterum saepe videbantur.<br>
            at Claudius matrimonii sui <span class="choice" title="variatio - different to nescius in previous passage">ignarus</span>. iam Messalina <span class="position" title="balanced phrasing">propter facilitatem</span><br>
            <span class="position" title="balanced phrasing">adulteriorum ad novas </span><span class="choice" title="strong CoW">libidines</span><br>
            versa est. Silius, sive <span class="choice" title="strong CoW">fatali</span> <span class="choice" title="strong CoW">insania</span> an ipsa <span class="choice" title="polyptoton">pericula</span><br>
            re<span class="sound" title="solemn gloomy tone through m sounds">m</span>ediu<span class="sound" title="solemn gloomy tone through m sounds">m</span> i<span class="sound" title="solemn gloomy tone through m sounds">mm</span>inentiu<span class="sound" title="solemn gloomy tone through m sounds">m</span> <span class="choice" title="polyptoton">periculoru</span><span class="sound" title="solemn gloomy tone through m sounds">m</span> ratus, <span class="position" title="emphatic positioning, promoted - focus on action & intensity">abrumpi</span><br>
            dissimulationem <span class="choice" title="forceful CoW">urgebat</span>: quippe non exspectandum,<br>
            dum princeps senesceret.
        </p>
        <p id="latin3">
            <strong>Lines 17-26</strong><br>
            <span style="margin-left: 250px;"><span class="context" title="Silius">se</span> <span class="choice" title="tricolon & asyndeton making S a better candidate">caelibem, orbum, nuptis</span></span><br>
            <span class="choice" title="tricolon & asyndeton making S a better candidate">et adoptando Britannico paratum</span>. eandem Messalinae potentiam<br>
            mansuram esse, addita securitate, si praevenirent Claudium.<br>
            qui <span class="sound" title="assonance adds emphasis">i</span><span class="choice" title="meaning of words shows totally unaware">ns</span><span class="sound" title="assonance adds emphasis">i</span><span class="choice" title="meaning of words shows totally unaware">d</span><span class="sound" title="assonance adds emphasis">ii</span><span class="choice" title="meaning of words shows totally unaware">s</span> <span class="sound" title="assonance adds emphasis">i</span><span class="choice" title="meaning of words show totally unaware">ncautus</span> sed ad <span class="position" title="balanced phrasing - increases contrast & potential irony">iram celer</span> esset.<br>
            Messalina, <span class="choice" title="sarcastic?">non amore in maritum</span>, sed verita ne Siliu<span class="sound" title="sibilance - sinister or drawing out the sentence">s</span><br>
            <span class="sound" title="sibilance - sinister or drawing out the sentence">s</span>umma adeptu<span class="sound" title="sibilance - sinister or drawing out the sentence">s</span> <span class="sound" title="sibilance - sinister or drawing out the sentence">s</span>e <span class="sound" title="sibilance - sinister or drawing out the sentence">s</span>perneret, diu haesitavit; <span class="position" title="short dramatic clause">sed tandem</span><br>
            <span class="position" title="emphatic positioning">persuasum</span>. nomen enim <span class="choice" title="variatio (nuptiis was used earlier)">matrimonii</span> <span class="choice" title="uncontrollable - powerful CoW">concupivit</span><br>
            ob magnítudinem <span class="choice" title="powerful CoW">infa</span><span class="context" title="ignominy = disgrace">miae</span>. nec ultra morata<br>
            quam <span class="choice" title="Claudius is being pious, Messalina is taking advantage of this">dum sacrificii gratia</span> Claudius <span class="context" title="port close to Rome">Ostiam</span> proficisceretur,<br>
            <span class="choice" title="Messalina is not holding back">cuncta</span> nuptiarum sollemnia <span class="choice" title="HP - vivid">celebrat</span>.
            <br><br>
        </p>
        <p id="latin4">
            <strong>Lines 27-38</strong><br>
            igitur <span class="choice" title="personification - enormity of crime">domus</span> principis <span class="choice" title="powerful CoW">inhorruit</span>, maximeque ei qui<br>
            <span class="position" title="same structure - link between power and hope to keep power">potentiam habebant</span> timuerunt ne <span class="choice" title="vague but has big implicaitions">res</span> verterentur:<br>
            <span class="position" title="same structure - link between power and hope to keep power">spem tamen habebant</span>, si Claudio de <span class="choice" title="hyperbolic CoW - shows worry of people with power">atrocitate</span> sceleris persuasissent,<br>
            Messalinam posse opprimi <span class="position" title="delayed">sine quaestione</span> <span class="position" title="emphatic positioning - end of clause">damnatam</span>;<br>
            sed periculum esse ne ille defensionem audiret,<br>
            <span class="choice" title="litotes">ne</span>ve clausae aures etiam confitenti <span class="choice" title="litotes">non</span> essent. <span class="context" title="advisor of Claudius, ex-slave, very rich">Narcissus</span>,<br>
            occasiones quaerens, cum <span class="choice" title="variatio - more of an official title, focus on duty">Caesar</span> diu apud Ostiam moraretur,<br>
            duas eius <span class="context" title = concubine/mistress>paelices</span> <span class="context" title="bribery, generosity">largitione</span> et <span class="sound" title="p alliteration - Tacitus dissapproves of N's calculated actions">p</span>romissis <span class="sound" title="p alliteration - Tacitus dissapproves of N's calculated actions">p</span>er<span class="sound" title="p alliteration - Tacitus dissapproves of N's calculated actions">p</span>ulit<br>
            5 delationem subire. exim Calpurnia (id alteri paelici nomen),<br>
            ubi datum est secretum, ad genua <span class="choice" title="use of 'Caesar' shows position of power compared to Calpurnia">Caesaris</span> <span class="choice" title="Calpurnia wants Claudius' good will at this point">provoluta</span><br>
            <span class="position" title="shocking">nupsisse</span> <span class="choice" title="Messalina married to Silius places her in control - scandalous">Messalinam</span><span class="position" title="emotional closeness mirrored by juxtaposition in text"> Silio</span> <span class="choice" title="powerful CoW & historic present">exclamat</span>; altera paelice<br>
            haec confirmante, Calpurnia cieri Narcissum postulat.
        </p>
        <p id="latin5">
            <strong>Lines 39-49</strong><br>
            '<span class="context" title="Narcissus">qui</span> <span class="position" title="emphatic positioning">disci</span>diumne tuum' inquit 'novisti? nam <span class="position" title="emphatic positioning">matrimonium</span><br>
            Silii vidit <span class="choice" title="emphatic positioning + tricolon emphasises Claudius's cluelessness">populus et senatus et milites</span>; ac nisi celeriter agis,<br>
            tenet urbem <span class="context" title="refers to Silius">mar</span><span class="position" title="emphatic positioning">itus</span>.'<br>
            non solum rumor interea, sed <span class="choice" title="makes them seem trapped">undique</span> nuntii ad Messalinam<br>
            contendunt, qui Claudium omnia cognovisse et venire<br>
            <span class="choice" title="malicious CoW">promptum</span> ultioni adferrent. igitur Messalina Lucullianos<br>
            in hortos, Silius dissimulando metui ad forum <span class="choice" title="already split and in danger makes them look bad">digrediuntur</span>.<br>
            illa tamen, quamquam res <span class="choice" title="understatement">adve</span><span class="position" title="juxtaposition - her plan will fail">rsae</span> consilium</span> eximerent,<br>
            ire obviam et aspici a <span class="context" title="refers to Claudius">marito</span> statim constituit, quod saepe<br>
            ei fuerat <span class="position" title="emphatic positioning">subsidium</span>; <span class="position" title="emphatic positioning at start shows Messalina's desperation">misitque</span> ut <span class="context" title="children reminds him she has been a good wife + pity for children">Britannicus et Octavia</span><br>
            in complexum patris irent.
        </p>
        <p id="latin6">
            <strong>Lines 49-59</strong><br>
            <span class="translation-number">1</span>atque <span class="choice" title="variatio on 'interea' on line 42"><span class="translation-number">2</span>interim</span>, <span class="translation-number">3</span>tri<span class="sound" title="homoteleuton">bus</span> <span class="translation-number">4</span>omnino <span class="translation-number">5</span>comitanti<span class="sound" title="homoteleuton">bus</span><br>
            — <span class="position" title="separate/isolated from sentence"><span class="translation-number">6</span>tam <span class="translation-number">7</span>repens <span class="translation-number">8</span>erat solli</span><span class="choice" title="lonely CoW"><span class="translation-number">9</span>tudo</span> <span class="sound" title="p alliteration shows Tacitus's disgust at Messalina's behaviour and situation"><span class="translation-number">10</span>postquam <span class="translation-number">13</span>per</span> <span class="translation-number">14</span>urbem<br>
            <span class="sound" title="p alliteration shows Tacitus's disgust at Messalina's behaviour and situation"><span class="translation-number">12</span>p</span><span class="context" title="travelling on foot shows how far she has fallen">edibus</span> <span class="translation-number">11</span>ivit, <span class="translation-number">18</span>vehiculo, <span class="translation-number">19</span>quo <span class="sound" title="p alliteration shows Tacitus's disgust at Messalina's behaviour and situation"><span class="translation-number">20</span>p</span>urgamenta <span class="translation-number">21</span>hortorum <span class="context" title="travelling by rubbish cart shows how far she has fallen"><span class="translation-number">22</span>eripiuntur</span>,<br>
            <span class="translation-number">16</span>Ostiensem <span class="translation-number">17</span>viam <span class="translation-number">15</span>intrat. <span class="position" title="emphatic positioning"><span class="translation-number">2</span>nullam</span> <span class="translation-number">3</span>misericordiam<br>
            <span class="sound" title="harsh c/q sound expresses Tacitus's dislike of Messalina"><span class="translation-number">4</span>civibus <span class="translation-number">1</span>commovit <span class="translation-number">5</span>quia</span> <span class="translation-number">7</span>flagitiorum <span class="translation-number">6</span>deformitas <span class="translation-number">8</span>praevalebat.<br>
            <span class="translation-number">1</span>et <span class="translation-number">2</span>iam <span class="translation-number">3</span>erat <span class="translation-number">4</span>in <span class="translation-number">5</span>aspectu <span class="translation-number">6</span>Claudii <span class="translation-number">8</span>clamitabat<span class="translation-number">7</span>que <span class="translation-number">9</span>ut <span class="translation-number">10</span>audiret<br>
            <span class="translation-number">12</span>Octaviae <span class="translation-number">13</span>et <span class="translation-number">14</span>Britannici <span class="position" title="emphatic positioning"><span class="translation-number">13</span>matrem</span>. <span class="translation-number">1</span>Narcissus <span class="translation-number">2</span>tamen <span class="translation-number">3</span>obstrepuit,<br>
            <span class="translation-number">5</span>Silium <span class="translation-number">6</span>et <span class="translation-number">7</span>nuptias <span class="translation-number">4</span>referens; <span class="translation-number">1</span>simul <span class="translation-number">3</span>codicillos <span class="translation-number">5</span>libidinum <span class="translation-number">4</span>indices<br>
            <span class="translation-number">2</span>tradidit, <span class="translation-number">6</span>quibus <span class="translation-number">8</span>visus <span class="translation-number">9</span>Caesaris <span class="translation-number">7</span>averteret. <span class="translation-number">1</span>nec <span class="translation-number">2</span>multo <span class="translation-number">3</span>post<br>
            <span class="translation-number">7</span>urbem <span class="translation-number">6</span>ingredienti <span class="translation-number">5</span>offerebantur <span class="choice" title="variatio on names in line 55"><span class="translation-number">4</span>liberi</span>, <span class="translation-number">8</span>sed <span class="translation-number">9</span>Narcissus<br>
            <span class="translation-number">12</span>amoveri <span class="translation-number">11</span>eos <span class="translation-number">10</span>iussit.
        </p>
        <p id="latin7">
            <strong>Lines 60-69</strong><br>
            <span class="position" title="emphatic position - promoted"><span class="translation-number">5</span>mir</span><span class="position" title="enclosing word order with 'silentium' emphasises that Claudius's silence is remarkable">um</span> <span class="translation-number">3</span>inter <span class="translation-number">4</span>haec </span><span class="position" title="enclosing word order with 'mirum' emphasises that Claudius's silence is remarkable"><span class="translation-number">1</span>silentium</span> <span class="position" title="emphatic position - delayed"><span class="translation-number">2</span>Claudii</span>: <span class="choice" title="strong CoW"><span class="translation-number">3</span>omnia</span> <span class="choice" title="reminds you of lower status"><span class="translation-number">2</span>liberto</span> <span class="translation-number">1</span>oboediebat:<br>
            <span class="translation-number">1</span>qui <span class="translation-number">3</span>contionem <span class="translation-number">4</span>militum <span class="translation-number">5</span>in <span class="translation-number">6</span>castris <span class="context" title="Narcissus and Claudius are making the army support him"><span class="translation-number">2</span>paravit</span>. <span class="translation-number">1</span>a<span class="sound" title="p alliteration - Tacitus is mocking Claudius's stutter?">p</span>ud <span class="translation-number">2</span>eos<br>
            <span class="translation-number">3</span><span class="sound" title="p alliteration - Tacitus is mocking Claudius's stutter?">p</span><span class="choice" title="controlling">raemonente</span> <span class="translation-number">4</span>Narcisso <span class="translation-number">5</span><span class="sound" title="p alliteration - Tacitus is mocking Claudius's stutter?">p</span>rince<span class="sound" title="p alliteration - Tacitus is mocking Claudius's stutter?">p</span>s <span class="translation-number">7</span><span class="sound" title="p alliteration - Tacitus is mocking Claudius's stutter?">p</span>auca <span class="translation-number">8</span>verba <span class="translation-number">6</span>fecit:<br>
            <span class="translation-number">2</span><span class="sound" title="harsh 'c' sounds with soldiers shouting contrasts Claudius's silence">c</span><span class="position" title="emphatic positioning">ontinuus</span> <span class="translation-number">1</span>dehin<span class="sound" title="harsh 'c' sounds with soldiers shouting contrasts Claudius's silence">c <span class="translation-number">3</span>c</span>lamor <span class="translation-number">4</span>militum <span class="translation-number">6</span>nomina <span class="translation-number">7</span>reorum <span class="translation-number">8</span>et <span class="translation-number">9</span>poenas<br>
            <span class="choice" title="powerful CoW"><span class="translation-number">5</span>flagitantium</span>. <span class="position" title="emphatic positioning"><span class="translation-number">2</span>ductus</span> <span class="translation-number">1</span>Silius <span class="translation-number">3</span>ad <span class="translation-number">4</span>tribunal <span class="position" title="balanced phrasing and anaphora and asyndeton"><span class="translation-number">6</span>non <span class="translation-number">7</span>defensionem,</span><br>
            <span class="position" title="balanced phrasing and anaphora and asyndeton"><span class="translation-number">8</span>non <span class="translation-number">9</span>moras</span> <span class="translation-number">5</span>temptavit, <span class="translation-number">10</span>sed <span class="choice" title="desperate CoW"><span class="translation-number">11</span>precatus est</span> <span class="translation-number">12</span>ut <span class="translation-number">13</span>mors <span class="context" title="contrast of Silius trying to hasten death while Messalina tries to prolong her life"><span class="translation-number">14</span>acceleraretur</span>.<br>
            <span class="translation-number">1</span>interim <span class="translation-number">2</span>Messalina <span class="translation-number">7</span>Lucullianis <span class="translation-number">5</span>in <span class="translation-number">6</span>hortis <span class="choice" title="foreshadowing CoW + historic infinitive makes scene more vivid"><span class="translation-number">3</span>prol</span><span class="context" title="contrast of Messalina trying to prolong life while Silius tries to hasten death">atare <span class="translation-number">4</span>vitam</span>,<br>
            <span class="choice" title="historic infinitive makes scene more vivid"><span class="translation-number">8</span>componere</span> <span class="choice"><span class="translation-number">9</span>preces</span>, <span class="translation-number">10</span>nonnulla <span class="translation-number">11</span>spe <span class="translation-number">12</span>et <span class="translation-number">13</span>ira: <span class="translation-number">4</span>tantam <span class="translation-number">5</span>superbiam<br>
            <span class="translation-number">1</span>etiam <span class="translation-number">2</span>tum <span class="translation-number">3</span>gerebat. <span class="translation-number">1</span>ac <span class="translation-number">2</span>nisi <span class="translation-number">6</span>caedem <span class="translation-number">5</span>eius <span class="position" title="chiasmus"><span class="translation-number">3</span>Narcissus <span class="translation-number">4</span>properavisset,</span><br>
            <span class="position" title="chiasmus"><span class="translation-number">8</span>vertisset <span class="translation-number">7</span>pernicies</span> <span class="translation-number">9</span>in <span class="translation-number">10</span>accusatorem.
        </p>
        <p id="latin8">
            <strong>Lines 70-79</strong><br>
            <span class="translation-number">1</span>nam <span class="translation-number">2</span>Claudius <span class="translation-number">3</span>domum <span class="translation-number">4</span>regressus, <span class="translation-number">2</span>ubi <span class="translation-number">7</span>cena <span class="translation-number">9</span>vino<span class="translation-number">8</span>que <span class="translation-number">6</span>incaluit,<br>
            <span class="choice" title="variatio of 'denuntiatque' and 'iubere'"><span class="translation-number">10</span>imperavit</span> <span class="translation-number">11</span>ut <span class="translation-number">13</span>femina <span class="translation-number">12</span>misera (<span class="translation-number">18</span>hoc <span class="translation-number">14</span>enim <span class="translation-number">19</span>verbo <span class="translation-number">16</span>Claudium<br>
            <span class="translation-number">17</span>usum esse <span class="translation-number">15</span>ferunt) <span class="translation-number">22</span>ad <span class="translation-number">24</span>causam <span class="translation-number">23</span>dicendam <span class="translation-number">21</span>postridie <span class="choice" title="polyptoton with 'aderat'"><span class="translation-number">20</span>adesset</span>.<br>
            <span class="translation-number">4</span>quod <span class="translation-number">1</span>ubi <span class="translation-number">2</span>Narcissus <span class="translation-number">3</span>audivit <span class="translation-number">8</span>et <span class="translation-number">7</span>languescere <span class="translation-number">5</span>iram <span class="translation-number">10</span>redire<br>
            <span class="choice" title="m alliteration emphasises possible effect of Claudius's love for Messalina"><span class="translation-number">9</span>amorem <span class="translation-number">6</span>vidit, <span class="translation-number">11</span>timebat, <span class="translation-number">14</span>si <span class="translation-number">15</span>moraretur</span>, <span class="translation-number">12</span>propinquam <span class="translation-number">13</span>noctem<br>
            <span class="translation-number">16</span>et <span class="translation-number">19</span>uxorii <span class="translation-number">19</span>cubiculi <span class="translation-number">17</span>memoriam; <span class="translation-number">1</span>igitur <span class="choice" title="strong CoW"><span class="translation-number">2</span>prorumpit</span> <span class="choice" title="variatio of 'imperavit' and 'iubere'"><span class="translation-number">4</span>denuntiat<span class="translation-number">3</span>que</span><br>
            <span class="translation-number">5</span>centurionibus <span class="translation-number">6</span>et <span class="translation-number">7</span>tribuno, <span class="translation-number">8</span>qui <span class="choice" title="polyptoton with 'adesset'"><span class="translation-number">9</span>aderat</span>, <span class="translation-number">10</span>exsequi <span class="translation-number">11</span>caedem:<br>
            <span class="translation-number">1</span>ita <span class="translation-number">2</span>imperatorem <span class="choice" title="variatio of 'imperavit' and 'denuntiatque'"><span class="translation-number">3</span>iubere</span>. <span class="translation-number">5</span>missus <span class="translation-number">4</span>quoque <span class="translation-number">1</span>unus <span class="translation-number">2</span>e <span class="translation-number">3</span>libertis:<br>
            <span class="translation-number">1</span>is <span class="translation-number">3</span>raptim <span class="translation-number">4</span>in <span class="translation-number">5</span>hortos <span class="translation-number">2</span>praegressus <span class="translation-number">6</span>repperit <span class="translation-number">7</span>Messalinam,<br>
            <span class="translation-number">9</span>humi <span class="translation-number">8</span>fusam;
        </p>
        <p id="latin9">
            <strong>Lines 79-89</strong><br>
            <span class="translation-number">1</span>adsidebat <span class="translation-number">2</span>mater <span class="translation-number">3</span>Lepida, <span class="translation-number">4</span>quae <span class="translation-number">9</span>florenti <span class="translation-number">8</span>filiae<br>
            <span class="translation-number">5</span>haud <span class="translation-number">7</span>concors <span class="translation-number">6</span>fuerat; <span class="choice" title="sibilance emphasises Tacitus's disgust at the immoral pair"><span class="translation-number">1</span>sed <span class="translation-number">3</span>supremis <span class="translation-number">2</span>eius <span class="translation-number">4</span>necessitatibus</span><br>
            <span class="translation-number">6</span>ad <span class="translation-number">7</span>miserationem <span class="translation-number">5</span>versa <span class="translation-number">8</span>suadebat <span class="translation-number">9</span>ne <span class="translation-number">11</span>percussorem <span class="translation-number">10</span>opperiretur:<br>
            <span class="position" title="emphaticallly positioned at beginning of clause"><span class="translation-number">2</span>transiisse</span> <span class="translation-number">1</span>vitam <span class="translation-number">4</span>neque <span class="translation-number">5</span>aliud <span class="translation-number">6</span>quam <span class="translation-number">8</span>mortem <span class="choice" title="variatio on 'honestum'"><span class="translation-number">7</span>decoram</span><br>
            <span class="translation-number">3</span>quaerendum. <span class="translation-number">1</span>sed <span class="translation-number">3</span>nihil <span class="choice" title="variatio on 'decoram'"><span class="translation-number">4</span>honestum</span> <span class="translation-number">2</span>inerat <span class="translation-number">6</span>Messalinae <span class="translation-number">5</span>animo,<br>
            <span class="translation-number">8</span>per <span class="translation-number">9</span>libidines <span class="translation-number">7</span>corrupto; <span class="translation-number">1</span>lacrimae <span class="translation-number">2</span>et <span class="translation-number">4</span>questus <span class="translation-number">3</span>inriti <span class="translation-number">5</span>effundebantur,<br>
            <span class="translation-number">6</span>cum <span class="translation-number">9</span>impetu <span class="translation-number">10</span>venientium <span class="translation-number">8</span>pulsae sunt <span class="translation-number">7</span>fores<br>
            <span class="translation-number">13</span>adstitit<span class="translation-number">11</span>que <span class="translation-number">12</span>tribunus. <span class="translation-number">1</span>tunc <span class="translation-number">2</span>primum <span class="translation-number">3</span>Messalina <span class="translation-number">6</span>fortunam <span class="translation-number">5</span>suam<br>
            <span class="translation-number">4</span>intellexit <span class="choice" tite="dramatic CoW"><span class="translation-number">9</span>ferrum</span><span class="translation-number">7</span>que <span class="translation-number">8</span>accepit:; <span class="translation-number">2</span>quod <span class="translation-number">3</span>frustra <span class="translation-number">4</span>iugulo <span class="translation-number">5</span>aut<br>
            <span class="choice" title="p alliteration expresses Messalina's hesitation and panic"><span class="translation-number">6</span>pectori <span class="translation-number">7</span>per <span class="translation-number">8</span>trepidationem</span> <span class="translation-number">1</span>admovens, <span class="translation-number">11</span>ictu <span class="translation-number">10</span>tribuni <span class="translation-number">9</span>transigitur.<br>
            <span class="translation-number">1</span>corpus <span class="translation-number">3</span>matri <span class="translation-number">2</span>concessum.
        </p>
    `;
    const messalinaEnglish = `
        <p id="english1">
            <strong>Lines 1-8</strong><br>
            Messalina was fired with a new and almost mad love. For<br>
            she had burned (with love) for C. Silius, the most handsome<br>
            of the Roman youth to such an extent, that she drove out<br>
            Junia Silana, a noble woman, fromn her marriage and got<br>
            possession of an unrestricted adulterer. Silius was not<br>
            unaware of the disgrace or the danger: but he realised that<br>
            ruin would be certain, if he rejected (her), and if he agreed,<br>
            there was some hope of concealing the deed; and at the<br>
            same time, he would receive great rewards. Therefore, he<br>
            decided to ignore future events and enjoy the present<br>
            circumstances.
        </p>
        <p id="english2">
            <strong>Lines 8-17</strong><br>
            She visited the house frequently, not secretly, but with<br>
            many conmpanions, clung to him when he went out, gave<br>
            him wealth and honours; finally, slaves, freedmen, the<br>
            furnishings of the emperor were often seen at the<br>
            adulterer's house. But Claudius was unaware of (the state<br>
            of) his own marriage. Now Messalina, because of the<br>
            easiness of the adulteries, turned to unusual lusts. Silius,<br>
            whether because of his fateful folly or thinking that the very<br>
            dangers were a cure for the imminent dangers, pressed for<br>
            the concealment to be cast aside: certainly, they should not<br>
            wait for the emperor to grow old.
        </p>
        <p id="english3">
            <strong>Lines 17-26</strong><br>
            He was single, childless, ready for marriage and adopting<br>
            Britannicus. For Messalina, the same power would remain,<br>
            with added security, if they forestalled Claudius, who was<br>
            oblivious to treachery, but swift to anger. Messalina<br>
            hesitated for a long time, not because of love towards her<br>
            husband, but fearing that Silius, if he obtained supreme<br>
            power, might spurn her; but finally, she was persuaded. For<br>
            she craved the title of marriage because of the magnitude of<br>
            the ignominy. Not delaying any further than until Claudius<br>
            set out for Ostia for a sacrifice, she celebrated all the<br>
            rites of marriage.
        </p>
        <p id="english4">
            <strong>Lines 27-38</strong><br>
            Therefore, the emperor's household shuddered, and<br>
            particularly those who held (any) power feared lest the<br>
            state be overturned; nevertheless, they had (some) hope<br>
            that if they convinced Claudius about the enormity of the<br>
            crime, Messalina could be condemned without a trial and<br>
            overthrown. But there was a danger that Claudius might<br>
            listen to her defence or that his ears might not be closed<br>
            to her, even if she confessed. Narcissus, looking for<br>
            opportunities, since Caesar was delaying for a long time<br>
            at Ostia, compelled two of his concubines by means of<br>
            largesse and promises to submit an accusation. Then<br>
            Calpurnia (that was the name of one of the two<br>
            concubines), when she was given a secret audience,<br>
            prostrating herself at the knees of Caesar, shouted that<br>
            Messalina had married Silius; when the other concubine<br>
            confirmed this, Calpurnia demanded that Narcissus be<br>
            summoned.
        </p>
        <p id="english5">
            <strong>Lines 39-49</strong><br>
            He said, 'Do you know about your divorce? For the<br>
            people, the senate and the soldiers have seen Silius's<br>
            marriage; and unless you act quickly, the husband<br>
            controls the city.<br>
            'In the meantime, there was not only rumour, but from all<br>
            sides messengers were hastening to Messalina, to report<br>
            that Claudius knew everything and was coming eager for<br>
            revenge. Therefore, Messalina and Silius departed in<br>
            different directions, she to the Gardens of Lucullus, he to<br>
            the forum to hide his fear. She, however, although the<br>
            unfavourable circumstances were taking away (time for)<br>
            deliberation, immediately decided to meet and be seen<br>
            by her husband, which had often been a help to her; and<br>
            she sent (instructions) that Britannicus and Octavia<br>
            should go to embrace their father.
        </p>
        <p id="english6">
            <strong>Lines 49-59</strong><br>
            And meanwhile, with three at the most accompanying<br>
            herso sudden was the isolation after she went on<br>
            foot through the city, she entered the Ostian road in a<br>
            cart. by which the refuse of the gardens was being taken<br>
            away. She aroused no pity in the citizens, as the<br>
            hideousness of the scandals prevailed.<br>
            And now she was in sight of Claudius and kept shouting<br>
            that he should listen to the mother of Octavia and<br>
            Britannicus. Narcissus, however, shouted her down,<br>
            referring to Silius and the marriage; at the same time, he<br>
            handed over a writing tablet as proof of her lusts, by<br>
            which he might divert the glances of Caesar. Not long<br>
            afterwards, the children tried to present themselves to<br>
            (Claudius) as he was entering the city, but Narcissus<br>
            ordered them to be taken away.
        </p>
        <p id="english7">
            <strong>Lines 60-69</strong><br>
            Claudius's silence amid these events was surprising: he<br>
            obeyed the freedman in every respect. (Narcissus)<br>
            prepared a meeting of the soldiers in the camp. In their<br>
            presence, after a previous warning by Narcissus, the<br>
            emperor spoke a few words: then (there arose) a<br>
            continuous shouting of the soldiers who demanded the<br>
            names of the guilty and punishments. Silius, brought into<br>
            the tribunal, did not attempt a defence or delaying<br>
            tactics, but begged that he might be killed quickly.<br>
            Meanwhile, Messalina prolonged her life in the gardens<br>
            of Lucullus, composed a petition, with some hope and<br>
            anger: even then, she displayed such great pride. And if<br>
            Narcissus had not hastened her slaughter, destruction<br>
            would have turned onto the accuser.
        </p>
        <p id="english8">
            <strong>Lines 70-79</strong><br>
            For when Claudius, having returned home, was heated<br>
            with the meal and wine, he ordered that the wretched<br>
            woman (for they say this is the word Claudius used)<br>
            should be present the next day to plead her case. When<br>
            Narcissus heard this and saw that (Claudius's) anger was<br>
            abating and that his love was returning, he began to fear<br>
            the approaching night, if he delayed, and the memory of<br>
            his wife's bedroom; therefore, he burst forth and ordered<br>
            the centurions and a tribune, who was present, to carry<br>
            out the slaughter: (he said that) this is what the emperor<br>
            was ordering. One of the freedmen was also sent; he,<br>
            having gone swiftly to the gardens before (the rest),<br>
            found Messalina prostrate on the ground;
        </p>
        <p id="english9">
            <strong>Lines 79-89</strong><br>
            Sitting beside her was her mother Lepida, who had not<br>
            been in harmony with her daughter when she was<br>
            flourishing, but in her final (hours of) need, having turned<br>
            to pity, she advised her not to wait for an assassin: her<br>
            life was past, and she should not seek anything other<br>
            than a noble death. But there was nothing honourable in<br>
            Messalina's mind, which was corrupted by her lusts; tears<br>
            and futile complaints were pouring forth, when the doors<br>
            were struck by the force of those arriving and the tribune<br>
            stood nearby. Then for the first time Messalina<br>
            recognised her fate and took up the sword; applying this<br>
            in vain to her throat or chest because of her panic, she<br>
            was pierced by the tribune's blow. The body was granted<br>
            to the mother.
        </p>
    `;
    
    messalinaSection.innerHTML = messalinaSection.innerHTML.includes('she had') ? messalinaLatin : messalinaEnglish;
}


function toggleGuidedTranslation() {
    const latinTextDiv = document.getElementById("messalina");
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
