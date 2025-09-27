class GamePlan {
  execute() {
    console.log("this base class ");
  }
}

class AttackPlan extends GamePlan {
  execute() {
    console.log("Switching to Attack Plan");
  }
}

class DefencePlan extends GamePlan {
  execute() {
    console.log("Switching to Defence Plan");
  }
}

class MediumPlan extends GamePlan {
  execute() {
    console.log("Switching to Medium Plan");
  }
}

class FootballGame {
  constructor() {
    this.currentPlan = null;
  }

  setGamePlan(plan) {
    this.currentPlan = plan;
    console.log("Game plan has been updated.");
  }

  executePlan() {
    if (this.currentPlan) {
      this.currentPlan.execute();
    } else {
      console.log("No game plan is set!");
    }
  }
}

const game = new FootballGame();
const attackPlan = new AttackPlan();
const defencePlan = new DefencePlan();
const mediumPlan = new MediumPlan();

game.setGamePlan(attackPlan);
game.executePlan();
game.setGamePlan(defencePlan);
game.executePlan();
game.setGamePlan(mediumPlan);
game.executePlan();
