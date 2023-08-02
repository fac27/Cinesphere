export default function convertCamelCaseToTitleCase(inputArray: string[]) {
  const capitalizeWord = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  const outputArray = inputArray.map((camelCaseStr) => {
    const words = camelCaseStr.split(/(?=[A-Z])/);
    const titleCaseWords = words.map((word) => capitalizeWord(word));
    return titleCaseWords.join(" ");
  });

  return outputArray;
}
