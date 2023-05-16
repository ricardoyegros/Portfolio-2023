export default function EnglishParagraphTwo({darkMode, english, keyWords}) {
  return (
    <p
      className={`font-medium font-montserrat mt-4 ${
        !darkMode ? "text-dark" : "text-light"
      } sm:text-justify sm:text-sm`}
    >
      {english.paragraphTwo.firstPart}
      <strong>{keyWords.henry}</strong>
      {english.paragraphTwo.secondPart}
      <strong>{english.paragraphTwo.strongDeveloper}</strong>
    </p>
  );
}
