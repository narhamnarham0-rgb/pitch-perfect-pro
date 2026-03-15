import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function RosterManagement() {
  const roster = [
    { number: 1, name: "Citra Wijaya", position: "GK", status: "Active" },
    { number: 4, name: "Rizky Pratama", position: "DEF", status: "Active" },
    { number: 8, name: "Andi Kusuma", position: "MID", status: "Active" },
    { number: 9, name: "Budi Santoso", position: "FWD", status: "Active" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Squad Roster</h1>
          <p className="text-muted-foreground mt-1">Current team composition</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Player
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-3xl font-bold">{roster.length}</p>
              <p className="text-sm text-muted-foreground">Players</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1</p>
              <p className="text-sm text-muted-foreground">Goalkeeper</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">1</p>
              <p className="text-sm text-muted-foreground">Defender</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">2</p>
              <p className="text-sm text-muted-foreground">Midfielder/Forward</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {roster.map(player => (
          <Card key={player.number}>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {player.number}
                  </div>
                  <div>
                    <p className="font-semibold">{player.name}</p>
                    <p className="text-sm text-muted-foreground">{player.position}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">{player.status}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
