import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlayerStatistics() {
  const topPlayers = [
    { rank: 1, name: "Budi Santoso", goals: 12, assists: 5 },
    { rank: 2, name: "Andi Kusuma", goals: 8, assists: 7 },
    { rank: 3, name: "Evan Pratama", goals: 5, assists: 3 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Player Statistics</h1>
        <p className="text-muted-foreground mt-1">Individual player performance ranking</p>
      </div>

      <div className="space-y-3">
        {topPlayers.map((player) => (
          <Card key={player.rank}>
            <CardContent className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {player.rank}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{player.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-right">
                  <div>
                    <p className="text-xs text-muted-foreground">Goals</p>
                    <p className="text-lg font-bold text-primary">{player.goals}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Assists</p>
                    <p className="text-lg font-bold text-gold">{player.assists}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
