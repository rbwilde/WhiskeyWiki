PRAGMA foreign_key = ON;

CREATE TABLE user(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	email VARCHAR NOT NULL
);

INSERT INTO user (name,email) VALUES ('Raina','rainawilde@gmail.com');

CREATE TABLE country(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	content TEXT,
	whiskey_id INTEGER
);

INSERT INTO country (name,content) VALUES ('Scotland','Scotland is the most beautiful place in the whole wide world. Scotch whiskies are generally distilled twice, although some are distilled a third time and others even up to twenty times. Scotch Whisky Regulations require anything bearing the label "Scotch" to be distilled in Scotland and matured for a minimum of three years in oak casks, among other, more specific criteria. Any age statement on the bottle, in the form of a number, must reflect the age of the youngest Scotch whisky used to produce that product. A whisky with an age statement is known as guaranteed age whisky. Scotch whisky without an age statement may, by law, be as young as three years old. The basic types of Scotch are malt and grain, which are combined to create blends. Scotch malt whiskies are divided into five main regions: Highland, Lowland, Islay, Speyside and Campbeltown.');
INSERT INTO country (name,content) VALUES ('Ireland','Irish whiskeys are normally distilled thrice, Cooley Distillery being the exception as they also double distill. Though traditionally distilled using pot stills, the column still is now used to produce grain whiskey for blends. By law, Irish whiskey must be produced in Ireland and aged in wooden casks for a period of no less than three years, although in practice it is usually three or four times that period.[56] Unpeated malt is almost always used, the main exception being Connemara Peated Malt whiskey. There are several types of whiskey common to Ireland: single malt, single grain, blended whiskey and pure pot still whiskey.');
INSERT INTO country (name,content) VALUES ('USA','American whiskey is distilled from a fermented mash of cereal grain. It must have the taste, aroma, and other characteristics commonly attributed to whiskey.American whiskey must be distilled to no more than 80% alcohol by volume, and barrelled at no more than 125 proof. Only water may be added to the final product; the addition of colouring or flavouring is prohibited. These whiskeys must be aged in new charred-oak containers, except for corn whiskey which does not have to be aged. If it is aged, it must be in uncharred oak barrels or in used barrels. Corn whiskey is usually unaged and sold as a legal version of moonshine. If one of these whiskey types reaches two years aging or beyond, it is additionally designated as straight, e.g., straight rye whiskey. A whiskey that fulfils all above requirements but derives from less than 51% of any one specific grain can be called simply a straight whiskey without naming a grain.');
INSERT INTO country (name,content) VALUES ('Spain','Has, like, one whiskey.');
INSERT INTO country (name,content) VALUES ('Sweden','Whisky started being produced in Sweden in 1955 by the now defunct Skeppets whisky brand. Their last bottle was sold in 1971.[64] In 1999 Mackmyra Whisky was founded and is today the largest producer and has won several awards including European Whisky of the Year in Jim Murrays 2011 Whisky Bible and the International Wine & Spirits Competition (IWSC) 2012 Award for Best European Spirits Producer of 2012.');
INSERT INTO country (name,content) VALUES ('Wales','Although distillation of whisky in Wales began in Middle Ages there were no commercially operated distilleries during the 20th century. The rise of the temperance movement saw the decline the commercial production of liquor during the 19th century and in 1894 Welsh whisky production ceased. Recently, however, there has been a revival of Welsh whisky.');
INSERT INTO country (name,content) VALUES ('England','There are currently at least six distilleries producing English whisky. Though England is not very well known for making whisky, there were distillers previously operating in London, Liverpool and Bristol until the late 19th century, after which production of English single malt whisky ceased until 2003.');
INSERT INTO country (name,content) VALUES ('Japan','The model for Japanese whiskies is the single malt Scotch, although there are also examples of Japanese blended whiskies. The base is a mash of malted barley, dried in kilns fired with a little peat (although considerably less than in Scotland), and distilled using the pot still method. Before 2000, Japanese whisky was primarily for the domestic market and exports were limited. Japanese whiskies such as Suntory and Nikka won many prestigious international awards between 2007 and 2014. Japanese whisky has earned a reputation for quality.');
INSERT INTO country (name,content) VALUES ('India','India consumes almost as much whisky as the rest of the world put together. Distilled alcoholic beverages that are labelled as "whisky" in India are commonly blends based on neutral spirits that are distilled from fermented molasses with only a small portion consisting of traditional malt whisky, usually about 10 to 12 percent. Outside India, such a drink would more likely be labelled a rum. According to the Scotch Whisky Associations 2013 annual report, "there is no compulsory definition of whisky in India, and the Indian voluntary standard does not require whisky to be distilled from cereals or to be matured." Ninety percent of the whisky consumed in India is molasses-based, although whisky wholly distilled from malt and other grains, is also manufactured and sold. Amrut, the first single malt whisky produced in India, was launched on 24 August 2004.');
INSERT INTO country (name,content) VALUES ('Australia','Australian whiskies have won global whisky awards and medals, including the World Whiskies Awards and the Jim Murray Whisky Bible "Liquid Gold Awards".');
INSERT INTO country (name,content) VALUES ('Canada','By Canadian law Canadian whiskies must be produced and aged in Canada, be distilled from a fermented mash of cereal grain, be aged in wood barrels with a capacity limit of 700 litres (185 US gal; 154 imp gal) for not less than three years, and "possess the aroma, taste and character generally attributed to Canadian whisky". The terms "Canadian Whisky", "Rye Whisky", and "Canadian Rye Whisky" are legally indistinguishable in Canada and do not require any specific grain in their production. Canadian whiskies may contain caramel and flavouring in addition to the distilled mash spirits, and there is no maximum limit on the alcohol level of the distillation. To be exported under one of the "Canadian Whisky" designations, a whisky cannot contain more than 9.09% imported spirits.');
INSERT INTO country (name,content) VALUES ('Taiwan','Has, like, one whiskey.');
INSERT INTO country (name,content) VALUES ('Tasmania','Has, like, one whiskey and devils.');
INSERT INTO country (name,content) VALUES ('New Zealand','Has, like, one whiskey and hobbits.');
INSERT INTO country (name,content) VALUES ('Denmark','Denmark began producing whisky early in 1974. The first Danish single malt to go on sale was Lille Gadegård from Bornholm, in 2005. Lille Gadegård is a winery as well, and uses its own wine casks to mature whisky.');
INSERT INTO country (name,content) VALUES ('Finland','There are two working distilleries in Finland and a third one is under construction. Whisky retail sales in Finland are controlled solely by the state alcohol monopoly Alko and advertisement of strong alcoholic beverages is banned.');
INSERT INTO country (name,content) VALUES ('Germany','German whisky production is a relatively recent phenomenon having only started in the last 30 years. The styles produced resemble those made in Ireland, Scotland and the United States: single malts, blends, wheat, and bourbon-like styles. There is no standard spelling of German whiskies with distilleries using both "whisky" and "whiskey". In 2008 there were 23 distilleries in Germany producing whisky');
INSERT INTO country (name,content) VALUES ('Russia','In 2008 at least two distilleries in the traditionally brandy-producing Caucasus region announced their plans to enter the Russian domestic market with whiskies.');
INSERT INTO country (name,content) VALUES ('South Africa','Has, like, one whiskey and lions.');
INSERT INTO country (name,content) VALUES ('Czech Republic','Has, like, one whiskey.');
INSERT INTO country (name,content) VALUES ('Netherlands','Has, like, one whiskey and a lot of pot... and Heineken, which is gross.');
INSERT INTO country (name,content) VALUES ('France','Has, like, one whiskey and a shitload of wine.');

SELECT * FROM country ORDER BY name;

CREATE TABLE region(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	country_id INTEGER
);

INSERT INTO region (name,country_id) VALUES ("Highland",1);
INSERT INTO region (name,country_id) VALUES ("Lowland",1);
INSERT INTO region (name,country_id) VALUES ("Speyside",1);
INSERT INTO region (name,country_id) VALUES ("Campbeltown",1);
INSERT INTO region (name,country_id) VALUES ("Islay",1);
INSERT INTO region (name,country_id) VALUES ("Islands",1);

CREATE TABLE brand(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	content TEXT,
	-- region_id INTEGER,
	country_id INTEGER
);

CREATE TABLE whiskey(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	content TEXT
);

INSERT INTO whiskey (name,content) VALUES ('Scotch','Scotch whisky, often simply called Scotch, is malt whisky or grain whisky made in Scotland. Scotch whisky must be made in a manner specified by law. All Scotch whisky was originally made from malted barley. Commercial distilleries began introducing whisky made from wheat and rye in the late 18th century. Scotch whisky is divided into five distinct categories: single malt Scotch whisky, single grain Scotch whisky, blended malt Scotch whisky (formerly called "vatted malt" or "pure malt"), blended grain Scotch whisky, and blended Scotch whisky. All Scotch whisky must be aged in oak barrels for at least three years. Any age statement on a bottle of Scotch whisky, expressed in numerical form, must reflect the age of the youngest whisky used to produce that product. A whisky with an age statement is known as guaranteed-age whisky. The first written mention of Scotch whisky is in the Exchequer Rolls of Scotland, 1495. A friar named John Cor was the distiller at Lindores Abbey in the Kingdom of Fife. Many Scotch whisky drinkers will refer to a unit for drinking as a dram.');
INSERT INTO whiskey (name,content) VALUES ('Bourbon','Bourbon whiskey is a type of American whiskey: a barrel-aged distilled spirit made primarily from corn. The name is ultimately derived from the French Bourbon dynasty, although it is disputed whether Bourbon County in Kentucky or Bourbon Street in New Orleans inspired the name. Bourbon has been distilled since the 18th century. The use of the term "Bourbon" for the whiskey has been traced to the 1820s, and the term began to be used consistently in Kentucky in the 1870s. While bourbon may be made anywhere in the United States, it is strongly associated with the American South in general, and with Kentucky in particular. As of 2014, the distillers wholesale market revenue for bourbon sold within the U.S. is about $2.7 billion, and bourbon makes up about two-thirds of the $1.6 billion of U.S. exports of distilled spirits.');
INSERT INTO whiskey (name,content) VALUES ('Rye','Rye is the trickiest of all whiskeys to define. The reason for this comes from a historical naming convention for Rye produced in Canada. While you would assume Rye whiskey must be made predominantly from Rye mash, this is not always the case. Canada has distilled Rye for almost as long as the country has existed, and historically the majority of the mash was comprised of Rye mash. But with no actual rules in place the spirit is now produced with a mash sporting a corn to rye ration as high as 9:1. The only rule to label your whisky as Rye in Canada is for it to have some rye in it, and to possess the aroma, taste and character generally attributed to Canadian whiskey… whatever that is. In American Rye whiskey must be made from a mash made from no less than 51% rye. The other ingredients commonly used include corn and barley. Same as Bourbon it must be aged in charred new oak barrels distilled to an ABV less than 80% (and like bourbon it must be no more than 62.5% when added to the cask). Again, as Bourbon, only Rye which has been aged more than two years may be referred to as Straight. There is only one Rye producer in the world (Alberta Premium, from Canada) which is made from 100% rye mash.');
INSERT INTO whiskey (name,content) VALUES ('Irish','Irish whiskey is whiskey made on the island of Ireland.The word "whiskey" is an Anglicisation of uisce beatha or uisge beatha, a phrase from the Goidelic branch of languages (Irish, Scottish Gaelic and Manx) meaning "water of life" (see aqua vitae). Most Irish pot still whiskey is distilled thrice, while most (but not all) Scotch whisky is distilled twice. Peat is rarely used in the malting process, so that Irish whiskey has a smoother finish as opposed to the smoky, earthy overtones common to some Scotches. There are notable exceptions to these rules in both countries; an example is Connemara peated Irish malt (double distilled) whiskey from the Cooley Distillery in Riverstown, Cooley, County Louth. Irish whiskey was once the most popular spirit in the world, though a long period of decline from the late 19th century onwards greatly damaged the industry.[1] Although Scotland sustains approximately 105 distilleries, Ireland has only seven in current operation – only four of which have been operating long enough to have products sufficiently aged for current sale on the market as of 2013, and only one of which was operating before 1975. Irish whiskey has seen a great resurgence in popularity since the late twentieth century, and has been the fastest growing spirit in the world every year since 1990.[1] The current growth rate is at roughly 20% per annum, prompting the construction and expansion of a number of distilleries.');
INSERT INTO whiskey (name,content) VALUES ('Other Whiskey','These are whiskies that do not fit the criteria for scotch, bourbon, rye, or Irish but are still whiskies. This topic is huge. I wanted to do just Scotch but I was encouraged to do all whiskey by teachers that shall remain nameless.');


CREATE TABLE label(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	brand_id INTEGER,
	whiskey_id INTEGER,
	user_id INTEGER,
	name TEXT,
	age INTEGER,
	content TEXT,
	notes TEXT
);