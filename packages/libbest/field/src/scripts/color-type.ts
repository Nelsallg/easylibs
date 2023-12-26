
export class ColorType{
    protected colorPicker: string | HTMLInputElement;
    constructor(colorPicker:string|HTMLInputElement){
      this.colorPicker = colorPicker;
    }
    public fetchColors(url:string){
      document.addEventListener("DOMContentLoaded", async () => {
        const colorPicker = this.colorPicker instanceof HTMLInputElement ? this.colorPicker : document.getElementById(this.colorPicker) as HTMLInputElement;
        const datalist = document.createElement('datalist');
        datalist.id = "colorOptions";
      
        try {
          const response = await fetch(url);
          const data = await response.json();
          if(response){
            const colors = data.colors;
            colors.forEach((color:string) => {
              const option = document.createElement("option");
              option.value = color;
              datalist.appendChild(option);
            });
          }
        } catch (error) {
          console.error("Erreur lors du chargement des couleurs :", error)
        }
        colorPicker.addEventListener("input", function () {
          console.log("Couleur sélectionnée :", colorPicker.value);
        });
      });
    }
  }