export default function SpanishParagraphTwo({darkMode, spanish, keyWords}) {
  return (
    <p
      className={`font-medium font-montserrat mt-4 ${
        !darkMode ? "text-dark" : "text-light"
      } sm:text-justify sm:text-sm`}
    >
      {spanish.paragraphTwo.firstPart}
      <strong>{keyWords.henry}</strong>
      {spanish.paragraphTwo.secondPart}
      <strong>{spanish.paragraphTwo.strongDeveloper}</strong>
    </p>
  );
}
