const getPrimesNumber = (num: number)=> {
    
    const serie = Array.from({ length: num - 1 }, (_, index) => index + 2);
    const serieDelete = serie.reduce((out, item) => {
          const result = serie.reduce((out, subItem) => { 
            if(subItem%item==0 && subItem > item)
              return [...out, subItem];
            else
              return out;
          }, []);      
        return [...out, ...result];
    }, []);

    return { result: serie.filter(s => !serieDelete.includes(s)).reverse() }
}

export { getPrimesNumber }