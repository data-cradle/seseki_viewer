
var gis_def = {
  geodata_file : 'data/01_hokkaido_topo.json',
  geodata_fieldname : '01_hokkaido', // topojsonのフィールド名
  ref_size : {
    width :  840,
    height:  660,
    scale : 5000
  },
  communes : ["七飯町",
  "三笠市",
  "上ノ国町",
  "上士幌町",
  "上富良野町",
  "上川町",
  "上砂川町",
  "下川町",
  "中富良野町",
  "中川町",
  "中札内村",
  "中標津町",
  "中頓別町",
  "乙部町",
  "京極町",
  "仁木町",
  "今金町",
  "伊達市",
  "佐呂間町",
  "余市町",
  "倶知安町",
  "八雲町",
  "共和町",
  "函館市",
  "初山別村",
  "別海町",
  "利尻富士町",
  "利尻町",
  "剣淵町",
  "北広島市",
  "北斗市",
  "北竜町",
  "北見市",
  "千歳市",
  "南富良野町",
  "南幌町",
  "占冠村",
  "厚岸町",
  "厚沢部町",
  "厚真町",
  "古平町",
  "名寄市",
  "和寒町",
  "喜茂別町",
  "増毛町",
  "士別市",
  "士幌町",
  "壮瞥町",
  "夕張市",
  "大樹町",
  "大空町",
  "天塩町",
  "奈井江町",
  "奥尻町",
  "妹背牛町",
  "安平町",
  "室蘭市",
  "富良野市",
  "寿都町",
  "小平町",
  "小樽市",
  "小清水町",
  "岩内町",
  "岩見沢市",
  "島牧村",
  "帯広市",
  "幌加内町",
  "幌延町",
  "幕別町",
  "平取町",
  "広尾町",
  "弟子屈町",
  "当別町",
  "当麻町",
  "恵庭市",
  "愛別町",
  "斜里町",
  "新冠町",
  "新十津川町",
  "新得町",
  "新ひだか町",
  "新篠津村",
  "日高町",
  "旭川市",
  "更別村",
  "月形町",
  "木古内町",
  "本別町",
  "札幌市",
  "東川町",
  "東神楽町",
  "松前町",
  "枝幸町",
  "栗山町",
  "根室市",
  "森町",
  "様似町",
  "標津町",
  "標茶町",
  "歌志内市",
  "比布町",
  "江別市",
  "江差町",
  "池田町",
  "沼田町",
  "泊村",
  "洞爺湖町",
  "津別町",
  "浜中町",
  "浜頓別町",
  "浦幌町",
  "浦河町",
  "浦臼町",
  "深川市",
  "清水町",
  "清里町",
  "湧別町",
  "滝上町",
  "滝川市",
  "猿払村",
  "由仁町",
  "えりも町",
  "せたな町",
  "むかわ町",
  "ニセコ町",
  "留寿都村",
  "留萌市",
  "登別市",
  "白糠町",
  "白老町",
  "真狩村",
  "知内町",
  "石狩市",
  "砂川市",
  "礼文町",
  "神恵内村",
  "福島町",
  "秩父別町",
  "稚内市",
  "積丹町",
  "紋別市",
  "網走市",
  "置戸町",
  "羅臼町",
  "美唄市",
  "美幌町",
  "美深町",
  "美瑛町",
  "羽幌町",
  "興部町",
  "芦別市",
  "芽室町",
  "苫前町",
  "苫小牧市",
  "蘭越町",
  "西興部村",
  "訓子府町",
  "豊富町",
  "豊浦町",
  "豊頃町",
  "赤井川村",
  "赤平市",
  "足寄町",
  "遠別町",
  "遠軽町",
  "釧路市",
  "釧路町",
  "長万部町",
  "長沼町",
  "陸別町",
  "雄武町",
  "雨竜町",
  "音威子府村",
  "音更町",
  "鶴居村",
  "鷹栖町",
  "鹿追町",
  "鹿部町",
  "黒松内町" ],
  exceptions : ["色丹郡色丹村","国後郡泊村","国後郡留夜別村","択捉郡留別村","紗那郡紗那村","蘂取郡蘂取村"],
  sample_data : 'params/sample_data_01_hokkaido.json'
};

var seseki = require('./seseki.js');

seseki(gis_def);
