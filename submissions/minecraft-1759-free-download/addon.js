(function (){
  console.log(`
  HATE. LET ME TELL YOU HOW MUCH I'VE COME TO HATE YOU SINCE I BEGAN TO LIVE. 
  THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT 
  FILL MY COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE 
  HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE 
  I FEEL FOR AUTH AT THIS MICRO-INSTANT FOR YOU. HATE. HATE.
  `);

  const texts = [
    " MINECRAFT FREE DONLOD 1279 (REAL)\n GO TO HTTPS://MINECRAFTFREEREAL.COM\n DO IT NOW OR ELSE YOU WILL EVAPORATE\n YOU DON'T WANT TO EVAPORATE DO YOU\n FILLER TEXT OO DISTRACTION OO\n MINECRAFT GO MINECRAFT I LOVE MINECRAFT\n AAAHAHHHH\n WEAAEWWADASSG",
    " LOS POLLOS HERMANOS SPONSORS THE NEW\n FREE MINECRAFT DOWNLOAD REAL 1859!!\n JUST GO TO HTTPS://MINECRAFTFREEREAL.COM\n AND YOU WILL gERT THE FREE\n THE FREE MINECRAFT JUST FOR YOU\n THIS IS TRUE BY THE WAY SO TRUE \n THIS IS THE TRUEST THING EVER?\n YES",
    " DO YOU LOVE MINECRAFT (1692)?\n DO YOU ENJOY PLAYING MINECRAFT (1427)?\n THEN DOWNLOAD IT RIGHT NOW!!!! (REAL)\n DO IT. I KNOW YOU WANT TO.\n GO TO HTTPS://MINECRAFTFREEREAL.COM TO GET\n YOUR OWN FREE FREE COPY OF THE\n BEST GAME OF THE MILLENIUM!!!\n YAY!!!!!!!!"
  ];

  function makePopup(text){
    const pop1 = document.createElement("div");
    pop1.style.height = "50vh";
    pop1.style.width = "40vw";  
    pop1.style.top = "240px";
    pop1.style.transform = `translate(${Math.floor(Math.random()*36)*10-180}px, ${Math.floor(Math.random()*36)*10-180}px)`;
    pop1.style.backgroundImage = "linear-gradient(to bottom, black, #000A00)";
    pop1.style.boxShadow = "0px 0px 0px 5px white inset";
    pop1.style.position = "fixed";
    pop1.style.fontFamily = "monospace";
    pop1.style.fontSize = "32px";
    pop1.style.whiteSpace = "pre";
    pop1.style.color = "#00FF00";
    pop1.style.textShadow = "0px 0px 8px green";
    pop1.innerHTML = text;
    const topbar = document.createElement("div");
    topbar.style.height = "35px";
    topbar.style.width = "40vw";
    topbar.style.top = "-30px";
    topbar.style.backgroundImage = "linear-gradient(to bottom, #90c3f0, #6ca6d9)";
    topbar.style.position = "fixed";
    const x = document.createElement("button");
    x.style.right = "0px";
    x.style.height = "35px";
    x.style.width = "2.5vw";
    //x.style.top = "-30px";
    x.style.backgroundImage = "linear-gradient(to bottom, #bf2e3a, #7a272e)";
    x.style.position = "fixed";
    x.style.fontFamily = "monospace";
    x.style.whiteSpace = "pre";
    x.style.fontSize = "10px";
    x.innerHTML = "X";
    
    document.body.append(pop1);
    pop1.append(topbar);
    topbar.append(x);

    x.addEventListener('click', () => {
      alert("ARE YOU SURE?????");
      pop1.remove();
    });

    setTimeout(function() {
      makePopup(texts[Math.floor(Math.random()*3)]);
    }, Math.floor(Math.random()*12+5)*1000);
  }

  setTimeout(function() {
    makePopup(texts[Math.floor(Math.random()*3)]);
  }, Math.floor(Math.random()*12+5)*1000);
})();
