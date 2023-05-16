export default function EnglishParagraphFour({darkMode, english, keyWords}){
    return(
        <p
            className={`font-medium font-montserrat mt-4 sm:pt-0 md:order-2 ${
              !darkMode ? "text-dark" : "text-light"
            } sm:text-justify sm:text-sm`}
          >
          {english.paragraphFour.firstPart}<strong>{keyWords.vue}</strong>{english.paragraphFour.secondPart}
          </p>
    )
}