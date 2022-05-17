
//create quotes array separated by commas
//create objects that represent each quote in the array
let quotes = [
    {
        quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', 
        source: 'Patrick McKenzie',
        citation: 'Twitter', 
        year: '2016'
    }, 
    {
        quote: 'Enjoy every step you take. If you are curious, there is always something new to be discovered in the backdrop of your daily life.', 
        source: 'Roy T. Bennett', 
        citation: 'Twitter'
    }, 
    {
        quote: 'We cannot solve our problems with the same thinking we used when we created them.',
        source: 'Albert Einstein',
        citation: 'BrainyQuote'
    }, 
    {
        quote: 'To live is the rarest thing in the world; most people just exist',
        source: 'Oscar Wilde',
        citation: 'GoodReads',
        year: '1891'
    },
    {
        quote: 'If you can\'t make it good, at least make it look good',
        source: 'Bill Gates'
    }
];

    let arrIndex = 0;
    let oldIndex = 0;

/** getRandomQuote function **/
const getRandomQuote =()=>{
    arrIndex = Math.floor(Math.random() * quotes.length); //generates a random number

    //checks if the random generated is equal to the initialized oldIndex
    while(arrIndex == oldIndex){
        arrIndex = Math.floor(Math.random() * quotes.length);
    }

    oldIndex = arrIndex; //saves the value of arrIndex to oldIndex for checking in the while loop
    return quotes[arrIndex];
}

/** printQuote function **/
const printQuote =()=>{
    //create a variable to store a random quote object from the getRandomQuote function
    let randomQuote = getRandomQuote();
    console.log(randomQuote); //logs out the random quote object

    //create a variable to store two html strings
    let PtoHTML1 = `<p class = 'quote'> ${randomQuote.quote}</p> <p class = 'source'> ${randomQuote.source}`;
    console.log(randomQuote.quote);

    //checks if citation property exists; if so, concatenate the corresponding span tag and array object
    if(randomQuote.citation != undefined){
        PtoHTML1 = `<p class = 'quote'> ${randomQuote.quote}</p> <p class = 'source'> ${randomQuote.source} <span class = 'citation'> ${randomQuote.citation}</span>`;
    }

    //checks if the year property exists; if so, concatenate the corresponding span tag and array object
    if(randomQuote.year != undefined){
        PtoHTML1 = `<p class = 'quote'> ${randomQuote.quote}</p> <p class = 'source'> ${randomQuote.source} 
        <span class = 'citation'> ${randomQuote.citation}</span> <span class = 'year'> ${randomQuote.year}</span>`;
        console.log(randomQuote.year);
    }

    let output = PtoHTML1 + '</p>';
    console.log(output); //logs out the complete HTML string

    document.getElementById("quote-box").innerHTML = output;

}

/** event listener for print quote button 
 * calls the printQuote function every time the load quote button is clicked**/
document.getElementById('load-quote').addEventListener("click", printQuote);
