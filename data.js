const DB = {
"jeffrey-epstein":{n:"Jeffrey Epstein",b:"January 20, 1953",d:"August 10, 2019",cat:"Principal",
sum:"American financier and convicted sex offender who cultivated an extensive network spanning finance, politics, academia, science, and entertainment. Managed money for Leslie Wexner and maintained properties in Manhattan, Palm Beach, New Mexico, Paris, and the U.S. Virgin Islands.",
det:"Epstein was born in Brooklyn and attended Cooper Union and NYU before dropping out. He was hired as a math teacher at the Dalton School in 1973 by headmaster Donald Barr, despite lacking a degree. He joined Bear Stearns in 1976, making partner by 1980, before starting J. Epstein & Co.\n\nHis primary known client was Leslie Wexner, founder of L Brands, who granted Epstein sweeping power of attorney and transferred the 9 East 71st Street mansion.\n\nEpstein was first investigated by Palm Beach police in 2005. The FBI identified dozens of victims, but U.S. Attorney Alexander Acosta negotiated a controversial 2008 non-prosecution agreement with Epstein's defense team (Alan Dershowitz, Kenneth Starr). Epstein pleaded to state charges, served 13 months with work release, and co-conspirators received immunity.\n\nIn July 2019, Epstein was arrested on federal trafficking charges. He was found dead at the Metropolitan Correctional Center on August 10, 2019. The death was ruled suicide, though circumstances remain disputed.",
con:[
{t:"ghislaine-maxwell",r:"Long-time associate and convicted co-conspirator"},{t:"leslie-wexner",r:"Primary financial client; granted power of attorney"},{t:"leon-black",r:"Apollo co-founder; paid $158M+ in fees post-conviction"},
{t:"bill-clinton",r:"26+ flights on Epstein's aircraft"},{t:"donald-trump",r:"Social acquaintance 1990s-2000s"},{t:"prince-andrew",r:"Close friend; visited multiple properties"},
{t:"alan-dershowitz",r:"Defense attorney; negotiated 2008 NPA"},{t:"jean-luc-brunel",r:"MC2 founder; Epstein funded agency"},{t:"sarah-kellen",r:"Assistant; named co-conspirator"},
{t:"lesley-groff",r:"Executive assistant; 230,115 emails"},{t:"donald-barr",r:"Dalton headmaster who hired Epstein 1973"},{t:"bill-barr",r:"AG during Epstein's 2019 arrest and death"},
{t:"alexander-acosta",r:"Negotiated 2008 NPA"},{t:"bill-gates",r:"Multiple meetings 2011-2014"},{t:"glenn-dubin",r:"Hedge fund manager; long-time associate"},
{t:"eva-dubin",r:"Former girlfriend"},{t:"reid-hoffman",r:"Visited mansion and island"},{t:"joi-ito",r:"MIT Media Lab; solicited donations"},
{t:"larry-summers",r:"Former Treasury Sec; meetings with Epstein"},{t:"steven-pinker",r:"Flew on plane; linguistic analysis for defense"},{t:"noam-chomsky",r:"Met multiple times post-conviction"},
{t:"lawrence-krauss",r:"Physicist; defended Epstein publicly"},{t:"marvin-minsky",r:"MIT AI pioneer; island conference"},{t:"ronald-lauder",r:"Estee Lauder heir; social connection"},
{t:"jes-staley",r:"JPMorgan exec; 1,200+ emails"},{t:"larry-visoski",r:"Personal pilot; 38,726 emails"},{t:"darren-indyke",r:"Attorney; co-executor of estate"},
{t:"rich-kahn",r:"IT specialist; 92,049 emails"},{t:"karyna-shuliak",r:"Last girlfriend; visited in jail"},{t:"ehud-barak",r:"Former Israeli PM; Carbyne business"},
{t:"nicole-junkermann",r:"Investor; business connections"},{t:"peter-mandelson",r:"British politician; flight logs"},{t:"tom-pritzker",r:"Hyatt heir; in contacts"},
{t:"woody-allen",r:"Socialized in New York"},{t:"peggy-siegal",r:"Publicist; rehabilitated reputation post-2008"},{t:"deepak-chopra",r:"In contacts and emails"},
{t:"boris-nikolic",r:"Gates advisor; named backup executor of will"},{t:"peter-thiel",r:"In contacts"},{t:"elon-musk",r:"In correspondence; Maxwell at SpaceX"},
{t:"martin-nowak",r:"Harvard prof; received $6.5M"},{t:"stephen-hawking",r:"2006 island conference"},{t:"nadia-marcinkova",r:"Allegedly brought from Yugoslavia as teen"},
{t:"adriana-ross",r:"Named co-conspirator; immunity under NPA"},{t:"virginia-giuffre",r:"Key accuser; recruited at 16"},{t:"courtney-wild",r:"Victim; challenged NPA"},
{t:"kevin-spacey",r:"Flight logs; on aircraft"},{t:"bill-richardson",r:"Named in filings"},{t:"george-mitchell",r:"Named by Giuffre"},
{t:"david-copperfield",r:"Named in court filings"},{t:"naomi-campbell",r:"Contacts and flight logs"},{t:"chris-tucker",r:"Flew on plane with Clinton"},
{t:"kenneth-starr",r:"Defense attorney; negotiated NPA"}
],inst:["Dalton School (teacher 1973-75)","Bear Stearns (1976-81)","J. Epstein & Co.","Financial Trust Co.","Southern Trust Co."],
props:["9 East 71st St, Manhattan","El Brillo Way, Palm Beach","Zorro Ranch, NM","Little St. James, USVI","Great St. James, USVI","Ave Foch, Paris"]},

"ghislaine-maxwell":{n:"Ghislaine Maxwell",b:"December 25, 1961",cat:"Inner Circle",
sum:"British socialite and convicted sex trafficker. Daughter of Robert Maxwell. Convicted December 2021 on five counts including sex trafficking of a minor. Serving 20-year sentence.",
con:[{t:"jeffrey-epstein",r:"Romantic partner turned co-conspirator"},{t:"robert-maxwell",r:"Father"},{t:"prince-andrew",r:"Introduced him to Epstein"},{t:"virginia-giuffre",r:"Giuffre alleges recruitment at 16"},{t:"jean-luc-brunel",r:"Modeling industry associate"},{t:"sarah-kellen",r:"Worked together"},{t:"scott-borgerson",r:"Secret husband"},{t:"elon-musk",r:"Photographed together"},{t:"kevin-spacey",r:"On aircraft together"},{t:"bill-clinton",r:"Social relationship"}],
inst:["TerraMar Project (founder)","Oxford University (alumna)"]},

"donald-barr":{n:"Donald Barr",b:"August 2, 1921",d:"February 5, 2004",cat:"Historical",
sum:"Dalton School headmaster (1964-74). Hired Epstein as teacher in 1973 despite lacking a degree. Father of AG William Barr. OSS veteran. Wrote 'Space Relations' (1973), a novel depicting sexual slavery.",
con:[{t:"jeffrey-epstein",r:"Hired at Dalton 1973"},{t:"bill-barr",r:"Son; became AG"}],inst:["Dalton School","Columbia University","OSS"]},

"bill-barr":{n:"William P. Barr",b:"May 23, 1950",cat:"Government",
sum:"U.S. Attorney General under Bush and Trump. Father hired Epstein at Dalton. Oversaw DOJ during 2019 arrest and death. Called it 'perfect storm of screw-ups.'",
con:[{t:"donald-barr",r:"Son of man who hired Epstein"},{t:"jeffrey-epstein",r:"Oversaw DOJ during arrest/death"},{t:"donald-trump",r:"Served as AG"},{t:"alexander-acosta",r:"NPA scrutinized under his DOJ"}],inst:["DOJ (Attorney General)","Kirkland & Ellis","CIA (early career)"]},

"leslie-wexner":{n:"Leslie Wexner",b:"September 8, 1937",cat:"Finance",
sum:"Billionaire founder of L Brands (Victoria's Secret, The Limited). Epstein's key client. Granted power of attorney. Transferred Manhattan townhouse. Later said Epstein 'misappropriated vast sums.'",
con:[{t:"jeffrey-epstein",r:"Primary client; granted power of attorney"},{t:"abigail-wexner",r:"Wife"}],inst:["L Brands (founder)","Victoria's Secret","Wexner Foundation"]},

"leon-black":{n:"Leon Black",b:"July 31, 1951",cat:"Finance",
sum:"Apollo Global Management co-founder. Paid Epstein $158M+ in advisory fees 2012-2017, after conviction. Stepped down as CEO March 2021.",
con:[{t:"jeffrey-epstein",r:"$158M+ in fees post-conviction"},{t:"glenn-dubin",r:"Both in Epstein's circle"},{t:"josh-harris",r:"Apollo co-founder"},{t:"marc-rowan",r:"Apollo co-founder"}],inst:["Apollo Global Management","MoMA (former chairman)"]},

"prince-andrew":{n:"Prince Andrew, Duke of York",b:"February 19, 1960",cat:"Royalty",
sum:"British Royal Family member. Close friendship with Epstein. Giuffre filed suit alleging trafficking at 17. Settled Feb 2022 for reported £12M. Stripped of military titles.",
con:[{t:"jeffrey-epstein",r:"Close friend; visited properties"},{t:"ghislaine-maxwell",r:"Introduced him to Epstein"},{t:"virginia-giuffre",r:"Settled civil suit"},{t:"sarah-ferguson",r:"Ex-wife; Epstein arranged £15K payment"}],inst:["British Royal Family","Royal Navy"]},

"bill-clinton":{n:"Bill Clinton",b:"August 19, 1946",cat:"Political",
sum:"42nd President. Flight logs show 26+ flights on Epstein's aircraft. Denied visiting island — some witnesses contradict.",
con:[{t:"jeffrey-epstein",r:"26+ flights on aircraft"},{t:"ghislaine-maxwell",r:"Social relationship"},{t:"doug-band",r:"Advisor who managed relationship"},{t:"kevin-spacey",r:"Traveled together on plane"},{t:"chris-tucker",r:"Flew together for Foundation trips"}],inst:["White House (1993-2001)","Clinton Foundation"]},

"donald-trump":{n:"Donald Trump",b:"June 14, 1946",cat:"Political",
sum:"45th and 47th President. Social acquaintance of Epstein in 1990s-2000s. Called Epstein 'terrific guy' 2002. Later banned from Mar-a-Lago. Giuffre recruited at Mar-a-Lago.",
con:[{t:"jeffrey-epstein",r:"Social acquaintance 1990s-2000s"},{t:"alexander-acosta",r:"Appointed Labor Secretary"},{t:"bill-barr",r:"Appointed AG"},{t:"alan-dershowitz",r:"Impeachment defense"},{t:"tom-barrack",r:"Close ally"},{t:"ronald-lauder",r:"Long-time friend"},{t:"kevin-warsh",r:"Considered for Fed/Treasury"}],inst:["White House","Trump Organization","Mar-a-Lago"]},

"alan-dershowitz":{n:"Alan Dershowitz",b:"September 1, 1938",cat:"Legal",
sum:"Harvard Law professor emeritus. Epstein defense attorney who helped negotiate 2008 NPA. Accused by Giuffre — denies. Mutual defamation claims settled.",
con:[{t:"jeffrey-epstein",r:"Defense attorney; negotiated NPA"},{t:"virginia-giuffre",r:"Accused by Giuffre; claims settled"},{t:"kenneth-starr",r:"Fellow defense attorneys"},{t:"donald-trump",r:"Impeachment defense"},{t:"steven-pinker",r:"Pinker provided linguistic analysis"}],inst:["Harvard Law School"]},

"alexander-acosta":{n:"R. Alexander Acosta",b:"January 16, 1969",cat:"Government",
sum:"Former U.S. Attorney who negotiated the 2008 NPA. Epstein served 13 months with work release; co-conspirators got immunity. Trump's Labor Secretary; resigned July 2019. Reportedly told transition team Epstein 'belonged to intelligence.'",
con:[{t:"jeffrey-epstein",r:"Negotiated 2008 NPA"},{t:"donald-trump",r:"Appointed Labor Sec; resigned"},{t:"bill-barr",r:"NPA scrutinized under Barr"},{t:"kenneth-starr",r:"Starr on defense team"},{t:"courtney-wild",r:"Wild challenged the NPA"}],inst:["U.S. Attorney, S.D. Florida","U.S. Dept. of Labor"]},

"kenneth-starr":{n:"Kenneth Starr",b:"July 21, 1946",d:"September 13, 2022",cat:"Legal",
sum:"Former Solicitor General. Led Clinton-Lewinsky investigation. Part of Epstein's defense team that negotiated the NPA.",
con:[{t:"jeffrey-epstein",r:"Defense team"},{t:"alexander-acosta",r:"Negotiated NPA with Acosta"},{t:"alan-dershowitz",r:"Fellow defense team"},{t:"bill-clinton",r:"Led Lewinsky investigation"}],inst:["Kirkland & Ellis","Baylor University","U.S. Solicitor General"]},

"virginia-giuffre":{n:"Virginia Giuffre",b:"August 9, 1983",cat:"Victim/Accuser",
sum:"Key accuser. Alleges Maxwell recruited her at 16 at Mar-a-Lago. Filed lawsuits against Epstein, Maxwell, Prince Andrew, and Dershowitz. Her testimony brought renewed attention to Epstein's crimes.",
con:[{t:"jeffrey-epstein",r:"Alleges trafficking from age 16"},{t:"ghislaine-maxwell",r:"Recruited at Mar-a-Lago"},{t:"prince-andrew",r:"Settled suit 2022"},{t:"alan-dershowitz",r:"Mutual claims settled"},{t:"jean-luc-brunel",r:"Accused of abuse"},{t:"george-mitchell",r:"Named in depositions"},{t:"bill-richardson",r:"Named in depositions"},{t:"marvin-minsky",r:"Alleged she was directed to Minsky"}]},

"courtney-wild":{n:"Courtney Wild",cat:"Victim/Accuser",
sum:"Victim who challenged the 2008 NPA under the Crime Victims' Rights Act.",
con:[{t:"jeffrey-epstein",r:"Victim; challenged NPA"},{t:"alexander-acosta",r:"Challenged NPA Acosta negotiated"}]},

"bill-gates":{n:"Bill Gates",b:"October 28, 1955",cat:"Tech",
sum:"Microsoft co-founder. Met Epstein multiple times 2011-2014, after conviction. Visited townhouse. Flew on plane. Called it 'a huge mistake.' Factor in divorce.",
con:[{t:"jeffrey-epstein",r:"Multiple meetings 2011-2014"},{t:"boris-nikolic",r:"Gates advisor named backup executor of will"},{t:"melinda-french-gates",r:"Ex-wife; concerned about meetings"},{t:"joi-ito",r:"MIT philanthropy"},{t:"larry-summers",r:"Policy and philanthropy"}],inst:["Microsoft","Gates Foundation"]},

"melinda-french-gates":{n:"Melinda French Gates",b:"August 15, 1964",cat:"Philanthropy",
sum:"Philanthropist. Met Epstein once; deeply uncomfortable. Cited as factor in 2021 divorce from Bill Gates.",
con:[{t:"bill-gates",r:"Ex-husband"},{t:"jeffrey-epstein",r:"Met once; disturbed"}],inst:["Gates Foundation","Pivotal Ventures"]},

"jean-luc-brunel":{n:"Jean-Luc Brunel",b:"November 19, 1946",d:"February 19, 2022",cat:"Inner Circle",
sum:"French modeling agent. Founded MC2 with Epstein funding. Arrested Paris 2020. Found dead in cell Feb 2022 — second key figure to die in custody.",
con:[{t:"jeffrey-epstein",r:"Epstein funded MC2"},{t:"ghislaine-maxwell",r:"Close associate"},{t:"virginia-giuffre",r:"Accused by Giuffre"}],inst:["MC2 Model Management","Karin Models"]},

"sarah-kellen":{n:"Sarah Kellen",b:"c. 1980",cat:"Inner Circle",
sum:"Personal assistant. Named co-conspirator; immunity under 2008 NPA. Allegedly scheduled victims. Married NASCAR driver Brian Vickers.",
con:[{t:"jeffrey-epstein",r:"Assistant; co-conspirator"},{t:"ghislaine-maxwell",r:"Worked together"},{t:"nadia-marcinkova",r:"Fellow associate"},{t:"adriana-ross",r:"Fellow co-conspirator"},{t:"brian-vickers",r:"Husband"}]},

"lesley-groff":{n:"Lesley Groff",cat:"Inner Circle",
sum:"Executive assistant. Most frequent in email archive: 230,115 emails. Managed scheduling, travel, communications.",
con:[{t:"jeffrey-epstein",r:"Executive assistant; 230K emails"},{t:"sarah-kellen",r:"Co-workers"},{t:"rich-kahn",r:"Operational staff"}]},

"nadia-marcinkova":{n:"Nadia Marcinkova",cat:"Inner Circle",
sum:"Allegedly purchased from her family in Yugoslavia as a young teenager. Named in depositions as both participant and victim.",
con:[{t:"jeffrey-epstein",r:"Brought from Yugoslavia"},{t:"sarah-kellen",r:"Fellow associate"}]},

"adriana-ross":{n:"Adriana Ross",cat:"Inner Circle",
sum:"From Poland. Named co-conspirator. Granted immunity under 2008 NPA.",
con:[{t:"jeffrey-epstein",r:"Co-conspirator; immunity"},{t:"sarah-kellen",r:"Fellow co-conspirator"}]},

"rich-kahn":{n:"Rich Kahn",cat:"Operations",
sum:"IT specialist. 92,049 emails in archive. Managed technology. Co-executor of Epstein's estate.",
con:[{t:"jeffrey-epstein",r:"IT; 92K emails"},{t:"lesley-groff",r:"Operational staff"},{t:"darren-indyke",r:"Co-executor"}]},

"larry-visoski":{n:"Larry Visoski",b:"c. 1960",cat:"Operations",
sum:"Personal pilot of the 'Lolita Express.' 38,726 emails. Testified about passengers.",
con:[{t:"jeffrey-epstein",r:"Pilot"},{t:"david-rodgers",r:"Fellow pilot"}]},

"david-rodgers":{n:"David Rodgers",cat:"Operations",
sum:"Second pilot. Maintained flight logs that became critical evidence.",
con:[{t:"jeffrey-epstein",r:"Pilot; kept logs"},{t:"larry-visoski",r:"Fellow pilot"}]},

"karyna-shuliak":{n:"Karyna Shuliak",cat:"Personal Associate",
sum:"Dentist from Belarus. Last known girlfriend. 48,933 emails. Visited Epstein in jail.",
con:[{t:"jeffrey-epstein",r:"Girlfriend; 48K emails; visited in jail"}]},

"darren-indyke":{n:"Darren Indyke",cat:"Legal",
sum:"Attorney. Co-executor of Epstein's estate alongside Rich Kahn.",
con:[{t:"jeffrey-epstein",r:"Attorney; co-executor"},{t:"rich-kahn",r:"Co-executor"}]},

"ronald-lauder":{n:"Ronald Lauder",b:"February 26, 1944",cat:"Finance",
sum:"Estee Lauder heir. Ambassador to Austria under Reagan. World Jewish Congress president. Son-in-law Kevin Warsh served on Federal Reserve Board.",
con:[{t:"jeffrey-epstein",r:"Social connection"},{t:"kevin-warsh",r:"Son-in-law; married daughter Jane"},{t:"donald-trump",r:"Long-time friend"},{t:"ehud-barak",r:"Israeli circles"}],inst:["Estee Lauder","World Jewish Congress","U.S. Ambassador to Austria"]},

"kevin-warsh":{n:"Kevin Warsh",b:"January 13, 1970",cat:"Finance",
sum:"Former Fed Governor (2006-2011). Morgan Stanley alum. Married Jane Lauder. Considered for Fed Chair and Treasury under Trump.",
con:[{t:"ronald-lauder",r:"Father-in-law"},{t:"donald-trump",r:"Considered for Fed/Treasury"}],inst:["Federal Reserve Board","Morgan Stanley","Hoover Institution"]},

"jes-staley":{n:"Jes Staley",b:"December 27, 1956",cat:"Finance",
sum:"Former Barclays CEO and JPMorgan exec. 1,200+ emails with Epstein. JPMorgan paid $365M+ to settle. Resigned Barclays 2021.",
con:[{t:"jeffrey-epstein",r:"Close relationship; 1,200+ emails"},{t:"jamie-dimon",r:"JPMorgan CEO"},{t:"mary-erdoes",r:"JPMorgan colleague"}],inst:["JPMorgan","Barclays (CEO, resigned)"]},

"jamie-dimon":{n:"Jamie Dimon",b:"March 13, 1956",cat:"Finance",
sum:"JPMorgan CEO. Bank kept Epstein as client until 2013. Paid $365M+ to settle trafficking-related claims.",
con:[{t:"jeffrey-epstein",r:"CEO while bank had Epstein as client"},{t:"jes-staley",r:"Staley was exec"},{t:"mary-erdoes",r:"Executive team"}],inst:["JPMorgan Chase (CEO)"]},

"mary-erdoes":{n:"Mary Erdoes",cat:"Finance",
sum:"Senior JPMorgan exec. Internal comms showed involvement in Epstein account decisions.",
con:[{t:"jes-staley",r:"Colleagues"},{t:"jamie-dimon",r:"Executive team"}],inst:["JPMorgan Chase"]},

"glenn-dubin":{n:"Glenn Dubin",b:"1957",cat:"Finance",
sum:"Highbridge Capital co-founder. Wife Eva is Epstein's ex. Giuffre alleged she was directed to the Dubin household.",
con:[{t:"jeffrey-epstein",r:"Long-time associate"},{t:"eva-dubin",r:"Wife; formerly dated Epstein"},{t:"leon-black",r:"Both in Epstein's circle"}],inst:["Highbridge Capital"]},

"eva-dubin":{n:"Eva Dubin",b:"1961",cat:"Social",
sum:"Former Miss Sweden (1980). Dated Epstein in 1980s. Married Glenn Dubin. Maintained social contact.",
con:[{t:"jeffrey-epstein",r:"Former girlfriend"},{t:"glenn-dubin",r:"Husband"}]},

"nicole-junkermann":{n:"Nicole Junkermann",b:"April 27, 1975",cat:"Finance",
sum:"German investor. Connected through business. Co-investor with Barak in Carbyne. Later on NHS Digital board.",
con:[{t:"jeffrey-epstein",r:"Business connections"},{t:"ehud-barak",r:"Co-investor in Carbyne"}],inst:["NJF Holdings","Carbyne","NHS Digital"]},

"ehud-barak":{n:"Ehud Barak",b:"February 12, 1942",cat:"Political",
sum:"Former Israeli PM (1999-2001). Visited Epstein properties. Carbyne investor. Photographed entering mansion.",
con:[{t:"jeffrey-epstein",r:"Visited properties; Carbyne"},{t:"nicole-junkermann",r:"Carbyne co-investor"},{t:"ronald-lauder",r:"Israeli circles"}],inst:["PM of Israel","IDF","Carbyne"]},

"reid-hoffman":{n:"Reid Hoffman",b:"August 5, 1967",cat:"Tech",
sum:"LinkedIn co-founder. Visited Epstein's mansion and island. Later apologized.",
con:[{t:"jeffrey-epstein",r:"Visited mansion and island"},{t:"joi-ito",r:"Tech circles"},{t:"elon-musk",r:"PayPal network"},{t:"peter-thiel",r:"Silicon Valley"}],inst:["LinkedIn","Greylock Partners"]},

"elon-musk":{n:"Elon Musk",b:"June 28, 1971",cat:"Tech",
sum:"Tesla/SpaceX CEO. In some Epstein correspondence. Maxwell attended SpaceX event. Photographed with Maxwell 2014.",
con:[{t:"jeffrey-epstein",r:"In correspondence"},{t:"ghislaine-maxwell",r:"Maxwell at SpaceX"},{t:"kimbal-musk",r:"Brother; also in contacts"},{t:"reid-hoffman",r:"PayPal"},{t:"peter-thiel",r:"PayPal co-founder"}],inst:["Tesla","SpaceX","X/Twitter"]},

"kimbal-musk":{n:"Kimbal Musk",b:"September 20, 1972",cat:"Tech",
sum:"Entrepreneur. Elon's brother. In Epstein's contacts and emails.",
con:[{t:"jeffrey-epstein",r:"In contacts"},{t:"elon-musk",r:"Brother"}],inst:["The Kitchen","Tesla (board)"]},

"peter-thiel":{n:"Peter Thiel",b:"October 11, 1967",cat:"Tech",
sum:"PayPal co-founder. In Epstein's contacts. Extent unclear.",
con:[{t:"jeffrey-epstein",r:"In contacts"},{t:"reid-hoffman",r:"Silicon Valley"},{t:"elon-musk",r:"PayPal"}],inst:["PayPal","Palantir","Founders Fund"]},

"boris-nikolic":{n:"Boris Nikolic",b:"c. 1970",cat:"Tech",
sum:"Biotech VC. Former Gates science advisor. Named backup executor of Epstein's will — declined.",
con:[{t:"jeffrey-epstein",r:"Named backup executor"},{t:"bill-gates",r:"Science advisor to Gates"}],inst:["Biomatics Capital","Gates Foundation (former)"]},

"joi-ito":{n:"Joi Ito",b:"June 19, 1966",cat:"Tech",
sum:"Former MIT Media Lab director. Solicited Epstein donations post-conviction. Resigned September 2019.",
con:[{t:"jeffrey-epstein",r:"Solicited donations post-conviction"},{t:"bill-gates",r:"Gates donated to Media Lab"},{t:"reid-hoffman",r:"Tech circles"},{t:"nicholas-negroponte",r:"Media Lab co-founder"},{t:"seth-lloyd",r:"Both got Epstein money at MIT"}],inst:["MIT Media Lab (resigned)","Creative Commons"]},

"nicholas-negroponte":{n:"Nicholas Negroponte",b:"December 1, 1943",cat:"Tech",
sum:"MIT Media Lab co-founder. Supported accepting Epstein donations after conviction.",
con:[{t:"jeffrey-epstein",r:"Supported accepting donations"},{t:"joi-ito",r:"Media Lab co-founder"}],inst:["MIT Media Lab","One Laptop per Child"]},

"larry-summers":{n:"Larry Summers",b:"November 30, 1954",cat:"Academia",
sum:"Former Treasury Secretary and Harvard President. Multiple meetings. Flew on Epstein's plane. Accepted Epstein donations for Harvard.",
con:[{t:"jeffrey-epstein",r:"Meetings; flew on plane; Harvard donations"},{t:"bill-gates",r:"Policy/philanthropy"},{t:"martin-nowak",r:"Nowak got Epstein funding under Summers"}],inst:["U.S. Treasury (Secretary)","Harvard (president)"]},

"steven-pinker":{n:"Steven Pinker",b:"September 18, 1954",cat:"Academia",
sum:"Harvard cognitive psychologist. In contacts; flew on plane. Provided linguistic analysis for defense at Dershowitz's request.",
con:[{t:"jeffrey-epstein",r:"In contacts; flew on plane"},{t:"alan-dershowitz",r:"Provided analysis at his request"}],inst:["Harvard University"]},

"noam-chomsky":{n:"Noam Chomsky",b:"December 7, 1928",cat:"Academia",
sum:"MIT linguist. Met Epstein multiple times post-conviction. Had Epstein arrange a fund transfer.",
con:[{t:"jeffrey-epstein",r:"Multiple meetings post-conviction"},{t:"woody-allen",r:"Dined together with Epstein"}],inst:["MIT"]},

"martin-nowak":{n:"Martin Nowak",cat:"Academia",
sum:"Harvard math/biology professor. Program for Evolutionary Dynamics received ~$6.5M from Epstein. Gave Epstein office space.",
con:[{t:"jeffrey-epstein",r:"$6.5M; gave office space"},{t:"larry-summers",r:"Both at Harvard during donations"}],inst:["Harvard"]},

"stephen-hawking":{n:"Stephen Hawking",b:"January 8, 1942",d:"March 14, 2018",cat:"Academia",
sum:"Theoretical physicist. Attended 2006 conference on Epstein's island.",
con:[{t:"jeffrey-epstein",r:"2006 island conference"},{t:"lawrence-krauss",r:"Fellow physicist"}],inst:["University of Cambridge"]},

"lawrence-krauss":{n:"Lawrence Krauss",b:"May 27, 1954",cat:"Academia",
sum:"Physicist who publicly defended Epstein post-2008. Received funding. Later faced own misconduct allegations.",
con:[{t:"jeffrey-epstein",r:"Defended publicly; received funding"},{t:"stephen-hawking",r:"Fellow physicist"}],inst:["Arizona State University (former)"]},

"marvin-minsky":{n:"Marvin Minsky",b:"August 9, 1927",d:"January 24, 2016",cat:"Academia",
sum:"AI pioneer at MIT. Giuffre alleged she was directed to Minsky on island. Widow denied. Attended island conference.",
con:[{t:"jeffrey-epstein",r:"Island conferences; Giuffre allegations"},{t:"virginia-giuffre",r:"Alleged she was directed to Minsky"}],inst:["MIT (AI Lab co-founder)"]},

"seth-lloyd":{n:"Seth Lloyd",cat:"Academia",
sum:"MIT quantum computing professor. Received $225K for research and $60K personal gift from Epstein.",
con:[{t:"jeffrey-epstein",r:"Research funding and personal payments"},{t:"joi-ito",r:"Both got Epstein money at MIT"}],inst:["MIT"]},

"peter-mandelson":{n:"Peter Mandelson",b:"October 21, 1953",cat:"Political",
sum:"British Labour politician. In flight logs and contacts. Visited properties.",
con:[{t:"jeffrey-epstein",r:"Flight logs; contacts"},{t:"prince-andrew",r:"British circles"}],inst:["UK Parliament","European Commission"]},

"bill-richardson":{n:"Bill Richardson",b:"November 15, 1947",d:"September 1, 2023",cat:"Political",
sum:"Former NM Governor and UN Ambassador. Named by Giuffre. Denied allegations. Epstein had NM property.",
con:[{t:"jeffrey-epstein",r:"Named in depositions"},{t:"virginia-giuffre",r:"Named by Giuffre"}],inst:["Governor of NM","UN Ambassador"]},

"george-mitchell":{n:"George Mitchell",b:"August 20, 1933",cat:"Political",
sum:"Former Senate Majority Leader. Named by Giuffre. Denied allegations.",
con:[{t:"jeffrey-epstein",r:"Named in depositions"},{t:"virginia-giuffre",r:"Named by Giuffre"}],inst:["U.S. Senate","DLA Piper"]},

"doug-band":{n:"Doug Band",b:"1972",cat:"Political",
sum:"Clinton senior advisor. Managed post-presidential relationships including Epstein travel.",
con:[{t:"bill-clinton",r:"Senior advisor"},{t:"jeffrey-epstein",r:"Facilitated Clinton-Epstein"}],inst:["Clinton Foundation","Teneo"]},

"tom-barrack":{n:"Tom Barrack",b:"April 27, 1947",cat:"Finance",
sum:"Colony Capital founder. Close Trump ally. Chaired 2017 inaugural committee.",
con:[{t:"donald-trump",r:"Close ally; chaired inaugural"}],inst:["Colony Capital","Trump Inaugural Committee"]},

"josh-harris":{n:"Josh Harris",b:"1965",cat:"Finance",
sum:"Apollo co-founder. Washington Commanders majority owner.",
con:[{t:"leon-black",r:"Apollo co-founder"},{t:"marc-rowan",r:"Apollo co-founder"}],inst:["Apollo Global Management","Washington Commanders"]},

"marc-rowan":{n:"Marc Rowan",b:"July 1962",cat:"Finance",
sum:"Apollo co-founder. Became CEO after Black stepped down.",
con:[{t:"leon-black",r:"Succeeded as CEO"},{t:"josh-harris",r:"Apollo co-founder"}],inst:["Apollo Global Management (CEO)"]},

"tom-pritzker":{n:"Tom Pritzker",b:"June 6, 1950",cat:"Finance",
sum:"Hyatt Hotels chairman. In Epstein's contacts.",
con:[{t:"jeffrey-epstein",r:"In contacts"}],inst:["Hyatt Hotels"]},

"peggy-siegal":{n:"Peggy Siegal",cat:"Social",
sum:"Hollywood publicist. Helped rehabilitate Epstein post-2008. Organized Prince Andrew dinner at mansion 2010.",
con:[{t:"jeffrey-epstein",r:"Rehabilitated reputation"},{t:"prince-andrew",r:"Organized dinner"},{t:"woody-allen",r:"NYC social scene"}]},

"woody-allen":{n:"Woody Allen",b:"December 1, 1935",cat:"Entertainment",
sum:"Film director. Socialized with Epstein. In contacts.",
con:[{t:"jeffrey-epstein",r:"Socialized; in contacts"},{t:"noam-chomsky",r:"Dined together with Epstein"}]},

"kevin-spacey":{n:"Kevin Spacey",b:"July 26, 1959",cat:"Entertainment",
sum:"Actor. In flight logs. Photographed in cockpit of Epstein's aircraft. Flew with Clinton.",
con:[{t:"jeffrey-epstein",r:"Flight logs; on aircraft"},{t:"ghislaine-maxwell",r:"Photographed together"},{t:"bill-clinton",r:"Flew together"}]},

"naomi-campbell":{n:"Naomi Campbell",b:"May 22, 1970",cat:"Entertainment",
sum:"Supermodel. In contacts and flight logs.",
con:[{t:"jeffrey-epstein",r:"Contacts and flight logs"}]},

"chris-tucker":{n:"Chris Tucker",b:"August 31, 1971",cat:"Entertainment",
sum:"Actor. Flew on Epstein's plane with Clinton for Foundation trips.",
con:[{t:"jeffrey-epstein",r:"Flew on plane"},{t:"bill-clinton",r:"Flew together"}]},

"david-copperfield":{n:"David Copperfield",b:"September 16, 1956",cat:"Entertainment",
sum:"Illusionist. Named in court filings. In contacts.",
con:[{t:"jeffrey-epstein",r:"Court filings; contacts"}]},

"deepak-chopra":{n:"Deepak Chopra",b:"October 22, 1946",cat:"Social",
sum:"Author. In contacts and email archives.",
con:[{t:"jeffrey-epstein",r:"Contacts and emails"}]},

"robert-maxwell":{n:"Robert Maxwell",b:"June 10, 1923",d:"November 5, 1991",cat:"Historical",
sum:"British media mogul. Ghislaine's father. Found drowned near yacht 1991. Looted pension funds. Alleged Mossad connections.",
con:[{t:"ghislaine-maxwell",r:"Father"}],inst:["Mirror Group","Macmillan Publishers","Pergamon Press"]},

"sarah-ferguson":{n:"Sarah Ferguson",b:"October 15, 1959",cat:"Royalty",
sum:"Duchess of York. Prince Andrew's ex-wife. Epstein arranged £15K payment to her.",
con:[{t:"prince-andrew",r:"Ex-husband"},{t:"jeffrey-epstein",r:"Arranged £15K payment"}]},

"scott-borgerson":{n:"Scott Borgerson",b:"c. 1976",cat:"Social",
sum:"CargoMetrics CEO. Secretly married Maxwell.",
con:[{t:"ghislaine-maxwell",r:"Secret husband"}],inst:["CargoMetrics","U.S. Coast Guard"]},

"abigail-wexner":{n:"Abigail Wexner",cat:"Philanthropy",
sum:"Wife of Leslie Wexner. Co-chair of Wexner Foundation.",
con:[{t:"leslie-wexner",r:"Wife"}],inst:["Wexner Foundation"]},

"brian-vickers":{n:"Brian Vickers",b:"October 24, 1983",cat:"Other",
sum:"NASCAR driver. Married Sarah Kellen.",
con:[{t:"sarah-kellen",r:"Husband"}]}
};
