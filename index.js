let nomeDoHeroi = "Super heroi";

let xpHeroi = "100005";

switch (true){
    case xpHeroi >= 1000 && xpHeroi <= 2000:
    console.log(nomeDoHeroi + " é nível Ferro.");
    break;
    case xpHeroi >= 2001 && xpHeroi <= 3000:
    console.log(nomeDoHeroi + " é nível Bronze.");
    break;
    case xpHeroi >= 3001 && xpHeroi <= 5000:
    console.log(nomeDoHeroi + " é nível Prata.");
    break;
    case xpHeroi >= 5001 && xpHeroi <= 6000:
    console.log(nomeDoHeroi + " é nível Ouro.");
    break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
    console.log(nomeDoHeroi + " é nível Platina.");
    break;
    case xpHeroi >= 8001 && xpHeroi <= 9000:
    console.log(nomeDoHeroi + " é nível Ascendente.");
    break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
    console.log(nomeDoHeroi + " é nível Imortal.");
    break;
    case xpHeroi >= 10001:
    console.log(nomeDoHeroi + " é nível Imortal.");
}