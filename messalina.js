function translateText() {
    const messalinaSection = document.getElementById('messalina');
    const messalinaLatin = `
        <p id="latin1">
            <strong>Lines 1-8</strong><br>
            Messalina novo et quasi insano amore incensa est.<br>
            nam in C. Silium, iuventutis Romanae pulcherrimum, ita exarserat<br>
            ut Iunianm Silanam, nobilem feminam, matrimonio eius<br>
            exturbaret liberoque adultero potiretur. neque Silius flagitii<br>
            aut periculi nescius erat: sed intellexit exitium, si abnueret,<br>
            fore certum et, si consentiret, nonnullam facinoris celandi<br>
            spem esse; simulque se magna praemia accepturum.<br>
            igitur placuit neglegere futura et praesentibus frui.
            <br><br><br><br>
        </p>
        <p id="latin2">
            <strong>Lines 8-17</strong><br>
            <span style="margin-left: 300px;">illa non furtim<br></span>
            sed multis cum comitibus ventitat domum, egredienti<br>
            adhaeret, dat opes honoresque; postremo servi, liberti,<br>
            paratus principis apud adulterum saepe videbantur.<br>
            at Claudius matrimonii sui ignarus.<br>
            iam Messalina propter facilitatem adulteriorum ad novas libidines<br>
            versa est. Silius, sive fatali insania an ipsa pericula<br>
            remedium imminentium periculorum ratus, abrumpi<br>
            dissimulationem urgebat: quippe non exspectandum,<br>
            dum princeps senesceret.
            <br><br>
        </p>
        <p id="latin3">
            <strong>Lines 17-26</strong><br>
            <span style="margin-left: 250px;">se caelibem, orbum, nuptis</span><br>
            et adoptando Britannico paratum. eandem Messalinae potentiam<br>
            mansuram esse, addita securitate, si praevenirent Claudium.<br>
            qui insidiis incautus sed ad iram celer esset.<br>
            Messalina, non amore in maritum, sed verita ne Silius<br>
            summa adeptus se sperneret, diu haesitavit; sed tandem<br>
            persuasum. nomen enim matrimonii concupivit<br>
            ob magnítudinem infamiae. nec ultra morata<br>
            quam dum sacrificii gratia Claudius Ostiam proficisceretur,<br>
            cuncta nuptiarum sollemnia celebrat.
            <br><br>
        </p>
        <p id="latin4">
            <strong>Lines 27-38</strong><br>
            igitur domus principis inhorruit, maximeque ei qui<br>
            potentiam habebant timuerunt ne res verterentur:<br>
            spem tamen habebant, si Claudio de atrocitate sceleris persuasissent,<br>
            Messalinam posse opprimi sine quaestione damnatam;<br>
            sed periculum esse ne ille defensionem audiret,<br>
            neve clausae aures etiam confitenti non essent. Narcissus,<br>
            occasiones quaerens, cum Caesar diu apud Ostiam moraretur,<br>
            duas eius paelices largitione et promissis perpulit<br>
            5 delationem subire. exim Calpurnia (id alteri paelici nomen),<br>
            ubi datum est secretum, ad genua Caesaris provoluta<br>
            nupsisse Messalinam Silio exclamat; altera paelice<br>
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
    
    messalinaSection.innerHTML = messalinaSection.innerHTML.includes('Messalina was fired') ? messalinaLatin : messalinaEnglish;
}