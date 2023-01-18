export const numbers = (min = 1, max = 100) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return randomNumber;
    
    };