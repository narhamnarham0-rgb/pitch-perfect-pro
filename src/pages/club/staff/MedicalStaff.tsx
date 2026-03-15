import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, AlertCircle } from "lucide-react";
import { mockClubData } from "@/lib/mockClubData";

export default function MedicalStaff() {
  const { medicalStaff } = mockClubData;

  const roleColors: Record<string, string> = {
    "Chief Physician": "bg-red-100 text-red-800",
    "Team Physiotherapist": "bg-blue-100 text-blue-800",
    "Club Doctor": "bg-purple-100 text-purple-800",
    "Nutritionist": "bg-green-100 text-green-800",
    "Sports Psychologist": "bg-orange-100 text-orange-800",
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Medical Staff</h1>
          <p className="text-muted-foreground mt-1">Health and wellness personnel</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Staff
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-4xl font-bold">{medicalStaff.length}</p>
            <p className="text-sm text-muted-foreground mt-2">Total Medical Staff</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-4xl font-bold text-gold">{medicalStaff.filter(m => m.role === "Chief Physician").length}</p>
            <p className="text-sm text-muted-foreground mt-2">Chief Physicians</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-4xl font-bold text-primary">{medicalStaff.filter(m => m.role === "Team Physiotherapist").length}</p>
            <p className="text-sm text-muted-foreground mt-2">Physiotherapists</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-4xl font-bold text-green-600">0</p>
            <p className="text-sm text-muted-foreground mt-2">Active Consultations</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Medical Personnel</CardTitle>
          <CardDescription>Complete medical team registry</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>License/Degree</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicalStaff.map((member) => (
                  <TableRow key={member.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>
                      <Badge className={roleColors[member.role] || "bg-gray-100 text-gray-800"}>
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{member.certification}</TableCell>
                    <TableCell className="text-sm">{member.email}</TableCell>
                    <TableCell className="text-sm">{member.phone}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Available Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 bg-green-600" />
              <div>
                <p className="font-medium text-sm">Medical Consultations</p>
                <p className="text-xs text-muted-foreground">Doctor appointments and check-ups</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 bg-blue-600" />
              <div>
                <p className="font-medium text-sm">Physiotherapy</p>
                <p className="text-xs text-muted-foreground">Injury prevention and rehabilitation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 bg-orange-600" />
              <div>
                <p className="font-medium text-sm">Nutritional Guidance</p>
                <p className="text-xs text-muted-foreground">Meal planning and diet optimization</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 bg-purple-600" />
              <div>
                <p className="font-medium text-sm">Mental Health Support</p>
                <p className="text-xs text-muted-foreground">Psychology and stress management</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>All medical staff must maintain current certifications and licenses.</p>
            <p>Player consultations require proper documentation and follow FIFA anti-doping protocols.</p>
            <p>Medical records are confidential and protected under health data regulations.</p>
            <p>Emergency contact information must be updated quarterly.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
