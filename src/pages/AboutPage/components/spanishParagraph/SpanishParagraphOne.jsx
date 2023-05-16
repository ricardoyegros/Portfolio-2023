export default function SpanishParagraphOne({darkMode, spanish}){
    return(
        <p
              className={`font-medium font-montserrat ${
                !darkMode ? "text-dark" : "text-light"
              } sm:text-justify sm:text-sm`}
            >
              {spanish.paragraphOne.firstPart}{" "}
              <strong>{spanish.paragraphOne.strongDeveloper}</strong>
              {spanish.paragraphOne.secondPart}
              <strong>{spanish.paragraphOne.strongBeautiful}</strong>,{" "}
              <strong>{spanish.paragraphOne.strongInteractive}</strong>
              {spanish.paragraphOne.thirdPart}
              <strong>{spanish.paragraphOne.strongScalable}</strong>
              {spanish.paragraphOne.fourPart}
            </p>
    )
}