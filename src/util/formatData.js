export const formatCount = async(count) => {
    switch (true) {
      case count < 1_000:
        return count.toString(); // 0–999
      case count < 1_000_000:
        return (count / 1_000).toFixed(1).replace(/\.0$/, "") + "K"; // Thousands
      default:
        return (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"; // Millions+
    }
  }