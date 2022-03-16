import { MovieCode } from "./Movie";

export const statement = (customer: any, movies: any, text: boolean): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    switch (movie.code) {
      case MovieCode.REGULAR:
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case MovieCode.NEW:
        thisAmount = r.days * 3;
        break;
      case MovieCode.CHILDRENS:
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    frequentRenterPoints++;
    if (movie.code === MovieCode.NEW && r.days > 2) frequentRenterPoints++;

    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;


  if (text === false) {
    return result
  } 
  else {
    let totalAmountTwo = 0;
    let frequentRenterPointsTwo = 0;
    let htmlResult = `<h1>Rental Record for <em>${customer.name}</em></h1>\n <ul>\n`;
      for (let r of customer.rentals) {
        let movieTwo = movies[r.movieID];
        let thisAmount = 0;

        switch (movieTwo.code) {
          case MovieCode.REGULAR:
            thisAmount = 2;
            if (r.days > 2) {
              thisAmount += (r.days - 2) * 1.5;
            }
            break;
          case MovieCode.NEW:
            thisAmount = r.days * 3;
            break;
          case MovieCode.CHILDRENS:
            thisAmount = 1.5;
            if (r.days > 3) {
              thisAmount += (r.days - 3) * 1.5;
            }
            break;
        }

        frequentRenterPointsTwo++;
        if (movieTwo.code === MovieCode.NEW && r.days > 2) frequentRenterPointsTwo++;

        htmlResult += `\t<li>${movieTwo.title} - ${thisAmount}</li>\n`;
        totalAmountTwo += thisAmount;
      }
      htmlResult += `\n<ul>\n<p>Amount owed is <em>${totalAmountTwo}</em></p>\n`;
      htmlResult += `<p>You earned <em>${frequentRenterPointsTwo}</em> frequent renter points</p>\n`;
      return htmlResult
  };
};
