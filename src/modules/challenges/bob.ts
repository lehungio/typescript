export function hey(message: string): string {
  message = message.trim();

  if (message === '') {
      return "Fine. Be that way!";
  }

  const isShouting = message === message.toUpperCase() && message !== message.toLowerCase();
  const isQuestion = message.endsWith('?');

  if (isShouting && isQuestion) {
      return "Calm down, I know what I'm doing!";
  }
  if (isShouting) {
      return "Whoa, chill out!";
  }
  if (isQuestion) {
      return "Sure.";
  }
  return "Whatever. Daijobu! Daijobu!";
}