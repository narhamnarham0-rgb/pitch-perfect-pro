import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { mockClubData } from "@/lib/mockClubData";

export default function StaffRegistry() {
  const { staff } = mockClubData;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Staff Registry</h1>
          <p className="text-muted-foreground mt-1">Manage all club staff members</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Staff
        </Button>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((s) => (
              <TableRow key={s.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{s.name}</TableCell>
                <TableCell>{s.role}</TableCell>
                <TableCell>
                  <Badge variant="outline">{s.department}</Badge>
                </TableCell>
                <TableCell className="text-sm">{s.email}</TableCell>
                <TableCell className="text-sm">{s.phone}</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">{s.status}</Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{s.joinedAt}</TableCell>
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

      <Card>
        <CardHeader>
          <CardTitle>Staff Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-3xl font-bold">{staff.length}</p>
              <p className="text-sm text-muted-foreground mt-1">Total Staff</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{staff.filter(s => s.status === "Active").length}</p>
              <p className="text-sm text-muted-foreground mt-1">Active</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{staff.filter(s => s.department === "Coaching").length}</p>
              <p className="text-sm text-muted-foreground mt-1">Coaching</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{staff.filter(s => s.department === "Medical").length}</p>
              <p className="text-sm text-muted-foreground mt-1">Medical</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
