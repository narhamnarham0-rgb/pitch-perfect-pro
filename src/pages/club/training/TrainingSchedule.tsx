import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Users, Clock, MapPin } from "lucide-react";

export default function TrainingSchedule() {
  const sessions = [
    { id: 1, date: "2024-03-20", time: "09:00", venue: "Main Pitch", team: "Senior", level: "Tactical", players: 25 },
    { id: 2, date: "2024-03-20", time: "14:00", venue: "Practice Pitch", team: "U18", level: "Conditioning", players: 18 },
    { id: 3, date: "2024-03-21", time: "10:00", venue: "Main Pitch", team: "U14", level: "Skills", players: 22 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Training Schedule</h1>
          <p className="text-muted-foreground mt-1">Weekly training sessions</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Schedule Session
        </Button>
      </div>

      <div className="space-y-3">
        {sessions.map(session => (
          <Card key={session.id}>
            <CardContent className="pt-6">
              <div className="grid grid-cols-5 gap-4 md:gap-6">
                <div>
                  <p className="text-sm font-semibold">{session.date}</p>
                  <p className="text-lg font-bold text-primary">{session.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-semibold">{session.venue}</p>
                    <p className="text-xs text-muted-foreground">{session.team}</p>
                  </div>
                </div>
                <div>
                  <Badge variant="outline">{session.level}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">{session.players}</span>
                </div>
                <Button size="sm" variant="outline">Edit</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
