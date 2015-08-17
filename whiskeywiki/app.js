//dependencies
var express = require("express");
var app = express();
var fs = require("fs");
var ejs = require("ejs");
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('whiskey.db');

//middleware
var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static('public'));
//config
app.listen(3003, function() {
  console.log("I'm listening!");
});

app.get("/",function(req,res){
	html = fs.readFileSync("./views/index.html","utf8");
	var rendered = ejs.render(html);
	res.send(rendered);
});

app.get("/hooch/:id",function(req,res){
	var id = req.params.id;
	db.get("SELECT * FROM whiskey WHERE id=?",id,function(err,rows1){
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
			var template = fs.readFileSync("./views/show.html","utf8");
			var rendered = ejs.render(template,{rotgut:rows1,poteen:rows2,poison:rows3});
			res.send(rendered);
						}
					})			
				}			
			})
		}
	})
});

app.get("/hooch/:id/edit",function(req,res){
	var id = req.params.id;
	db.get("SELECT * FROM whiskey WHERE id=?",id,function(err,rows){
		if(err){
			console.log(err);
		}else{
				var form = fs.readFileSync("./views/edit_hooch.html","utf8");
				var rendered = ejs.render(form,{rotgut:rows});
					res.send(rendered);
			
		}
	})
});

app.put("/hooch/:id",function(req,res){
	var id = req.params.id;
	var content = req.body.content;
	db.run("UPDATE whiskey SET content=? WHERE id=?",content,id,function(err,row){
		if(err){
			console.log(err);
		}else{
			res.redirect("/hooch/"+id);
		}
	})
});

app.get("/country/:id",function(req,res){
	var id = req.params.id;
	db.get("SELECT * FROM country WHERE id=?",id,function(err,rows1){
		if(err){
			console.log(err);
		}else{
			db.all("SELECT brand.name, brand.id FROM country INNER JOIN brand ON brand.country_id=country.id WHERE country.id=?",id,function(err,rows2){
			var template = fs.readFileSync("./views/country_list.html","utf8");
			var rendered = ejs.render(template,{rotgut:rows1, poteen:rows2});
			res.send(rendered);
			})
		}
	})
});

app.get("/country/:id/edit",function(req,res){
	var id = req.params.id;
	db.get("SELECT * FROM country WHERE id=?",id,function(err,rows){
		if(err){
			console.log(err);
		}else{
				var form = fs.readFileSync("./views/edit_country.html","utf8");
				var rendered = ejs.render(form,{rotgut:rows});
					res.send(rendered);
		}
	})
});

app.put("/country/:id",function(req,res){
	var id = req.params.id;
	var content = req.body.content;
	db.run("UPDATE country SET content=? WHERE id=?",content,id,function(err,row){
		if(err){
			console.log(err);
		}else{
			console.log(row);
			res.redirect("/country/"+id);
		}
	})
});

app.get("/brand/new",function(req,res){
	var form = fs.readFileSync("./views/new_brand.html","utf8");
	res.send(form);
});

app.get("/brand/:id",function(req,res){
	var id = req.params.id;
	db.get("SELECT * FROM brand WHERE id=?",id,function(err,rows1){
		if(err){
			console.log(err);
		}else{
			db.all("SELECT label.name, label.id FROM label INNER JOIN brand ON label.brand_id=brand.id WHERE brand.id=?",id,function(err,rows2){
			console.log(rows2);
			var template = fs.readFileSync("./views/brand_list.html","utf8");
			var rendered = ejs.render(template,{rotgut:rows1, poteen:rows2});
			res.send(rendered);
			})
		}
	})
});

app.get("/brand/:id/edit",function(req,res){
	var id = req.params.id;
	db.get("SELECT * FROM brand WHERE id=?",id,function(err,rows){
		if(err){
			console.log(err);
		}else{
				var form = fs.readFileSync("./views/edit_brand.html","utf8");
				var rendered = ejs.render(form,{rotgut:rows});
					res.send(rendered);
		}
	})
});

app.post("/brand", function(req, res) {
  	var name = req.body.brand
  	var content = req.body.content;
  	var region = req.body.region;
  	var country = req.body.country;
  		db.get("SELECT * FROM country WHERE country.name=?",country,function(err,rows){
  			if(err){
  				console.log(err);
  			}else{
    		db.run("INSERT INTO brand (name,content,region_id,country_id) VALUES (?,?,?,?)",name,content,false,parseInt(rows.id),function(err){
      			if(err){
        			console.log (err);
			    }else{
			      	res.redirect("/country/"+rows.id);
		      	}
      		})
  		}
  	})
});

app.put("/brand/:id",function(req,res){
	var id = req.params.id;
	var content = req.body.content;
	db.run("UPDATE brand SET content=? WHERE id=?",content,id,function(err,row){
		if(err){
			console.log(err);
		}else{
			console.log(row);
			res.redirect("/brand/"+id);
		}
	})
});

app.get("/label/new", function(req,res){
	var form = fs.readFileSync("./views/new_label.html","utf8");
	res.send(form);
});

app.get("/label/:id",function(req,res){
	var id = req.params.id;
	db.get("SELECT * FROM label WHERE id=?",id,function(err,rows1){
		if(err){
			console.log(err);
		}else{
			var notesArray = rows1.notes.split(",");
			notesArray.forEach(function(e,i,array){
			db.all("SELECT * FROM label WHERE label.notes LIKE '%e%'",function(err,rows2){
					if(err){
						console.log(err);
					}else{
						if(array.length===(i+1)){
				var template = fs.readFileSync("./views/label.html","utf8");
				var rendered = ejs.render(template,{rotgut:rows1, poteen:rows2});
				res.send(rendered);
						}
					}
				})
			})
		}
	})
});

app.get("/label/:id/edit",function(req,res){
	var id = req.params.id;
	db.get("SELECT * FROM label WHERE id=?",id,function(err,rows){
		if(err){
			console.log(err);
		}else{
				var form = fs.readFileSync("./views/edit_label.html","utf8");
				var rendered = ejs.render(form,{rotgut:rows});
					res.send(rendered);
		}
	})
});

app.post("/label", function(req, res) {
  	var name = req.body.name;
  	var content = req.body.content;
  	var brand = req.body.brand.toString();
  	var whiskey = req.body.hooch.toString();
  	var userName = req.body.userName;
  	var userEmail = req.body.email;
  	var age = req.body.age;
  	var notes = req.body.notes;
  	// db.run("INSERT INTO user (name,email) VALUES (?,?)",userName,userEmail,function(err,rows){
  	// 	if(err){
  	// 		console.log(err)
  	// 	}else{
  			db.get("SELECT whiskey.id,whiskey.name FROM whiskey WHERE whiskey.name=? COLLATE NOCASE",whiskey,function(err,rows1){
  				if(err){
  					console.log(err);
  				}else{
  					if(rows1.name.toUpperCase() === whiskey.toUpperCase()){
  						var whiskey_id = rows1.id;
  						console.log(whiskey_id);
  					db.get("SELECT brand.id,brand.name FROM brand WHERE brand.name=? COLLATE NOCASE",brand,function(err,rows2){
  						if(err){
  							console.log(err);
  						}else{
  							if(rows2.name.toUpperCase()===brand.toUpperCase()){
  								var brand_id = rows2.id;
  								console.log(brand_id);
    						db.run("INSERT INTO label (brand_id,whiskey_id,user_id,name,age,content,notes) VALUES (?,?,?,?,?,?,?)",parseInt(brand_id),parseInt(whiskey_id),null,name,age,content,notes,function(err){
      							if(err){
        							console.log(err);
			    				}else{
			    					res.redirect("/brand"+id);
			    		// 			var notesArray = notes.split(",");
									// notesArray.forEach(function(e,i,array){
			    		// 			db.all("SELECT * FROM label WHERE label.notes LIKE '%e%'",function(err,rows3){
			    			// 			if(err){
										// 	console.log(err);
										// }else{
											// if(array.length===(i+1)){
											// 	console.log(req.body);
			      		// 						var html = fs.readFileSync("./views/label.html","utf8");
											// 	var rendered = ejs.render(html,{creator:rows,rotgut:req.body,poteen:rows3});
											// 		res.send(rendered);
														// }
													// }
												// })
			    							// })
			      						}
			      					})
			      				}
			      			}
			      		})
			      	}
		      	}
      		})
  	// 	}
  	// })
});

app.put("/label/id:",function(req,res){
	var id = req.params.id;
	var content = req.body.content;
	db.run("UPDATE label SET content=? AND notes=? WHERE id=?",content,id,function(err,row){
		if(err){
			console.log(err);
		}else{
			console.log(row);
			res.redirect("/label/"+id);
		}
	})
});














