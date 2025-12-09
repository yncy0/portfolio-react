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

export default function DialogAddProjects() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add</Button>
      </DialogTrigger>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Projects</DialogTitle>
            <DialogDescription>
              Add more relevant projects on the list
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="image">Image</Label>
              <Input id="image" name="image" type="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="project">Project URL</Label>
              <Input id="project" name="project" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="github">GitHub Repository URL</Label>
              <Input id="github" name="github" />
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
