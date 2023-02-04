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


const boxShadow = new Boxshadowgenerator(horizontal, horizontalref, vertical, verticalref,blur,blurref,spread,spreadref,boxPreview);

boxShadow.initialize()

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
