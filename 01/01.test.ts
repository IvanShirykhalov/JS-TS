import {mult, splitIntoWords, sum} from "./01";

test('mun should be correct', ()=>{
    //data
    let a = 1;
    let b = 2;
    let c = 3;
    //action
    const result = sum(a, b)

    //result
    expect(result).toBe(3)
})

test('mult should be correct', ()=>{
    //data
    let a = 2;
    let b = 4;
    let c = 5;

    //action
    const result1 = mult(a, b)
    const result2 = mult(c, b)

    //result
    expect(result1).toBe(8)
    expect(result2).toBe(20)
})

test('splitting into words should be correct', ()=>{
    //data
    let sent1 = 'Hello my friend!'
    let sent2 = 'JS - programming language'

    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //result
    expect(result1.length).toBe(3)
})
