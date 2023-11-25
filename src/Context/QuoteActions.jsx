 export const getData = async () => {
    const res = await fetch("https://quotable.io/random");
    const data = await res.json();
    return data;
    
};

