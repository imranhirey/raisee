function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const d = [];
  
    for (let i = 0; i <= m; i++) {
      d[i] = [i];
    }
  
    for (let j = 0; j <= n; j++) {
      d[0][j] = j;
    }
  
    for (let j = 1; j <= n; j++) {
      for (let i = 1; i <= m; i++) {
        if (str1[i - 1] === str2[j - 1]) {
          d[i][j] = d[i - 1][j - 1];
        } else {
          d[i][j] = Math.min(
            d[i - 1][j] + 1, // Deletion
            d[i][j - 1] + 1, // Insertion
            d[i - 1][j - 1] + 1 // Substitution
          );
        }
      }
    }
  
    return d[m][n];
  }

  export default levenshteinDistance
