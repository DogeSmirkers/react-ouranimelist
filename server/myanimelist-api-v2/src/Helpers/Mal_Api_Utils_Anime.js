module.exports = class MAL_API_UTILS_ANIME {
  #months = ["winter", "spring", "summer", "fall"];
  
  /**
   * @param  {Number => 0 -> 11} month
   */
   getSeasonForNumberMonth(month) {
    if (month < 3) {
        return "winter";
    }
    else if (month > 2 && month < 6) {
        return "spring";
    }
    else if (month > 5 && month < 9) {
        return "summer";
    }
    else {
        return "fall";
    }
  }

  /**
   * @param  {String} month
   */
  checkIfMonthIsValid(month) {
    if (this.#months.indexOf(month) != -1) {
      return true;
    } else {
      return false;
    }
  }
};
