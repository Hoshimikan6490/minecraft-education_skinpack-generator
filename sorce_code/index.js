var archiver = require("archiver");
var fs = require("fs");

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const settings = JSON.parse(fs.readFileSync("./public/settings.json", "utf8"));
let skinpack_name_en = settings.skinpack_name_en;
let skinpack_name_ja = settings.skinpack_name_ja;
let slim_skin = settings.slim_skin;

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
function createUuid() {
  let uuid = "",
    i,
    random;
  for (i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-";
    }
    uuid += (i == 12 ? 4 : i == 16 ? (random & 3) | 8 : random).toString(16);
  }
  console.log(uuid);
  return uuid;
}

//UUIDを３つ取得
let uuid1 = createUuid();
let uuid2 = createUuid();
let uuid3 = createUuid();

//データ準備
const manifest_data = {
  format_version: 1,
  header: {
    name: skinpack_name_en,
    uuid: uuid1,
    version: [1, 0, 0],
  },
  modules: [
    {
      type: "skin_pack",
      uuid: uuid2,
      version: [1, 0, 0],
    },
  ],
};

var img_info = fs.readdirSync("./public/images");

let temp_pas = `./public/temp/${uuid3}`;
fs.mkdirSync(temp_pas);

var skin_info = [];
for (key in img_info) {
  let image_name = img_info[key].split(".")[0];
  if (slim_skin == true) {
    var skin_type = "geometry.humanoid.customSlim";
  } else if (slim_skin == false) {
    var skin_type = "geometry.humanoid.custom";
  }
  let single_data = {
    localization_name: image_name,
    geometry: skin_type,
    texture: img_info[key],
    type: "free",
  };
  skin_info.push(single_data);

  fs.copyFileSync(
    `./public/images/${img_info[key]}`,
    `${temp_pas}/${img_info[key]}`
  );
  console.log(`${image_name}にコピーしました。`);
}

const skins_data = {
  skins: skin_info,
  serialize_name: skinpack_name_en,
  localization_name: skinpack_name_en,
};

fs.writeFileSync(`${temp_pas}/manifest.json`, JSON.stringify(manifest_data));
fs.writeFileSync(`${temp_pas}/skins.json`, JSON.stringify(skins_data));
///////////////
fs.mkdirSync(`${temp_pas}/texts`);

var en_US_data = `skinpack.${skinpack_name_en}=${skinpack_name_en}`;
for (key in img_info) {
  let image_name = img_info[key].split(".")[0];
  let add_data = `\n\tskin.${skinpack_name_en}.${image_name} name=${image_name}`;

  var en_US_data = en_US_data + add_data;
}

var ja_JP_data = `skinpack.${skinpack_name_en}=${skinpack_name_ja}`;
for (key in img_info) {
  let image_name = img_info[key].split(".")[0];
  let add_data = `\n\tskin.${skinpack_name_en}.${image_name} name=${image_name}`;

  var ja_JP_data = ja_JP_data + add_data;
}

fs.writeFileSync(`${temp_pas}/texts/en_US.lang`, en_US_data);
fs.writeFileSync(`${temp_pas}/texts/ja_JP.lang`, ja_JP_data);

/////////////////////////////////////////////////////////
const output = fs.createWriteStream("skinpack.mcpack");
const archive = archiver("zip", {
  zlib: { level: 9 }, // 最高圧縮レベル
});
output.on("close", async function () {
  console.log(`skinpack.zip に圧縮しました。`);
});
archive.on("error", function (err) {
  throw err;
});
archive.pipe(output);
archive.directory(temp_pas, false);
archive.finalize();
