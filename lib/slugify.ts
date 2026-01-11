const map: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ж: "zh", з: "z", и: "i", й: "y",
  к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u",
  ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sht", ъ: "a", ь: "", ю: "yu", я: "ya",
};

export function slugify(input: string) {
  const s = input.trim().toLowerCase();

  const translit = Array.from(s)
    .map((ch) => map[ch] ?? ch)
    .join("");

  return translit
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "");
}
