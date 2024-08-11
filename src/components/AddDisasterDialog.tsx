"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

// Schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  location: z.string().min(1, "Location is required"),
  imageUrl: z.string().url("Must be a valid URL").optional(),
  locationUrl: z.string().url("Must be a valid URL").optional(),
});

export function AddDisasterDialog() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");
  const [isLocationLoading, setIsLocationLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [locationUrl, setLocationUrl] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      location: "",
      imageUrl: "",
      locationUrl: "",
    },
  });

  const { mutate, isPending: isMutating } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      return await axios.post("/api/disasters", values);
    },
    onSuccess: () => {
      router.refresh();
      form.reset();
      setIsOpen(false);
    },
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          setLocationUrl(mapsUrl);
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b4683ef4d67345ebadb11cc25e6a7986`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
              const locationString = data.results[0].formatted;
              setLocation(locationString);
              form.setValue("location", locationString);
              form.setValue("locationUrl", mapsUrl);
            }
          } catch (error) {
            console.error("Error fetching location data:", error);
            setLocationError("Failed to fetch location. Please try again.");
          } finally {
            setIsLocationLoading(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocationError("Unable to retrieve your location. Please enable location services and try again.");
          setIsLocationLoading(false);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser.");
      setIsLocationLoading(false);
    }
  }, [form]);

  const onSubmit = form.handleSubmit((data) => {
    if (!location) {
      setLocationError("Location is required. Please enable location services and try again.");
      return;
    }
    const dateTime = new Date(data.date).toISOString();
    mutate({ ...data, date: dateTime, location: location, locationUrl: locationUrl });
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 text-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Recent Disaster Information</DialogTitle>
          <DialogDescription>
            Enter the details of the recent disaster here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={location}
                      disabled={true}
                      placeholder={isLocationLoading ? "Fetching location..." : locationError || "Your location will appear here"}
                    />
                  </FormControl>
                  {locationError && <FormMessage>{locationError}</FormMessage>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="locationUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={locationUrl}
                      disabled={true}
                      placeholder="Map link will be generated automatically"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} type="url" placeholder="https://..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter className="flex justify-between items-center">
          <DialogClose asChild>
            <Button type="button" variant="default">
              Close
            </Button>
          </DialogClose>
          <Button
            type="submit"
            onClick={onSubmit}
            variant="default"
            disabled={isLocationLoading || !!locationError || isMutating}
          >
            {isMutating ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

