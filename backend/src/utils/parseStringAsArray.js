export default function(arrayAsString) {
  return arrayAsString.split(",").map(tech => tech.trim());
}
