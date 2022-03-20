const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


const app = express()

const url = 'https://www.otodom.pl/pl/oferty/sprzedaz/mieszkanie/wielkopolskie?roomsNumber=%5BTHREE%5D&market=PRIMARY'
axios(url).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    let houses_final = []

    // article
    $('.css-t1ljsh,.es62z2j25', html).each(function(){
        let title = $(this).find('div').first().text();
        
        $('.css-e87esy,.es62z2j17', html).each(function(){
            
            let cost = $(this).find('p').first().text();
            if (cost !== 'Zapytaj o cenę'){
                cost = cost.slice(0, -3);
                let meters = $(this).find('p').last().text().slice(8, -3);
                let cost_n = parseFloat(cost.replace(/\s/g, ''));
                let meters_n = parseFloat(meters);
                let per_meter_n = cost_n / meters_n;
                houses_final.push({
                    title,
                    cost_n,
                    meters_n,
                    per_meter_n
                })
            }
            
        })
    })
    //let items = houses_final.sort((a, b) => a.per_meter_n - b.per_meter_n);
    console.log(houses_final);

}).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT ${PORT}'))

