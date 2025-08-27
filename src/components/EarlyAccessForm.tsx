"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast"; // Using the existing toast utility

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Early access email submitted:", email);
      showSuccess("Thanks for your interest! We'll be in touch soon.");
      setEmail(""); // Clear the input after submission
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 border-gray-700 text-light-gray shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-poppins text-white">Get Early Access</CardTitle>
        <CardDescription className="text-light-gray">
          Be among the first to experience WitsFlows. Sign up for exclusive updates!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="text-left text-white">Email Address</Label>
            <Input
              type="email"
              id="email"
              placeholder="your@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent-teal"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-accent-teal hover:bg-accent-teal/90 text-dark-charcoal font-bold rounded-lg transition-all duration-300"
          >
            Join the Waitlist
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EarlyAccessForm;