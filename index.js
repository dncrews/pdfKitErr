var express = require('express');
var pdfDocument = require('pdfkit');
var path = require('path');
var app = express();

app.get('/', function(req, res, next) {
  var doc = new pdfDocument({size: "A4", margins : {top : 0, bottom : 0, left : 0, right : 0} });

  doc.pipe(res);
  doc.registerFont('arial', path.join(__dirname + '/Arial.ttf'), 'arial');
  doc.registerFont('arial2', path.join(__dirname + '/Arial2.ttf'), 'arial2');
  doc.font('arial');

  doc.info.title = "My Booklet";

  //Draw Header
  doc
    .moveTo(30,76)
    .lineTo(570,76)
    .stroke('#a0a0a0');
  doc
    .fillColor('#0000000')
    .fontSize(32)
    .text('わたしについて', 30, 20);

  // Heading
  doc
    .fillColor('#000000')
    .fontSize(12)
    .text('出生', 30, 288, { lineGap: 2, width: 160 });
  // Date
  doc
    .fontSize(14)
    .text('1234 Mon Year', 30, doc.y, { lineGap: 4, width: 160 });
  // Place
  doc
    .fontSize(10)
    .text('', 30, doc.y, { lineGap: 3, width: 160 });

  // Stories
  doc
    .fontSize(14)
    .text('わたしについて人に知ってもらいたいこと', 200, 288, { lineGap:7, width: 360 });

  // Draw Names
  doc
    .fontSize(20)
    .fillColor('#000000')
    .text('My Full Name Here', 200, 102, {lineGap: 4, width: 290});


  // Footer
  doc
    .fontSize(10)
    .fillColor('#555555')
    .text('My Full Name Here', 30, 790);
  doc
    .fontSize(10)
    .fillColor('#555555')
    .text('ページ 1 ／ 2', 500, 790);
  doc
    .fill('#888888')
    .fontSize(7)
    .text('この印刷物の現在のバージョンはキリル文字，漢字(中国），かな，漢字（韓国），モンゴル語，およびローマ字のみをサポートしています。', 30, doc.y + 3);


  doc.addPage();

  //Header
  doc
    .moveTo(30,76)
    .lineTo(570,76)
    .stroke('#a0a0a0');
  doc
    .fillColor('#0000000')
    .fontSize(32)
    .text('母親', 30, 20);

  // Title
  doc
    .fillColor('#000000')
    .fontSize(12)
    .text('出生', 30, 288, { lineGap: 2, width: 160 });
  // Date
  doc
    .fontSize(14)
    .text('1234 Mon Year', 30, doc.y, { lineGap: 4, width: 160 });

  // Place
  doc
    .fontSize(10)
    .text('Birthplace', 30, doc.y, { lineGap: 3, width: 160 });

  // Stories
  doc
    .fontSize(14)
    .text('この個人についての話や思い出:', 200, 288, { lineGap:7, width: 360 });

  // Draw Names
  doc
    .fontSize(20)
    .fillColor('#000000')
    .text('Other Full Name Here', 200, 102, {lineGap: 4, width: 290});



  // Footer
  doc
    .fontSize(10)
    .fillColor('#555555')
    .text('Dude name here', 30, 790);

  doc.font('arial2')
  doc
    .fontSize(10)
    .fillColor('#555555')
    .text('Dude name here', 120, 790);
  doc.font('Times-Roman');
    doc
      .fontSize(10)
      .fillColor('#555555')
      .text('Dude name here', 240, 790);
  doc.font('arial');
  doc
    .fontSize(10)
    .fillColor('#555555')
    .text('ページ 2 ／ 2', 500, 790);
  doc
    .fill('#888888')
    .fontSize(7)
    .text('この印刷物の現在のバージョンはキリル文字，漢字(中国），かな，漢字（韓国），モンゴル語，およびローマ字のみをサポートしています。', 30, doc.y + 3);

  doc.end();

});

app.listen(process.env.PORT || 5001, function() {
  console.log('go');
});
