var signo = prompt('¿Cual es tu signo')
console.log(signo);

var message = ''

switch (signo) {
  case 'aries':
  message = 'Procure no desesperarse e intente sostener la calma. Durante esta jornada, una situación un tanto confusa podría llegar a desordenarlo anímicamente.'
    break;
  case 'tauro':
  message = 'Fase óptima para reformar su vida y su círculo social. Trate de controlar los repentinos cambios de humor que últimamente le afectan en las relaciones.'
    break;
  case 'geminis':
  case 'géminis':
  message = 'Entienda que si se deja guiar por la voz de la intuición y la sabiduría interior, pronto podrá abandonar la inseguridad y los temores que lo persiguen.'
    break;
  case 'cancer':
  case 'cáncer':
  message = 'Entienda que debe mantenerse precavido, ya que podrían aparecer personas envidiosas que intenten retardar su éxito. Procure alejarse de las mismas.'
    break;
  case 'leo':
  message = 'Aprenda a mantener siempre la serenidad y la confianza en su espíritu. Sepa que debe comprender que ambas son la llave de la sabiduría en la vida.'
    break;
  case 'virgo':
  message = 'ntente confiar más en su capacidad intelectual. Muchos de los esfuerzos y metas se verán limitados por la inseguridad que lo invade naturalmente.'
    break;
  default:
  console.log('No es un signo zodiacal válido');
}
console.log(message);
