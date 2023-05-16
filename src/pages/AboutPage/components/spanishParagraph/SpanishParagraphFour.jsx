export default function SpanishParagraphFour({ darkMode, spanish, keyWords }) {
  return (
    <p
      className={`font-medium font-montserrat mt-4 sm:pt-0 md:order-2 ${
        !darkMode ? "text-dark" : "text-light"
      } sm:text-justify sm:text-sm`}
    >
      {spanish.paragraphFour.firstPart}
      <strong>{keyWords.vue}</strong>
      {spanish.paragraphFour.secondPart}
    </p>
  );
}
