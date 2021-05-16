module.exports = (buf, shift) => {
  const bufout = buf.map(sym => {
    let beg, end;
    let newsym;
    const rs = shift % 26;
    if (!(sym > 96 && sym < 123) && !(sym > 64 && sym < 91)) {
      return sym;
    } else {
      if (sym > 96 && sym < 123) {
        beg = 97, end = 122;
      } else beg = 65, end = 90;

      newsym = sym + rs;
      if (newsym < beg) newsym += end - beg + 1;
      if (newsym > end) newsym -= end - beg + 1;
      return newsym;
    }
  });
  return bufout;
};
