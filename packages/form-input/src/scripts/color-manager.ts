/**
 * Manages the color-related functionality, including fetching colors from a URL and handling color selection events.
 */
export default class ColorManager {
  /**
   * The selector or HTMLInputElement representing the color picker.
   * @protected
   * @type {string | HTMLInputElement}
   */
  protected colorPicker: string | HTMLInputElement;

  /**
   * Constructs a new ColorManager instance.
   * @param {string | HTMLInputElement} colorPicker - The selector or HTMLInputElement representing the color picker.
   */
  constructor(colorPicker: string | HTMLInputElement) {
      this.colorPicker = colorPicker;
  }

  /**
   * Fetches colors from the specified URL and populates the color picker's datalist.
   * Also logs the selected color when an input event occurs.
   * @param {string} url - The URL from which to fetch color data.
   */
  public fetchColors(url: string) {
      document.addEventListener("DOMContentLoaded", async () => {
          const colorPicker = this.colorPicker instanceof HTMLInputElement ? this.colorPicker : document.getElementById(this.colorPicker) as HTMLInputElement;
          const datalist = document.createElement('datalist');
          datalist.id = "colorOptions";

          try {
              const response = await fetch(url);
              const data = await response.json();

              if (response.ok) {
                  const colors = data.colors;
                  colors.forEach((color: string) => {
                      const option = document.createElement("option");
                      option.value = color;
                      datalist.appendChild(option);
                  });
              } else {
                  console.error("Error fetching colors:", response.statusText);
              }
          } catch (error) {
              console.error("Error loading colors:", error);
          }

          colorPicker.addEventListener("input", function () {
              console.log("Selected color:", colorPicker.value);
          });
      });
  }
}
