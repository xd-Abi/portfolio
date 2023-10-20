/**
 * Joins multiple class names together
 *
 * @param names - The class names to join
 * @returns A string containing all class names
 */
export function cn(...names: (string | undefined)[]) {
  return names.filter(name => name).join(" ");
}
