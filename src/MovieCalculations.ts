export interface MovieType {
    dailyRate: number,
    rentalDays: number,
    base: number,
    bonusPoint: number
}

// calculates the price of each movie rental
export const rentalAmount = (movieType: MovieType, days: number): number => {
    let { dailyRate, rentalDays, base } = movieType
    dailyRate += (days - rentalDays) * base 
    return dailyRate
}

// calculates the frequentRenterPoints earned for each movie rental
export const calculatePoints = (bonusPoint: number) => {
    let points = 1
    points += bonusPoint
    return points
}