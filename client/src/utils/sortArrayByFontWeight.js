function sortArrayByFontWeight(array) {
  array?.sort((a, b) => {
    if (a.fontWeight < b.fontWeight) {
      return -1;
    }
    if (a.fontWeight > b.fontWeight) {
      return 1;
    }
    return 0;
  });
}

export default sortArrayByFontWeight;
