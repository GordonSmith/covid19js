var covid19=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(1);const n=JSON.parse(r(2).covid19js_decompress());for(;n[0]>0;)n.unshift(n[0]-1);const o=e=>{let t=JSON.parse(e.covid19js_decompress()).map(e=>e.map(e=>null===e?null:""===e?"":n[e]));return{header:t.shift(),data:t}},a={confirmed:o(r(3)),recovered:o(r(4)),deaths:o(r(5))};class s extends Array{dates(){return this.__keys("date")}__keys(e){const t=this.map(t=>t[e]);return t.filter((e,r)=>t.indexOf(e)===r).sort()}__map(e,t,r){const n=[];for(var o=0;o<e.length;o++)n.push(r(this.filter(r=>r[t]===e[o]),e[o]));return n}latest(){const e=this.dates(),t=e.length?e[e.length-1]:null;return this.filter(e=>e.date===t)}mapDates(e){return this.__map(this.dates(),"date",e)}groupByDate(){return this.mapDates(e=>e.totals())}countryRegions(){return this.__keys("country_region")}mapCountryRegions(e){return this.__map(this.countryRegions(),"country_region",e)}groupByCountryRegion(){if(this.dates().length>1)throw new Error("developer: filter data to a single date before calling groupByCountryRegion.");return this.mapCountryRegions(e=>e.totals())}totals(){if(this.dates().length>1)throw new Error("developer: filter data to a single date before calling totals.");const e={date:null,country_region:null,province_state:null,lat:null,lng:null,confirmed:0,deaths:0,recovered:0,new:{confirmed:0,deaths:0,recovered:0}},t=this.length;for(var r=0;r<t;r++){let t=this[r],n=0;0===r?(t.province_state&&(e.province_state=t.province_state),e.country_region=t.country_region,e.lat=t.lat,e.lng=t.lng,e.date=t.date):(e.province_state!==t.province_state&&delete e.province_state,e.country_region!==t.country_region&&(n=-1,delete e.country_region,delete e.lat,delete e.lng),n>=0&&t.confirmed>n&&(e.lat=t.lat,e.lng=t.lng,n=t.confirmed)),e.deaths+=t.deaths,e.confirmed+=t.confirmed,e.recovered+=t.recovered,e.new.deaths+=t.new.deaths,e.new.confirmed+=t.new.confirmed,e.new.recovered+=t.new.recovered}return null===e.province_state&&delete e.province_state,e}on(e){return this.filter(t=>t.date===e)}}const i=function(e){const t=e.split("/").map(e=>parseInt(e)),r=new Date;return r.setYear(t[2]+2e3),r.setMonth(t[0]-1),r.setDate(t[1]),r},c=function(e,t){const r=e.header;let n=r.length,o=[];return e.data.forEach(e=>{let a=e[0],s=e[1],c=e[2],u=e[3],l=0;for(let d=4;d<n;d++){let n={date:i(r[d]).toISOString().substring(0,10),country_region:s,province_state:a,lat:c,lng:u,deaths:0,confirmed:0,recovered:0,new:{deaths:0,confirmed:0,recovered:0}};null===a&&delete n.province_state,n[t]=e[d],n.new[t]=e[d]-l,l=e[d],o.push(n)}}),o};const u=function(){const e={},t=e=>`${e.province_state}|${e.country_region}|${e.date}`;var r=c(a.confirmed,"confirmed");return r.forEach(r=>e[t(r)]=r),c(a.deaths,"deaths").forEach(n=>{e[t(n)]||(e[t(n)]=n,r.push(n)),e[t(n)].deaths=n.deaths,e[t(n)].new.deaths=n.new.deaths}),c(a.recovered,"recovered").forEach(n=>{e[t(n)]||(e[t(n)]=n,r.push(n)),e[t(n)].recovered=n.recovered,e[t(n)].new.recovered=n.new.recovered}),(r=r.filter(e=>e.confirmed||e.recovered||e.deaths)).sort((e,t)=>e.date===t.date?e.country_region===t.country_region?(e.province_state||"")<(t.province_state||"")?-1:1:(e.country_region||"")<(t.country_region||"")?-1:1:e.date<t.date?-1:1),r}(),l={last_updated:u[u.length-1].date,data:()=>{let e=new s;return JSON.parse(JSON.stringify(u)).forEach(t=>e.push(t)),e}};e.exports=l},function(e,t){String.prototype.covid19js_decompress=function(){"use strict";var e,t,r,n,o=[],a=[],s=this,i="",c=256;for(e=0;e<256;e+=1)a[e]=String.fromCharCode(e);if(s&&"string"==typeof s){for(e=0;e<s.length;e+=1)o.push(s[e].charCodeAt(0));s=o,o=null}for(r=t=String.fromCharCode(s[0]),e=1;e<s.length;e+=1){if(a[n=s[e]])i=a[n];else{if(n!==c)return null;i=t+t.charAt(0)}r+=i,a[c++]=t+i.charAt(0),t=i}return r}},function(e,t){e.exports='[9ā9,"Province/State"ĄCountry/RegionĔ"LđĤLĢgĤ1/22Į0ĬĮ3ıĳ24ĶĄĭ25ĺ"ļ6Ŀļ7ŃĮ8ņ29ņ30ŌļĲĄİŐĤİŖő"İĵ2ŘİĹŜŕ/ľŠŒ/łŤř/ŅŨİňŬ/ŋů1ŎŲŔť1ŗš1śŝ/1şŽ1ţƁŧƁūƁŮƁűŽŜĿŖŶũįƎĴƓĸƕƃš2ƅƙƇƙƉƙƋĤĵƐśĿĵżƢ/ƀƩƘĄĵƛƮŪĿAnhuiĤMaĊland ChĊaĔ31.8Ľ7,117.į64ĄBeijĊī,40.1Ǌǔǎ6.4ſ2ĕhĪqǚǆǞ057Ǩųǐ87ǔ"FuǙƾĔƚ.078ăǎǐ9ǶǸGƾsuǆǤ06ǎǍ03ǉ343ĄGuƾgdĪǾȕȗǏǍŻǥĸȉȜngxƸ,2ȕǊȇȓ8.Ȃ81ȚƷzǪȍȯǤȸ5ǢȐǉǷ8ĄHƻnǽǍ9ǟ95Ȅ0ɎǷ5ș"HebǗǆȵ042ɇǎ4.5ſăɘǗlĪǼȫĔ4ǵ6ǳ2ǐ7ȑ5Ɉeɋģ,3ȱǊ0ǳȦȑǸHuɛȮō.9756ȥ2Ǒ7ȁȓɾǌȅ8ɢǠȸǍ5ŊȄɖȘǍ6ɆǍȃ7ȹŜ96ăȰ38șƚǝʱȃ9șǇɖʏɾʶǔ3ɲ0ɇʯ5Ǳǜǰ9ǨɠȔșȘ500ɈĘɌɴ.ȑɟȥǈʓʙĄInner MĪoliǅǜɤɓ3ɸǎȕ944ɇ"J˦ȫȌǆʑʌȒǎɎ4˃Ą˴ȝȭǾǐʄȥ5ȶįȹ˳i˥ɼȘ˔6ȑǍǿ1ˇɗL˦ĢǭǜǈŊʎ̔ʑ6ˀɸ"Nǚȭ˧3ǐƚˇȓǤ16˿"Qǚhƻǆ̈ɕǨɐʋɐʏ"S̷ƾ̃ɽ̖̈ȤųȵǶ0̋͂ƾȟɮɽǤȗɴȥȵɧ˲͏ȫ̷ʉ̞ʁ̔ǈ˰9̷͎n̫ͅɥ7ͫʐǑˇǨ́icƶɌʊȑʨȓʑʨȔĄT˵Ǚɼ3Ɏōɂȥǐ3Ȱͽiɛtǆǈʬ͖ʙȀˇǸXĊɭǛǦǟŸă8̈ĸ͍ĄYĘɻǾɤʌɃ͢ǶĄZheΘǾɎǠΈ̔ǯʼͽ͝ƽƿĤJapɌ́ėth Kore˧"Tƻw˒ȕǌ"Kǚǁėęy, WAĤUSɯ̅ȐǨ-Ÿʑɾ2̋ĖokϕĘtϘ ILɯ˘̫ǌ-Ƕ˔ʌ̀ƺcaȾįǟ̒ʗȦ̳HĪυȠȯϦȥɤͰSǚξχēǍǑʰșųȱɾɗVietɋmĤFrƾČĤNeοlǾ͘Ѓ,8Ў̥ƺƽys˦Ǿɥ̥ͭTχĢtoϙONĤCƾad˧̲̐δ-7΃ʰͰBritisτĖlumbиǜɎɡ͖ϤȰǟŜϑĩs ƴgelesϙCϜɽ˩ʞϣǎȵĸ̫ĄЩw SςτWaѯsĤAusĚ҅џ-ɾǉ6˚Ƃ͟ʶĄНcрє˧ҏǵŻʏſΧ6ǇĄQueɺsκdĔ-ɡȀ̱ʗɖǥĕaѝodџǎɥˬɟʋұĄSє ĦnkϊG˟mƾyУƼ͐ϝnѕeǀAХb EmiХĒ҇ĄPǃ˥ppĊѰĤ˜ҹϊĩƿĢтфǜ˹бăϸ̞˾ɗIĐlӍĄUKҭɗRҊзϊSwӔɺĤSοĊҭǸҁuσѫҊҌ˥Ҝȗʋɡˬʯ˔ˎϑSƾ ǖӒрѲѴʾͪ̓ѤǞȇɶǕѮĠќĔˍȖɾĄƺҹsӮϚIɯȕȁҤϸ˽͍ͰD˦mĢǀĆĊČsѪcrƷse јipĤOσ˟ӟ˫ǥȘʗ΂˔ʯӁԡՆğoϭϗԦ˸ȶƂϷȅЂȒ́ԡƴрӒс TXαȧǦ,-ȇǥʶ̀Egyp΍˛Хɼ"OӋ̷ϙNE (Фom ՆҶՉ ՋċѰs)ϴǑɂɸց̈ʌ5˲TХĉѱǁA֛֕֗֙Ոƿ֞є֠Վ֣ɽѺǲȹѤǈʶāĄִ֚Շ֝֟Սӟĥackҫϙջֳćֵ׉ָ׋ֽ֡Ŋ.ʯŊրւȑȗĄLɚƾĢǆȱɂǌ՞8ɲɗʆҷldtժϯլ˅ȶ˾րŸȱʬ̥ԠՐҶɺр׷ϰѳɝǥǷհϨמɂͰIХqӑaՎig˞ǀĩϾіĢו֘׈֜יֺ׌ֽ֎Ӌ֍AfgͦїĐ֍BahХԍȿȀɴɸԴ̳Kuώѕսɸɰȶ̥AlѭқЭȀʻЕ̲ʫĕćđџ˾ǟʝǑӁwѕz˟ҫɯɀǠǨѺعĄ҉ҋىǜǐɦɲǍɤ˃Ρ"IsХѮĤPakد͵Ǟ̫ɖ,ʬמ˾̋ѓaz̍ҭſǑ˫րɦԙٽ"ӉχĠъϦƂǔ̐˫ʬȚψeЧɽɎȁɠȯǈǡɗNχԒϽӔ̛ъΏˀʏ؎ɕڥχώӼ̣؋١ǥҒɨR֘ƾٓ֩ȘǨĸʋ̒˲DɺӋrkԳǤƚ΂,ɎˍǠĄEҋګԳȵɑٽĽҰʾѽПήrҫӟʞǟΈʏΟͤɗԠnˡaֺoԾʋɠǢʑ˾ȂԯƽՑۤϐɓɇ˓ɐפ"ˢęψ҅ϙQCɯ̈ےϷ7ȕʎ܏˛ČٝپҢՁ̖ظˀץѕʹӒ˧˃Ђ˯ȯɿŻԷeȭc۱ܤգ׼ϤʁҼɡ۟ѿZωܕ-ǝʋˎҠǷǉׯѽؘ˟џڟǊа˔ʍɗWѰĒrۭ٥ԕҎǇʋˍˬƂґǰ֋ѮӐ,ҳǧǔюϺϨץuxeҷurΙɎɁș̰ŊϼĢ׏ܫ̐܏ԶǐǦʤҥđۯǾ̈˫˱ݜǈγɨSnoǪӛј؇ϙϛɯɞԶׂԵɨEcȜȟrڇȖŸրȂǟʰǸAٛrbƻjɌܹſҤكǱڙ"Cٛͳ Ğpʇ˥cɯݫǏˬ̈ɰɗӖmɺٓǯʬȹٔȔ݅"D֘ĊͲԡ޳޵ͲĔǠȶ˫܎Ǟٰ̱͖ӭ˞ԄҭǞȂҖ˭ԙܦąڧug҅ǆ΃Ăր٢׼"ƴޗХɯʑˍңЕʞۓϋؖةҎΚ˾׼ſ֩ʓѨđĉܠɀяگɤ̣δ܃оcܪΎȶͤ܎Γƚեuҹѫӗџ́ɺğߩ٬փǷ׽ɤ˾ĸښafշދ NH۲9ˀɇюڣ࠘ɘ̍lsbоߧhϙFϳȯȆ࠳ݟǊמ͍˲PƽČˠĖϮ؈ԧڟͤʏԫǉȔބԡƺĒչ؉ɽ٩߷ѤϦĽ؁ۯؖoĐࡁࡃ˓ɾǓ߭ߵōԟĢڽ࠮࡟ԜǱ࠵ϥʋʙ˲UӋіlƽтR܋ȶʍ׽ߓɶȐ׆ul࠭ࡐի GԧȱȔࡇɤ΂߷"҄Ֆȫ࢐ϖ׸ Oࢅǜ܌ɰ׽ѥŻܿ߰ݩ؅ǄԀȵݸׁң˔ӀޮӢДҏ̈ʤɦޜǈɂɗJχщ΁Ӷ͓ɥ̋ڦrfˤϬ࢑ࢢMѴɠǟɶ܎ނͣԷۯͲoο࠮AZתͮۓϤŸȧͤĄ҄kՔ࣐ϰN܊͆ࡘэޝʎ̓࢜݋ͳ݋˟࠮NY֤ϥޜϐ˯ɨUkص˞ގמяʽނ̲̀ԠĊ׶زr՛ѯmӼǏʋրɲԵɗO֌ѭࡶ࢕ȶǶӴձΞҤɘĘߨěϠЂĽɍɥˊѽڧۭۡT˟єҚӼѤڹפŻǞб̠ǹۯoՔٱۣĔȑǉˇࡖǤͤߺG΋Х࢏ݼࣈſܛ-ݾʹܜڜhĒnҋǗ̏ǐſېҼӠˤݛڌͤܣܙࠂ̋TĘїࠞĖ܅aϕҋॸ࣭׹ͩनݟŸ׃ࡊӠ҅݋Ӧࠓɐįࣱʮђosܟ ͐ ərٛgĈࢰǜˮƂȄ̅я͎ɫv߁ъ̰ɦǳΧɐ̥ǖࢮۭॼ࠯JɯԬێޜ˩ͬɘۯєѪমջսͫʞסݾЙեۭФЦїܪढǆɵǷदЁǦܣρԑτثєϾԀǞ˃ɐЋʋټĕۺ࣏ࢡ࣮VȎȀࠊࢉ̈ɓǸFڧԢɺǀ঻ռȯۑʬș֨ǉީࠪę࠮ލ٨ɏʜࣥ΃܏ЏƾĐ޲঎ॻৡ࡫Ǯȶڙϸॏǡࣩ࠺ՇԺভਉպӰ՞ࠕӴׯґঊ̦eѿYχৠࡑ֒ࣾ׺ʨܲю˩ࢌ"UɋؙؗӔӄo؝ġnތ࣓ɵɦׁŸߟǝ̋܄tগ߀ě࠮MDߪǟ׬ޜ̬ǝ؁uf࣍lਤ࢒࣒ߴמׁ̣ʨȀ֫ɨۇnঢࡏਖCO੊܏̮ܯনͼ́ќӛ׶ম੥੊ɑޛܯȏ࡯"Bƶذ̄ࣉڡ࠳ǥ࡮ҵ੅oשɽǉހһˍݢޮ҅बϰنɛऔܠǈɟࢨࣥ঵̖ĕˤ֘ўъͪɓ঴ͮܒޮ঎ਅRߍĔɔ˱ਛϐʡӠ˟Ⱦցɏޜ২ƂЏ˟ઞɯ˩̱ɸ؎ˎɑӁডٷٓȵ̒ȄɎʬɨнগĔ૆̖ɸुĸ˲ǂđ̷֙ম࣯̹̉ȒюβȂ̋ۇƽώψ࠮Pࡓܺ۸юݾथĄߊߧƽ঺ਖ֤֓Ǉހց̰ɐ̋FayПĒ࠮KਧԜȐࢌϸࠧ8੬Fɫy৯ਖ࢔ǆЎȲ߭Οō˲ƺє؟মIਘݫʾϣਜ޺ͰMidd҆ܨੇ࣓۶ʤϣੜɡ̦ࠥؖsϿࣼਧܹ̲4ࡖ܏Ҽ৐RҶՓyੇӰ˰̾࡯ցԿȑ̀࢝Ǫ࣬૳ৣ׺ʎख़˼ԝڊ࢜૽˞૦࣓Ώ੨વǑɰɨਢɫ৉־਌଺җْϾভѕӼΚ࠳נࣦӷԏ਄ॻۺਈਥֱ৊؏տޑ঩ͰG֌Պإ֡ǁՑїՔ͂՗୺Ǔȃࢩ̢̲̥Фɺޱț˵̪ড়ۏग़ȕŸ֫ࣚॕ૛ʶ࢈ڈټǸ૯g૱ࡶ੦ڞ֥Ϋ੪ড়஍ąćĉdஓ୎୸RԽ̝ܾ݅࠶؋଱ଘіӒqҧߒࠌǦ֧ोʁڡ߰ƽ߀щ୤ͩਗ਼؍˘ૐǕć૤଎୸ࡂǾૹΡϸٻَ׆ƻ࣌О״ࡶT֤Ľ଻Ȣʓɨצஶ࢒௛ط̒৵ȸݓୖPǄlࣟ࣡ɽʑȸ٫̞ࣥूĄڼאҫଶࣿબँࡼ۫ࡧрߨఉচًࠩюˮ۞"Edַշϙઑ˟ĐԳܐ଺਽Ȧ4ʶ૔̷ۢ݋ଚਖSࣰΈࠔ˄૞तހޮয়৻࣓̺଺ࡖࡻɦ৐ĖbӘমଐɽȱ߬ଇɥǓૡa֯࠮U௨׺ʫנࣥʑɓڎE௻ٶԺன؊ͤ୓ҾɰΉɘࡴћћ࠮Hஹ؎ࡲ׽Ǳǉ֫Ǹνאਔ࠮ࢤ੘ɾܮࡻɶࢨ˳e੒՜భ୸ৼكǷरѤȢ˖ϒ՜̷ѿমయ଑ਖ਼ǲ߭৘ʙɗK்૖౵ࢥࣔ؀৵ঁࢶோԸ˟୷࢒ࡷ̬ిࢉૉʫɗ௹˟ČహमȐԮࡣѦ৚ąӻՈ৒ପ੘̱Ƃޜߟˇ͚୴அuzௐॏǷ਽ЁȔܛϋࢎ଴౵ӿॗɑ৵̽˯ੁп੄˟ୂৰ਋Έܦ৶ɰ۸ǎǏաѷʣʤɢʫ̲ЋǎۂధۛͻˏݯҤǇǲˁ࡮ʏ˱Ŝۨ˰ࢌʎĸă֫٠ݜā஍୊݅ʿҤɲ˰Ǩɲ̒എǝбܖରܖȂʏ̲Ǡǌஐَُ०௴ѼેʔʤূଭȤʤϧپǷ̒പɑഎɶ̒]'},function(e,t){e.exports='[[10ă0,Ăă1ĆĄ2Ċă3č04Đ5Đ6Đ7Đ8Đ9čĂĝĉć1ČġďġĒġĔġĖġĘġĚġĜć2ąĲĠă2ģķĥķħķĩķīķĭķįķıĎĴĎĶ03ĹŌĻŌĽŌĿŌŁŌŃŌŅŌŇđŉđŋ4Ŏ4Ő4Œ4Ŕ4Ŗ4Ř4Ś49],āă5Ş5ŋ5Ŏ5ĥ,ıĔ3Ĝ6ą7ŉīŹ,ĳą23Ę29Ę34ąƒĚŭąŻƗ9ĉ66Ĕ73ď77Ĝ83ą8Ƃ,88Ĝƚą9ƑŽŵŽ6ČƏď98ƶƨŽ8ĘƹĚƹƭƬƽǃǆǅŽ9ƯǊǉǋǎǍǐ9ǌǒ0űų05Œŷč5Ŕ5īĒĸ,3Ė4ƛĚ8ƯĠ1ǫħƀĆ6įƚƈĢƈ2Ě2Żƈ7ǡƏǣ1ſ2ĖƠƐšǣƇǤȃ7Čƌſǩǣ8ĉ3ƾǣưȕſ9ȃǒȕĜƀĜƒƓă,ǦƓĞǦĉǦďǦĒȫȣ1ƕȯȣǢš6ǖć5ŘǛȷŚ5ƁŽǻ,ȸ,7ĩĞ1ōĆūĆƺǴĉ2ɊƦąȄǣƜȐȟǬȲǥǷȣǱȣƼŵĔŷĚŹĜŻĘǙĒǝĉǝďǝɡƩǟɧȋɁƟɴɡ7ĖȸɹɸɴɻɾɽʀɺʁɼʂɺȶăƩȷŋ6ʋģɁĊɋȇɁƤƧĽĠĳɉħȽĆƣĆ9ǡǘǴĔĸǡǯǹƊʌƈ6ƍɳ2ʝǷɎ8ʣȔƎƊ9ČƎďʹƈȖʻʾʽʟʼǽĖƎ˄șʼˆˉˈˋ˅ˈʇ06ŐȺʈŒƝ,ƊƈȣɃɉʞƈǡˆȣƗɫɷ,Ƶ˥ČʫɃƤďƥƪĖȔǓƯ˲Žĉǳ˶˵˸˴˺˷˻˹˼˼Ăģ1ıĳˏɕʊč˩ćɝȂǣČǺ7įɘȀɎ0ʬƐǙȣǤɁ3ĔˑČȋĔȑˬ9ĔƏŉƱḀ̆ĆɇǫʛǬƢĆ2̲̃Ǧ̲ʩĢˁ̭īōģōįƠĠƠ̾ƠĆƠıƑ̾ŧ͆Ɋɇ͍ƑĭƑ̀ů͈͌Ƴɇ̝͗Ĵ̝͂Ƈ͘2̆Ŝ˓̖Ş7ɎʏƋƈď̛ũɁɫĚ̑ƪŘ̬ʗ͑žĴɝ1ɳȯĥ̫̳ƊȀǶʸǢĸ˄̝ͪƍȓ˞ʸť˞ʣͭɏĜΑƈǛǹʸƇΖΔΗΛΚΝΙΟΘŹˏͻŴŋɵćǼĆǣΫɩ˛ƭ̲ʼαΊͭ5Ě6ĒͦƪĉǄț̪̲͑ĥ·1ƒɉĥ΍σǠωɉϊψϋώύϐͭϑόϒϕϔωΣǞΦŖ̱έǲǶǣȪƓȪɹ˨˨θČȏνː̬ĭɏ͆͂įχɂȀĭ̯˦1ϸˑǰĥ͹ϾįϿǰЀЃЂЅϹЄЇІЁЉЇΣȼΦŜȏĠ˙̀ʑͅŭ˥̢ƶŁħɇ̷͆ĩϴͻ;Ϭ̳ǸʦΕ˖Ƿʺǳɑǣ0ȒϬƦȃ̖ЯĚƦȝɘ3кмȌͺǿзȱлсфрцурˏȑǜŋɌć˭˘ĒžǴϡȐȣɩʔƲ̲ĠǝʞƊʮǻƍ̫ƦƐлɔɒͱƀĔǦȟǹїѫɂũȬƄȣɼūȟʝƖɞƓȏѺѾѽҀѼ҂ѻɞȨыŭ1ъǚэŔɟʏȝϩĥɛЉĳ˄ѩƇšČůɭɕʫƞηƪǛƚђыĂͅĂΧĂɅςϹıȯħ̳ģƋʗϒǹϮϸȂĩȂϮѴĢιҾ͵ӁοҲͻʮӄӇӃӉҾӈӋъȹэŚǄťȬ΍ǙĜɸĶεɉ̝̙ͩӝȬǊɭǩĖͦǺĂ6̫ӧˇӪŃӨŅӨŇƄŉƄĶƄĹƄĻƄĽӺĊƄĿƄŁƄŃƄŅƄӱɆ̖̓ԉӷОҨσӽԏԎӿϹԐԃȱԎӱʘҨ̳ӽǢԛӹϯԛӿ̍ԛ7ʇĂЏĊξĂǬƓȿϯţ˥ŜυǶɎ̱̓ɖɜɭԜȽďƜĉͦՀɳǩˬΊƾƭǵʟĖșǁƫĝč˕čŘŅԈԊԍаŁԔԬՙՙŃпԬՔաԪբՠգգԧԊǘĶǬĹǬďąĴ˛ĭќǰ˝ʘͩѠƱ·ȆδƗ̏ɩɣζąʩ˖ɝѴɳɵɄɃƞ֌֋֎֊֐֍֑֏֒֕ըҋԪ΁Ԭ՚ҏЖȪĘѴνƎЅĳʸ̛ʮбз̶ƌϢƕǯũƕʷͮɡԱȸƙԾđ˥пƵĖƵƁѦˑƛ׀׃ׂׅ˥ׇׄ׆ׁ׉׌׋׎ׄըӏ֙Ք̴̠ʑтӤĹŇı˦ɏƊƼƠͫǳūɹИƂփքƹɃτƢλֹ8΍ƾƶȢƚƸѮưƯͅưђƱ׻Ž׽؀׼؂׿׼̦·ư؆؉׿؊؈؋ԧԚΥԪԜԬǢձȪ˚˯ȿԑħΉǿȲɁјЙԲɃǨƧλˬĒƼՎǄجƭǪ˽˻Ƹز׿شȖضسطص3؏˒իԡаѮȌ˚пԜչĒ֯҆˥θƃةλƭђŇӿĊ̒ǫī՟̴Ǭ̄ʗٛћٝĢٜٟٞؓ٣٠٣ҲҲҺ٩̲٩؏Ŗ˓ҾؒįΪقθ̬ΰلɎ˄сǣهȬϣȣѰȣɥӢي˥֠ƃڈɃƃՀڌɃڍιڐՀ̠̠ơơθθ֕֋؏͢իƦԪѦհ˗Ϊƛ˥ڥǨؚ͂Ćĩĭįڭחڮԗڰڲگڴڱڵڳڶڹڸ8ԧɈ̈ԬҧаƱɒʏ΁Ǣջɹֽˬ՞̬īғȆϹګĥװʞʣ0ǸО̳Βف֣ƋƊɈƋ˄τמ΋ΎۦɏΏ۩۪ۭۧ͋ۨ۫۰۬۲۩ڽϚڟՙƌ˙Ɔɀͭ֊өڞȀڭʠΆƊʛʮſе͐ȐǥԔӓɜǥȔůɧ0ɥͩŻ̏۹Ǚɫֵӕ۽͔Ʉƃ̙Ʉ֌Ӥǟ֋ܥܨ֋ͰӚɄܫܮܪܪڽԩۀŇσƯյʘЗƗԾՋٖ̾ĩӨɋʸŌǴΒԱҶѡƈƼʿȝ݄лȒ΁шōȃɛסϡͫͅƠهպ·Ơſݝ̛ɓݢ۹ݣѥѥзΊ͇ټȌšԧ̶ڿаېݱżГՋ͆ɀչȘѵ˥ӤٍκƴĊНɅҮ̄ҰێێϮį֣ɇ͛͂͂̾ސ͆̈́͆ρޕޔޗɇޖޙޘҧޝػŲԬχؑޡĿύ̢ڪ݊їأǌԨӛʜƍеҳΔǡɌƦȒԜƑهҠȓǥʡǦĘţǥǛũ֟ѼȨ̫ŵɣԏŹվɡ̍Źϥɧ֣ŻɫƱŻɣΊߗ̜ߘߜ̜ڃߟݮגޡՔ͔ȬƪʐԏոǡƐ޷Ȯɞ˥փĘ݁ʝыՎ˶Ŀܾ̬̄ĴԞԡѮĢ̀ލޒРࠄ͘ࠅς̛ɇ̼ࠋ͆ࠌࠊࠍࠐࠊԧ͗ޣаٯƇڡ࠙ڢڡГࠝڣࠟࠞࠡࠠࠣࠢࠥࠤࠠࠓؽԪ̙Ԭѝ˘ٴۅ͛˜՟ۘ˞βȌȚ؟͔͋ѝʛϻ˖ևՀҟɃӤࡅࡄࡇɼࡉࡆࡊࡈࡋࡎࡄࠓٮիϴࠖٲ̏ٶԔ̍ӕƞƧسҪϭ̲Ҳ̀ρ̀ϲĠ͔ȀĥࠬܦϹģ͹ҿࡰģͻΩͺ؜ࡶʜࡷࡵࡸࡻࡺࡽࡴࡿࡹࢀࠓڜԪʉ՘ĶۼԾĹҰįɵˍšߝȽƁʩȋة֣Ƭ̦ࠬʈށԅĿֲǬٗѦǬ͋ǬѝǬϸϹճҿͺ̂ࡴͺҺ݄Ģʡࢲࢰࢵ̲ࢳĳࢶࢴࢷࢰێԍ̳Ғ̳֚ҺȀǖ""ࢅģޥ˙ɭ˛ڧ؛࠳ı࣒նʣࣕΔ̎ࣘɈݙݘѕݙهſ࣠ʒݝ࣡ݝ߀ȡ߮ռҚȪ࣫ݻИŵࣆࣈ՛̼ͫǸٳ˙ߦ֠ࡘۖƈƊџϠ۬ࣖ̍ंٺީֵ֣࢓׫ƪђĽҺģ͍̯ҽǄ̳ǡɛɏɎܦʮǽݘȒƩšƓʌࣰࢅ޺̲ٲͧ࠰ߦНٷСյוʺǡǡʣƍǸळअǸݍ؞ࢢֹĳȬͅƂґƸ̱Ģ̸ɸΆݤȀѨͬݞͮɟƵƛۗζԽڊǦԧ˖՛ޥ̇ؓΪͫ˚ާǁߨŉߨǫबīڬڷ०շ΃ͪ࠶ःީڞѦࣚݬȕˡࣨҚҚȬѰ॔՞͹՘ܵҽࠧࠦঀॿংঁঁݶߩݐͮɁͰ҉ޠаҿ՘ՔΤͺկڢ঄˙ʸগঙঘছচঝজটঞ࣌˚ߦɡ˥ԧࡴ঎ʖ֊Ԭɼद˙̞ղ঱Ę࣏ॠԈय़ষশহ঵঻স়঺ঽীԈধ՞ु঎঑Ĝ࠯ʏڧŅߨ̾ި֚ƍɎरʪβֱɁܻɁۉɴ߰˧ׇ˥ζζӗθƤђ˵ƶђ̦ŖčĊĿْԨडՠŉȯիɌؖάʏࣹɆϽڴϯकзɒϢڀݻƳӚ˩ֈƞ঳λةة̢̢ƤՈغش́ĊŁ̒ĴɆ՟܀ȓৰа˭՚ۗڢঠਢڥؙ঴ߨρ࠳फ՚īਬॣਮਫਯਭਰਲ਼ਲਵɋਜүݻČڡقज़έথֽਤੂٖࡘॢ̓੆Ҳٷ੉ǵੌੋऎЖɣͳތʞ̕޴ſ̱ƝƸůਸʲգՙȔࠚখ੢ঃ੤੣੢ੜաܵǌࠚؗࣸߧোߧɆ੎ਯڸ࣓΄३੷Ϡ੹੻੸ʺʺʣΒȝɹƗ࡝׿ԧǳԬ࢟аȖઉĒࠚձࠢਣ઒ডઓজज़࣍Ŀ࠳ĭ੶৒ǻઇޥઊ̃ՙǾએࠛ੥ࣶҚণપनપথੀ੃ল࣎੯ؚৎمঌų̃Քॻ̃ŇƉદࠜધ੦ુૃࠦճݷσʇĳĶ֥ĊĳĻऻિڢ੭ફ૔બ૖૕૘૗૚પੁۙ੸ٺૉࢳ0ૌ́Ϭ૥Ęથઑ৷૛૬૙૮૭ࣹίিǬૡŅ૤ૣܔ્Ğથ੡Ϋقঘਾʏમଂ଄ଃଆଅଈ̦ȿҮࡘਨɇਜ̳ોੌૣОૼૄଗૂଙࠤଐԏਉ૑ીଚଡଘૄଜɡ˵ଟক૔ާੲ੊ٷ଎ħħਸ਼਴਱଴ਲ਼ʬɜ߯ʝ੓Ȁ࣒˄˦ŭ˨ևǒଜֽ˟ନ૽ଢ୉ࠧખરێ৏5ଜƍɩ઎େڢ૗ଇথࣹੰੰίଢ଼ؚ଎ୠેΒɎ୤ݸѢαŧଜЕĢ਻୕ଠનঝગΫ୲୴୳୶୵୸୷Ϋ̞ଜୣؤ୮દࠞ਽୺୹அ஄இ୵থݕɒȒ4ૉؐ̃Ĺĸોؕ஀୯୊஘ଘଐͩԱǵଖથકஈ஢୵ʘϸѝĸҐҚǺƝ̢ՎլЀˁ૎˄ŵȌۗȝʲƕˑɹƫޟ[ࣇ્ϯࢦૣѮட૑஡୲ڧ୞ொଋௌ͈ેࡪࣼ४ͬˢҡ̬݀ʺː஛ֽ˳௅ࠚ஡௟ઔ௡ઓ୲Ǯ͆஛߲৻௝஁ଣஙГזϮ਩є؇ʖǰષி́ɛτ௸ৈ஖௫খ௠௠̼ިɈ͋۔ࢲǰʣ΄ʛȠৗǕ঍۞્ૣ્हƋ୭௪ીఀ௢చ௣୺୙ɃૉہЌૣ̩ణĔగନఙ఩ఛఫ͠Ų௷ణŁƋ߀௽௅௭௬ࣶЕܖŉלŰఏΊ՛૶ǯ́τధవషశঀૉݯૣݲɏ૏΍౅௽քƛǮĩςফ֊Ц݊࣠Ѱ୓ϦׂĒˑౡƱӨƛǳ౥ڊ࡜౪౩౬ӾڊӤϬԀԲֽșొॗ૶ϒౌ૨ఴ౼ୈబ౿ਣગొ઺౸ઽƳ౑ಈ૑ైତమࣱૣЩЯ౽ಒଖಋম଀୏ଐȈܘಓಜధࡗȱ௹Ծ˵ౖ݆ȎɣضͱेɎƠˆۇŷ֟ɊεƋૉӦঐ્࢚ǹదಝ಻௪ੇٶಉ࠙಴՜૶ࡔǹĚೀ಼௽ଃೈհ಴ઽఒృ౏୔ೌ೉ଖٵࣹ୚ߧగૉࢆఢȂો˦೔ೢ୕জೢଐϻ́Ҡ೩಺ೣ೭௾ࠣজĽ௏ે˄΃೜ೃ્̊ૣɝ೮೽଩ై೜ܵॻʮŉ֨ೕഇ૩ং఩ଐɳЗ೓ഈഐ౾ƞ˛ԍΒݔ࣢ѫƗஎఏΧಶ೑્౐഑ഢڡݡɚ࠺Ӕު࠻ځപڀഌǡɫ౻೾ലਡࣷ૜ੂੌ݀ॣഌݟآളാేĆഌఱ৅ʮೇണേಫࣝࣳࣨ߀ȟܕɁ̞Ƨ୐಍્଺ૣВൗĉിളॢ࡚Ȫഫɯ৙ൢӚਅ௶ಎǷஒਞൗഏ൛ഐঁ੍࣍ʜʜଐ੝́Ƽ൶റേ൜୶র૱সʗ൴૶Ǆ́੫ൺൈΪ࣏Ǹ߀̏Ջਗയ˟ڼൔ඄ોઊʻ൭ളಗƸ࠳࠵आˣ˪ଐˁ९೬ආೈࠦ࠰Ń্৏˄୤චĿˍ඄൹඗ഐೱભ଄ֽච૶ϫЮ඲ൻ௮ঝߦԍ஽య޶ĊƦĹƦঔ඼൮ࠣ୵नਜƦĽƦĿгඤආȒપ೘ȿѦ࠻ȵඒŌеҦਠ෡௼්೮ૂͫාԈݏළஞ෕ලڥ֚ΒȁൢȔޭσԦෞлĻлෑ΁෥෋෗෍ڥƭ෩ŁлŃш෿೾Г૓ŁʐոෂಎлŇǭԜช฀೰ঢূ෹ԞŌͩҦϯธ෦ΪฎಠهǨࡢɋඑாฒ߿ฟฆѠรഇࠢৌ࡙୥ಳฝŅōดڞำฤࠢੁභ঍́ԪઊԸҦͅ฿ิഊ࣌ාతॊ้Ė๋ೣฌ෰ٹټ̚ৗ๏จిŏ෤෮ඇ੧෹௺őĶ͉๡൭Ȩଉʏใอළ஝őෑ͋๔೉ࠦଁ൓๯Ҧ౹܊๻െ๵ඥુʇƑ೏෇ࠔ͜๩෕ಁ୳ා͞œ෻̙຀๶ࠟ˨෰ڭຍී࡬œනຉซํభ๺œ฻̯ŕຒ๕੥ා̸ŕ෇ϻ຦಻กલো຃೪ഞŕීɕຮກ઩ؙԗΒ෸ມǤจॻǤ๠ູಒੁඨශ௦෹ҽŗ๧ɳໆೈ୵ੁఽເഝƌෑ֊໑ಜज़ଫģǲාভŗจͱ໛ಉ঄໡ด൘ȓ൚ຝූୋƈාюř෻۔໦ಜঠȬ໲ී൷řຜ໷௪ঘଫ௘໲฻ඃśༀಜ౉ไઈ૸෇็Ȗ༉౑་ເ̺śීˇ༒౼༔සǾҦת༟໅໮෯ಖਜఌ԰ඣ༚ెГમ༦аށ೐ŝ෉༣ඇ઩෎঍ƒʖॻƒĿƒ๓༴ിಖগʇƒॺŅƔ༰༢༪ନགʸངՕ༻ԊǦఖཀഢ඾ࡗ๹Ăȩࢅཇԑş༩ཕฤਢཏ೸ཚ՟ş๿ཡนࠡཏംཇؐš໭ཋ༫ଛ༸พఢšĻš൬ཪວࠥངฯླྀԤđาཽഢঠ஽ཚғີšŇţཱི୕བྷୱ༦हţࢋ๊྆ພ඾ฬయţĽţ༽̛ྐಽΪ༷ມţŃţཇǯྣ஀ཿ༸๥ླྀోťཔྭഉབྷང๱ྲྟ๴ಊീಕషȌྐྵཥđ͍࿅ཀྵྶ྾ཬྰ཮ށࠔŧིྙ์Ɇϟȸ༦ຎŧེຑ࿒เࠨෞŧ༽ບŧ໿࿜಻୴ངӚీ࿎ྎƩྷ྿࿯ଚ࿧࿟ສũࢋອ࿥೮ೱངິ૷ũ༽ຸ࿸࿓ࠛ༦೺ְށ݁࿉ུĠ༦ໍūĶūྵခກࠝဌེনūའဉ೯ဋ࿟໢ūྩ໥ဒຓɫɁဌȝђဢཾڣང൘ླྀҥđ৵ဩຯग़ǣ༦൪ŭྟ੝ယ௅଱ǶံМ෵ူ࿈ဲಉ଀ံྎެđǳျ೤ղངડ༻ઌ၊ོ၌਼ࣷ၏౷ށӫ၊࿤ၕঢཙ၊಄ၚّȢၞ஠˙໕యŵә༱ŵ༳ၦ೿ു঍ŵ༺Ņɠ৬Ϭၰ౾ષҪ෠ີ߉ၸཊ၄༛ग़ʇŷ৲ॻŷә෭ၺၱၼժĻఢŷऌ෾ႃဓၲųŷ࿄ŷŃɢ႖ဳလ႙٘ၿؐŹ࿑၌ࠞွ૴ၳཷႉภǘย႟ೈɡႆཱྀႮŁŹၝႲ஀෨ႬၢҪދǘ฾ಒ࿀ჅဴྉჂիႉھჂၯႻಞ໱ၳత႒ςჂ༿ႍၖຠၪ۹Ҫ๞ŻႂၰႡၪ๥ܚ৬Ȇი௾ႆྺઊɨღမ჏ྮ႘უႸ࿆Ǚ၃ႍტಎӖ৬ࠔɪჰ໧ჲჺຎɬჼၔჿྑᄁჼ৭ບǝႺၞჹჼၶ຤ǟშୈਜǟәϸǘ࿷ᄕါၳິ႒ॕᄛთᄇྤႏɱཛྷ৬ႉဈᄥ௽ႡҪໍ႒এȸထჸ႘ᄰ႑ႉনȸჯსᄷǘ໢ᄲႝအᄝɎႆൖ႒൘εႧᄭಔᄿಲᄩҪ൪εᄆᄾᄧ൵ၿ໽εᄎᅍࠟഛ႙மᅙّඅᅅᅏ།႒წ༑ᅝ༫ႆ༖ᅨ৭༙ᅫᄈᄧ༞ၿ༠ူᄵᅲଠᄗϫקਔ༯ᄝઐʇाᅑːࢱᆆᅕཌດಀᆌேΫଌɘշɒຠӧૢఢƂŁƂᅜၞ̳ਜƂӯૹӧૻᅺ୕๹యʌĶʌĹʌ჎შ჈ʌၵਔ֚ːԔᆁ૒ᆃཧᆗԗᆴრჰཌྷ๎ෞƵƅؓːகᆶᆔᇅᄹӯؿƵᄽᄭઑᆃྃᆗѠӧɛᆶƊᇑ࿍ӧ܀ːڠᆤଖᇈ̟ᆅˑĻౢᇟ೤ᆃვᆗࠉᇝᆛᅲᇡ๞ᇫŇηᇗਡᆃోᆗݲηᆭᇧᇘ঍ηʖઊη߸ͭᇵႏηཆਔИӧ͔ሆᆃࠔᆗ˓Ɲᅹჸሏᇊਔ࢚஬ᇽཌሏ࿄ƝӭӚሎᇿ຤ᆗࢆԿማ૩ᆃᄚሥᇥҠሢųƜၙӧ̇ː˩ሯሳႿስᇳѴሷːএᆗΤʫᇼሕᇿনቀ߸ɼሽʫሉӧ಩ሾᆽსᆃိॻǱᆩေᆶሇ൪ᆗఆː်ረ೿ቒሞ၁Ǳჷማ቙ᇚː၉౨ቊၐӯၒӨᆉၺ]]'},function(e,t){e.exports='[[10ă0,Ăă1ĆĄ2Ċă3č04Đ5Đ6Đ7Đ8Đ9čĂĝĉć1ČġďġĒġĔġĖġĘġĚġĜć2ąĲĠă2ģķĥķħķĩķīķĭķįķıĎĴĎĶ03ĹŌĻŌĽŌĿŌŁŌŃŌŅŌŇđŉđŋ4Ŏ4Ő4Œ4Ŕ4Ŗ4Ř4Ś49],āă5Ş5ŋ5Ŏ5ďąŽ,žžČČďĔĭĒĳ,2ď3Ēū,5Ĝ7Č8Ņĩ2ĭ5ĭ9ďĸĉ25Ĕ28ą36ĉ41ďūĒŻĜƐĘ63ưƱ,7ĢƵťƵ9Ɠ2ĉ86Ě87ď91ĘƛĖ95ǉ7ą97ĜǏŰŲć5ŒŷčƠǙĖžƞƉǟƍ,Ƭ,ǑĆƂƜĒ3ĉ3ƋǩĘƹŭƏĖ6ĜƣǤŅį1ħĸĆŧĆŻĆǴĆ7į8ı9Ěƽơ3ơǱƟĘƗƞ7ĖƢƂƔƉǏȘȐ9Ĝ3Ōűų0ƙǙŸŚƐſȨƀȩĆȬǫƵǤȰ1ȍ,ǪȴƮĉ6ĖǐĊģƢǿģ8Ƈ0ȐƟƉǖƉ7ƇȜȴ1ĖōĚǬĔƌȝƒȴɁǢ0ƧǼţĚŧąũĜůąŵČŷɥƩƏ26Ƞć6ŶŋƦč6ČȪɵȫȪȮ1ĠɂƉǩɒɡĔȀȣƴƶ,8Č9ǎĥƷĢīůȁģǍĆ8ĥɋƽȉȾƊȍǨȐǚɪąƗʠ7Ȑɗ2ǊɬăƴǕɰŒ6ĔɶʰȫƋǢ,ǳȱģīȐǩǫȝɡƮƬĚɳʵƅĉȓƵȺǁąǶ8ƾƾƼʆĒ8ĔƿʆĘǂ˕˕ʨ0ȹȤɲŘǀȨƂǟČǡĿĆɻǿƉǫɟĜȂȗɺģƨȁȐƷƗɒǺȴ˂ƨɟʮɩƬ˽ɮǳšʵʉƵȾ7ǚȄĖʇƓǘȆʊĔȈĻɍĊȧɺə˧Ǭ˧ˌǦ̔ĢƲ˚Ȃʫčʒćʅʱʠˣ̪ČŃĆĥħĭĭȉǩƋƃƋĖǰƮďˮǉǎŃĽīʌƌǽĭɱɍįˆ1̜1ƻƉ0ƂĞƽƇǆ˪8˚ɕ̣̦Őɉɷ͝ĴȬˢ͡ȰʶĘ̭͔͊ɈƉɝƧĖʃȺąɕʣǤŉĹĹĽħʌ͹ģ͹͸ͽ˧;ɺ5͗Ŕǘ̦ŖͲ̨ȫĠȬ˥ƏʆĊǽĆȇ͎ͩȞǢƋƮɥƑǵˑǉĿ̀˧ī2ǻıȵƩ̯įʏȲĠǚȲį5ία͗ȦŋȻćǶΉʱʳĒīƜƃƤƍƧĚɇˠ˗ĂĶƖģƥȿȁıʥŌ˪ĜƊƇȎɱƗƇͲȕȘɊɎăȴ̘ȞǩȢϟ7˚͋Ŵŋʇčʔ͞ϭƁ̪Ē˖Ǧ̮ΑΖȾȵ̚ƎˠȻ˒˧ĠƈƩʹơđƉǼĸʺǨϒʒƢƋϠ̃ȌɎ˜ƲƋȻ39̸ȟǔăɗ͙ЛŔ˔ι͠ȴУĞ̔ƗǢĘǋʆ́īȀ͌ƞͨΣȔЗȴȣЖƧ4ɣ0ΙɥǃʵƲƵϋʔˊˠ9ţčĹ̚Ăˠɺ͹̥͌įĳƖΦϓǦЖǦƹĢťϦŘ΅ЛŚȆͪѢϸˤˤ˓ˊĚ̅ǺĠˠʦɒ˔ŹČƱďˌĭ΁ǽїǆǊЅІƱϒǀɎŧɡʣ˿ƊʵѾƵƿʈĢŚѪăǅč͍ćƛґŒѻғŖșғҍŇćĊχҟ͏ҡ̓ЄχϣҦŁĂϥКĂδҡҝĞС̩ƓȁЅɌƏˑĠʌЪ͊Ȕ0̳ĘϡȴїƥƍɅũƍȈɩЩɱƱμӍ͍ƶϱȵȓĚȄѴЄуː̋˜ƔǇ˛Ǥ̔ƛѩǚЗ0ʨэ˝χʌəɨҲȨ΋ӱУǣʁΎĔʶȺΏǁΐ̞ȐȔӁɾɖΗǢĔʏŹҸƏ˭̻ӷӷҫųɺǗĶѷӫǜΊȭԗĉӷȯёƉǭԃǘʅ̜ҔĢĩѹȣҽ͕ɆȉǶǪɐЪГɘƧͨŧѦɝȄǢӊŷʁ҆ŻͭчǋнЩϬƐμ˛ӨͧϨҟͨӫĜʱƃУƅʷʓΔЧрǾ̉ĻƖίʑĴ˗ƽʠйɈ˷Ƥ˺ϹѡƠӷɨ6ǾǀďƶƑɇǐˊɺʆȵ˒ˊʒƔĒʉĉʉǑɍӨЀՉχƽҟǼӯӲӲˤʴǻϴбƂƇơϝȴǩɎǯƪԻԈɮп˃ʵͥծƅǁѴѴ̋ѩǎӧҬ҆НњֆʯϮӰԘԗ֋ՑԜɨ͌ՔƂȝƧɟƄƄʁ˭ȸȺӘյʆѩǄǄŁĻĻŁ׌ĊŁԎքŖўĢŃҌ֯С։ΎȲ֎ξɽמΣӃסȌǢѥǢƍɝσͭˁȸӷˁˁ˭װ̄ײȂʅƶցŜדΖχȵӯΉʳ׿ՐȱҺל֎ĩīīȅՓՋ؉؋؊،؏؎ӨōӪəъؕĒ׽ϭѲȱȐʠɒƤˤƪԾʵͰ˅ǵŇͻį̓ǺıʪоԨ͌ģҗʖɃ͎ȉЦЦ҆ĸƇɪЅɫҬף֫ϋ׻ĘטТ̻ȯմכՕǯμ̻̋ǎĹԥЭʹʕаƞȵƟƇ̜ȞƃօƌƋǚƲӁ˗йԅօťآɣմŷͭԷƦˁƗؒҮ׻ҝաǝԗƪӶȱŉӼģơ؟ǢиǢσнʵʈĴנǺĴ͆ͲذʖմЇɽѿƞѭɕƗӿϒ՞̅ʦֹɊɐϐȞɎƩӨ˲֫̃χчنӲƜʴƖ˩օɅɅΖ̚ϋ3ɝͭɣ̻ȸӖˈʆƾѩջŅĽѶͻ͸́ıڊۊ΢یڥԑҟǾکԕΉڬ˧Α˸נȵ֛̃ԡˊ̑ͶͿ˧Υά؇ώطȐٙŵƉϖˆƢȝصōǫڷеǫ˽ڷɎцɘ̸Ӈ̃ŧ4ڥѝԒǱکՍחϭ΋͢֋ˑӼаҷՖԅ̸σƬ˭Ѳ˓ƾǇսŁ͵ĊıييۊǻёܢӨ۪֫דԇؙܩԖיܬֱܭܯĆܤŐܧĽȲ֮ܪؙʳʶХȽϳƈІ֑ѣƤπԟѲѲӏʵׯƵإ̆ܤגԒԧəΰ܆ɸǟƄٻĭʑ؊ϒʠӿ˹פݠƎʃͰǑ׏˧ƖΤǽħܥҼԧʪь̢ݱı̥Ǎܤ׸Ԓ֛χɱٸەٺۘǫءڇ҉Ǥǻĥ͎̈ƞ̃ʡȴٟ֛йƪȾŧڹЩףɮَ̻ȻկˇͰϪƣǁ6ǇؓǏĿ̞đ׌ŇԣԐ˧ڊǺѶǖȠ""ҟ˂כҠɶˢӵ޹ٻ޺˦Хٽܼϳʌݫ˩޵ĩ̱˪߈ІƂȖѢϷǫߏ܎ߏް޲ݺ̷̮ĚɶܰߚԗջȰǥʌֶܽ؉ߊҶߤߦٞތߩч߫آˇߓ޳֕Ǧߘݔߴ͟Ȯʳͥȯߟډ߁؇ҵ؍ߧߥӁ݃ϟڂࠆƩԥ΂Ҭ˽ݺޤ˜Ģĉܸ܇ܮֱ܉̫ࠗ޼ʵߞ߁ߡࠝӨޠ޳ŅɍҝʒࠒګࠔߛࠩࠨȭӨʅݺࠢ͘əоࠦ܆ࠖ࠶ࠗ࠷࠹࠸Ɖ࠭ܵ͜χއࡀۓߵ֯ܰՏʳ࠙ӸࠚӹϲӻӻǥŇĊ࠭וڎ࠲࠰܅࠴ֈࠕ̪ԚԚيΓנۙƤߖڶӁ֗Ǣͭ1߯χǶ࡬ԒϪؚ࡙̪ıĩ߆؎ןȝǩǮȴЩԙԙ̻݆ނͱ̬ӖࢅރԷȄ࡫əϬޥؙ߳ࠪ΋ͤȯ߹࢔ىħࢗۗ߾̞࢚࢜߿࢜ࢊ͊ƍȐࡄࡱ͢ǡࢧ֌ࢩ͸ۖܞࠜࢮߠࠜࢠϽ࡬ҩ˗ࡱ࡚࢐ࠫࢹࡪŲޱҟ˯ࢋҝ̅ࢷܫٹУ߸࢓؅߄ࡵ߄ؐ؍࣏ʘߥߋԝӨҐχҒəԣؘࣙࢤࣝࠒ࠺̪࣠3ࣕޤࣘ͌ҩșࣄ࣪ߴ؀࣭ࣇǢࣕࠢьࣙبϞ࣫ࣷࣞϮʨĳĶĳ͵ϐĂĳࣜС࣡࣡ࢨइࢪउईऋ֌ࣻҧ͏ҢँӠऒمࣹࠒऌघऊचǡ࢔ऎŅࣾȼлȼұखथࠧࢻȬࡎࢊƽࣽӬƽżदࡄनळܮफ˸˖ࠑऱߙࢺ़ऴܬशʁսऺࣝܯࠝۗ࢘˸ॉ؆࢞ौ࢛߿̲श̂۫ृࢸऽॖ࢐शʺԈࣸʱەङङ࠙࠙ԎࢾँՋĥև॔܆ाॗࠨशϒ˅ࢎ३ܹ࣯࣮ॵॴॷ׿ࣻւرȼօँ२ड़͝५ঃफ҆чƷঁࣄǞ΋֘ࡨ঎ࢌΪ֛ژڂƬԼȆঅƬĿĸܷॲࠓӲࡎӺডঠণঢথ͊অǳ֧ঝΉअ࠻ভ࠶অưĥࡃউফࣞঅɝʹʦশӯযমিˢȞࣻ׺ऐ͵Φ͏ؓ঵ঽীৌ࣠ৃ̓ࣳѕँף৊়ষࢽߔৈܚՖ৖࢏६ळৃࣲटѹ͏ٷঢ়১ऻ։ࣻڦ৥͵ই৥ः২ߴיɸ޿৶Ӽ৷աй৫ࠎटũȼƎ৕ࠒঃԘ৫ৢ਀ب۪ਂ৲ιफǘؽΖ਋ঁक़৘ȼԇؓȀ਒३ʏʏد֪އʦƞҐƠ̬їǅ঳ǴࣻЮə৑ɇँǚਚ਱ɷਪҩਭŃƟॱਲ਱ਪࣵ৮ĻΣৱ਺਌ſࣻݹਬट͆͏˂ੂ਺फʪ੊Ľɪজੌশ৪Кɪਵੈ਷ˠ੔਻੗̢ੇȼ̥͏̧੃੝फɕϹੁ੦੬֨ųƗ৐৾ਿƹ੝੦੨͓Əकੵ࠴֊࠸੨ɒԋ੭ંŽ੨ܚࡕƗਹઃ১ƍ੨ب࡭͏̜੻਌फϪँࢌઐ੫઒ड़ઔচ˔ખ੺ઊ਒ઔटѡँࣃડশࡇࣇफࣖ͏ࣘʦरચঢ়બʻеન੼ॖƂબচдદઠલછਕદटɋĂȞી২ࢊȞĶٝĊȞ઱ષૉૂŌҥ૔Ŀڢ૑ઢ૓ȞŃȞŅȞࡘ૙ળ૛޾Ǫૌঈૢ৊૊ֶŌॉ૭੓૩ऱڬ૫׉Ոԭ૱ਓܱ૤Ňōŉ۱૸ૣ[।ŌǼ૆֪଄ઙ଀ࢷ૊Ʌଆ׉Чૈউଌ૟঻૆਑ଊফʨǬԒࣘǬщ̚଑়૊ثŏ૗ϋଡુଂ৙Ǭ૝۳ଖૡନ॔૊ա૆৬ƌɴଘਃव૛৯ƌĽƌ૰଱࡙ଳ׉ƎଵઉୂदଚΪ৅૎ܥœह୉ଋ૛ԇ૆ਫȌଉ୒ৗପ୎૗Ҽœિହऺ૊ݓୖૼ֛୚୓ଡ଼૆੉ƥщƴ୩ୣКӅࠡ૎ࠌŕ঴ୢୃ૛ࠠ୬૟Ȃୱ୻୫ŗ૾࠮ŗସ஁ख૊دŗିއஉࠦ஋׉ࡕƲୈ୺ஊ૛ζř૾ઑ஗୪ଃڷщગڷ୙ஞࢤ૊ࢳř׉ࢶ஦ஂ஠ࣀڷૼધஐ୛૆ભठஶщҔழܸ૊۹ஶ૗д஼୛஠Қś૟ɋ௃ܩࢊйՠԄ஭୲ஃйĶйͶϐொ஧Кйܵࣳ٦Ċй୹௘̨ʨйו௝ҿ௟ढ௢ߵ௤޾͇௟يşஈௐ஽௚૬௯Ăƨͷכ௫Ҳ௭ਖ਼௰̿ͨ௽ݔ௭ҝ௝ւš୑௴வđଅ੡௹ଇš஥ఄ઄௚଍ఐఎŁšୡకਲ਼గਇ఑Ňţఞ਍૓ţ௔ؓ௹ଠఌ௵௒ତţΟଧభ௄৙ţ̿ମđїథࣺ௚଴ఙť௔఼̃ʰ௤৯௸đљ౉ୁୢाెఀ௹୆౉஖ౄెఇۃ୏ŧఋౄȩௌ୕đਫ۾ఴమଃŧΟୟŧఝౣח௤୥ీ̖ަ౜౅ధ੉ũͶ୰౫׽௤իड౷Ο˜౲ట௒୽ަۃ஀౹௬ధ੣ū௔ɕಁƀௌ஌ƫ௟ஏಈ௾ಊఛࡕū౔ಖಂ౥Еߝಏౝ௚એైŭ௔ࡰಝద௒ગŭͷϽಢఖಬఛφđȗಱ੄ధથđҎů౛ಪ͞௤ࣦ௝ࣚůఔೀ੮௹җీઽ಼౪ౕ௚ӊ࠯௟ૅȢࣶೈఽஃŵψऑೖૐಏʨŵ௜ƕएŵ௡೘ಲĂŵ௦೤೤ର೨ಣųŷŉైŷψ૨ಱೡ௷ࣳŷĽԺ೰౳ೲޥ೵Ոŷಜథ೺౗̕ւŹಿ౲ೡఏ೵ଇŹೇకഐ৽ഋŁŹ೏೨ഐడȢକȢଗ௃ਔೲে೵పഢ೟ഀಹദೣ̕فഢ೧೐೚р೪హƭബɵࢊǖŉǖψృഺೱ೪ేࣘǖ೾Ǿಸ੮ଃǖച౒ǖഇೈ഼ୌƠാǘൊ഼౟Ơՙɇ൘૓ը̕ୟƠജഈൟ౮ƠŇǋൊഭൌ੉Հ̕౸೹Кǋയ೪୷ǋളഝ൳಄೵೼ಇ൲ೲ੣೵ஆƙ௳ೠ൳஌ඃ೾ಕ඀೪͉ఙƙŃƙ൑ഖඈഊ೪એΰഎഀೡકඐગΰകಪඝഘ඘ച஬ඍȢࣀ೵಻Ɛ൫೉Ȣભ೵െ஻ൂ೩න൵නĿƐ൹൥ೲெඳۃ಩඀ൌೕɮŉɮඛഴыೝైɮ׋Є଱਄ӱʨɮඥ˛ओෘ൤൒૓ɮŅɮŇƦදࢊƦĶƦĹƦഫഏКƦඹƦĿƦලොųƦ೬׎Ջ˛ַ൞ஃɳ෈ॾ˛ঀබ෕ଇ෎ڊ฀ౌ෋฀౐฀Ńɳඔඣ෬ഡ෎ৄƱ්ൺ෴ഩณ׋̓෻ыറณ׌рฝ˛హณ෡০ඩիݸෟڨ˛ڪබഭыొॼา෰৿รի෶าฬ೯෫෴୏෎ўʮආഺ෕ਫแ̀ਰะධʮซʮญݓุ౰෎੆ȹถ඾ы޴ఙȹ׋౼ุ୷๔׌ࠠ๟ടȹ෡๋ࠥ෕ஆ෎࠱ޠ෪ග෬࠿๛ࡁ˛ˆุࡕ๬ෟȻุಥࣳǀ෦සข෬ગ෎М˛ರ๩຃๎ವǀฏ௽෕಻෎ҎǴ๗ෳыೃෟࣚǴජຏ]'},function(e,t){e.exports='[[10ă0,Ăă1ĆĄ2Ċă3č04Đ5Đ6Đ7Đ8Đ9čĂĝĉć1ČġďġĒġĔġĖġĘġĚġĜć2ąĲĠă2ģķĥķħķĩķīķĭķįķıĎĴĎĶ03ĹŌĻŌĽŌĿŌŁŌŃŌŅŌŇđŉđŋ4Ŏ4Ő4Œ4Ŕ4Ŗ4Ř4Ś49],āă5Ş5ŋ5Ŏ5ďąŽ,žƀſƂƁƄƂĉďĒĒĔĖƌ,ƍƏƎƑƐƓƒƕƌűų05Œŷč5Ŕ5ĖƅĴĆƥĠƦƨƧĉČƬ,ďƯƮ,ƉƲƴƳƶƵƴĔĘĚƼ,ƽƿƘć5ŘƝǂŚ5ĜƣƃǋƤƭǎ,ǏČưƊ,ĔǖǕǘƔǚƖǜƗŲć6Ŷŋ6ǣČǊǧǌǩǨǨƪƩǮǭǰĆǁă6ŐǅǴŒ6ĔǫǪǽžƫǐȁǑȂȄȃȆȅȈƬǳ06ŖǷȌŘ6ĚǼȔƆǯƥȃƳǗǗƍĘȞ,ȟȡȠȣȞȋ6Ŝȏ7Ş7ĉȕȮȖǭȇȲȉȴȆȋ7źŋ7Ő7ĒȯǊǱɁȗȳɄȵǐȷƠȺŖ7ĘɀȗɂȀǒƱƈƸƷɖƹǘțəɛȜƒȷǇȺŜ8ǿɏɥɐȴưɩƸɝǛɭƖȋ8Ÿŋ8Ŏ8żȰɃɆɒďƋȣƽıĠʁĆʂĢĆģʇʆʉʅʋĥʍĆʎ1ʐʒɰƜɳŔ8ƢǩȱɺȄɔȝƾĊʃʏʣ1īıʧĆʨ1ʪʨĳǐą2ƫƬʳǐʴĸʵɰǄɳŚ8ıĭĘ2ƉąŹȠī2ĩˇĆ6ƬđǐůƮŵƲ1Ɖ7ĜƛĜǤĚȧĜ7ɣƾȬ,9ȽĊȒˤį3Ğ˓ǃĆǈīȧī˝ʧʱʯ2Ĝʱťǐ˓Ē23ũǐ˽Ėˁ9ĔˇǵǐǤ̄64ƫȒƬȸˀ7Ǥǐɣď2ɶ̄8ˠ˵0Ƭ9˨ǐ̃Űǟ0ĂɠĊĂŇ1ĞȿǾǋǱȃǓɕ̲ɗ̴ɕǳ̪ɲ̧ʋ̤ʑ̭̬̿̾́ƁɁ̷˓ƞĶ̪Ŀ̪ʙ͍̀͂͏Ȕͅʺ̺Ņ̪ǉ͐͘ɤɧ͛ɦ͝1̷ʮǂ͈˳ĂĢǦ͙̣́ͪͬ͜͟͞ĢǶͣĽĢǻͨ̀ͫ͸ͭ͠ȎͣŃĢȓͶ΁͎΃͠Ȩ͈3ŉʑȭ΂Ό΃Ͷ̷ō̧͇3ĻʑȾ΍Θƅ͹ͪΐɉΓŁʑɍΙǽʛȇ̱Ʒɽɮǚΐ̦ͥ3̩4ɎΛͭɥǏɪηɓιη̷̋Βͥş̌ţΣΎτ̾μʕρ͊˾ǼγͫθϏκϑϐ3μ͓ο͕ˏυɧƭϓϒϞϝλͯˑ̧͢Ƿ1˄υϩσǌ̷Żξ̤ƛϥ͵ϪǬδȳϠɓϭͼϥ;5΀ϴΌɑʜɅȊϢΆ̧ǡЈ΋Ѐ͎ύɦƘ""Јģ͊ϫЌ͛͘АВͥ̆3ī3ϿЖ̭ЎƧČȚǝɯŲБЈĒОʆСЗ̬ЂĖŅʊʐ˰̓й3ĔлƲЦ4̷ǺЈ͊ȍʆЋТȕФδͮųʥ;˥М̩ȪшєϵĉɽŇʊ5̷ˠМ͕ȸ̧Ȼѕѣ͍ќͳˣͥ7͊̑Ѥѭȿќ;Ɍѡџ͗ЍыεЃѹǎК̧˞ͥɱѽͧбѮ͐ѼѿĥŁа҄҃ǧ̤҆8˔ȁҌУѷЂζƸĖʀҎ18͊ʘѽ΢ғҢφЪЛҏ͕ʽ̧9ңҬҤэ9͈9ĹʫΕ9ΗҭҸƃ̷̃Ҫҳ9Πˢҋӂҍͯ9͕ѐ̤9ŇĳҹӍҺ̣ĳĶĳĹĳĻĳҷӃ҄ǰǳĳĿӓĊĳŁĳҡәӍӜ0ŅӟĂĳӋ̫ӥӯ0ҎʱӒ̻ʱɷӎҸӲ͆ƻчӸҋӺǖĉѵӰӃӺƌ˻͌ԄҬӺˀƊӘӾҢӺ˧ʆ҂ͨъԗҕӺ˶ĉ˝ԊӥӜ͡ӉӔ̜ͤʷԐԅҥӠ˼Ʋĥԕԧ̓ȁďŃʊˀƫĜ˽ǕČ˕ĊĭŭʩˀΔӲˁǕӞˉԯѣɑՂƌąҫԞӹԩӫ2Ę̆ʥՎԨ[ЫՑĚαԪԃՇΎȀɼĊӜΈӠ̜Ӡ̟ӫΑ՟ѮդΕӈ˼Ľ˼ϳՖҌӲЮժĘԏյѕդӇөίӠ՜լնӐνӫπֈӖ˸քƂҗΧШΫֆфө˾ֈӤ֍ϴӜԾўւӋˑ֙սՐ̜Ɲ2Ėե֡ЌӲ˄ΑϮ֍ƭǔįģʦ̇ƮƉɼĒхѲҲԼʆħŧӜϮ֝ӫϱׄմ֩σׁΠհ˫ׄҊ׈΄ӐǈզӔςֈջא΍ӜЉ׃̜̒ӫˋռԑ֣֦Ӗ̊Ӡтיϩכ׋ө6Ń֦׏עЖכ̩հѓӫˠת׉פѠΔƲט׳̀ϜƲӜѢםˁ֋؁׻ѯ׽˻ї֘؂״׽мďש֪ؒ׽ӢѲ׹ײ،͙ӲԻӫѾ̜Ҁ؟ב՘Ҧ̖ӔɶӠҐؘ֢ةخӞҟأؑاؠפ8өҩӫՍظȯƪӲҰӠּؾӷذ׫פҶƮƇׇىΙكӞҿمطِѥًөӊĊΈـך֣ΈĶΈĹΈوٞȮҎΈĽΈĿΈԉ٧҅٠0ŃΈŅΈ՞ٟٗزĂ˨ŉ˨٢ʅٰ؍ٻŌ̽ټ͆ڇُڂҮՙڅŁ˨ٴҜٹيڄ˨Ňōپ˳ڋ٨٠ʷټԫڟ؋ړ͏Ġ٩ˉڟڏՒڣفǯڦٶ˵ٜ֨ګٺټթԢڱ٤׿ڛٱڕԸڵ٭Юڻ͑٠3ٴРڱٸۂǪ٩՜ټևőԮڳڃڍ˽Ļ˽٫ŧےٺ۔֖őٴԾۊǫǳ˽Ӌէټϣœӽ͚ۚɏ٩˄ۧۖϱۡڌҦл٭ơٜ˫۳ӄڕϾ۹ڗЉۻǾ٩ןŕ٤̆܂ƣۣקםО٭х۳ɐ܄ٴӈОۉ۫͂٩׸ŗ٢Ѡ܉ۋ٠؇ŗ٫Ѫܘ̿ܚڏ؜ŗ؞ܦ܃ܡڗؤР۪ܟӱ٠ɴٜحټدܴϬܶ٭صřٖ܉٩ػܸڗؿܭڜųίӒۦś٤̞݉عڕٌټҼݖٯݒۼ۔ӁݖٶܼٛƀҎαʰƉڊݚܠڄαĶαĹα٦ݨ܊̣αͳӈαĿαݙܴǳαяŅαݿ0ܗ݃ݳ˩̤ݶ̪Ċ̋ۑۊӛޅկݿڈşݧބų̋׭ފ1Ń̋ܬۻݼʫЈݿԡšܳݱܽޖڞއޢĻšڢޞݳڧުފ֦޳݂ަŽݼ̖ޡ޳ŇţݡާڍţݬΑĂţݰݻ֣ţĽţݸہ޷ܮݪۅފۇ߅ց޿޸ݳۍ޲߅ۏťތߏߘޖזߛđ˸ߜޔߠݼ۝ʥݿūފ۠ߠݩߜ׶ݿۨŧޥޕ߁ۯđׂ߼ޮ޷ݣƟފ۸߅ۺ߱Ƅݼ۾םŧ޽܁ࠇ߀Ҧũݬס߅܈ࠏݢݳ܌̜ݎũݸܐࠗӏݪׯފݶȧࠠ࠘ݪܛūݬܞࠧſݣܢūߋܥߗ࠯߉Ѭ߅ܪūޝࠀ࠷ԷĒރߩݳؤ߬ފҀ߅ܷ࠵ܵݪܹđدࡈߨޯࡌŁŭޛ݅ࡊݣؽđՍ߅لࡘݳنߤůެٌ࡟ޖݗࡢٔ࡝޶ࡒ࡝տފٛĂŵࡊ࠶ڄŵĶŵĹŵ߇ࠇǳŵݵŅŵĿŵݺࡽ̣ŵݾĊŵࢁނ࠮ߡࡲކࡅ࢐ࡸځࢎࡾچߤŷĽŷࡑ࠽ųŷޘ࢐Ńŷ࠼ۡࢗߴࢊԡŹ߸ࡂ࢟ީ࢒ƚڠࢱ߿ࢦࢇޱࢰŹŁŹ࡬࢞ࡲ޺םŹŇŻࡴࡋࡲڶࢸ߄ƚں࢖ࢇھ࢙нࣆࢅ߹ҦŻࢣߔ࣊ࡁࡒڍƛŉƛࡸπࡦࡲߣʫࡺߦƚۙࡦࣛ۝ƛࢣ߰ߗҎ˗ࢊۨƟࢬࣚࣔ߻ƟĻƟࢴݱࣰࠂࡲࠄƚࠆ࣯֣Ɵࢁדࡲࠎऄࡶ܅ơࡺࠖऋउࢀࢊтउ࣒ࢭउࢉउࢁࠦ࣡ƚܛࢸѝटߟޕࡲܢड࢛࠴࣌࢟࠸࢙ܪǃࢥࣽࢇآ࢙ؤϾࣵࢽƚܷࣀࡍϾࣼۂࡾҝ޻ࡲ݀Ͼࢼࢵ़࢟݅ࣂ݈ऑƚلࣀࡡǈࡼथॏओࡲࡨ˭ࢎࡵक़चॏݿࡉफࣛࡱȌăˤ̤ज़ࣅ॥ҳӈǡĻǡिݚǳǡ֔१ŁǡेलڄǡŅǡŇǤࣄҎǤĶǤĹǤ॔घȌޒࢰ̈ˤՕञǤफ़˙঎ࣙ࢞ڍˋŉˋ঄ԦफĂˋސˤՃঞՆঝȌ޴םˋŃˋऱी̣ˋࢨঞե঱सै঱६ॽ׿঱ॱڛॳ࣐ߤǵॷߒঐࣗঌցঞփথ͈̊७։Ȍςঐࣦࣤˤۙেग࡭ৎ঒֜ৎক঵ȌۨঌǷǺतউǺঠঞׅ৞࢝ঢ়Ǻࢡ৞প۾ঐईিלȌ̒ঐࠔ৳९ק৷ॵঞх৾ॹভųȍ࡯৾ॿѓঐढঌѠঞѢਉॗȐĿׯ৖हׯ঒ԝ਍ড়ॺঞࡄ७ࡇȌॡॎȒ০ਠĽȒ৪ਛਠ৭Ȓপࡗ৉࡚ঌ࡜Ȍ࡞৉ࡡ਱९ࡥ࢖]'}]);