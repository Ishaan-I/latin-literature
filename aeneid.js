function translateText() {
    const aeneidSection = document.getElementById('aeneid');
    const aeneidLatin = `
    <p id="latin1">
            <strong>Lines 12-22</strong><br>
            <span class="position" title="empharic positioning"><span class="translation-number">3</span>urbs</span> <span class="choice" title="important rich history"><span class="translation-number">2</span>antiqua</span> <span class="translation-number">1</span>fuit, (<span class="translation-number">4</span>Tyrii <span class="translation-number">6</span>tenuere <span class="context" title="Tyre"><span class="translation-number">5</span>coloni</span>),<br>
            <span class="translation-number">7</span>Karthago, <span class="translation-number">9</span>Italiam <span class="translation-number">8</span>contra <span class="translation-number">12</span>Tiberina<span class="translation-number">10</span>que <span class="translation-number">13</span>longe<br>
            <span class="translation-number">11</span>ostia, <span class="translation-number">14</span>dives <span class="translation-number">15</span>opum <span class="translation-number">18</span>studiis<span class="translation-number">16</span>que <span class="translation-number">17</span>asperrima <span class="translation-number">19</span>belli;<br>
            <span class="translation-number">20</span>quam <span class="translation-number">22</span>Iuno <span class="translation-number">23</span>fertur <span class="translation-number">27</span>terris <span class="translation-number">25</span>magis <span class="translation-number">26</span>omnibus <span class="translation-number">21</span>unam<br>
            <span class="translation-number">29</span>posthabita <span class="translation-number">24</span>coluisse <span class="translation-number">28</span>Samo; <span class="translation-number">1</span>hic <span class="translation-number">4</span>illius <span class="translation-number">3</span>arma,<br>
            <span class="translation-number">5</span>hic <span class="translation-number">6</span>currus <span class="translation-number">2</span>fuit; <span class="translation-number">8</span>hoc <span class="translation-number">10</span>regnum <span class="translation-number">3</span>dea <span class="translation-number">11</span>gentibus <span class="translation-number">9</span>esse,<br>
            <span class="translation-number">12</span>si <span class="translation-number">15</span>qua <span class="translation-number">13</span>fata <span class="translation-number">14</span>sinant, <span class="translation-number">1</span>iam <span class="translation-number">2</span>tum <span class="translation-number">5</span>tendit<span class="translation-number">4</span>que <span class="translation-number">7</span>fovet<span class="translation-number">6</span>que.<br>
            <span class="translation-number">4</span>progeniem <span class="translation-number">1</span>sed <span class="translation-number">2</span>enim <span class="translation-number">7</span>Troiano <span class="translation-number">6</span>a <span class="translation-number">8</span>sanguine <span class="translation-number">5</span>duci<br>
            <span class="translation-number">3</span>audierat, <span class="translation-number">11</span>Tyrias <span class="translation-number">13</span>olim <span class="translation-number">9</span>quae <span class="translation-number">10</span>verteret <span class="translation-number">12</span>arces;<br>
            <span class="translation-number">1</span>hinc <span class="translation-number">2</span>populum <span class="translation-number">5</span>late <span class="translation-number">4</span>regem <span class="translation-number">8</span>bello<span class="translation-number">6</span>que <span class="translation-number">7</span>superbum<br>
            <span class="translation-number">3</span>venturum <span class="translation-number">9</span>excidio <span class="translation-number">10</span>Libyae: <span class="translation-number">1</span>sic <span class="translation-number">3</span>volvere <span class="translation-number">2</span>Parcas.
        </p>
        <p id="latin2">
            <strong>Lines 23-33</strong><br>
            <span class="translation-number">3</span>Id <span class="translation-number">2</span><span class="sound" title="m assonance is solemn/sad">m</span>etuens, <span class="translation-number">6</span>veteris<span class="translation-number">4</span>que <span class="translation-number">5</span><span class="sound" title="m assonance is solemn/sad">m</span>e<span class="sound" title="m assonance is solemn/sad">m</span>or <span class="translation-number">1</span>Saturnia <span class="translation-number">7</span>belli,<br>
            <span class="translation-number">9</span>prima <span class="translation-number">8</span>quod <span class="translation-number">11</span>ad <span class="translation-number">12</span>Troiam <span class="translation-number">13</span>pro <span class="translation-number">14</span>caris <span class="translation-number">10</span>gesserat <span class="translation-number">15</span>Argis—<br>
            <span class="translation-number">7</span>necdum <span class="translation-number">1</span>etiam <span class="translation-number">2</span>causae <span class="translation-number">3</span>irarum <span class="translation-number">5</span>saevi<span class="translation-number">4</span>que <span class="translation-number">6</span>dolores<br>
            <span class="translation-number">8</span>exciderant <span class="translation-number">9</span>animo: <span class="translation-number">14</span>manet <span class="translation-number">16</span>alta <span class="translation-number">17</span>mente <span class="translation-number">15</span>repostum<br>
            <span class="translation-number">1</span>iudicium <span class="translation-number">2</span>Paridis <span class="translation-number">5</span>spretae<span class="translation-number">3</span>que <span class="translation-number">4</span>iniuria <span class="translation-number">6</span>formae,<br>
            <span class="translation-number">7</span>et <span class="translation-number">9</span>genus <span class="translation-number">8</span>invisum, <span class="translation-number">10</span>et <span class="translation-number">12</span>rapti <span class="translation-number">13</span>Ganymedis <span class="translation-number">11</span>honores.<br>
            <span class="translation-number">2</span>His <span class="translation-number">1</span>accensa <span class="translation-number">3</span>super, <span class="translation-number">6</span>iactatos <span class="translation-number">8</span>aequore <span class="translation-number">7</span>toto<br>
            <span class="translation-number">5</span>Troas, <span class="translation-number">9</span>reliquias <span class="translation-number">10</span>Danaum <span class="translation-number">11</span>atque <span class="translation-number">12</span>immitis <span class="translation-number">13</span>Achilli,<br>
            <span class="translation-number">4</span>arcebat <span class="translation-number">14</span>longe <span class="translation-number">15</span>Latio, <span class="translation-number">18</span>multos<span class="translation-number">16</span>que <span class="translation-number">17</span>per <span class="translation-number">19</span>annos<br>
            <span class="translation-number">20</span>errabant, <span class="translation-number">21</span>acti <span class="translation-number">22</span>fatis, <span class="translation-number">25</span>maria <span class="translation-number">24</span>omnia <span class="translation-number">23</span>circum.<br>
            <span class="translation-number">2</span>Tantae <span class="translation-number">3</span>molis <span class="translation-number">1</span>erat <span class="translation-number">5</span>Romanam <span class="translation-number">4</span>condere <span class="translation-number">6</span>gentem!
        </p>
        <p id="latin3">
            <strong>Lines 34-45</strong><br>
            <span class="translation-number">1</span>Vix <span class="translation-number">2</span>e <span class="translation-number">3</span>conspectu <span class="translation-number">5</span>Siculae <span class="translation-number">4</span>telluris <span class="translation-number">8</span>in <span class="translation-number">9</span>altum<br>
            <span class="translation-number">6</span>vela dabant <span class="translation-number">7</span>laeti, <span class="translation-number">10</span>et <span class="translation-number">12</span>spumas <span class="translation-number">13</span>salis <span class="translation-number">14</span>aere <span class="translation-number">11</span>ruebant,<br>
            <span class="translation-number">15</span>cum <span class="translation-number">16</span>Iuno, <span class="translation-number">18</span>aeternum <span class="translation-number">17</span>servans <span class="translation-number">20</span>sub <span class="translation-number">21</span>pectore <span class="translation-number">19</span>vulnus,<br>
            <span class="translation-number">22</span>haec <span class="translation-number">23</span>secum: '<span class="translation-number">2</span>Me<span class="translation-number">1</span>ne <span class="translation-number">5</span>incepto <span class="translation-number">4</span>desistere <span class="translation-number">3</span>victam,<br>
            <span class="translation-number">6</span>nec <span class="translation-number">7</span>posse <span class="translation-number">11</span>Italia <span class="translation-number">10</span>Teucrorum <span class="translation-number">8</span>avertere <span class="translation-number">9</span>regem?<br>
            <span class="translation-number">1</span>Quippe <span class="translation-number">2</span>vetor <span class="translation-number">3</span>fatis. <span class="translation-number">2</span>Pallas<span class="translation-number">1</span>ne <span class="translation-number">4</span>exurere <span class="translation-number">5</span>classem<br>
            <span class="translation-number">6</span>Argivom <span class="translation-number">7</span>atque <span class="translation-number">9</span>ipsos <span class="translation-number">3</span>potuit <span class="translation-number">8</span>submergere <span class="translation-number">10</span>ponto,<br>
            <span class="translation-number">13</span>unius <span class="translation-number">11</span>ob <span class="translation-number">12</span>noxam <span class="translation-number">14</span>et <span class="translation-number">15</span>furias <span class="translation-number">16</span>Aiacis <span class="translation-number">17</span>Oilei?<br>
            <span class="translation-number">1</span>Ipsa, <span class="translation-number">5</span>Iovis <span class="translation-number">3</span>rapidum <span class="translation-number">2</span>iaculata <span class="translation-number">6</span>e <span class="translation-number">7</span>nubibus <span class="translation-number">4</span>ignem,<br>
            <span class="translation-number">9</span>disiecit<span class="translation-number">8</span>que <span class="translation-number">10</span>rates <span class="translation-number">12</span>evertit<span class="translation-number">11</span>que <span class="translation-number">13</span>aequora <span class="translation-number">14</span>ventis,<br>
            <span class="translation-number">1</span>illum <span class="translation-number">2</span>expirantem <span class="translation-number">4</span>transfixo <span class="translation-number">5</span>pectore <span class="translation-number">3</span>flammas<br>
            <span class="translation-number">11</span>turbine <span class="translation-number">6</span>corripuit <span class="translation-number">11</span>scopulo<span class="translation-number">8</span>que <span class="translation-number">9</span>infixit <span class="translation-number">10</span>acuto.
        </p>
        <p id="latin4">
            <strong>Lines 46-57</strong><br>
            <span class="translation-number">1</span>Ast <span class="translation-number">2</span>ego, <span class="translation-number">3</span>quae <span class="translation-number">6</span>divum <span class="translation-number">4</span>incedo <span class="translation-number">5</span>regina, <span class="translation-number">12</span>Iovis<span class="translation-number">7</span>que<br>
            <span class="translation-number">8</span>et <span class="translation-number">9</span>soror <span class="translation-number">10</span>et <span class="translation-number">11</span>coniunx, <span class="translation-number">18</span>una <span class="translation-number">17</span>cum <span class="translation-number">19</span>gente <span class="translation-number">15</span>tot <span class="translation-number">16</span>annos<br>
            <span class="translation-number">14</span>bella <span class="translation-number">13</span>gero! <span class="translation-number">20</span>Et <span class="translation-number">21</span>quisquam <span class="translation-number">23</span>numen <span class="translation-number">24</span>Iunonis <span class="translation-number">22</span>adoret<br>
            <span class="translation-number">25</span>praeterea, <span class="translation-number">26</span>aut <span class="translation-number">27</span>supplex <span class="translation-number">30</span>aris <span class="translation-number">28</span>imponet <span class="translation-number">29</span>honorem?'<br>
            <span class="translation-number">3</span>Talia <span class="translation-number">5</span>flammato <span class="translation-number">4</span>secum <span class="translation-number">1</span>dea <span class="translation-number">6</span>corde <span class="translation-number">2</span>volutans<br>
            <span class="translation-number">10</span>nimborum <span class="translation-number">8</span>in <span class="translation-number">9</span>patriam, <span class="translation-number">12</span>loca <span class="translation-number">13</span>feta <span class="translation-number">14</span>furentibus <span class="translation-number">15</span>Austris,<br>
            <span class="translation-number">11</span>Aeoliam <span class="translation-number">7</span>venit. <span class="translation-number">1</span>Hic <span class="translation-number">11</span>vasto <span class="translation-number">2</span>rex <span class="translation-number">3</span>Aeolus <span class="translation-number">12</span>antro<br>
            <span class="translation-number">6</span>luctantes <span class="translation-number">7</span>ventos <span class="translation-number">10</span>tempestates<span class="translation-number">8</span>que <span class="translation-number">9</span>sonoras<br>
            <span class="translation-number">4</span>imperio <span class="translation-number">5</span>premit <span class="translation-number">13</span>ac <span class="translation-number">15</span>vinclis <span class="translation-number">16</span>et <span class="translation-number">17</span>carcere <span class="translation-number">14</span>frenat.<br>
            <span class="translation-number">1</span>Illi <span class="translation-number">2</span>indignantes <span class="translation-number">7</span>magno <span class="translation-number">6</span>cum <span class="translation-number">8</span>murmure <span class="translation-number">9</span>montis<br>
            <span class="translation-number">4</span>circum <span class="translation-number">5</span>claustra <span class="translation-number">3</span>fremunt; <span class="translation-number">3</span>celsa <span class="translation-number">2</span>sedet <span class="translation-number">1</span>Aeolus <span class="translation-number">4</span>arce<br>
            <span class="translation-number">6</span>sceptra <span class="translation-number">5</span>tenens, <span class="translation-number">8</span>mollit<span class="translation-number">(7)</span>que <span class="translation-number">9</span>animos <span class="translation-number">10</span>et <span class="translation-number">11</span>temperat <span class="translation-number">12</span>iras.
        </p>
        <p id="latin5">
            <strong>Lines 58-70</strong><br>
            <span class="translation-number">1</span>Ni <span class="translation-number">2</span>faciat, <span class="translation-number">7</span>maria <span class="translation-number">(8)</span>ac <span class="translation-number">9</span>terras <span class="translation-number">10</span>caelumque <span class="translation-number">11</span>profundum<br>
            <span class="translation-number">3</span>quippe <span class="translation-number">4</span>ferant <span class="translation-number">5</span>rapidi <span class="translation-number">6</span>secum <span class="translation-number">14</span>verrant<span class="translation-number">13</span>que <span class="translation-number">15</span>per <span class="translation-number">16</span>auras.<br>
            <span class="translation-number">1</span>Sed <span class="translation-number">3</span>pater <span class="translation-number">2</span>omnipotens <span class="translation-number">8</span>speluncis <span class="translation-number">6</span>abdidit <span class="translation-number">7</span>atris,<br>
            <span class="translation-number">5</span>hoc <span class="translation-number">4</span>metuens, <span class="translation-number">1</span>molem<span class="translation-number">(9)</span>que <span class="translation-number">12</span>et <span class="translation-number">14</span>montis <span class="translation-number">15</span>insuper <span class="translation-number">13</span>altos<br>
            <span class="translation-number">10</span>imposuit, <span class="translation-number">18</span>regem<span class="translation-number">16</span>que <span class="translation-number">17</span>dedit, <span class="translation-number">19</span>qui <span class="translation-number">21</span>foedere <span class="translation-number">20</span>certo<br>
            <span class="translation-number">23</span>et <span class="translation-number">24</span>premere <span class="translation-number">25</span>et <span class="translation-number">27</span>laxas <span class="translation-number">22</span>sciret <span class="translation-number">26</span>dare <span class="translation-number">29</span>iussus <span class="translation-number">28</span>habenas.<br>
            <span class="translation-number">1</span>Ad <span class="translation-number">2</span>quem <span class="translation-number">3</span>tum <span class="translation-number">4</span>Iuno <span class="translation-number">5</span>supplex <span class="translation-number">7</span>his <span class="translation-number">8</span>vocibus <span class="translation-number">6</span>usa est:<br>
            '<span class="translation-number">1</span>Aeole, (<span class="translation-number">2</span>namque <span class="translation-number">3</span>tibi <span class="translation-number">5</span>divum <span class="translation-number">4</span>pater <span class="translation-number">6</span>atque <span class="translation-number">8</span>hominum <span class="translation-number">7</span>rex<br>
            <span class="translation-number">10</span>et <span class="translation-number">11</span>mulcere <span class="translation-number">9</span>dedit <span class="translation-number">12</span>fluctus <span class="translation-number">13</span>et <span class="translation-number">14</span>tollere <span class="translation-number">15</span>vento),<br>
            <span class="translation-number">16</span>gens <span class="translation-number">17</span>inimica <span class="translation-number">18</span>mihi <span class="translation-number">20</span>Tyrrhenum <span class="translation-number">19</span>navigat <span class="translation-number">21</span>aequor,<br>
            <span class="translation-number">23</span>Ilium <span class="translation-number">27</span>in <span class="translation-number">28</span>Italiam <span class="translation-number">22</span>portans <span class="translation-number">25</span>victos<span class="translation-number">14</span>que <span class="translation-number">26</span>Penates:<br>
            <span class="translation-number">1</span>incute <span class="translation-number">2</span>vim <span class="translation-number">3</span>ventis <span class="translation-number">6</span>submersas<span class="translation-number">4</span>que <span class="translation-number">5</span>obrue <span class="translation-number">7</span>puppes,<br>
            <span class="translation-number">8</span>aut <span class="translation-number">9</span>age <span class="translation-number">10</span>diversos <span class="translation-number">11</span>et <span class="translation-number">12</span>disiice <span class="translation-number">13</span>corpora <span class="translation-number">14</span>ponto.
        </p>
        <p id="latin6">
            <strong>Lines 71-80</strong><br>
            <span class="translation-number">1</span>Sunt <span class="translation-number">2</span>mihi <span class="translation-number">3</span>bis <span class="translation-number">4</span>septem <span class="translation-number">6</span>praestanti <span class="translation-number">7</span>corpore <span class="translation-number">5</span>Nymphae,<br>
            <span class="translation-number">8</span>quarum <span class="translation-number">9</span>quae <span class="translation-number">13</span>forma <span class="translation-number">10</span>pulcherrima <span class="translation-number">12</span>Deiopea,<br>
            <span class="translation-number">15</span>conubio <span class="translation-number">13</span>iungam <span class="translation-number">14</span>stabili <span class="translation-number">18</span>propriam<span class="translation-number">16</span>que <span class="translation-number">17</span>dicabo,<br>
            <span class="translation-number">23</span>omnis <span class="translation-number">27</span>ut <span class="translation-number">26</span>tecum <span class="translation-number">22</span>meritis <span class="translation-number">20</span>pro <span class="translation-number">21</span>talibus <span class="translation-number">25</span>annos<br>
            <span class="translation-number">23</span>exigat, <span class="translation-number">27</span>et <span class="translation-number">31</span>pulchra <span class="translation-number">28</span>faciat <span class="translation-number">29</span>te <span class="translation-number">32</span>prole <span class="translation-number">30</span>parentem.'<br>
            <span class="translation-number">3</span>Aeolus <span class="translation-number">2</span>haec <span class="translation-number">1</span>contra: '<span class="translation-number">6</span>Tuus, <span class="translation-number">1</span>O <span class="translation-number">2</span>regina, <span class="translation-number">6</span>quid <span class="translation-number">7</span>optes<br>
            <span class="translation-number">5</span>explorare <span class="translation-number">4</span>labor; <span class="translation-number">1</span>mihi <span class="translation-number">5</span>iussa <span class="translation-number">4</span>capessere <span class="translation-number">3</span>fas <span class="translation-number">2</span>est.<br>
            <span class="translation-number">1</span>Tu <span class="translation-number">3</span>mihi, <span class="translation-number">4</span>quodcumque <span class="translation-number">5</span>hoc <span class="translation-number">6</span>regni, <span class="translation-number">(7)</span>tu <span class="translation-number">8</span>sceptra <span class="translation-number">10</span>Iovem<span class="translation-number">9</span>que<br>
            <span class="translation-number">2</span>concilias, <span class="translation-number">11</span>tu <span class="translation-number">12</span>das <span class="translation-number">14</span>epulis <span class="translation-number">13</span>accumbere <span class="translation-number">15</span>divum,<br>
            <span class="translation-number">19</span>nimborum<span class="translation-number">16</span>que <span class="translation-number">17</span>facis <span class="translation-number">21</span>tempestatum<span class="translation-number">20</span>que <span class="translation-number">18</span>potentem.'
        </p>
        <p id="latin7">
            <strong>Lines 81-91</strong><br>
            <span class="translation-number">2</span>Haec <span class="translation-number">1</span>ubi <span class="translation-number">3</span>dicta, <span class="translation-number">7</span>cavum <span class="translation-number">4</span>conversa <span class="translation-number">5</span>cuspide <span class="translation-number">8</span>montem<br>
            <span class="translation-number">6</span>impulit <span class="translation-number">9</span>in <span class="translation-number">10</span>latus: <span class="translation-number">1</span>ac <span class="translation-number">2</span>venti, <span class="translation-number">3</span>velut <span class="translation-number">5</span>agmine <span class="translation-number">4</span>facto,<br>
            <span class="translation-number">7</span>qua <span class="translation-number">9</span>data <span class="translation-number">8</span>porta, <span class="translation-number">6</span>ruunt <span class="translation-number">10</span>et <span class="translation-number">12</span>terras <span class="translation-number">13</span>turbine <span class="translation-number">11</span>perflant.<br>
            <span class="translation-number">1</span>Incubuere <span class="translation-number">2</span>mari, <span class="translation-number">13</span>totum<span class="translation-number">3</span>que <span class="translation-number">14</span>a <span class="translation-number">16</span>sedibus <span class="translation-number">13</span>imis<br>
            <span class="translation-number">7</span>una <span class="translation-number">4</span>Eurus<span class="translation-number">( )</span>que <span class="translation-number">6</span>Notus<span class="translation-number">5</span>que <span class="translation-number">12</span>ruunt <span class="translation-number">10</span>creber<span class="translation-number">8</span>que <span class="translation-number">11</span>procellis<br>
            <span class="translation-number">8</span>Africus, <span class="translation-number">17</span>et <span class="translation-number">19</span>vastos <span class="translation-number">18</span>volvunt <span class="translation-number">21</span>ad <span class="translation-number">22</span>litora <span class="translation-number">20</span>fluctus.<br>
            <span class="translation-number">1</span>Insequitur <span class="translation-number">3</span>clamor<span class="translation-number">2</span>que <span class="translation-number">4</span>virum <span class="translation-number">6</span>stridor<span class="translation-number">5</span>que <span class="translation-number">7</span>rudentum.<br>
            <span class="translation-number">3</span>eripiunt <span class="translation-number">1</span>subito <span class="translation-number">2</span>nubes <span class="translation-number">5</span>caelum<span class="translation-number">4</span>que <span class="translation-number">7</span>diem<span class="translation-number">6</span>que<br>
            <span class="translation-number">10</span>Teucrorum <span class="translation-number">8</span>ex <span class="translation-number">9</span>oculis; <span class="translation-number">2</span>ponto <span class="translation-number">4</span>nox <span class="translation-number">3</span>incubat <span class="translation-number">1</span>atra.<br>
            <span class="translation-number">2</span>Iutonuere <span class="translation-number">1</span>poli, <span class="translation-number">( )</span>et <span class="translation-number">5</span>crebris <span class="translation-number">4</span>micat <span class="translation-number">6</span>ignibus <span class="translation-number">3</span>aether,<br>
            <span class="translation-number">10</span>praesentem<span class="translation-number">7</span>que <span class="translation-number">12</span>viris <span class="translation-number">9</span>intentant <span class="translation-number">8</span>omnia <span class="translation-number">11</span>mortem.
        </p>
        <p id="latin8">
            <strong>Lines 92-101</strong><br>
            <span class="translation-number">1</span>extemplo <span class="translation-number">3</span>Aeneae <span class="translation-number">4</span>solvuntur <span class="translation-number">5</span>frigore <span class="translation-number">2</span>membra:<br>
            <span class="translation-number">1</span>ingemit, <span class="translation-number">2</span>et <span class="translation-number">4</span>duplicis <span class="translation-number">3</span>tendens <span class="translation-number">6</span>ad <span class="translation-number">7</span>sidera <span class="translation-number">5</span>palmas<br>
            <span class="translation-number">9</span>talia <span class="translation-number">10</span>voce <span class="translation-number">8</span>refert: '<span class="translation-number">1</span>o <span class="translation-number">2</span>ter<span class="translation-number">( )</span>que <span class="translation-number">4</span>quater<span class="translation-number">3</span>que <span class="translation-number">5</span>beati,<br>
            <span class="translation-number">6</span>quis <span class="translation-number">9</span>ante <span class="translation-number">10</span>ora <span class="translation-number">11</span>patrum <span class="translation-number">15</span>Troiae <span class="translation-number">12</span>sub <span class="translation-number">14</span>moenibus <span class="translation-number">13</span>altis<br>
            <span class="translation-number">7</span>contigit <span class="translation-number">8</span>oppetere! <span class="translation-number">1</span>o <span class="translation-number">5</span>Danaum <span class="translation-number">3</span>fortissime <span class="translation-number">4</span>gentis<br>
            <span class="translation-number">2</span>Tydide! <span class="translation-number">2</span>me<span class="translation-number">1</span>ne <span class="translation-number">6</span>Iliacis <span class="translation-number">5</span>occumbere <span class="translation-number">7</span>campis<br>
            <span class="translation-number">3</span>non <span class="translation-number">4</span>potuisse, <span class="translation-number">12</span>tua<span class="translation-number">8</span>que <span class="translation-number">11</span>animam <span class="translation-number">10</span>hanc <span class="translation-number">9</span>effundere <span class="translation-number">13</span>dextra,<br>
            <span class="translation-number">15</span>saevus <span class="translation-number">14</span>ubi <span class="translation-number">19</span>Aeacidae <span class="translation-number">18</span>telo <span class="translation-number">17</span>iacet <span class="translation-number">16</span>Hector, <span class="translation-number">20</span>ubi <span class="translation-number">21</span>ingens<br>
            <span class="translation-number">22</span>Sarpedon, <span class="translation-number">23</span>ubi <span class="translation-number">26</span>tot <span class="translation-number">24</span>Simois <span class="translation-number">25</span>correpta <span class="translation-number">34</span>sub <span class="translation-number">35</span>undis<br>
            <span class="translation-number">27</span>scuta <span class="translation-number">28</span>virum <span class="translation-number">30</span>galeas<span class="translation-number">( )</span>que <span class="translation-number">31</span>et <span class="translation-number">32</span>fortia <span class="translation-number">33</span>corpora <span class="translation-number">29</span>volvit?'
        </p>
        <p id="latin9">
            <strong>Lines 102-112</strong><br>
            <span class="translation-number">2</span>talia <span class="translation-number">1</span>iactanti <span class="translation-number">4</span>stridens <span class="translation-number">5</span>Aquilone <span class="translation-number">3</span>procella<br>
            <span class="translation-number">7</span>velum <span class="translation-number">8</span>adversa <span class="translation-number">6</span>ferit, <span class="translation-number">11</span>fluctus<span class="translation-number">9</span>que <span class="translation-number">12</span>ad <span class="translation-number">13</span>sidera <span class="translation-number">10</span>tollit.<br>
            <span class="translation-number">2</span>franguntur <span class="translation-number">1</span>remi; <span class="translation-number">3</span>tum <span class="translation-number">4</span>prora <span class="translation-number">5</span>avertit <span class="translation-number">6</span>et <span class="translation-number">9</span>undis<br>
            <span class="translation-number">7</span>dat <span class="translation-number">8</span>latus; <span class="translation-number">13</span>insequitur <span class="translation-number">14</span>cumulo <span class="translation-number">10</span>praeruptus <span class="translation-number">12</span>aquae <span class="translation-number">11</span>mons.<br>
            <span class="translation-number">1</span>hi <span class="translation-number">4</span>summo <span class="translation-number">3</span>in <span class="translation-number">5</span>flucta <span class="translation-number">2</span>pendent; <span class="translation-number">1</span>his <span class="translation-number">3</span>unda <span class="translation-number">2</span>dehiscens<br>
            <span class="translation-number">5</span>terram <span class="translation-number">6</span>inter <span class="translation-number">7</span>fluctus <span class="translation-number">4</span>aperit; <span class="translation-number">9</span>furit <span class="translation-number">8</span>aestus <span class="translation-number">10</span>harenis.<br>
            <span class="translation-number">3</span>tris <span class="translation-number">1</span>Notus <span class="translation-number">2</span>abreptas <span class="translation-number">5</span>in <span class="translation-number">7</span>saxa <span class="translation-number">6</span>latentia <span class="translation-number">4</span>torquet—-<br>
            (<span class="translation-number">8</span>saxa <span class="translation-number">14</span>vocant <span class="translation-number">13</span>Itali <span class="translation-number">10</span>mediis <span class="translation-number">12</span>quae <span class="translation-number">9</span>in <span class="translation-number">11</span>fluctibus <span class="translation-number">15</span>Aras—,<br>
            <span class="translation-number">17</span>dorsum <span class="translation-number">16</span>immane <span class="translation-number">19</span>mari <span class="translation-number">18</span>summo), <span class="translation-number">20</span>tris <span class="translation-number">21</span>Eurus <span class="translation-number">23</span>ab <span class="translation-number">24</span>alto<br>
            <span class="translation-number">25</span>in <span class="translation-number">26</span>brevia <span class="translation-number">27</span>et <span class="translation-number">28</span>syrtes <span class="translation-number">22</span>urguet, <span class="translation-number">29</span>miserabile <span class="translation-number">30</span>visu,<br>
            <span class="translation-number">31</span>inliditque <span class="translation-number">32</span>vadis <span class="translation-number">33</span>atque <span class="translation-number">35</span>aggere <span class="translation-number">24</span>cingit <span class="translation-number">36</span>harenae.
        </p>
        <p id="latin10">
            <strong>Lines 113-123</strong><br>
            <span class="translation-number">6</span>unam, <span class="translation-number">9</span>quae <span class="translation-number">11</span>Lycios <span class="translation-number">13</span>fidum<span class="translation-number">12</span>que <span class="translation-number">10</span>vehebat <span class="translation-number">14</span>Oronten,<br>
            <span class="translation-number">17</span>ipsius <span class="translation-number">15</span>ante <span class="translation-number">16</span>oculos <span class="translation-number">1</span>ingens <span class="translation-number">3</span>a <span class="translation-number">4</span>vertice <span class="translation-number">2</span>pontus<br>
            <span class="translation-number">7</span>in <span class="translation-number">8</span>puppim <span class="translation-number">5</span>ferit: <span class="translation-number">2</span>excutitur <span class="translation-number">4</span>pronus<span class="translation-number">3</span>que <span class="translation-number">1</span>magister<br>
            <span class="translation-number">5</span>volvitur <span class="translation-number">6</span>in <span class="translation-number">7</span>caput, <span class="translation-number">8</span>ast <span class="translation-number">9</span>illam <span class="translation-number">12</span>ter <span class="translation-number">10</span>fluctus <span class="translation-number">13</span>ibidem<br>
            <span class="translation-number">17</span>torquet <span class="translation-number">15</span>agens <span class="translation-number">15</span>circum, <span class="translation-number">16</span>et <span class="translation-number">17</span>rapidus <span class="translation-number">19</span>vorat <span class="translation-number">20</span>aequore <span class="translation-number">18</span>vertex.<br>
            <span class="translation-number">2</span>apparent <span class="translation-number">1</span>rari <span class="translation-number">3</span>nantes <span class="translation-number">4</span>in <span class="translation-number">6</span>gurgite <span class="translation-number">5</span>vasto,<br>
            <span class="translation-number">7</span>arma <span class="translation-number">8</span>virum <span class="translation-number">9</span>tabulaeque, <span class="translation-number">10</span>et <span class="translation-number">11</span>Troia <span class="translation-number">12</span>gaza <span class="translation-number">13</span>per <span class="translation-number">14</span>undas.<br>
            <span class="translation-number">1</span>iam <span class="translation-number">4</span>validam <span class="translation-number">6</span>Ilionei <span class="translation-number">5</span>navem, <span class="translation-number">7</span>iam <span class="translation-number">8</span>fortis <span class="translation-number">9</span>Achatae,<br>
            <span class="translation-number">10</span>et <span class="translation-number">11</span>qua <span class="translation-number">13</span>vectus <span class="translation-number">12</span>Abas, <span class="translation-number">14</span>et <span class="translation-number">15</span>qua <span class="translation-number">17</span>grandaevus <span class="translation-number">16</span>Aletes,<br>
            <span class="translation-number">3</span>vicit <span class="translation-number">2</span>hiems; <span class="translation-number">3</span>laxis <span class="translation-number">2</span>laterum <span class="translation-number">1</span>compagibus <span class="translation-number">4</span>omnes<br>
            <span class="translation-number">5</span>accipiunt <span class="translation-number">6</span>inimicum <span class="translation-number">7</span>imbrem <span class="translation-number">10</span>rimis<span class="translation-number">8</span>que <span class="translation-number">9</span>fatiscunt.
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


function toggleGuidedTranslation() {
    const latinTextDiv = document.getElementById("aeneid");
    latinTextDiv.classList.toggle("guided-on");
}
