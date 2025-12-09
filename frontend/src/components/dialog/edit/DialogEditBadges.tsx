import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogEditBadges() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Edit</Button>
      </DialogTrigger>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Badges</DialogTitle>
            <DialogDescription>
              Edit your main skill highlights
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="badge1">1st Badge</Label>
              <Input id="badge1" name="badge1" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="badge2">2nd Badge</Label>
              <Input id="badge2" name="badge2" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="badge3">3rd Badge</Label>
              <Input id="badge3" name="badge3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
