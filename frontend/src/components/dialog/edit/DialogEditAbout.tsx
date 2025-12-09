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
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAbout, useUpdateAbout } from "@/hooks/useAbout";
import React from "react";

export default function DialogEditAbout() {
  const { data: aboutList, isLoading } = useAbout();
  const [description, setDescription] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const updateAbout = useUpdateAbout();

  const about = aboutList?.[0];

  React.useEffect(() => {
    if (about) {
      setDescription(about.description);
    }
  }, [about]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!about) return;

    updateAbout.mutate(
      {
        id: about.id,
        data: { description },
      },
      {
        onSuccess: () => {
          toast.success("About section updated!");
          setOpen(false);
        },
        onError: (error) => {
          toast.error(`Error: ${error.message}`);
        },
      },
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit About</DialogTitle>
            <DialogDescription>Tell more about you</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              aria-rowspan={6}
              className="resize-none"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
