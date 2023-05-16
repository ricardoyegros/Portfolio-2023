export default function EnglishParagraphThree({darkMode, english, keyWords}){
    return(
        <p
            className={`font-medium font-montserrat mt-4 ${
              !darkMode ? "text-dark" : "text-light"
            } sm:text-justify sm:text-sm`}
          >
          {english.paragraphThree.firstPart}<strong>{keyWords.frontEnd}</strong>{english.paragraphThree.secondPart}<strong>{keyWords.react}</strong>{english.paragraphThree.thirdPart}<strong>{keyWords.alkemy}</strong>{english.paragraphThree.fourPart}<strong>{keyWords.openBootcamp}</strong>{english.paragraphThree.fifthPart}
          </p>
    )
}