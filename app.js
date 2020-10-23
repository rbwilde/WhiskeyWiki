 //dependencies
import express from 'express';
import fs from 'fs';
import ejs from 'ejs';
import sqlite3 from 'sqlite3';
const app = express();
const db = new sqlite3.Database('whiskey.db');

//middleware
import bodyParser from 'body-parser';
const urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);
import methodOverride from 'method-override';
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.json());
//config
const PORT = 3004;
app.listen(process.env.PORT || 5000);

app.get("/", (req,res) => {
	console.log(req.headers)
	const html = fs.readFileSync("./views/index.html","utf8");
	const rendered = ejs.render(html);
	res.send(rendered);
});

app.get("/hooch/:id", (req,res) => {
	const id = req.params.id;
	db.get("SELECT * FROM whiskey WHERE id=?",id, (err,rows1) => {
		if (err){
			console.log(err);
		}else{
			db.all("SELECT DISTINCT country.id,country.name FROM country INNER JOIN brand ON brand.country_id = country.id INNER JOIN label ON label.brand_id = brand.id INNER JOIN whiskey ON label.whiskey_id = whiskey.id WHERE whiskey.id=?",id,function(err,rows2){
				if(err){
					console.log(err);
				}else{
					db.all("SELECT DISTINCT brand.id,brand.name FROM brand INNER JOIN country ON brand.country_id = country.id INNER JOIN label ON label.brand_id = brand.id INNER JOIN whiskey ON label.whiskey_id = whiskey.id WHERE whiskey.id=?",id,function(err,rows3){
						if(err){
							console.log(err);
						}else{
							console.log(rows3);
			const template = fs.readFileSync("./views/show.html","utf8");
			const rendered = ejs.render(template,{rotgut:rows1,poteen:rows2,poison:rows3});
			res.send(rendered);
						}
					})			
				}			
			})
		}
	})
});

app.get("/hooch/:id/edit", (req,res) => {
	const id = req.params.id;
	db.get("SELECT * FROM whiskey WHERE id=?",id, (err,rows) => {
		if(err){
			console.log(err);
		}else{
				const form = fs.readFileSync("./views/edit_hooch.html","utf8");
				const rendered = ejs.render(form,{rotgut:rows});
					res.send(rendered);
			
		}
	})
});

app.put("/hooch/:id", (req,res) => {
	const id = req.params.id;
	const content = req.body.content;
	db.run("UPDATE whiskey SET content=? WHERE id=?",content,id, (err,row) => {
		if(err){
			console.log(err);
		}else{
			res.redirect("/hooch/"+id);
		}
	})
});

app.get("/country/:id", (req,res) => {
	const id = req.params.id;
	db.get("SELECT * FROM country WHERE id=?",id, (err,rows1) => {
		if(err){
			console.log(err);
		}else{
			db.all("SELECT brand.name, brand.id FROM country INNER JOIN brand ON brand.country_id=country.id WHERE country.id=?",id, (err,rows2) => {
			const template = fs.readFileSync("./views/country_list.html","utf8");
			const rendered = ejs.render(template,{rotgut:rows1, poteen:rows2});
			res.send(rendered);
			})
		}
	})
});

app.get("/country/:id/edit", (req,res) => {
	const id = req.params.id;
	db.get("SELECT * FROM country WHERE id=?",id, (err,rows) => {
		if(err){
			console.log(err);
		}else{
				const form = fs.readFileSync("./views/edit_country.html","utf8");
				const rendered = ejs.render(form,{rotgut:rows});
					res.send(rendered);
		}
	})
});

app.put("/country/:id", (req,res) => {
	const id = req.params.id;
	const content = req.body.content;
	db.run("UPDATE country SET content=? WHERE id=?",content,id, (err,row) => {
		if(err){
			console.log(err);
		}else{
			console.log(id);
			res.redirect("/country/"+id);
		}
	})
});

app.get("/brand/new", (req,res) => {
	const form = fs.readFileSync("./views/new_brand.html","utf8");
	res.send(form);
});

app.get("/brand/:id", (req,res) => {
	const id = req.params.id;
	db.get("SELECT * FROM brand WHERE id=?",id, (err,rows1) => {
		if(err){
			console.log(err);
		}else{
			db.all("SELECT label.name, label.id FROM label INNER JOIN brand ON label.brand_id=brand.id WHERE brand.id=?",id, (err,rows2) => {
			console.log(rows2);
			const template = fs.readFileSync("./views/brand_list.html","utf8");
			const rendered = ejs.render(template,{rotgut:rows1, poteen:rows2});
			res.send(rendered);
			})
		}
	})
});

app.get("/brand/:id/edit", (req,res) => {
	const id = req.params.id;
	db.get("SELECT * FROM brand WHERE id=?",id, (err,rows) => {
		if(err){
			console.log(err);
		}else{
				const form = fs.readFileSync("./views/edit_brand.html","utf8");
				const rendered = ejs.render(form,{rotgut:rows});
					res.send(rendered);
		}
	})
});

app.post("/brand", (req, res) => {
	const name = req.body.brand.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase());
  	const content = req.body.content;
  	// const region = req.body.region;
	const country = req.body.country;
	console.log(req.body)
	console.log("LOOK UP")
  		db.get("SELECT * FROM country WHERE country.name=?",country, (err,rows) => {
  			if(err){
  				console.log(err);
  			}else{
    			db.run("INSERT INTO brand (name,content,region_id,country_id) VALUES (?,?,?,?)",name,content,false,parseInt(rows.id), (err) => {
      			if(err){
					console.log (err);
					db.get("SELECT * FROM brand WHERE brand.name=?",name, (err,row1) => {
						if(err){
							console.log(err);
						}else{
							res.redirect("/brand/"+row1.id);
						}
					})
			    	}else{
						db.get("SELECT last_insert_rowid() as id", function (err, row) {
							const rowid =  row['id']
							res.redirect("/brand/"+rowid);
						})	  
		      		}
      			})
  			}
  		})
});

app.put("/brand/:id", (req,res) => {
	const id = req.params.id;
	const content = req.body.content;
	db.run("UPDATE brand SET content=? WHERE id=?",content,id, (err) => {
		if(err){
			console.log(err);
		}else{
			res.redirect("/brand/"+id);
		}
	})
});

app.get("/label/new", (req,res) => {
	const oldURL = req.headers.referer.toString();
	const brandId = oldURL.match(/\/([^\/]+)\/?$/)[1];
	console.log(brandId);
	db.get("SELECT * FROM brand WHERE id=?",brandId, (err,row1) => {
		if(err){
			console.log(err);
		}else{
			const countryId = row1.country_id;
			db.get("SELECT * FROM country WHERE id=?",countryId, (err,row2) => {
				if(err){
					console.log(err);
				}else{
					console.log(row2);
					const form = fs.readFileSync("./views/new_label.html","utf8");
					const rendered = ejs.render(form,{rotgut:row1, poteen:row2});
					res.send(rendered);
				}
			})
		}
	})
});

app.get("/label/:id", (req,res) => {
	const id = req.params.id;
	db.get("SELECT * FROM label WHERE id=?",id, (err,rows1) => {
		if(err){
			console.log(err);
		}else{
			const notesArray = rows1.notes.split(",");
			notesArray.forEach(function(e,i,array){
			db.all("SELECT * FROM label WHERE label.notes LIKE '%e%'", (err,rows2) => {
					if(err){
						console.log(err);
					}else{
						if(array.length===(i+1)){
				const template = fs.readFileSync("./views/label.html","utf8");
				const rendered = ejs.render(template,{rotgut:rows1, poteen:rows2});
				res.send(rendered);
						}
					}
				})
			})
		}
	})
});

app.get("/label/:id/edit", (req,res) => {
	const id = req.params.id;
	console.log(id)
	db.get("SELECT * FROM label WHERE id=?",id, (err,rows) => {
		if(err){
			console.log(err);
		}else{
				const form = fs.readFileSync("./views/edit_label.html","utf8");
				const rendered = ejs.render(form,{rotgut:rows});
					res.send(rendered);
		}
	})
});

app.post("/label", (req, res) => {
	const id = req.body.id;
  	const name = req.body.name;
  	const content = req.body.content;
  	const brand = req.body.brand;
  	const whiskey = req.body.hooch;
  	const userName = req.body.userName;
  	const userEmail = req.body.email;
  	const age = req.body.age;
	const notes = req.body.notes;
  	db.run("INSERT INTO user (name,email) VALUES (?,?)",userName,userEmail, (err,rows) => {
		console.log(req.body)
  		if(err){
  			console.log(err)
  		}else{
  			db.get("SELECT whiskey.id,whiskey.name FROM whiskey WHERE whiskey.name=? COLLATE NOCASE",whiskey, (err,rows1) => {
				  console.log(`${whiskey} is the whiskey`)
  				if(err){
  					console.log(err);
  				}else{
  					if(rows1.name.toUpperCase() === whiskey.toUpperCase()){
  						const whiskey_id = rows1.id;
  						console.log(rows1.name);
  					db.get("SELECT brand.id,brand.name FROM brand WHERE brand.name=? COLLATE NOCASE",brand, (err,rows2) => {
						  console.log(`${brand} is the brand`)
  						if(err){
  							console.log(err);
  						}else{
  							if(rows2.name.toUpperCase() === brand.toUpperCase()){
  								const brand_id = rows2.id;
    						db.run("INSERT INTO label (brand_id,whiskey_id,user_id,name,age,content,notes) VALUES (?,?,?,?,?,?,?)",parseInt(brand_id),parseInt(whiskey_id),null,name,age,content,notes, (err) => {
      							if(err){
        							console.log(err);
			    				}else{
									db.get("SELECT last_insert_rowid() as id", function (err, row) {
										const rowid =  row['id']
										const notesArray = notes.split(",");
										notesArray.forEach( (e,i,array) => {
			    						db.all("SELECT * FROM label WHERE label.notes LIKE '%e%'", (err,rows3) => {
			    							if(err){
												console.log(err);
											}else{
												if(array.length===(i+1)){
			      									const html = fs.readFileSync("./views/label.html","utf8");
													const rendered = ejs.render(html,{creator:rows,rotgut:req.body,poteen:rows3});
														res.redirect("/label/"+rowid);
														}
													}
												})
			    							})
								   		})
							
			      						}
			      					})
			      				}
			      			}
			      		})
			      	}
		      	}
      		})
  		}
  	})
});

app.put("/label/:id", (req,res) => {
	const obj = JSON.parse(JSON.stringify(req.body));
	console.log(obj);
	const id = req.params.id;
	const content = obj.content;
	const notes = obj.notes;
	db.run("UPDATE label SET content=?, notes=? WHERE id=?",content,notes,id, (err) => {
		if(err){
			console.log(err);
		}else{
			res.redirect("/label/"+id);
		}
	})
});













