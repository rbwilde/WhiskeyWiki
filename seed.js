import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('whiskey.db');

const brands = [
['Dewars','Dewars is a blended scotch... so not as good as a single malt. If you disagree make your own damn wiki.',' ',1],
['Jim Beam','Jim Beam is brand of bourbon whiskey produced in Clermont, Kentucky by Beam Suntory. It was one of the best selling brands of bourbon in the world in 2008. Since 1795 (interrupted by Prohibition), seven generations of the Beam family have been involved in whiskey production for the company that produces the brand, which was given the name "Jim Beam" in 1933 in honor of James B. Beam, who rebuilt the business after Prohibition ended.',' ',3],
['Buffalo Trace','Buffalo Trace Distillery is a distillery located in Frankfort, Kentucky. It has historically been known by several names, including most notably, the George T. Stagg Distillery and the O.F.C. Distillery. Its namesake bourbon brand, Buffalo Trace Kentucky Straight Bourbon whiskey, was introduced in August 1999. The company claims the distillery is the oldest continuously-operating distillery in the United States.[3] Located on what the company claims was once an ancient buffalo crossing on the banks of the Kentucky River in Franklin County, the distillery is named after the American bison. The Sazerac Company, an American family-owned producer and importer based in New Orleans, Louisiana, purchased the distillery in 1992 and is now the parent company of Buffalo Trace Distillery',' ',3],
['Hoochery Distillery','Is in Australia and has a cool name so I put it here.',' ',10],
['Timboon Railway Shed Distillery','The Timboon Railway Shed Distillery is a producer of single malt Australian whisky and liqueurs in Timboon, Victoria, Australia. The distillery takes its name from its location in the goods shed at the terminus of the former Timboon railway line.',' ',10],
['Diageo','Diageo owns everything. Diageo is a British multinational alcoholic beverages company headquartered in London, England. It is the worlds largest producer of spirits and a major producer of beer and wine. Diageos brands include Smirnoff (the worlds best-selling vodka), Johnnie Walker (the worlds best-selling blended Scotch whisky), Baileys (the worlds best-selling liqueur), and Guinness (the worlds best-selling stout). It also owns 34% of Moët Hennessy, which owns brands including Moët & Chandon, Veuve Clicquot and Hennessy. It sells its products in over 180 countries and has offices in around 80 countries.',' ',7],
['Pernod Ricard','Pernod Ricard is a French company that produces distilled beverages. The companys eponymous products, Pernod Anise and Ricard Pastis, are both anise-flavoured liqueurs and are often referred to simply as Pernod or Ricard. The company also produces several other types of pastis.',' ',22],
['After Dark','After Dark is a brand of Indian whisky, manufactured by Radico Khaitan. The whisky was test marketed in 2010, and rolled out nationwide in India by September 2011. It is a 100% grain-based whisky manufactured at Radicos Rampur distillery. It is available in 750ml, 375ml and 180ml bottles. The brands tagline is "One Life, Many Passions...Why wait".',' ',9],
['Bagpiper','Bagpiper is a brand of Indian whisky, manufactured by United Spirits Ltd (USL), a subsidiary of the United Breweries Group, and launched in October 1976. Bagpiper is sold in a square bottle with black and gold packaging design. The company describes the whiskys flavour as a light malty aroma and a hint of a smooth woody character, owing to the use of malt spirits specifically matured in pre-identified American oak casks. It is similar to a blended whisky flavored with pot still malt whisky, but the neutral spirits used as base are distilled from molasses instead of grain.',' ',9],
['Lagavulin distillery','A single malt Scotch distillery is typically also the brand of the Scotch. Lagavulin distillery is an Islay single malt Scotch whisky distillery in Lagavulin on the island of Islay, Scotland.'],
['Bushmills','The Old Bushmills Distillery is a distillery in Bushmills, County Antrim, Northern Ireland. As of December 2014, it is in the process of transitioning from ownership by Diageo plc to Casa Cuervo. The distillery is a popular tourist attraction, with around 120,000 visitors per year. According to the company, a distillery by this name was first recorded in 1743, although at the time it was "in the hands of smugglers" (in a quote attributed to Victorian whiskey journalist Alfred Barnard). All of the whiskey bottled under the Bushmills whiskey brand is produced at the Bushmills Distillery. A licence to distill in the area was granted to Sir Thomas Phillipps in 1608 by King James I, and the 1608 date is printed on the labels of the Bushmills brand whiskey. It uses water drawn from Saint Columbs Rill which is a tributary of the River Bush. The Bushmills Distillery claims to be—and is almost unanimously considered to be—the oldest licensed distillery in the world.',' ',2],
['Jameson','The John Jameson and Son Irish Whiskey company was formally established in 1810 when John Jameson and his son (also John Jameson) took ownership of the Bow Street Distillery in Dublin which had originally been built by his wifes cousins the Steins in 1780. Jameson was a Scottish lawyer from Alloa in Clackmannanshire who had married Margaret Haig, a sister of the Haig brothers who owned the Haig distilleries. Margaret Haig was a first cousin of the Steins, a Scottish distilling family, also from Clackmannanshire, with significant distilling interests in Scotland and Dublin. On his marriage to Margaret Haig in 1786, John Jameson moved with his new wife to Dublin to manage the Steins Bow Street Distillery (which had been established in 1780) for Margarets Stein uncle. This explains the use of the year 1780 in Jameson marketing as the Bow Street Distillery was where Jameson Irish Whiskey was born.[1] Portraits of John and Margaret Jameson by Sir Henry Raeburn are in the collection of the National Gallery of Ireland. Originally one of the six main Dublin Whiskeys, Jameson is now distilled in Cork. In 2013, annual sales topped 4.7 million cases (56.4 million bottles). Jameson is by far the best selling Irish whiskey in the world, as it has been sold internationally since the early 19th century. The United States is the largest market for Jameson Whiskey, with consumption during 2013 up by 12%.',' ',2],
['New Midleton Distillery','The Midleton distilleries complex is situated in Midleton, County Cork, Ireland. It is owned by Pernod Ricard. Located alongside is the Old Midleton Distillery which was established in the early 17th century.',' ',2]
];

const labels = [
[1,1,1,'LaSanta',10,'Elegant but full bodied this whisky has spent ten years maturing in American white oak ex-bourbon casks before being extra-matured for a further two years in Oloroso and PX Sherry casks from Jerez in Spain. Lasanta is Gaelic for warmth and passion, a reminder not just of the Spanish provenance of these Oloroso sherry butts, but also a reflection of this expressions lusciously soft texture and deep, enticingly sweet aroma.Non chill-filtered for additional aroma and mouthfeel.','spice,honey,caramel,butterscotch,orange'],
[1,1,1,'Glenmorangie Dornoch',10,'In the far north of Scotland, beside the ancient Royal Burgh of Tain, lies the Glenmorangie Distillery. Established in 1843, the Distillery was named Glenmorangie, Scots Gaelic for "Glen of Tranquillity", perfectly describing its peaceful setting on the banks of the picturesque Dornoch Firth, a vast sea estuary and a worldwide Site of Special Scientific Interest. To raise awareness for the conservation of the Dornoch Firth, Glenmorangie has partnered with the Marine Conservation Society to preserve this precious waterway. It is this unique location that is perfectly celebrated by our latest limited edition: Glenmorangie Dornoch','peat, apple, toffee, vanilla'],
[1,1,1,'Glenmorangie Ealanta',19,'Glenmorangie Ealanta is the fourth annual release in our award winning Private Edition range. Scots Gaelic for "skilled and ingenious", Ealanta is a 19 Years Old Glenmorangie, fully matured in virgin American white oak casks with a provenance that stretches all the way to the mountains of Missouri and the Mark Twain National Forest. The porous oak wood, air-dried for over 2 years, but in this instance never seasoned with any other whisky, allows our precious spirit to extract maximum flavours as nature intended - producing a whisky of incredible taste and smoothness, with layers of vanilla and candied orange peel, interwoven with sugar coated almonds. Non chill-filtered','toffee, buterscotch, vanilla, almonds, ginger'],
[1,1,1,'Glenmorangie The Original',10,'The original expression of our elegant, floral spirit and the real backbone of the Glenmorangie range. A ten-year-old single malt, Glenmorangie Original is produced by marrying the delicate spirit that emerges from Scotlands tallest stills, with first and second fill American white oak casks. It is here, maturing for ten long years in a range of ex-bourbon casks such as our famous slow-grown and air-dried "designer casks" from Missouri, that our raw spirit develops a perfect balance between sweetness and complexity. Resulting in a mature spirit that is soft, mellow and creamy. Perfect for enjoying at any time.','citrus, vanilla, floral, orange, peach'],
[2,1,1,'Dewar White Label',10,'We blend up to 40 of Scotland’s finest single malt and grain whiskies to create Dewar’s White Label. Each is hand picked to create this full, round whisky. Our first master blender started this process one hundred years ago. It’s how we made it then. It’s how me make it now.','blend, full'],
[2,1,1,'Scratched Cask',12,'We begin with a blend of 40 carefully selected single malt and grain whiskies. The blend is then returned to extra charred and scratched American Oak casks to mellow the liquid and release notes of vanilla and oak. The result? Our most unique experience yet, DEWAR’S Scratched Cask.','vanilla, oak'],
[8,1,1,'Johnnie Walker Blue',' ','Johnnie Walker Blue is a blended scotch and despite what the guy in Ed Hardy shirt says is not as good as sinlge malt and is certainly not worth $50 a shot. The casks are hand-selected and set aside for their exceptional quality, character and flavor. The character of Blue Label is truly unique; it is complex, powerful, incredibly smooth and retains the Johnnie Walker signature smokiness. King George V from Blue Label was created to celebrate the Royal Warrant given to the Walker family in 1934 to mark their exceptional quality. This blend includes Port Ellen™, a highly prized malt whose distillery no longer exists.','crap, smoke, pretension'],
[4,2,1,'Jim Beam Original',6,'A devilish twist on Jim Beams regular bourbon, blending their 6 year old whiskey with spirit extracted from the wood of the cask itself, where it is soaked in over the years of maturation. This gives us a robust and hefty bourbon with a nice added chunk of woody richness.','oak, vanilla'],
[4,3,1,'Jim Beam Rye',4,'A spicy rye, aged for four years and a long-time favourite of Jim Murray.','rye, sweet'],
[8,3,1,'Bulleit Rye',' ','An over-the-top rye whiskey, battling the science of fermentation to produce a 95% rye mash whisky, the highest proportion in a whiskey that we have seen. It is astringent and spicy, showing what the flavour of rye is all about.','spice, sweet'],
[8,2,1,'Bulleit Bourbon',' ','Packaged in an old-style bottle, Bulleit whiskey has developed a loyal following in the UK. The high rye content (around 30%) gives this bourbon a spicy kick.','spice'],
[8,5,1,'Crown Royal',' ','Crown Royal is a blended Canadian whisky owned by Diageo, which purchased it when the Seagram portfolio was dissolved in 2000. It is the top-selling Canadian whisky in the United States.','spice, vanilla, caramel, chocolate'],
[12,4,1,'Black Bush',11,'Has a significantly greater proportion of malt to grain whiskey than the white label. Spanish Oloroso sherry-seasoned oak casks mature the malt.','grape, lemon, fruity'],
[13,4,1,'Jameson',' ','Produced at the Midleton Distillery, Jameson is Irelands quintessential Irish blend, a classic.','floral, vanilla, spice, honey'],
[13,4,1,'Jameson Crested Ten',10,'Crested Ten was first released by Jameson in 1963, when the whiskey bonding trade was dying out. With a high proportion of pot still and Sherry-matured whiskeys, this is a top Irish blend, a real gem.','caramel, honey']
];

brands.forEach(function(entry){
	db.run("INSERT INTO brand (name,content,region_id,country_id) VALUES (?,?,?,?)",
		entry[0],
		entry[1],
		entry[2],
		entry[3],
		function(err){
			if(err){
				console.log(err);
			}
		});
});

labels.forEach(function(entry){
	db.run("INSERT INTO label (brand_id,whiskey_id,user_id,name,age,content,notes) VALUES (?,?,?,?,?,?,?)",
		entry[0],
		entry[1],
		entry[2],
		entry[3],
		entry[4],
		entry[5],
		entry[6],
		function(err){
			if(err){
				console.log(err);
			}
		});
});


