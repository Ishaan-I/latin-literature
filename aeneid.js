function translateText() {
    const aeneidSection = document.getElementById('aeneid');
    const aeneidLatin = `
        <p id="latin1">
            <strong>Lines 12-22</strong><br>
            <span class="noun">urbs</span> <span class="adj">antiqua</span> <span class="verb">fuit</span>, <span class="noun">Tyrii</span> <span class="verb">tenuere</span> <span class="noun">coloni</span>,<br>
            <span class="noun">Karthago</span>, <span class="noun">Italiam</span> <span class="pre">contra</span> <span class="noun">Tiberina</span><span class="con">que</span> <span class="adj">longe</span><br>
            <span class="noun">ostia</span>, <span class="adj">dives</span> <span class="noun">opum</span> <span class="noun">studiis</span><span class="con">que</span> <span class="adj">asperrima</span> <span class="noun">belli</span>;<br>
            <span class="pro">quam</span> <span class="noun">Iuno</span> <span class="verb">fertur</span> <span class="noun">terris</span> <span class="adv">magis</span> <span class="adj">omnibus</span> <span class="adv">unam</span><br>
            <span class="verb">posthabita</span> <span class="verb">coluisse</span> <span class="noun">Samo</span>; <span class="noun">hic</span> <span class="noun">illius</span> <span class="noun">arma</span>,<br>
            <span class="noun">hic</span> <span class="noun">currus</span> <span class="verb">fuit</span>; <span class="noun">hoc</span> <span class="noun">regnum</span> <span class="noun">dea</span> <span class="noun">gentibus</span> <span class="verb">esse</span>,<br>
            <span class="con">si</span> <span class="adv">qua</span> <span class="noun">fata</span> <span class="verb">sinant</span>, <span class="adv">iam</span> <span class="adv">tum</span> <span class="verb">tendit</span><span class="con">que</span> <span class="verb">fovet</span><span class="con">que</span>.<br>
            <span class="noun">progeniem</span> <span class="con">sed</span> <span class="adv">enim</span> <span class="noun">Troiano</span> <span class="pre">a</span> <span class="noun">sanguine <span class="verb">duci<br>
            <span class="verb">audierat</span>, <span class="noun">Tyrias</span> olim quae <span class="verb">verteret</span> <span class="noun">arces</span>;<br>
            <span class="adv">hinc</span> <span class="noun">populum</span> <span class="adv">late</span> <span class="verb">regem</span> <span class="noun">bello</span><span class="con">que</span> <span class="adj">superbum</span><br>
            <span class="verb">venturum</span> <span class="verb">excidio</span> <span class="noun">Libyae</span>: <span class="adv">sic</span> <span class="verb">volvere</span> <span class="noun">Parcas</span>.<br>
            <br>
        </p>
        <p id="latin2">
            <strong>Lines 23-33</strong><br>
            Id metuens, veterisque memor Saturnia belli,<br>
            prima quod ad Troiam pro caris gesserat Argis—-<br>
            necdum etiam causae irarum saevique dolores<br>
            exciderant animo: manet alta mente repostum<br>
            iudicium Paridis spretaeque iniuria formae,<br>
            et genus invisum, et rapti Ganymedis honores.<br>
            His accensa super, iactatos aequore toto<br>
            Troas, reliquias Danaum atque immitis Achilli,<br>
            arcebat longe Latio, multosque per annos<br>
            errabant, acti fatis, maria omnia circum.<br>
            Tantae molis erat Romanam condere gentem!<br>
            <br><br>
        </p>
        <p id="latin3">
            <strong>Lines 34-45</strong><br>
            Vix e conspectu Siculae telluris in altum<br>
            vela dabant laeti, et spumas salis aere ruebant,<br>
            cum Iuno, aeternum servans sub pectore volnus,<br>
            haec secum: 'Mene incepto desistere victam,<br>
            nec posse Italia Teucrorum avertere regem?<br>
            Quippe vetor fatis. Pallasne exurere classem<br>
            Argivom atque ipsos potuit submergere ponto,<br>
            unius ob noxam et furias Aiacis Oilei?<br>
            Ipsa, Iovis rapidum iaculata e nubibus ignem,<br>
            disiecitque rates evertitque aequora ventis,<br>
            illum expirantem transfixo pectore flammas<br>
            turbine corripuit scopuloque infixit acuto.<br>
            <br><br>
        </p>
        <p id="latin4">
            <strong>Lines 46-57</strong><br>
            Ast ego, quae divom incedo regina, Iovisque<br>
            et soror et coniunx, una cum gente tot annos<br>
            bella gero! Et quisquam numen Iunonis adoret<br>
            praeterea, aut supplex aris imponet honorem?'<br>
            Talia flammato secum dea corde volutans<br>
            nimborum in patriam, loca feta furentibus austris,<br>
            Aeoliam venit. Hic vasto rex Aeolus antro<br>
            luctantes ventos tempestatesque sonoras<br>
            imperio premit ac vinclis et carcere frenat.<br>
            Illi indignantes magno cum murmure montis<br>
            circum claustra fremunt; celsa sedet Aeolus arce<br>
            sceptra tenens, mollitque animos et temperat iras.<br>
            <br><br>
        </p>
        <p id="latin5">
            <strong>Lines 58-70</strong><br>
            Ni faciat, maria ac terras caelumque profundum<br>
            quippe ferant rapidi secum verrantque per auras.<br>
            Sed pater omnipotens speluncis abdidit atris,<br>
            hoc metuens, molemque et montis insuper altos<br>
            imposuit, regemque dedit, qui foedere certo<br>
            et premere et laxas sciret dare iussus habenas.<br>
            Ad quem tum Iuno supplex his vocibus usa est:<br>
            'Aeole, namque tibi divom pater atque hominum rex<br>
            et mulcere dedit fluctus et tollere vento,<br>
            gens inimica mihi Tyrrhenum navigat aequor,<br>
            Ilium in Italiam portans victosque Penates:<br>
            incute vim ventis submersasque obrue puppes,<br>
            aut age diversos et disiice corpora ponto.<br>
            <br>
        </p>
        <p id="latin6">
            <strong>Lines 71-80</strong><br>
            Sunt mihi bis septem praestanti corpore nymphae,<br>
            quarum quae forma pulcherrima Deiopea,<br>
            conubio iungam stabili propriamque dicabo,<br>
            omnis ut tecum meritis pro talibus annos<br>
            exigat, et pulchra faciat te prole parentem.'<br>
            Aeolus haec contra: 'Tuus, O regina, quid optes<br>
            explorare labor; mihi iussa capessere fas est.<br>
            Tu mihi, quodcumque hoc regni, tu sceptra Iovemque<br>
            concilias, tu das epulis accumbere divom,<br>
            nimborumque facis tempestatumque potentem.'<br>
            <br>
        </p>
        <p id="latin7">
            <strong>Lines 81-91</strong><br>
            Haec ubi dicta, cavum conversa cuspide montem<br>
            impulit in latus: ac venti, velut agmine facto,<br>
            qua data porta, ruunt et terras turbine perflant.<br>
            Incubuere mari, totumque a sedibus imis<br>
            una Eurusque Notusque ruunt creberque procellis<br>
            Africus, et vastos volvunt ad litora fluctus.<br>
            Insequitur clamorque virum stridorque rudentum.<br>
            Eripiunt subito nubes caelumque diemque<br>
            Teucrorum ex oculis; ponto nox incubat atra.<br>
            Iutonuere poli, et crebris micat ignibus aether,<br>
            praesentemque viris intentant omnia mortem.<br>
            <br>
        </p>
        <p id="latin8">
            <strong>Lines 92-101</strong><br>
            Extemplo Aeneae solvuntur frigore membra:<br>
            ingemit, et duplicis tendens ad sidera palmas<br>
            talia voce refert: 'O terque quaterque beati,<br>
            quis ante ora patrum Troiae sub moenibus altis<br>
            contigit oppetere! O Danaum fortissime gentis<br>
            Tydide! Mene Iliacis occumbere campis<br>
            non potuisse, tuaque animam hanc effundere dextra,<br>
            saevus ubi Aeacidae telo iacet Hector, ubi ingens<br>
            Sarpedon, ubi tot Simois correpta sub undis<br>
            scuta virum galeasque et fortia corpora volvit?'<br>
            <br>
        </p>
        <p id="latin9">
            <strong>Lines 102-112</strong><br>
            Talia iactanti stridens Aquilone procella<br>
            velum adversa ferit, fluctusque ad sidera tollit.<br>
            Franguntur remi; tum prora avertit, et undis<br>
            dat latus; insequitur cumulo praeruptus aquae mons.<br>
            Hi summo in flucta pendent; his unda dehiscens<br>
            terram inter fluctus aperit; furit aestus harenis.<br>
            Tris Notus abreptas in saxa latentia torquet—-<br>
            saxa vocant Itali mediis quae in fluctibus aras—-<br>
            dorsum immane mari summo; tris Eurus ab alto<br>
            in brevia et Syrtis urguet, miserabile visu,<br>
            inliditque vadis atque aggere cingit harenae.<br>
            <br><br>
        </p>
        <p id="latin10">
            <strong>Lines 113-123</strong><br>
            Unam, quae Lycios fidumque vehebat Oronten,<br>
            ipsius ante oculos ingens a vertice pontus<br>
            in puppim ferit: excutitur pronusque magister<br>
            volvitur in caput; ast illam ter fluctus ibidem<br>
            torquet agens circum, et rapidus vorat aequore vortex.<br>
            Adparent rari nantes in gurgite vasto,<br>
            arma virum, tabulaeque, et Troia gaza per undas.<br>
            iam validam Ilionei navem, iam fortis Achatae,<br>
            et qua vectus Abas, et qua grandaevus Aletes,<br>
            vicit hiems; laxis laterum compagibus omnes<br>
            accipiunt inimicum imbrem rimisque fatiscunt.
            <br><br><br>
        </p>
    `;
    const aeneidEnglish = `
        <p id="english1">
            <strong>Lines 12-22</strong><br>
            <span class="verb">There was</span><span class="adj"> an ancient</span> <span class="noun">city</span> ( <span class="noun">Tyrian</span> <span class="noun">settlers</span> <span class="verb">possessed</span> it )<br>
            <span class="noun">Carthage</span>, <span class="verb">facing</span> <span class="noun">Italy</span> and the <span class="noun">mouth</span> of the <span class="noun">Tiber</span> far <span class="adv">away</span>,<br>
            <span class="adj">rich</span> in <span class="noun">resources</span> and <span class="adv">very</span> <span class="adj">fierce</span> in <span class="noun">war</span>'s <span class="noun">activities</span>, <span class="pro">which</span><br>
            <span class="adj">alone</span> <span class="noun">Juno</span> <span class="verb">is said</span> to <span class="verb">have cared</span> for <span class="adv">more</span> than all <span class="noun">other</span> <span class="noun">lands</span>,<br>
            <span class="con">since</span> <span class="pro">she</span> <span class="verb">esteemed</span> <span class="noun">Samos</span> <span class="adj">less</span>. <span class="adv">Here</span> <span class="verb">was</span> <span class="pro">her</span> <span class="noun">armour</span>, <span class="adv">here</span><br>
            <span class="verb">was</span> <span class="pro">her</span> <span class="noun">chariot</span>; <span class="adv">even</span> then the <span class="noun">goddess</span> <span class="con">both</span> <span class="verb">aimed</span> and<br>
            <span class="verb">cherished</span> (the <span class="noun">aim</span>) that this <span class="noun">city</span> <span class="verb">should</span> <span class="verb">be</span> the <span class="noun">kingdom</span> of<br>
            (all) <span class="noun">races</span>, <span class="con">if</span> the <span class="noun">fates</span> <span class="verb">allowed</span> it in <span class="adj">any</span> <span class="noun">way</span>. <span class="con">But</span> in fact, <span class="pro">she</span><br>
            <span class="verb">had heard</span> that <span class="noun">offspring</span> <span class="verb">was</span> <span class="verb">being produced</span> from <span class="noun">Trojan</span><br>
            <span class="noun">blood</span> to <span class="verb">overthrow</span> the <span class="noun">Tyrian</span> <span class="noun">citadels</span> <span class="adj">some</span> <span class="noun">day</span>; from this a<br>
            <span class="noun">race</span> <span class="verb">would come</span> <span class="verb">ruling</span> far and <span class="adv">wide</span> and <span class="adj">arrogant</span> in <span class="noun">war</span> to<br>
            <span class="verb">destroy</span> <span class="noun">Libya</span>; <span class="adv">thus</span>, the <span class="noun">fates</span> <span class="verb">were bringing</span> to <span class="verb">pass</span><br>
        </p>
        <p id="english2">
            <strong>Lines 23-33</strong><br>
            The <span class="noun">daughter</span> of <span class="noun">Saturn</span>, <span class="verb">fearing</span> this, and <span class="adj">mindful</span> of the <span class="adj">old</span><br>
            <span class="noun">war</span>, <span class="pro">which</span> <span class="pro">she</span> <span class="verb">had previously waged</span> near <span class="noun">Troy</span> on behalf of<br>
            <span class="pro">her</span> <span class="adj">beloved</span> <span class="noun">Greeks</span> — <span class="con">for</span> <span class="adv">even</span> now the <span class="noun">causes</span> of <span class="pro">her</span><br>
            ( <span class="noun">outbursts</span> of) <span class="noun">anger</span> and <span class="pro">her</span> <span class="adj">savage</span> <span class="noun">pains</span> <span class="verb">had not yet disappeared</span><br>
            from <span class="pro">her</span> <span class="noun">mind</span>; the <span class="noun">judgement</span> of <span class="noun">Paris</span> and the<br>
            <span class="noun">insult</span> <span class="verb">done</span> to <span class="pro">her</span> <span class="adj">spurned</span> <span class="noun">beauty</span> and the <span class="adj">hated</span> <span class="noun">race</span> and the<br>
            <span class="noun">honours</span> <span class="verb">given</span> to the <span class="adj">snatched</span> <span class="noun">Ganymede</span> <span class="verb">remained</span> <span class="adj">buried</span><br>
            <span class="adv">deep</span> in <span class="pro">her</span> <span class="noun">mind</span>: <span class="verb">fired</span> by these (<span class="noun">injustices</span>) <span class="adv">as well</span>, <span class="pro">she</span> <span class="verb">kept</span><br>
            the <span class="noun">Trojans</span> <span class="verb">tossed</span> about over the <span class="adj">whole</span> <span class="noun">sea</span>, the <span class="noun">remnants</span><br>
            left by the <span class="noun">Greeks</span> and <span class="adj">savage</span> <span class="noun">Achilles</span>, <span class="adj">far</span> from <span class="noun">Latium</span>, and<br>
            for <span class="adj">many</span> <span class="noun">years</span> <span class="pro">they</span> <span class="verb">wandered</span> <span class="verb">driven</span> by the <span class="noun">fates</span> around all<br>
            the <span class="noun">seas</span>. It <span class="verb">involved</span> such <span class="adj">great</span> <span class="noun">difficulty</span> to <span class="verb">found</span> the <span class="noun">Roman</span><br>
            <span class="noun">race</span>.
        </p>
        <p id="english3">
            <strong>Lines 34-45</strong><br>
            Scarcely out of sight of the land of Sicily, (the Trojans) were<br>
            happily sailing into the high sea and churning up the foam of<br>
            the salt sea with their bronze (prows) when Juno, retaining<br>
            the everlasting wound beneath her breast, (said) these<br>
            (words) within herself: To think that I, defeated, should give<br>
            up my purpose, and not be able to divert the king of the
            <br>Trojans from Italy! Of course, I am forbidden by the fates.<br>
            Was Pallas able to burn up the fleet of the Greeks and drown<br>
            (the Greeks) themselves in the sea because of one man's<br>
            offence and the madness of Ajax, son of Oileus? (She) herself,<br>
            hurling the swift fire of Jupiter from the clouds both scattered<br>
            the ships and upturned the seas with the winds, (while) him,<br>
            as he breathed forth flame from his pierced breast, she<br>
            snatched up in a whirlwind and impaled on a sharp rock.
        </p>
        <p id="english4">
            <strong>Lines 46-57</strong><br>
            But I, who (grandly) walk as queen of the gods, and both sister<br>
            and wife of Jupiter, have been waging wars for so many years<br>
            with one race. And does anyone worship the divine power<br>
            of Juno any more or in supplication will (anyone) place an<br>
            offering upon (her) altars?'<br>
            The goddess, turning over such (thoughts) with herself in her<br>
            inflamed heart, came to the land of the clouds, Aeolia, an<br>
            area teeming with raging south winds. Here, King Aeolus by<br>
            means of his power confines the struggling winds and<br>
            sounding storms within a huge cave and curbs them with<br>
            chains and a prison. They, indignant, roar around the prison<br>
            bars accompanied by the mighty murmur of the mountain;<br>
            Aeolus sits in the lofty citadel, holding the sceptre, soothes<br>
            their feelings and restrains their outbursts of anger.
        </p>
        <p id="english5">
            <strong>Lines 58-70</strong><br>
            If he did not do (this), they would doubtless carry hurriedly<br>
            away with them seas, lands and the high heaven and sweep<br>
            them through the breezes; but the all-powerful father, fearing<br>
            this, hid (them) in dark caverns, placed a mass of high<br>
            mountains on top, and gave them a king so that, under a fixed<br>
            contract, he might know both how to tighten and to relax and<br>
            give the reins when ordered. To him, then, Juno in<br>
            supplication used these words:<br>
            'Aeolus (for to you the father of the gods and king of men has<br>
            granted both to calm the waves and raise them with the<br>
            wind), a race hostile to me sails the Etruscan sea carrying Troy<br>
            and its defeated household gods to Italy: strike violence into<br>
            the winds, sink and destroy their ships, or drive them in<br>
            different directions and scatter the bodies in the ocean.'
        </p>
        <p id="english6">
            <strong>Lines 71-80</strong><br>
            I have twice seven Nymphs of outstanding body, of whom<br>
            she who (is) the most beautiful in form, Deiopea, I will join<br>
            (with you) in steadfast marriage and consecrate her as your<br>
            own, so that, in return for such services, she might spend all<br>
            her years with you and make you a parent witha beautiful<br>
            offspring.'<br>
            In answer to this Aeolus (said): 'O queen, (it is) your task to<br>
            search out what you desire; for me, it is right to carry out your<br>
            rders. You provide for me this modest kingdom, the sceptre<br>
            and Jupiter's (favour), you grant me to recline at the banquet<br>
            of the gods, and make (me) master of the clouds and storms.'
        </p>
        <p id="english7">
            <strong>Lines 81-91</strong><br>
            When these things had been said, reversing his spear, he<br>
            struck the hollow mountain on the side; and the winds, as if<br>
            they had formed an (army) column, rush wherever passage<br>
            had been given and blow through the lands with a whirlwind.<br>
            They fell upon the sea, and Eurus and Notus together and<br>
            Africus, abundant with storms, churn up everything from their<br>
            lowest depths, and roll huge waves towards the coasts. There<br>
            follows both a shout of men and the hissing of cables;<br>
            suddenly, the clouds snatch away both sky and daylight from<br>
            the eyes of the Trojans; black night falls upon the sea; the<br>
            heavens thundered, the upper air flashes with abundant fires,<br>
            and everything threatens instant death for the men.
        </p>
        <p id="english8">
            <strong>Lines 92-101</strong><br>
            Immediately, Aeneas's limbs were loosened with an icy terror;<br>
            he groaned and, stretching out both his palms towards the<br>
            stars, he repeated such (words) aloud: 'O thrice and four<br>
            times blessed (are those) to whom it befell to die before the<br>
            faces of their fathers beneath the lofty walls of Troy! O son of<br>
            Tydeus, bravest of the race of Greeks! To think that I was not<br>
            able to fall on the plains of Troy and pour out this life berneath<br>
            your right hand, where fierce Hector lies beneath the spear of<br>
            the descendant of Aeacus, where mighty Sarpedon (lies),<br>
            where the Simois, having seized so many shields of heroes,<br>
            rolls them, helmets and brave bodies beneath its waves.'
        </p>
        <p id="english9">
            <strong>Lines 102-112</strong><br>
            While he was shouting such (words), a storm, whistling with<br>
            the North wind, struck the sail full in front, and raised the<br>
            waves to the stars. The oars were broken, then the prow<br>
            turned away and offered the side to the waves; a sheer<br>
            mountain of water followed in a mass. Some hung on the top<br>
            of the wave, for others a yawning wave revealed the earth<br>
            among the waves, (while) the seething sea raged with the<br>
            sands. The South wind, having snatched three (ships) hurled<br>
            them onto hidden rocks (rocks in the middle of the waves<br>
            which the Italians call the Altars, a huge ridge on top of the<br>
            sea), three the East wind pushed from the high seas onto<br>
            shoals and sandbanks, wretched to behold, dashed them onto<br>
            the shallows and surrounded them with a mound of sand.
        </p>
        <p id="english10">
            <strong>Lines 113-123</strong><br>
            The huge sea, (falling) from its highest point, struck one<br>
            (ship) on the stern, which was carrying the Lycians and faithful<br>
            Orontes, before the very eyes (of Aeneas): the helmsman is<br>
            shaken off and as he bends forward is rolled headlong, but<br>
            the ship, a wave whirls round three times on the same spot,<br>
            driving it around, and a devouring whirlpool swallows it up in<br>
            the sea. Far apart (men) become visible swimming in the<br>
            immense whirlpool, (along with) the arms of men, planks, and<br>
            Trojan treasure throughout the waves. Now the storm<br>
            overcame lioneus' strong ship, now brave Achates',<br>
            and both (the ship) in which Abas was carried and the one in which<br>
            Aletes, advanced in years; when the joints of the sides had<br>
            been loosened all (the ships) take in the hostile water and<br>
            gape with cracks.
        </p>
    `;
    
    aeneidSection.innerHTML = aeneidSection.innerHTML.includes('There') ? aeneidLatin : aeneidEnglish;
}