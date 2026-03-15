import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TrainingAttendance() {
  const records = [
    { date: "2024-03-20", team: "Senior", present: 24, absent: 1, injured: 2, total: 27 },
    { date: "2024-03-19", team: "U18", present: 17, absent: 0, injured: 1, total: 18 },
    { date: "2024-03-19", team: "U14", present: 21, absent: 1, injured: 0, total: 22 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Training Attendance</h1>
        <p className="text-muted-foreground mt-1">Session participation records</p>
      </div>

      <div className="space-y-2">
        {records.map((r, i) => (
          <Card key={i}>
            <CardContent className="pt-4">
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{r.date}</p>
                  <p className="font-semibold">{r.team}</p>
                </div>
                <div>
                  <Badge className="bg-green-100 text-green-800">{r.present} Present</Badge>
                </div>
                <div>
                  <Badge className="bg-red-100 text-red-800">{r.absent} Absent</Badge>
                </div>
                <div>
                  <Badge className="bg-yellow-100 text-yellow-800">{r.injured} Injured</Badge>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="font-bold">{r.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
