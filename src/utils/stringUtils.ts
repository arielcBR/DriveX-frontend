export function getInitials(name: string): string {
  if (!name || name.trim() === "") return "";

  const nameParts = name.trim().split(/\s+/);

  if (nameParts.length === 1) 
    return nameParts[0].charAt(0).toUpperCase();

  const firstLetter = nameParts[0].charAt(0);
  const lastLetter = nameParts[nameParts.length - 1].charAt(0);

  return (firstLetter + lastLetter).toUpperCase();
}