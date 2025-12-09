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

export default function DialogEditExperiences() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Edit</Button>
      </DialogTrigger>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Experiences</DialogTitle>
            <DialogDescription>
              Tell more about your current work experiences or any relevant
              experiences
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="experience">Experience</Label>
              <Input id="experience" name="experience" />
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
