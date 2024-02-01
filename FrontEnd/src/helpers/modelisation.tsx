class FormatLabelKind {
  static format = (kind) => {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return kind;
    }
  };
}

class FormatLabel {
  static format = (day) => {
    if (day === 1) return "L";
    if (day === 2) return "M";
    if (day === 3) return "M";
    if (day === 4) return "J";
    if (day === 5) return "V";
    if (day === 6) return "S";
    if (day === 7) return "D";
    return day;
  };
}
class Score {
  constructor(data) {
    this.score = data.todayScore || data.score;
  }
}

export { FormatLabelKind, FormatLabel, Score };
