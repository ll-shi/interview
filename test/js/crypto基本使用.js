import CryptoJs from 'crypto-js/crypto-js.js'
// AES 纯文本加密 参数接受字符串或者字符串数组。加密之后返回的是一个cipherParams对象。可以访问加密期间
// 的所有参数
var cipherParams = CryptoJs.AES.encrypt('my message','secret key 123');
console.dir(cipherParams);
var ciphertext = cipherParams.toString();
console.log('密文：',ciphertext);
// AES解密
var bytes = CryptoJs.AES.decrypt(ciphertext,'secret key 123');
var originalText = bytes.toString(CryptoJs.enc.Utf8);
console.log('原文：',originalText); 
// 加密对象
var student = {name: 'llshi',desc:'师姐这么大，我想去看看'};
// 需要把对象转换成json字符串。
var cipherObj = CryptoJs.AES.encrypt(JSON.stringify(student), 'secret key 123').toString();
console.log('fjaf:',cipherObj);
var objBytes = CryptoJs.AES.decrypt(cipherObj,'secret key 123');
var objStr = objBytes.toString(CryptoJs.enc.Utf8);
var originalObj = JSON.parse(objStr);
console.log('student:',originalObj);
// MD5 加密
var hash = CryptoJs.MD5('message');
console.log('hash加密方式：',hash);
// 自定义解析cipherParams格式
var JsonFormatter = {
  stringify: function(cipherParams) {
    // create json object with ciphertext
    var jsonObj = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
​
    // optionally add iv or salt
    if (cipherParams.iv) {
      jsonObj.iv = cipherParams.iv.toString();
    }
​
    if (cipherParams.salt) {
      jsonObj.s = cipherParams.salt.toString();
    }
​
    // stringify json object
    return JSON.stringify(jsonObj);
  },
  parse: function(jsonStr) {
    // parse json string
    var jsonObj = JSON.parse(jsonStr);
​
    // extract ciphertext from json object, and create cipher params object
    var cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
    });
​
    // optionally extract iv or salt
​
    if (jsonObj.iv) {
      cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
    }
​
    if (jsonObj.s) {
      cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
    }
​
    return cipherParams;
  }
};
​
var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase", {
  format: JsonFormatter
});

