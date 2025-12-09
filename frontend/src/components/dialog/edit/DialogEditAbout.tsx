import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogEditAbout() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Edit</Button>
      </DialogTrigger>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit About</DialogTitle>
            <DialogDescription>Tell more about you</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <Label htmlFor="about">Description</Label>
            <Input id="about" name="about" />
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
