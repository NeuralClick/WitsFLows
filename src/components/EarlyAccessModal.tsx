"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EarlyAccessForm from "./EarlyAccessForm"; // Import the existing form

const EarlyAccessModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="px-8 py-6 text-lg bg-primary-violet hover:bg-primary-violet/90 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-subtle"
        >
          Get Early Access
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-dark-charcoal border-gray-700 text-light-gray">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl font-poppins">Join Our Waitlist</DialogTitle>
          <DialogDescription className="text-light-gray">
            Enter your email below to get exclusive early access and updates.
          </DialogDescription>
        </DialogHeader>
        <EarlyAccessForm />
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessModal;