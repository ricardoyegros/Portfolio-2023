export default function EnglishParagraphOne({darkMode, english}){
    return (
        <p
              className={`font-medium font-montserrat ${
                !darkMode ? "text-dark" : "text-light"
              } sm:text-justify sm:text-sm`}
            >
              {english.paragraphOne.firstPart}
              <strong>{english.paragraphOne.strongDeveloper}</strong>
              {english.paragraphOne.secondPart}
              <strong>{english.paragraphOne.strongBeautiful}</strong>,{" "}
              <strong>{english.paragraphOne.strongInteractive}</strong>
              {english.paragraphOne.thirdPart}
              <strong>{english.paragraphOne.strongScalable}</strong>
              {english.paragraphOne.fourPart}
            </p>
    )
}