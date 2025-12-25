const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let rider = [
  { id:0, name:"ワープスター", speed:"57", acceleration:"18", charge:"38", turning:"43", grip:"32", lift:"69", air_speed:"30", attack:"15", defense:"38", heavy:"25" ,photo:"warp.png"},
  { id:1, name:"ウィングスター", speed:"24", acceleration:"12", charge:"12", turning:"35", grip:"24", lift:"97", air_speed:"86", attack:"12", defense:"10", heavy:"15",photo:"wing.png" },
  { id:2, name:"デビルスター", speed:"11", acceleration:"92", charge:"69", turning:"93", grip:"28", lift:"92", air_speed:"44", attack:"71", defense:"6", heavy:"9" ,photo:"devil.png"},
  { id:3, name:"ワゴンスター",speed: "62",acceleration: "73",charge: "0",turning: "53",grip: "76",lift: "11", air_speed: "44",attack: "24",defense: "92",heavy: "60",photo:"wagon.png"},
  { id:4, name:"スリックスター",speed: "47",acceleration: "73",charge: "57",turning: "76",grip: "3",lift: "74",air_speed: "33",attack: "10",defense: "31",heavy: "7",photo:"slick.png"},
  { id:5, name:"フォーミュラスター",speed: "99",acceleration: "6",charge: "6",turning: "3",grip: "74",lift: "10",air_speed: "93",attack: "24",defense: "51",heavy:"53" ,photo:"formula.png"},
  { id:6, name:"ヘビースター" ,speed:"92" ,acceleration:"4" ,charge:"35" ,turning:"20" ,grip:"26" ,lift:"26" ,air_speed:"67" ,attack:"47" ,defense:"97" ,heavy:"99" ,photo:"heavy.png"},
  { id:7, name:"ロケットスター" ,speed:"36" ,acceleration:"65" ,charge:"65" ,turning:"64" ,grip:"36" ,lift:"13" ,air_speed:"10" ,attack:"16" ,defense:"43" ,heavy:"25" ,photo:"rocket.png"},
  { id:8, name:"ルインズスター",speed: "73",acceleration: "101",charge: "95",turning: "1",grip: "101",lift: "28",air_speed: "45",attack: "4",defense: "15",heavy: "15",photo:"ruins.png"},
  { id:9, name:"ターボスター",speed: "57",acceleration: "9",charge: "96",turning: "79",grip: "10",lift: "15",air_speed: "21",attack: "19",defense: "63", heavy: "36",photo:"turbo.png"},
  { id:10, name:"ジェットスター" ,speed:"11" ,acceleration:"35" ,charge:"84" ,turning:"61" ,grip:"35" ,lift:"95" ,air_speed: "73",attack:"19" ,defense:"17" ,heavy:"36" ,photo:"jet.png"},
  { id:11, name:"ウィリーバイク" ,speed:"57" ,acceleration:"18" ,charge:"47" ,turning:"62" ,grip:"70" ,lift :"0" ,air_speed : "16" ,attack : "39" ,defense : "63" ,heavy : "54" ,photo:"willy.png"},
  { id:12, name:"レックスウィリー" ,speed:"73" ,acceleration:"7" ,charge:"23" ,turning:"30" ,grip:"56" ,lift :"0" 	,air_speed :	"44",attack :		"94",defense :		"97",heavy :	"86",photo :"rex.png"},
  { id:13, name:"ウィリースクーター ",speed :"51 ",acceleration :"65 ",charge :"56 ",turning :"96 ",grip :"95 ",lift :"0 ",air_speed :"44 ",attack :"7 ",defense :"25 ",heavy :"10 ",photo :"scooter.png"},
  { id:14, name:"ホップスター" ,speed:"57" ,acceleration:"13" ,charge:"25" ,turning:"22" ,grip:"79" ,lift:"31" ,air_speed:"56" ,attack:"36" ,defense:"73" ,heavy:"60",photo:"hop.png"},
  { id:15, name:"ヴァンパイアスター",speed: "36",acceleration: "7",charge: "50",turning: "31",grip: "53",lift: "77",air_speed: "9",attack: "54",defense: "63",heavy: "25",photo:"vampire.png"},
  { id:16, name:"ペーパースター",speed: "15",acceleration: "96",charge: "50",turning: "101",grip: "78",lift: "99",air_speed: "50",attack: "2",defense: "3",heavy: "5",photo:"paper.png"},
  { id:17, name:"チャリオット",speed: "42",acceleration: "33",charge: "55",turning: "93",grip: "93",lift: "0",air_speed: "73",attack: "59",defense: "71",heavy: "76",photo:"chariot.png"},
  { id:18, name:"バトルチャリオット ",speed :"73 ",acceleration :"8 ",charge :"29 ",turning :"21 ",grip :"81 ",lift :"0 ",air_speed :"60 ",attack :"95 ",defense :"93 ",heavy :"95 ",photo :"battle.png"},
  { id:19, name:"タンクスター",speed: "62",acceleration: "9",charge: "35",turning: "61",grip: "11",lift: "0",air_speed: "44",attack: "31",defense: "78",heavy: "93",photo:"tank.png"},
  { id:20, name:"ブルタンク",speed: "94",acceleration: "7",charge: "21",turning: "44",grip: "10",lift: "0",air_speed: "33",attack: "59",defense: "94",heavy: "100",photo:"bull.png"},
  { id:21, name:"ヘンシンスター",speed: "47",acceleration: "(12)[31]",charge: "(28)[73]",turning: "(42)[67]",grip: "(30)[88]",lift: "(92)[0]",air_speed:"44" ,attack:"24" ,defense:"(33)[39]" ,heavy:"(53)[59]" ,photo:"transform.png"},
  { id:22, name:"ドラグーン",speed:"97",acceleration:"48" ,charge:"76" ,turning:"18" ,grip:"45" ,lift:"101" ,air_speed:"101" ,attack:"19" ,defense:"46" ,heavy:"36" ,photo:"dragoon.png"},
  { id:23, name:"ハイドラ",speed: "101",acceleration: "3",charge: "22",turning: "82",grip: "19",lift: "90",air_speed: "93",attack: "101",defense: "103",heavy: "101",photo:"hydra.png"},
  { id:24, name:"レオ ",speed :"96 ",acceleration :"42 ",charge :"101 ",turning :"95 ",grip :"98 ",lift :"0 ",air_speed :"96 ",attack :"99 ",defense :"100 ",heavy :"62 ",photo :"leo.png"},
];

// 一覧
app.get("/air_rider", (req, res) => {
  res.render('air_rider', {data: rider} );
});

// 新規作成ページへリダイレクト
app.get("/air_rider/create", (req, res) => {
  res.redirect('/public/air_rider_new.html');
});

// 詳細
app.get("/air_rider/:number", (req, res) => {
  const number = req.params.number;
  const detail = rider[ number ];
  res.render('air_rider_detail', {id: number, data: detail} );
});

// 削除確認ページ
app.get("/air_rider/delete/:number", (req, res) => {
  const number = req.params.number ;
  const detail = rider[ number ];

  if (!detail) {
    return res.status(404).send("データが存在しません");
  }

  res.render('air_rider_delete', {id: number, data: detail} );
});


// 削除実行
app.post("/air_rider/delete/:number", (req, res) => {
  const number = req.params.number ;

  if (!rider[number]) {
    return res.status(404).send("データが存在しません");
  }

  rider.splice(number, 1);
  res.render('air_rider_message', { message: "マシンを削除しました", link: "/air_rider" , linktext: "マシン一覧に戻る" });
  });


// Create
app.post("/air_rider", (req, res) => {
  const id = rider.length ;
  const name = req.body.name;
  const speed = req.body.speed;
  const acceleration = req.body.acceleration;
  const charge = req.body.charge;
  const turning = req.body.turning;
  const grip = req.body.grip;
  const lift = req.body.lift;
  const air_speed = req.body.air_speed;
  const attack = req.body.attack;
  const defense = req.body.defense;
  const heavy = req.body.heavy;
  const photo = req.body.photo;
  rider.push( { id:id, name:name, speed:speed, acceleration:acceleration, charge:charge, turning:turning, grip:grip, lift:lift, air_speed:air_speed, attack:attack, defense:defense, heavy:heavy ,photo:photo} );
  console.log( rider );

  res.render('air_rider_message', { message: "新しいマシンを追加しました。", link: "/air_rider", linktext: "マシン一覧に戻る" });
  });

// 編集ページ
app.get("/air_rider/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = rider[ number ];
  res.render('air_rider_edit', {id: number, data: detail} );
});

// Update
app.post("/air_rider/update/:number", (req, res) => {
  rider[req.params.number].name = req.body.name;
  rider[req.params.number].speed = req.body.speed;
  rider[req.params.number].acceleration = req.body.acceleration;
  rider[req.params.number].charge = req.body.charge;
  rider[req.params.number].turning = req.body.turning;
  rider[req.params.number].grip = req.body.grip;
  rider[req.params.number].lift = req.body.lift;
  rider[req.params.number].air_speed = req.body.air_speed;
  rider[req.params.number].attack = req.body.attack;
  rider[req.params.number].defense = req.body.defense;
  rider[req.params.number].heavy = req.body.heavy;
  rider[req.params.number].photo = req.body.photo;
  console.log( rider );

  res.render('air_rider_message', { message: "マシンの情報を変更しました。", link: "/air_rider/" + req.params.number , linktext: "変更したマシンの詳細ページへ戻る" });   
   });





let sushi = [
  { id:0, code:"A01", name:"大切りマグロ", category :"握り", type : "マグロ", cost:140, kcal:96 },
  { id:1, code:"A02", name:"マグロステーキ", category :"握り", type : "マグロ", cost:160, kcal:110 },
  { id:2, code:"A03", name:"上びんちょう", category :"握り", type : "マグロ", cost:190, kcal:84 },
  { id:3, code:"A04", name:"サーモン", category :"握り", type : "サーモン", cost:130, kcal:106 },
  { id:4, code:"A05", name:"炙りサーモン", category :"握り", type : "サーモン", cost:130, kcal:106 },
  { id:5, code:"A06", name:"大切りとろサーモン", category :"握り", type : "サーモン", cost:140, kcal:89 },
  { id:6, code:"A07", name:"いか", category :"握り", type : "いか", cost:120, kcal:72 },
  { id:7, code:"A08", name:"えび", category :"握り", type : "えび", cost:120, kcal:76 },
  { id:8, code:"A09", name:"えんがわ", category :"握り", type : "白身魚", cost:170, kcal:104 },
  { id:9, code:"A10", name:"ふわとろあなご", category :"握り", type : "白身魚", cost:190, kcal:64 },
  { id:10, code:"A11", name:"いわし", category :"握り", type : "光もの", cost:160, kcal:117 },
  { id:11, code:"A12", name:"こはだ", category :"握り", type : "光もの", cost:120, kcal:97 },
  { id:12, code:"A13", name:"蒸しほたて", category :"握り", type : "貝", cost:140, kcal:69 },
  { id:13, code:"A14", name:"つぶ貝", category :"握り", type : "貝", cost:140, kcal:68 },
  { id:14, code:"A15", name:"豚カルビ", category :"握り", type : "肉", cost:140, kcal:110 },
  { id:15, code:"A16", name:"ハンバーグ", category :"握り", type : "肉", cost:140, kcal:205 },
  { id:16, code:"A17", name:"たまご", category :"握り", type : "その他", cost:120, kcal:143 },
  { id:17, code:"B01", name:"まぐろたたきぐんかん", category :"巻物", type : "マグロ", cost:130, kcal:107 },
  { id:18, code:"B02", name:"ツナサラダ", category :"巻物", type : "野菜", cost:120, kcal:159 },
  { id:19, code:"B03", name:"いなり", category :"巻物", type : "その他", cost:120, kcal:136 },
  { id:20, code:"B04", name:"鉄火巻", category :"巻物", type : "マグロ", cost:140, kcal:182 },
  { id:21, code:"B05", name:"かっぱ巻", category :"巻物", type : "野菜", cost:120, kcal:158 },
  { id:22, code:"S01", name:"あかにし貝", category :"限定", type : "貝", cost:120, kcal:72 },
];

// 一覧
app.get("/sushi", (req, res) => {
  res.render('sushi', {data: sushi} );
});

// 新規作成ページへリダイレクト
app.get("/sushi/create", (req, res) => {
  res.redirect('/public/sushi_new.html');
});

// 詳細
app.get("/sushi/:number", (req, res) => {
  const number = req.params.number;
  const detail = sushi[ number ];
  res.render('sushi_detail', {id: number, data: detail} );
});

// 削除確認ページ
app.get("/sushi/delete/:number", (req, res) => {
  const number = req.params.number;
  const detail = sushi[ number ];

  if (!detail) {
    return res.status(404).send("データが存在しません");
  }

  res.render('sushi_delete', {id: number, data: detail} );
});

// 削除実行
app.post("/sushi/delete/:number", (req, res) => {
  const number = req.params.number;

  if (!sushi[number]) {
    return res.status(404).send("データが存在しません");
  }

  sushi.splice(number, 1);
 res.render('sushi_message', { message: "寿司情報を削除しました。", link: "/sushi", linktext: "寿司一覧に戻る" });
});

// Create
app.post("/sushi", (req, res) => {
  const id = sushi.length ;
  const code = req.body.code;
  const name = req.body.name;
  const category = req.body.category;
  const type = req.body.type;
  const cost = req.body.cost;
  const kcal = req.body.kcal;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  sushi.push( { id: id, code: code, name: name, category: category, type: type, cost: cost, kcal: kcal } );
  console.log( sushi );
 
res.render('sushi_message', { message: "新しい寿司を追加しました。", link: "/sushi", linktext: "寿司一覧に戻る" });
});

// 編集ページ
app.get("/sushi/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = sushi[ number ];
  res.render('sushi_edit', {id: number, data: detail} );
});

// Update
app.post("/sushi/update/:number", (req, res) => {
  sushi[req.params.number].code = req.body.code;
  sushi[req.params.number].name = req.body.name;
  sushi[req.params.number].category = req.body.category;
  sushi[req.params.number].type = req.body.type;
  sushi[req.params.number].cost = req.body.cost;
  sushi[req.params.number].kcal = req.body.kcal;

  console.log( sushi );
  res.render('sushi_message', { message: "寿司情報を変更しました。", link: "/sushi/" + req.params.number , linktext: "変更した寿司の詳細ページへ戻る" });
});


let game = [
  { id:0, code:"01", name:"【サバイバルローグライクアクション】剣と魔法と剣と剣", category :"アクション", author : "ZOMBI 314", url:"https://unityroom.com/games/swmgswsw", },
  { id:1, code:"02", name:"【将棋ライク 〜将棋×ローグライク〜", category :"将棋・ローグライク", author : "こもめ、ぺんぎー", url:"https://unityroom.com/games/shougi-like", },
  { id:2, code:"03", name:"[釣り] 糸を引く、君を見る、 [ver1.01]", category :"釣り", author : "橋野みずは", url:"https://unityroom.com/games/fishing_stard3w",  },
  { id:3, code:"04", name:"市区町村タイピング", category :"タイピング", author : "NECO DONUT", url:"https://unityroom.com/games/shikuchoson_typing",  },
  { id:4, code:"05", name:"坊主がクレーン車で除夜の鐘を叩くゲーム", category :"物理演算", author : "ニカイドウレンジ", url:"https://unityroom.com/games/bozucrane",  },
  { id:5, code:"06", name:"マインフィールドダンジョン", category :"RPG", author : "強い力", url:"https://unityroom.com/games/minefielddungeon",  },
  { id:6, code:"07", name:"アトリエゆかりん大盛況‼", category :"パズル", author : "ぺるこ", url:"https://unityroom.com/games/yukamaki_daiseikyou",  },
  { id:7, code:"08", name:"ドローが目的のカードゲーム「Endless Draw」", category :"カードゲーム", author : "killit", url:"https://unityroom.com/games/endless_draw",  },
  { id:8, code:"09", name:"変な家シュミレーター", category :"パズル", author : "LiMM", url:"https://unityroom.com/games/hennaie_simulator",  },
  { id:9, code:"10", name:"シュレディンガーのキャットタワー", category :"パズル", author : "samirin33", url:"https://unityroom.com/games/cattowerofshrodinger",  },
  { id:10, code:"11", name:"d-OS", category :"クリッカー", author : "ゆずゆざ", url:"https://unityroom.com/games/d-os",  },
  { id:11, code:"12", name:"空中バトルアクションBRF", category :"アクション", author : "オムガン", url:"https://unityroom.com/games/best_rival_forever#google_vignette",  },
  { id:12, code:"13", name:"トウフたちのバラッド", category :"アドベンチャー・茶番", author : "アブクデ", url:"https://unityroom.com/games/ballad_of_tofu",  },
  { id:13, code:"14", name:"スライムルーム", category :"アクション", author : "みっふぃ＠moitititi", url:"https://unityroom.com/games/slimeroom_for_pc",  },
  { id:14, code:"15", name:"コレでこなす14の課題", category :"アクション・パズル", author : "ハコマスト", url:"https://unityroom.com/games/14kadai",  },
  { id:15, code:"16", name:"名前がない猫に名前をつけるゲーム", category :"バカゲー", author : "ふぇにき", url:"https://unityroom.com/games/namecat",  },
  { id:16, code:"17", name:"ハコケシ", category :"アクション・パズル", author : "baba_s", url:"https://unityroom.com/games/hakokeshi",  },
  { id:17, code:"18", name:"深海探索", category :"アドベンチャー", author : "Seaeees、まっともぉん、ジュン", url:"https://unityroom.com/games/deep_sea",  },
  { id:18, code:"19", name:"9番ホーム", category :"ホラー", author : "ゆーじ", url:"https://unityroom.com/games/track-no-9",  },
  { id:19, code:"20", name:"絶対にクリアできないダンジョン", category :"謎解き", author : "ぐみし", url:"https://unityroom.com/games/gmshu1w20241223",  },
];

// 一覧
app.get("/game", (req, res) => {
  res.render('game', {data: game} );
});

// 新規作成ページへリダイレクト
app.get("/game/create", (req, res) => {
  res.redirect('/public/game_new.html');
});

// 詳細
app.get("/game/:number", (req, res) => {
  const number = req.params.number;
  const detail = game[ number ];
  res.render('game_detail', {id: number, data: detail} );
});

// 削除確認ページ
app.get("/game/delete/:number", (req, res) => {
  const number = req.params.number;
  const detail = game[ number ];

  if (!detail) {
    return res.status(404).send("データが存在しません");
  }

  res.render('game_delete', {id: number, data: detail} );
});

// 削除実行
app.post("/game/delete/:number", (req, res) => {
  const number = req.params.number;

  if (!game[number]) {
    return res.status(404).send("データが存在しません");
  }

  game.splice(number, 1);
  res.render('game_message', { message: "ゲーム情報の削除を完了しました。",link: "/game" , linktext: "ゲーム一覧に戻る" });
});

// Create
app.post("/game", (req, res) => {
  const id = game.length ;
  const code = req.body.code;
  const name = req.body.name;
  const category = req.body.category;
  const author = req.body.author;
  const url = req.body.url;
  game.push( { id: id, code: code, name: name, category: category, author: author, url: url } );
  console.log( game );

  res.render('game_message', { message: "新しいゲームを追加しました。", link: "/game", linktext: "ゲーム一覧に戻る" });
});

// 編集ページ
app.get("/game/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = game[ number ];
  res.render('game_edit', {id: number, data: detail} );
});

// Update
app.post("/game/update/:number", (req, res) => {
  game[req.params.number].code = req.body.code;
  game[req.params.number].name = req.body.name;
  game[req.params.number].category = req.body.category;
  game[req.params.number].author = req.body.author;
  game[req.params.number].url = req.body.url;

  console.log( game );
  res.render('game_message', { message: "ゲーム情報を変更しました。", link: "/game/" + req.params.number , linktext: "変更したゲームの詳細ページへ戻る" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
