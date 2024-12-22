//küçükten büyüğe sıralama
const array = [5,8,10,1,3,2,2,5];
//sort ilk önce iki sayıyı alıyor.karşılaştırma yapar.
//sonra ilk sayı küçükse -1 değerini döner.
//ilk sayı büyükse 1 değerini döndürür. eşitse 0 değerini döner.
const compare = (a,b) => {
    if(a < b){
        return -1; //büyükten küçüğe olsaydı 1 yazılırdı.
    }else if(a > b){
        return 1;
    }
}
console.log(array);

const result = array.sort(compare);

console.log(result);

