function translateText() {
    const messalinaSection = document.getElementById('messalina');
    const messalinaLatin = `
        <p id="latin1">
            <strong>Lines 1-8</strong><br>
            Messalina novo et <span class="choice" title="quasi draws attention to insano - perhaps also shows T's disbelief">quasi insano</span> amore <span class="choice" title="metaphor; 'fired' suggests it is destructive">incensa est</span>.<br>
            nam in C. Silium, iuventutis Romanae <span class="choice" title="superlative; he is the 'most beautiful'">pulcherrimum</span>, <span class="choice" title="multiple fire words building up destructive imagery">ita exarserat</span><br>
            ut <span class="context" title="2nd woman; context for Silius' wife">Iuniam Silanam</span>, <span class="choice" title="she is noble; for context">nobilem feminam</span>, matrimonio eius<br>
            <span class="choice" title="delayed; 'to remove' from Silius' side">exturbaret libero</span>que adultero potiretur. <span class="choice" title="double negative litotes—exaggerates that Silius knew">neque</span> Silius <span class="choice" title="crime">flagitii</span><br>
            aut periculi <span class="choice" title="not unaware">nescius</span> erat: sed intell<span class="sound" title="repetition of syllable 'ex'">exit exit</span>ium, <span class="position" title="clauses interject here">si abnueret</span>,<br>
            fore <span class="position" title="setting out S' choice clearly">certum</span> et, <span class="position" title="tautology emphasizes 'ruin' for Silius">si consentiret</span>, <span class="choice" title="some chance of hiding the crime">nonnullam</span> facinori<span class="sound" title="sibilance">s</span> celandi<br>
            <span class="position" title="delay emphasises this outcome">spem</span><span class="sound" title="sibilance"> esse; simulque se</span> <span class="choice" title="great rewards">magna</span> praemia accepturum.<br>
            <span class="sound" title="repetition of t sound">igitur placuit neglegere futura et praesentibus</span> <span class="choice" title="disgraceful—chooses enjoyment over honour and kin">frui</span>.
            <br><br><br><br>
        </p>
        <p id="latin2">
            <strong>Lines 8-17</strong><br>
            <span style="margin-left: 300px;">illa <span class="choice" title="litotes">non fu</span><span class="position" title="Emphatic positioning">rtim</span><br></span>
            sed multis cum comitibus <span class="choice" title="historic present - more vivid">ventitat</span> <span class="position" title="delay of domum highlights that she is obviously going to his house">domum</span><span class="position" title="Bs are juxtabosed to show that M is with S all the time">, egredienti</span><br>
            adhaeret, dat opes honoresque; postremo <span class="choice" title="tricolon">servi, liberti,</span><br>
            <span class="sound" title="condemnation through p sounds">p</span><span class="choice" title="3rd part of tricolon is different - surprising">aratus</span> <span class="sound" title="condemnation through p sounds">p</span><span class="choice" title="reminder of adultery">rincipis</span> apud adulterum saepe videbantur.<br>
            at Claudius matrimonii sui <span class="choice" title="variatio - different to nescius in previous passage">ignarus</span>. iam Messalina <span class="position" title="balanced phrasing">propter facilitatem</span><br>
            <span class="position" title="balanced phrasing">adulteriorum ad novas </span><span class="choice" title="strong CoW">libidines</span><br>
            versa est. Silius, sive <span class="choice" title="strong CoW">fatali</span> <span class="choice" title="strong CoW">insania</span> an ipsa <span class="choice" title="polyptoton">pericula</span><br>
            re<span class="sound" title="solemn gloomy tone through m sounds">m</span>ediu<span class="sound" title="solemn gloomy tone through m sounds">m</span> i<span class="sound" title="solemn gloomy tone through m sounds">mm</span>inentiu<span class="sound" title="solemn gloomy tone through m sounds">m</span> <span class="choice" title="polyptoton">periculoru</span><span class="sound" title="solemn gloomy tone through m sounds">m</span> ratus, <span class="position" title="EP, promoted - focus on action & intensity">abrumpi</span><br>
            dissimulationem <span class="choice" title="forceful CoW">urgebat</span>: quippe non exspectandum,<br>
            dum princeps senesceret.
            <br><br>
        </p>
        <p id="latin3">
            <strong>Lines 17-26</strong><br>
            <span style="margin-left: 250px;"><span class="context" title="Silius">se</span> <span class="choice" title="tricolon & asyndeton making S a better candidate">caelibem, orbum, nuptis</span></span><br>
            <span class="choice" title="tricolon & asyndeton making S a better candidate">et adoptando Britannico paratum</span>. eandem Messalinae potentiam<br>
            mansuram esse, addita securitate, si praevenirent Claudium.<br>
            qui <span class="sound" title="assonance adds emphasis">i</span><span class="choice" title="meaning of words shows totally unaware">ns</span><span class="sound" title="assonance adds emphasis">i</span><span class="choice" title="meaning of words shows totally unaware">d</span><span class="sound" title="assonance adds emphasis">ii</span><span class="choice" title="meaning of words shows totally unaware">s</span> <span class="sound" title="assonance adds emphasis">i</span><span class="choice" title="meaning of words show totally unaware">ncautus</span> sed ad <span class="position" title="balanced phrasing - increases contrast & potential irony">iram celer</span> esset.<br>
            Messalina, <span class="choice" title="sarcastic?">non amore in maritum</span>, sed verita ne Siliu<span class="sound" title="sibilance - sinister or drawing out the sentence">s</span><br>
            <span class="sound" title="sibilance - sinister or drawing out the sentence">s</span>umma adeptu<span class="sound" title="sibilance - sinister or drawing out the sentence">s</span> <span class="sound" title="sibilance - sinister or drawing out the sentence">s</span>e <span class="sound" title="sibilance - sinister or drawing out the sentence">s</span>perneret, diu haesitavit; <span class="position" title="short dramatic clause">sed tandem</span><br>
            <span class="position" title="EP">persuasum</span>. nomen enim <span class="choice" title="variatio (nuptiis was used earlier)">matrimonii</span> <span class="choice" title="uncontrollable - powerful CoW">concupivit</span><br>
            ob magnítudinem <span class="choice" title="powerful CoW">infa</span><span class="context" title="ignominy = disgrace">miae</span>. nec ultra morata<br>
            quam <span class="choice" title="Claudius is being pious, M is taking advantage of this">dum sacrificii gratia</span> Claudius <span class="context" title="port close to Rome">Ostiam</span> proficisceretur,<br>
            <span class="choice" title="M is not holding back">cuncta</span> nuptiarum sollemnia <span class="choice" title="HP - vivid">celebrat</span>.
            <br><br>
        </p>
        <p id="latin4">
            <strong>Lines 27-38</strong><br>
            igitur <span class="choice" title="personification - enormity of crime">domus</span> principis <span class="choice" title="powerful CoW">inhorruit</span>, maximeque ei qui<br>
            <span class="position" title="same structure - link between power and hope to keep power">potentiam habebant</span> timuerunt ne <span class="choice" title="vague but has big implicaitions">res</span> verterentur:<br>
            <span class="position" title="same structure - link between power and hope to keep power">spem tamen habebant</span>, si Claudio de <span class="choice" title="hyperbolic CoW - shows worry of people with power">atrocitate</span> sceleris persuasissent,<br>
            Messalinam posse opprimi <span class="position" title="delayed">sine quaestione</span> <span class="position" title="EP - end of clause">damnatam</span>;<br>
            sed periculum esse ne ille defensionem audiret,<br>
            <span class="choice" title="litotes">ne</span>ve clausae aures etiam confitenti <span class="choice" title="litotes">non</span> essent. <span class="context" title="advisor of Claudius, ex-slave, very rich">Narcissus</span>,<br>
            occasiones quaerens, cum <span class="choice" title="variatio - more of an official title, focus on duty">Caesar</span> diu apud Ostiam moraretur,<br>
            duas eius <span class="context" title = concubine/mistress>paelices</span> <span class="context" title="bribery, generosity">largitione</span> et <span class="sound" title="p alliteration - T dissapproves of N's calculated actions">p</span>romissis <span class="sound" title="p alliteration - T dissapproves of N's calculated actions">p</span>er<span class="sound" title="p alliteration - T dissapproves of N's calculated actions">p</span>ulit<br>
            5 delationem subire. exim Calpurnia (id alteri paelici nomen),<br>
            ubi datum est secretum, ad genua <span class="choice" title="use of 'Caesar' shows position of power compared to Calpurnia">Caesaris</span> <span class="choice" title="Calpurnia wants Claudius' good will at this point">provoluta</span><br>
            <span class="position" title="shocking">nupsisse</span> <span class="choice" title="M married to Silius places her in control - scandalous">Messalinam</span><span class="position" title="emotional closeness mirrored by juxtaposition in text"> Silio</span> <span class="choice" title="powerful CoW & historic present">exclamat</span>; altera paelice<br>
            haec confirmante, Calpurnia cieri Narcissum postulat.<br>
            <br><br><br><br><br>
        </p>
        <p id="latin5">
            <strong>Lines 39-49</strong><br>
            qui discidiumne tuum' inquit 'novisti? nam matrimonium<br>
            Silii vidit populus et senatus et milites; ac nisi celeriter agis,<br>
            tenet urbem maritus.'<br>
            non solum rumor interea, sed undique nuntii ad Messalinam<br>
            contendunt, qui Claudium omnia cognovisse et venire<br>
            promptum ultioni adferrent. igitur Messalina Lucullianos<br>
            in hortos, Silius dissimulando metui ad forum digrediuntur.<br>
            illa tamen, quamquam res adversae consilium eximerent,<br>
            ire obviam et aspici a marito statim constituit, quod saepe<br>
            ei fuerat subsidium; misitque ut Britannicus et Octavia<br>
            in complexum patris irent.<br>
            <br><br><br><br>
        </p>
        <p id="latin6">
            <strong>Lines 49-59</strong><br>
            atque interim, tribus omnino comitantibus<br>
            — tam repens erat sollitudo — postquam per urbem<br>
            pedibus ivit, vehiculo, quo purgamenta hortorum eripiuntur,<br>
            Ostiensem viam intrat. nullam misericordiam<br>
            civibus commovit quia flagitiorum deformitas praevalebat.<br>
            et iam erat in aspectu Claudii clamitabatque ut audiret<br>
            Octaviae et Britannici matrem. Narcissus tamen obstrepuit,<br>
            Silium et nuptias referens; simul codicillos libidinum indices<br>
            tradidit, quibus visus Caesaris averteret. nec multo post<br>
            urbem ingredienti offerebantur liberi, sed Narcissus<br>
            amoveri eos iussit.<br>
            <br><br><br><br>
        </p>
        <p id="latin7">
            <strong>Lines 60-69</strong><br>
            mirum inter haec silentium Claudii: omnia liberto oboediebat:<br>
            qui contionem militum in castris paravit. apud eos<br>
            praemonente Narcisso princeps pauca verba fecit:<br>
            continuus dehinc clamor militum nomina reorum et poenas<br>
            flagitantium. ductus Silius ad tribunal non defensionem,<br>
            non moras temptavit, sed precatus est ut mors acceleraretur.<br>
            componere preces, nonnulla spe et ira: tantam superbiam<br>
            interim Messalina Lucullianis in hortis prolatare vitam,<br>
            etiam tum gerebat. ac nisi caedem eius Narcissus properavisset,<br>
            vertisset pernicies in accusatorem.
            <br><br><br><br><br>
        </p>
        <p id="latin8">
            <strong>Lines 70-79</strong><br>
            nam Claudius domum regressus, ubi cena vinoque incaluit,<br>
            imperavit ut femina misera (hoc enim verbo Claudium<br>
            usum esse ferunt) ad causam dicendam postridie adesset.<br>
            quod ubi Narcissus audivit et languescere iram redire<br>
            amorem vidit, timebat, si moraretur, propinquam noctem<br>
            et uxorii cubiculi memoriam; igitur prorumpit denuntiatque<br>
            centurionibus et tribuno, qui aderat, exsequi caedem:<br>
            ita imperatorem iubere. missus quoque unus e libertis:<br>
            is raptim in hortos praegressus repperit Messalinam,<br>
            humi fusam;
            <br><br><br><br>
        </p>
        <p id="latin9">
            <strong>Lines 79-89</strong><br>
            adsidebat mater Lepida, quae florenti filiae<br>
            haud concors fuerat; sed supremis eius necessitatibus<br>
            ad miserationem versa suadebat ne percussorem opperiretur:<br>
            transiisse vitam neque aliud quam mortem decoram<br>
            quaerendum. sed nihil honestum inerat Messalinae animo,<br>
            per libidines corrupto; lacrimae et questus inriti effundebantur,<br>
            cum impetu venientium pulsae sunt fores<br>
            adstititque tribunus. tunc primum Messalina fortunam suam<br>
            intellexit ferrumque accepit:; quod frustra iugulo aut<br>
            pectori per trepidationem admovens, ictu tribuni transigitur.<br>
            corpus matri concessum.<br>
            <br><br><br>
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

