export class DateType{
    protected fullDate:number = 0
    startDate: string | HTMLInputElement;
    endDate: string | HTMLInputElement;
    durationContainer: HTMLElement | undefined;
    autoSetDuration: boolean;
      constructor(startDate:string|HTMLInputElement, endDate:string|HTMLInputElement, durationContainer?:HTMLElement, autoSetDuration:boolean=false){
          this.startDate = startDate;
          this.endDate = endDate;
          this.durationContainer = durationContainer;
          this.autoSetDuration = autoSetDuration;
      }
      public findDurationBetweenToDate() {
          let start_date:Date|null = null;
          let fullDate:number = 0;
          if(this.startDate instanceof HTMLInputElement){
              const {startDate} = this;
              startDate.addEventListener("input", ()=>{
                  const {value} = startDate
                  start_date = new Date(value);
                  if(this.endDate instanceof HTMLInputElement){
                      this.endDate.min = start_date.toISOString().split("T")[0];
                  }
              });
          }
          if(this.endDate instanceof HTMLInputElement){
              const {endDate} = this;
              endDate.addEventListener("input", () => {
                  let end_date = new Date(endDate.value);
                  if(start_date && start_date < end_date) {
                      endDate.value = end_date.toISOString().split("T")[0];
                      this.fullDate = end_date.getTime() - start_date.getTime();
                      if(true === this.autoSetDuration && this.durationContainer){
                        const text = this.fullDurationText
                        const duration = this.durationContainer;
                        if(duration)
                        {this.setFullDurationText(duration, text);}
                      }
                  }
              });
          }
      }
      public convertFullDateToDays()
      {
        let one_day = 24 * 60 * 60 * 1000;
        let absValue = Math.abs(this.fullDate);
        return Math.floor(absValue / one_day);
      };
      
      public convertFullDateToWeeks(extDays?:number)
      {
        let totalDaysNumber = extDays;
        let weeksNumber:number = 0;
        if(this.fullDate){
          totalDaysNumber = this.convertFullDateToDays();
        }
        if(totalDaysNumber){
          weeksNumber = Math.floor(totalDaysNumber / 7);
          extDays = totalDaysNumber % 7;
        }
        return { weeks: weeksNumber, extDays: extDays };
      }
      
      public convertFullDateToMonths()
      {
        let totalDaysNumber = this.convertFullDateToDays();
        let monthsNumber = Math.floor(totalDaysNumber / 30);
        let extDays = totalDaysNumber % 30;
        let totalweeks = this.convertFullDateToWeeks(extDays);
        let days:number|undefined = 0;
        let weeks:number|undefined = 0;
        let months:number|undefined = 0;
        if(totalDaysNumber < 30){
          days = this.convertFullDateToWeeks(totalDaysNumber).extDays;
          weeks = this.convertFullDateToWeeks(totalDaysNumber).weeks;
        }else{
          days = totalweeks.extDays;
          weeks = totalweeks.weeks;
          months = monthsNumber;
        }
        return {days,weeks,months};
      }
      
      public durationText(day?:number, week?:number, month?:number)
      {
          let dayText:string = "";
          (day && day > 1) ? dayText=`${day} jours` : dayText=`${day} jour`;
      
          let weekText:string = "";
          (week && week > 1) ? weekText=`${week} semaines` : weekText=`${week} semaine`;
      
          let monthText:string = "";
          (month && month > 0) ? monthText = `${month} mois` : monthText = "";
      
          if(day === 0){
            return {weekText,monthText}
          }
          if(week === 0){
            return {dayText,monthText}
          }
          if(month === 0){
            return {dayText,weekText}
          }
          return {dayText,weekText,monthText}
      }
      
      public get fullDurationText()
      {
        let fulleMonth = this.convertFullDateToMonths()
        const day = fulleMonth.days
        const week = fulleMonth.weeks
        const month = fulleMonth.months
        let durationText = this.durationText(day, week, month);
        console.log({durationText,month})
        return ` ${durationText.monthText??""} ${durationText.weekText??""} ${durationText.dayText??""}`;
      }
      public setFullDurationText(element:HTMLElement, text:string)
      {
        if(element instanceof HTMLInputElement){
          element.value = text;
        }else{
          element.innerHTML = text;
        }
      }
  }
  