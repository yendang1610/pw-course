class Team {
    // thuoc tinh
    name: string;
    players: { name: string, age: number }[];
    // ham khoi tao
    constructor(name: string) {
        this.name = name;
        this.players = [];
    }
    //method
    addPlayer(name: string, age: number) {
        const player1 = { name, age };
        this.players.push(player1);
    }
    listPlayer() {
        console.log("list of players is:", this.players);
    }
}

const myTeam = new Team("Hanoi Football");
myTeam.addPlayer("Player1", 20);
myTeam.addPlayer("Player2", 19);

myTeam.listPlayer();