import { XMLParser } from "fast-xml-parser";
import fetch from "node-fetch";




//Plain text or HTML
fetch('https://medium.com/feed/@pcexmember').then(res => res.text()).then(body => {
    // console.log(body)
    const parser = new XMLParser();
    let jObj = parser.parse(body);
    let images = jObj.rss.channel.item.map((element) => {
        let html = element['content:encoded'];
        return html.match(/<img[^>]+src="([^">]+)/g)[0]
            .match(/src=(?:(?:'([^']*)')|(?:"([^"]*)")|([^\s]*))/i)[0].replace(/src=['"]/i, '');
    })

    console.log(images);
});


