import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  CheckCircle2,
  MapPin,
  Star,
  Gauge,
  Fuel,
  Briefcase,
  Compass,
  Anchor,
  Search,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { transportOptions } from "@/data/transport";
import type { TransportOption } from "@/data/transport";

const SECTIONS = ["Safari Vehicle", "Personal Luxury", "Boat", "Yacht"] as const;
type Section = (typeof SECTIONS)[number];

export default function Transport() {
  const { toast } = useToast();

  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState<Section | "All">("All");

  const [selectedTransport, setSelectedTransport] = useState<TransportOption | null>(null);
  const [includeDriver, setIncludeDriver] = useState(false);
  const [duration, setDuration] = useState(1); // only relevant for unit === "day"
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return transportOptions.filter((t) => {
      const matchesSection = activeSection === "All" || t.type === activeSection;
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.location.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q);
      return matchesSection && matchesQuery;
    });
  }, [query, activeSection]);

  const total = selectedTransport
    ? selectedTransport.unit === "day"
      ? selectedTransport.price * duration
      : selectedTransport.price
    : 0;

  const openBooking = (item: TransportOption) => {
    setSelectedTransport(item);
    setIncludeDriver(item.driverIncluded);
    setDuration(1);
    setBookingSuccess(false);
  };

  const closeBooking = () => {
    setSelectedTransport(null);
    setBookingSuccess(false);
    setIncludeDriver(false);
    setDuration(1);
  };

  const handleBook = () => {
    setBookingSuccess(true);
    toast?.({
      title: "Transport confirmed",
      description: `Your ${selectedTransport?.name} has been booked successfully.`,
    });
    setTimeout(closeBooking, 3000);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto text-center mb-14"
        >
          <h1 className="text-5xl font-serif font-bold mb-6">Transport & Fleet</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Rent safari vehicles, luxury SUVs, boats, and yachts — with or without a
            professional guide. All transport options are available from your booked
            destination.
          </p>
        </motion.div>

        {/* Search + filters */}
        <div className="max-w-4xl mx-auto mb-16 space-y-4">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, location, or vibe..."
              className="pl-10 h-11"
              aria-label="Search transport options"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {(["All", ...SECTIONS] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeSection === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted"
                }`}
              >
                {s === "All" ? "All" : `${s}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-lg font-serif font-semibold mb-2">No matches found.</p>
            <p className="text-sm text-muted-foreground mb-6">
              Try a different search term or clear your filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setQuery("");
                setActiveSection("All");
              }}
            >
              Reset filters
            </Button>
          </div>
        )}

        {/* Category Sections */}
        {SECTIONS.map((section) => {
          const items = filtered.filter((t) => t.type === section);
          if (items.length === 0) return null;

          return (
            <div key={section} className="mb-20">
              <h2 className="text-3xl font-serif font-bold mb-8 pb-4 border-b border-border/50 flex items-center gap-3">
                {section === "Boat" || section === "Yacht" ? (
                  <Anchor className="text-primary h-7 w-7" />
                ) : (
                  <Compass className="text-primary h-7 w-7" />
                )}
                {section}s
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.05, 0.3) }}
                    className="h-full"
                  >
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-border/40 bg-card">
                      {/* Image */}
                      <div className="aspect-[4/3] bg-muted relative overflow-hidden group">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = "/images/hero/hero-2.jpeg";
                          }}
                        />
                        <span
                          className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${
                            item.availability === "Available"
                              ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                              : "bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                          }`}
                        >
                          {item.availability}
                        </span>
                      </div>

                      {/* Body */}
                      <CardContent className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider mb-2">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <MapPin size={12} className="text-primary" />
                              {item.location}
                            </span>
                            <span className="flex items-center gap-1 text-amber-500">
                              <Star size={12} className="fill-amber-500" />
                              {item.rating}{" "}
                              <span className="text-muted-foreground font-normal">
                                ({item.reviews})
                              </span>
                            </span>
                          </div>

                          <h3 className="font-serif text-xl font-bold mb-1 tracking-tight">
                            {item.name}
                          </h3>
                          <p className="text-primary font-medium text-sm mb-3">
                            {item.tagline}
                          </p>

                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {item.description}
                          </p>

                          <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                            <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-lg">
                              <Users size={14} className="text-primary" />
                              <span className="font-medium text-foreground">
                                {item.capacity} Pax
                              </span>
                            </div>
                            <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-lg">
                              <Briefcase size={14} className="text-primary" />
                              <span className="font-medium text-foreground">
                                {item.luggage} Bags
                              </span>
                            </div>
                          </div>

                          {(item.transmission || item.fuel) && (
                            <div className="flex gap-2 mb-4">
                              {item.transmission && (
                                <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md">
                                  <Gauge size={10} /> {item.transmission}
                                </span>
                              )}
                              {item.fuel && (
                                <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md">
                                  <Fuel size={10} /> {item.fuel}
                                </span>
                              )}
                            </div>
                          )}

                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {item.features.slice(0, 3).map((f) => (
                              <span
                                key={f}
                                className="px-2.5 py-1 bg-muted rounded-full text-[11px] text-muted-foreground font-medium"
                              >
                                {f}
                              </span>
                            ))}
                            {item.features.length > 3 && (
                              <span className="text-[10px] text-muted-foreground/60 self-center font-medium pl-1">
                                +{item.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between border-t border-border/50">
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">
                              Rate
                            </span>
                            <span className="font-bold text-lg text-foreground">
                              KSh {item.price.toLocaleString()}
                              <span className="text-xs text-muted-foreground font-normal">
                                {" "}
                                /{item.unit}
                              </span>
                            </span>
                          </div>

                          <Button onClick={() => openBooking(item)}>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Dialog */}
      <Dialog open={!!selectedTransport} onOpenChange={(open) => !open && closeBooking()}>
        <DialogContent className="sm:max-w-md">
          <AnimatePresence mode="wait">
            {!bookingSuccess && selectedTransport ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif">Confirm Booking</DialogTitle>
                  <DialogDescription>
                    Review your rental requirements for the{" "}
                    <span className="font-bold text-foreground">
                      {selectedTransport.name}
                    </span>{" "}
                    in{" "}
                    <span className="font-medium text-foreground">
                      {selectedTransport.location}
                    </span>
                    .
                  </DialogDescription>
                </DialogHeader>

                <div className="py-4 space-y-4">
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/60 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Standard Rate:</span>
                      <span className="font-semibold text-foreground">
                        KSh {selectedTransport.price.toLocaleString()} / {selectedTransport.unit}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Allowed capacity:</span>
                      <span className="font-medium text-foreground">
                        {selectedTransport.capacity} Pax / {selectedTransport.luggage} Luggage
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">A/C Status:</span>
                      <span className="font-medium text-foreground">
                        {selectedTransport.airConditioning
                          ? "Fully Air-Conditioned"
                          : "Natural Ventilation"}
                      </span>
                    </div>
                  </div>

                  {/* Duration stepper — only meaningful for day-rate items */}
                  {selectedTransport.unit === "day" && (
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border/60">
                      <div>
                        <p className="text-sm font-semibold">Number of days</p>
                        <p className="text-xs text-muted-foreground">
                          Adjust to see your total cost
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          aria-label="Decrease days"
                          onClick={() => setDuration((d) => Math.max(1, d - 1))}
                          className="h-8 w-8 flex items-center justify-center rounded-full border border-border/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center font-semibold">{duration}</span>
                        <button
                          type="button"
                          aria-label="Increase days"
                          onClick={() => setDuration((d) => Math.min(30, d + 1))}
                          className="h-8 w-8 flex items-center justify-center rounded-full border border-border/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <Checkbox
                      id="driver"
                      checked={includeDriver}
                      onCheckedChange={(c) => setIncludeDriver(!!c)}
                      disabled={selectedTransport.driverIncluded}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="driver"
                        className="font-semibold text-sm flex items-center gap-1.5 cursor-pointer"
                      >
                        Include driver / guide?
                        {selectedTransport.driverIncluded && (
                          <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
                            Included
                          </span>
                        )}
                      </label>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {selectedTransport.driverIncluded
                          ? "A certified professional captain or driver is mandatory and already built into this rental rate."
                          : "Safiri professional drivers are available for this option to ensure you navigate the terrain effortlessly."}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-border/50">
                    <span className="text-sm font-semibold">Total</span>
                    <span className="text-xl font-bold text-foreground">
                      KSh {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={closeBooking}>
                    Cancel
                  </Button>
                  <Button className="flex-1" onClick={handleBook}>
                    Confirm Booking
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="mx-auto w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <div className="space-y-1">
                  <DialogTitle className="text-2xl font-serif text-center">
                    Booking Success!
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground px-4">
                    We have received your reservation for Safiri Travel transport. Our local
                    agents will reach out to organize keys or coordinate pickup details!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </main>
  );
}