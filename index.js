class BorderRadiusgenerator{
  constructor(all,rtop,rbot,ltop,lbot,allref,rtopref,rbotref,ltopref,lbotref,boxPreview){
    this.all = all;
    this.rtop = rtop;
    this.rbot = rbot;
    this.ltop = ltop;
    this.lbot = lbot;
    this.allref = allref;
    this.rtopref = rtopref;
    this.rbotref = rbotref;
    this.ltopref = ltopref;
    this.lbotref = lbotref;
    this.boxPreview = boxPreview;
    
  }

  initialize(){
    this.allref.value = this.all.value;
    this.rtopref.value = this.rtop.value;
    this.rbotref.value = this.rbot.value;
    this.ltopref.value = this.ltop.value;
    this.lbotref.value = this.lbot.value;

    this.applyEfect()
  }

  applyEfect(){
    if (this.allref.value != 0){
      this.boxPreview.style.borderRadius = `${this.allref.value}px`;
    }else{
      this.boxPreview.style.borderRadius = `${this.ltopref.value}px ${this.rtopref.value}px ${this.lbotref.value}px ${this.rbotref.value}px`;
    }
   
  }

  updateValue(type, value){
    switch (type) {
      case "all":
        this.allref.value = value;
        break;
      case "ltop":
        this.ltopref.value = value;
        break;
      case "rtop":
        this.rtopref.value = value;
        break;
      case "lbot":
        this.lbotref.value = value;
        break;
      case "rbot":
        this.rbotref.value = value;
        break;
    }
    this.applyEfect()

  }


}
class Boxshadowgenerator{
  constructor(horizontal, horizontalref, vertical, verticalref, blur, blurref, spread, spreadref, boxPreview){
    this.horizontal = horizontal;
    this.horizontalref = horizontalref;
    this.vertical = vertical;
    this.verticalref = verticalref;
    this.blur = blur;
    this.blurref = blurref;
    this.spread = spread;
    this.spreadref = spreadref;
    this.boxPreview = boxPreview;

  }

  initialize(){
    this.horizontalref.value = this.horizontal.value
    this.verticalref.value = this.vertical.value
    this.blurref.value = this.blur.value
    this.spreadref.value = this.spread.value

    this.applyEfect()
  }

  applyEfect(){
    this.boxPreview.style.boxShadow = `${this.horizontalref.value}px ${this.verticalref.value}px ${this.blurref.value}px ${this.spreadref.value}px rgba(0,0,0,0.1)`;
  }

  updateValue(type, value){
    switch (type) {
      case "horizontal":
        this.horizontalref.value = value;
        break;
      case "vertical":
        this.verticalref.value = value;
        break;
      case "blur":
        this.blurref.value = value;
        break;
      case "spread":
        this.spreadref.value = value;
        break;
    }
    this.applyEfect()

  }
}

const horizontal = document.querySelector("#horizontal");
const horizontalref = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalref = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurref = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadref = document.querySelector("#spread-value");
const boxPreview = document.querySelector("#objetcPreview");

const all = document.querySelector("#all");
const rtop = document.querySelector("#r-top");
const ltop = document.querySelector("#l-top");
const rbot = document.querySelector("#r-bot");
const lbot = document.querySelector("#l-bot");
const allref = document.querySelector("#allref");
const rtopref = document.querySelector("#r-topref");
const ltopref = document.querySelector("#l-topref");
const rbotref = document.querySelector("#r-botref");
const lbotref = document.querySelector("#l-botref");


const boxShadow = new Boxshadowgenerator(horizontal, horizontalref, vertical, verticalref,blur,blurref,spread,spreadref,boxPreview);
const borderRadius = new BorderRadiusgenerator(all,rtop,rbot,ltop,lbot,allref,rtopref,rbotref,ltopref,lbotref,boxPreview);

boxShadow.initialize()
borderRadius.initialize()

horizontal.addEventListener("input", (e)=>{
  const value = e.target.value
  boxShadow.updateValue("horizontal",value)
});
vertical.addEventListener("input", (e)=>{
  const value = e.target.value
  boxShadow.updateValue("vertical",value)
});
blur.addEventListener("input", (e)=>{
  const value = e.target.value
  boxShadow.updateValue("blur",value)
});
spread.addEventListener("input", (e)=>{
  const value = e.target.value
  boxShadow.updateValue("spread",value)
});

all.addEventListener("input", (e)=>{
  const value = e.target.value
  borderRadius.updateValue("all",value)
});
ltop.addEventListener("input", (e)=>{
  const value = e.target.value
  borderRadius.updateValue("ltop",value)
});
rtop.addEventListener("input", (e)=>{
  const value = e.target.value
  borderRadius.updateValue("rtop",value)
});
lbot.addEventListener("input", (e)=>{
  const value = e.target.value
  borderRadius.updateValue("lbot",value)
});
rbot.addEventListener("input", (e)=>{
  const value = e.target.value
  borderRadius.updateValue("rbot",value)
});

