export default function ProductDiscount(priceBefore, priceNow){  

    var porcent = priceBefore - priceNow;
    porcent = porcent / priceBefore;

    var round = porcent.toString();
    round = round.substring(0,4);

    var res = parseFloat(round) * 100;

    return res;
}