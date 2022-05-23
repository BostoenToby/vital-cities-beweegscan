import * as React from 'react'
import jsPDF from 'jspdf'
// import path from 'path'

function genPDF() {
  var page = 1

  function startPagina() {
    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')

    doc.text('Beweegscan rapport generator', 20, 20)

    // var img = new Image()
    // img.src = path.resolve('../images/Beweegscan.png')

    // doc.addImage(img, 'PNG', 20, 20, 50, 50)

    doc.setTextColor('#000000').setFontSize(20).setFont('Helvetica', 'bold')

    doc.text('Beweegvriendelijkheid van', 100, 150, {
      align: 'center',
    })
    doc.text('{Stad}', 100, 160, {
      align: 'center',
    })
  }

  function toelichtingsPagina() {
    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')
    doc.text('Toelichting bij dit rapport', 20, 20)

    doc.setTextColor('#000000').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text(
      'In het rapport dat je hier vindt, lees je voor elk van de ambities die je op het vlak van',
      20,
      40,
    )
    doc.text(
      'beweegvriendelijkheid kan nastreven, het oordeel van de bewoners van',
      20,
      46,
    )
    doc.text('{stad} (zoals gemeten in de Gemeente- en Stadsmonitor).', 20, 53)

    doc.text(
      'Dat oordeel zetten we af tegen het Vlaamse gemiddelde, zodat je in een oogopslag',
      20,
      65,
    )
    doc.text('ziet waarop jouw stad of gemeente terecht trots kan zijn', 20, 71)
    doc.text(
      '(wat beter scoort dan het Vlaamse gemiddelde), dan wel wat nog beter kan',
      20,
      77,
    )
    doc.text('(wat minder goed scoort).', 20, 83)

    doc.text(
      'We hopen dat deze inzichten – plus de vele onderzoeksrapporten, tools en cases',
      20,
      95,
    )
    doc.text('die we aanreiken in de Beweegscan die je op onze', 20, 101)

    doc.text(
      'webstek vindt (www.vitalcities.be/beweegscan) – jou inspireren.',
      20,
      107,
    )
  }

  function footer() {
    doc.setFillColor('#492784')
    doc.rect(0, 270, 500, 30, 'F')

    doc.setTextColor('#ffffff').setFontSize(12).setFont('Helvetica', 'bold')
    doc.text('Beweegscan', 20, 280)

    doc.setTextColor('#ffffff').setFontSize(10).setFont('Helvetica', 'bold')
    doc.text('Rapport generator van', 20, 287)

    doc.setTextColor('#ffffff').setFontSize(10).setFont('Helvetica', 'bold')
    doc.text('{stad}', 20, 293)

    doc.setTextColor('#ffffff').setFontSize(10).setFont('Helvetica', 'bold')
    doc.text('pagina ' + page, 180, 285)
    page++
  }

  function ambitieFietsroutes() {
    doc.setTextColor('#492784').setFontSize(25).setFont('Helvetica', 'bold')
    doc.text('Ambitie:', 20, 20)

    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')
    doc.text('Aantrekkelijke & veilige wandel- &', 20, 30)
    doc.text('fietsroutes', 20, 38)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in Vlaams gewest', 20, 60)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 68)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Staat straten en pleinen', 20, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Genoeg fietspaden', 20, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Staat voetpaden', 90, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Fietsinfrastructuur', 90, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Staat fietspaden', 150, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Veilig fietsen', 150, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 101)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in {Stad}', 20, 130)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 138)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Staat straten en pleinen', 20, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Genoeg fietspaden', 20, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Staat voetpaden', 90, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Fietsinfrastructuur', 90, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Staat fietspaden', 150, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Veilig fietsen', 150, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 171)
  }

  function ambitieActief() {
    doc.setTextColor('#492784').setFontSize(25).setFont('Helvetica', 'bold')
    doc.text('Ambitie:', 20, 20)

    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')
    doc.text('Actief bewegen en verplaatsen', 20, 30)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in Vlaams gewest', 20, 60)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 68)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Actief bewegen', 20, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Veilig naar school', 20, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Verplaatsing woon/werk', 90, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Verplaatsing vrije tijd', 90, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Verplaatsing woon/school', 150, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 86)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in {Stad}', 20, 130)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 138)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Actief bewegen', 20, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Veilig naar school', 20, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Verplaatsing woon/werk', 90, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Verplaatsing vrije tijd', 90, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Verplaatsing woon/school', 150, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 156)
  }

  function ambitieStadskern() {
    doc.setTextColor('#492784').setFontSize(25).setFont('Helvetica', 'bold')
    doc.text('Ambitie:', 20, 20)

    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')
    doc.text('Verbonden stadskern', 20, 30)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in Vlaams gewest', 20, 60)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 68)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Duurzaam verplaatsen', 20, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Aanbod deelsystemen', 20, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Openbaar vervoer', 90, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Lidmaatschap deelsystem', 90, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Autovrije zones', 150, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 86)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in {Stad}', 20, 130)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 138)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Duurzaam verplaatsen', 20, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Aanbod deelsystemen', 20, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Openbaar vervoer', 90, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Lidmaatschap deelsystemen', 90, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Autovrije zones', 150, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 156)
  }

  function ambitieSportplein() {
    doc.setTextColor('#492784').setFontSize(25).setFont('Helvetica', 'bold')
    doc.text('Ambitie:', 20, 20)

    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')
    doc.text('Stad en buurt als sportplein', 20, 30)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in Vlaams gewest', 20, 60)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 68)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Sporten in eigen stad', 20, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende Sportvoorziening', 20, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Sportclubs/accomodaties', 90, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Tevreden sportvoorziening', 90, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Sportparticipatie', 150, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Sporten in andere stad', 150, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 101)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in {Stad}', 20, 130)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 138)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Sporten in eigen stad', 20, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende sportvoorziening', 20, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Sportclubs/accomodaties', 90, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Tevreden sportvoorziening', 90, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Sportparticipatie', 150, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Sporten in andere stad', 150, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 150, 171)
  }

  function ambitieSpeelplein() {
    doc.setTextColor('#492784').setFontSize(25).setFont('Helvetica', 'bold')
    doc.text('Ambitie:', 20, 20)

    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')
    doc.text('Stad en buurt als speelplein', 20, 30)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in Vlaams gewest', 20, 60)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 68)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende voorzieningen', 20, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Tevreden veilig spelen', 20, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende geschikte plekken', 90, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 86)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in {Stad}', 20, 130)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 138)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende sportvoorzieningen', 20, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Tevreden veilig spelen', 20, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende geschikte plekken', 90, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 156)
  }

  function ambitieOntmoetingsplek() {
    doc.setTextColor('#492784').setFontSize(25).setFont('Helvetica', 'bold')
    doc.text('Ambitie:', 20, 20)

    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')
    doc.text('Stad en buurt als ontmoetingsplek', 20, 30)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in Vlaams gewest', 20, 60)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 68)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Thuis voelen in de buurt', 20, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Onveiligheidsgevoel', 20, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende rust/ontmoetingsplekken', 90, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 86)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in {Stad}', 20, 130)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 138)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Thuis voelen in de buurt', 20, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Onveiligheidsgevoel', 20, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende rust/ontmoetingsplekken', 90, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 156)
  }

  function ambitieGroen() {
    doc.setTextColor('#492784').setFontSize(25).setFont('Helvetica', 'bold')
    doc.text('Ambitie:', 20, 20)

    doc.setTextColor('#492784').setFontSize(20).setFont('Helvetica', 'bold')
    doc.text('Bruikbaar, gevarieerd en voldoende', 20, 30)
    doc.text('groen', 20, 38)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in Vlaams gewest', 20, 60)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 68)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende groen', 20, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 86)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Bezoek park/bos/groenzone', 20, 95)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 101)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Tevreden groenvoorziening', 90, 80)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 86)

    doc.setTextColor('#111111').setFontSize(18).setFont('Helvetica', 'bold')
    doc.text('Gemiddelde in {Stad}', 20, 130)

    doc.setTextColor('#492784').setFontSize(16).setFont('Helvetica', 'regular')
    doc.text('Hoeveel procent van de inwoners is niet tevreden over:', 20, 138)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Voldoende groen', 20, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 156)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Bezoek park/bos/groenzone', 20, 165)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 20, 171)

    doc.setTextColor('#111111').setFontSize(15).setFont('Helvetica', 'regular')
    doc.text('Tevreden groenvoorziening', 90, 150)
    doc.setFont('Helvetica', 'bold')
    doc.text('{%}', 90, 156)
  }

  var doc = new jsPDF()
  startPagina()
  footer()

  doc.addPage()
  toelichtingsPagina()
  footer()

  doc.addPage()
  ambitieFietsroutes()
  footer()

  doc.addPage()
  ambitieActief()
  footer()

  doc.addPage()
  ambitieStadskern()
  footer()

  doc.addPage()
  ambitieSportplein()
  footer()

  doc.addPage()
  ambitieSpeelplein()
  footer()

  doc.addPage()
  ambitieOntmoetingsplek()
  footer()

  doc.addPage()
  ambitieGroen()
  footer()

  doc.save('BeweegscanRapport.pdf')
}

function pdf() {
  return (
    <>
      <a className="px-5 py-5" onClick={genPDF}>
        Download pdf
      </a>
    </>
  )
}

export default pdf
