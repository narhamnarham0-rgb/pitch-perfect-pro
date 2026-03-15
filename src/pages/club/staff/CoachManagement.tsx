import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Award, Shield } from "lucide-react";
import { mockClubData } from "@/lib/mockClubData";

export default function CoachManagement() {
  const { coaches } = mockClubData;

  const licenseColors: Record<string, string> = {
    UEFA_PRO: "bg-gold text-navy",
    UEFA_A: "bg-primary text-white",
    UEFA_B: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Coach Management</h1>
          <p className="text-muted-foreground mt-1">Manage coaching staff and licenses</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Coach
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-4xl font-bold">{coaches.length}</p>
            <p className="text-sm text-muted-foreground mt-2">Total Coaches</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-4xl font-bold">{coaches.filter(c => c.license === "UEFA_PRO").length}</p>
            <p className="text-sm text-muted-foreground mt-2">UEFA Pro Licensed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-4xl font-bold text-gold">{coaches.reduce((sum, c) => sum + c.yearsExperience, 0)}</p>
            <p className="text-sm text-muted-foreground mt-2">Years Combined Experience</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coaches.map((coach) => (
          <Card key={coach.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{coach.name}</CardTitle>
                  <CardDescription>{coach.specialty}</CardDescription>
                </div>
                <Badge className={licenseColors[coach.license]}>
                  {coach.license.replace("_", " ")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Experience</p>
                  <p className="font-semibold mt-1">{coach.yearsExperience} years</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Nationality</p>
                  <p className="font-semibold mt-1">{coach.nationality}</p>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground text-xs mb-2">Specialties & Skills</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    {coach.specialty === "Technical" && "Ball Control"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {coach.specialty === "Tactical" && "Formation"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {coach.specialty === "Physical" && "Fitness"}
                  </Badge>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground text-xs mb-2">Contact</p>
                <p className="text-sm">{coach.email}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button variant="outline" size="sm">
                  <Shield className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>License Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge className="bg-gold text-navy w-20">UEFA PRO</Badge>
              <div>
                <p className="font-medium text-sm">Pro License (UEFA A License)</p>
                <p className="text-xs text-muted-foreground">Highest coaching qualification</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-primary text-white w-20">UEFA A</Badge>
              <div>
                <p className="font-medium text-sm">A License</p>
                <p className="text-xs text-muted-foreground">Advanced coaching certification</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-100 text-blue-800 w-20">UEFA B</Badge>
              <div>
                <p className="font-medium text-sm">B License</p>
                <p className="text-xs text-muted-foreground">Intermediate coaching certification</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
