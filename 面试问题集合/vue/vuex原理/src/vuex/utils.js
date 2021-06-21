function isObject(obj){
  return typeof obj === 'object' && obj !== null;
}
export default function(obj,cb){
  for(const [key,value] of Object.entries(obj)){
    cb(value,key);
  }
}
export default isObject