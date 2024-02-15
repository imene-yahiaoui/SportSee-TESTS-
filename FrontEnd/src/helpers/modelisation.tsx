class UserData {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score: number | null;
  todayScore: number | null;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
  averageSessions: Session[] | null;
  performance: Performance[] | null;
  activity: Activity[] | null;

  constructor(
    id: number,
    score: number | null,
    todayScore: number | null,
    firstName: string,
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number,
    averageSessions: Session[] | null,
    performance: Performance[] | null,
    activity: Activity[] | null
  ) {
    this.id = id;
    if (todayScore !== null && todayScore !== undefined) {
      this.score = todayScore;
    } else {
      this.score = score;
    }
    this.todayScore = this.score;

    this.userInfos = { firstName, lastName: "", age: 30 };
    this.keyData = {
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
    };
    this.averageSessions = averageSessions;
    this.performance = performance;
    this.activity = activity;
  }
}

class FormatLabelKind {
  static format = (kind : number) => {
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
        return kind.toString();
    }
  };
}

class FormatLabel {
  static format = (day :number) => {
    if (day === 1) return "L";
    if (day === 2) return "M";
    if (day === 3) return "M";
    if (day === 4) return "J";
    if (day === 5) return "V";
    if (day === 6) return "S";
    if (day === 7) return "D";
    return day.toString();
  };
}
 

export { UserData, FormatLabelKind, FormatLabel };
