// 用于前端生成RSA密钥对，以及生成AES密钥。
/**
 * 
 * @param {*} config 配置对象
 * @param {*} workFn 获取到密钥之后的回调。
 */
async function getRsaKeyPair(config,workFn){
  let result = {};
  config = config ?? {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1,0,1]),
    hash: "SHA-256",
  }
  try{
    const keyPair = await window.crypto.subtle.generateKey(config,true,["encrypt","decrypt"]);
    exportCryptoKey(keyPair.publicKey,'publicKey',result);
    exportCryptoKey(keyPair.privateKey,'privateKey',result);
    workFn && workFn(result);
  }catch(error){
    return error;
  }
  // return result;
}
/**
 * 
 * @param {*} buf 一个buffer数组
 */
function buffer2str(buf){
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}
/**
 * 
 * @param {*} key 密钥的buffer数组
 * @param {*} type 密钥类型
 */
async function exportCryptoKey(key,type = 'publicKey',res){
  let format = type === 'publicKey' ? 'spki' : 'pkcs8';
  try{
    const exported = await window.crypto.subtle.exportKey(format,key);
    const exportedAsString = buffer2str(exported);
    const exportedAsBase64 = window.btoa(exportedAsString);
    // const pemExported = type === 'public' ? `-----BEGIN PUBLIC KEY-----\n${exportedAsBase64}\n-----END PUBLIC KEY-----` :
    //  `-----BEGIN Private KEY-----\n${exportedAsBase64}\n-----END Private KEY-----`;
    res[type] = exportedAsBase64;
    return exportedAsBase64;
  }catch(error){
    return error;
  }
}

