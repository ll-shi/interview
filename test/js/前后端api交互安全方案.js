// api数据加密方案
// AES与RSA混合加密  应该传入key(键),iv,mode(加密模式)，Padding(填充方式
import CryptoJs from 'crypto-js/crypto-js.js'
// 模拟后端公钥，私钥
function generateKey(fn){
  let keyPair = window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 4096,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256"
    },
    true,
    ["encrypt", "decrypt"]
  ).then(keys =>{

  });
}
// 工具方法
function RSA2text(buffer,isPrivate=0) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  var base64 = window.btoa(binary);
  var text = "-----BEGIN "+(isPrivate?"PRIVATE":"PUBLIC")+" KEY-----\n";
  text += base64.replace(/[^\x00-\xff]/g,"$&\x01").replace(/.{64}\x01?/g,"$&\n");
  text += "\n-----END "+(isPrivate?"PRIVATE":"PUBLIC")+" KEY-----";
  return text;
}
console.log(keyPair);

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}


async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey(
    "spki",
    key
  );
  const exportedAsString = ab2str(exported);
  const exportedAsBase64 = window.btoa(exportedAsString);
  const pemExported = `-----BEGIN PUBLIC KEY-----\n${exportedAsBase64}\n-----END PUBLIC KEY-----`;

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = pemExported;
}


window.crypto.subtle.generateKey(
  {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256",
  },
  true,
  ["encrypt", "decrypt"]
).then((keyPair) => {
  const exportButton = document.querySelector(".spki");
  exportButton.addEventListener("click", () => {
    exportCryptoKey(keyPair.publicKey);
  });
});