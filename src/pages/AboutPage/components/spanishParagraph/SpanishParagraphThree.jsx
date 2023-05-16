export default function SpanishParagraphThree({darkMode, spanish, keyWords}){
    return(
        <p
            className={`font-medium font-montserrat mt-4 ${
              !darkMode ? "text-dark" : "text-light"
            } sm:text-justify sm:text-sm`}
          >
          {spanish.paragraphThree.firstPart}<strong>{keyWords.frontEnd}</strong>{spanish.paragraphThree.secondPart}<strong>{keyWords.react}</strong>{spanish.paragraphThree.thirdPart}<strong>{keyWords.alkemy}</strong>{spanish.paragraphThree.fourPart}<strong>{keyWords.openBootcamp}</strong>{spanish.paragraphThree.fifthPart}
          </p>
    )
}