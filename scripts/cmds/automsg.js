const moment = require('moment-timezone');


module.exports.config = {

  name: "autotime",

  version: "2.0.0",

  role: 0,

  author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//

  description: "autotime",

  category: "AutoTime",

  countDown: 3

};


module.exports.onLoad = async ({ api }) => {

   const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);

  const arrayData = {

     "12:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ১২টা বেজে গেলো সবাই শুয়ে পড়ো🤟_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

      },

      "01:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ১টা বাজে প্রেম না কইরা যাইয়া ঘুমা বেক্কল😾_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

      },

      "02:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ২টা বাজে যারা ছ্যাকা খাইছে তারা জেগে আছে🫠🫠।_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"


      },

      "03:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ৩টা বাজে সবাই মনে হয় ঘুম🥹 আমার ভাই ঘুম আসে না_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "04:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ৪টা বাজে একটু পর ফজরের আযান দিলে নামাজ পড়ে নিও সবাই_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"


      },

      "05:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন ভোর ৫টা বাজে সবাই নামাজ পড়ছো তো?❤️_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "06:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন সকাল ৬টা বাজে ঘুম থেকে উঠো সবাই _🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "07:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন সকাল ৭টা বাজে সবাই ব্রেকফাস্ট করে নাও😊_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "08:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন সকাল ৮ টা বাজে সবাই মনে হয় কাজে ব্যস্ত হয়ে গেছো_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "09:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন সকাল ৯ টা বাজে মন দিয়ে কাজ করো সবাই❤️_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "10:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন সকাল ১০টা বাজে মিস করছি তোমাদের_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "11:00:00 AM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন সকাল ১১টা বাজে_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "12:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন দুপুর ১২টা বাজে ❤️_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "01:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন দুপুর ১টা বাজে সবাই কাজ বন্ধ করে জোহরের নামাজ পড়ে নাও😻_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "02:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন দুপুর ২টা বাজে গোসল করে সবাই দুপুরের খাবার খেয়ে নাও ☺️_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "03:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন দুপুর ৩টা বাজে❤️_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "04:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন বিকাল ৪টা বাজে আসরের আযান দিলে সবাই নামাজ পড়ে নাও🥀 _🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "05:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন বিকাল ৫টা বাজে একটু পর মাগরিবের আযান দিবে সবাই নামাজ পড়ে নিও 😻_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "06:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন সন্ধ্যা ৬টা বাজে সবাই হাতমুখ ধুয়ে কিছু খেয়ে নাও এবং পরিবারের সাথে সময় কাটাও😍_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "07:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন সন্ধ্যা ৭ টা বাজে কি করছো সবাই এখন এশার আযান দিবে সবাই নামাজ পড়ে নাও❤️_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "08:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ৮টা বাজে_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "09:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ৯টা বাজে সবাই কি শুয়ে পড়লা🙂_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "10:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ১০টা বাজে সবাই ঘুমায় পড়ো আমার বউ নাই ভাই ঘুম ও আসে না😭_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

        

      },

      "11:00:00 PM": {

        message: "🌺ⒿⓊⒷⒶⓎⒺⓇ-ⓀⒾⓃⒼ-⑦①-🌺\n▬▬▬▬▬▬▬▬▬▬▬▬\nএখন রাত ১১টা বাজে\nখাউয়া দাউয়া করে নেউ😙_🄲🅁🄴🄰🅃🄾🅁-🄹🅄🄱🄰🅈🄴🅁"

      }


    // Add more messages for other times as needed

  };


  const checkTimeAndSendMessage = () => {

    const now = moment().tz('Asia/Dhaka');

    const currentTime = now.format('hh:mm:ss A');


    const messageData = arrayData[currentTime];


    if (messageData) {

      const tid = global.db.allThreadData.map(i => i.threadID);

      tid.forEach(async (threadID, index) => {

        api.sendMessage({ body: messageData.message }, threadID);

      });

    }


    const nextMinute = moment().add(1, 'minute').startOf('minute');

    const delay = nextMinute.diff(moment());

    setTimeout(checkTimeAndSendMessage, delay);

  };


  checkTimeAndSendMessage();

};


module.exports.onStart = () => {};
