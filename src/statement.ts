import { rentalAmount, calculatePoints } from "./MovieCalculations";
import {StatementFormat} from './Format'


export const statement = (format: StatementFormat, customer: any, movies: any, movieTypes: any): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let movieType = movieTypes[movie.code]
    let thisAmount = 0;

    thisAmount = rentalAmount(movieType, r.days)
    
    frequentRenterPoints += calculatePoints(movieType.bonusPoint)

    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    let htmlResult = `<h1>Rental Record for <em>${customer.name}</em></h1>\n <ul>\n`;
    let totalAmountTwo = 0;
    let frequentRenterPointsTwo = 0;
      for (let r of customer.rentals) {
        let movie = movies[r.movieID];
        let movieType = movieTypes[movie.code]
        let thisAmount = 0;

        thisAmount = rentalAmount(movieType, r.days)
    
        frequentRenterPointsTwo += calculatePoints(movieType.bonusPoint)

        htmlResult += `\t<li>${movie.title} - ${thisAmount}</li>\n`;
        totalAmountTwo += thisAmount;
      }
      htmlResult += `\n<ul>\n<p>Amount owed is <em>${totalAmountTwo}</em></p>\n`;
      htmlResult += `<p>You earned <em>${frequentRenterPointsTwo}</em> frequent renter points</p>\n`;
      return (format == StatementFormat.TEXT ? result : htmlResult);
};

