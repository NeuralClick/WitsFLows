import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Search, Rocket, Settings, FastForward, Puzzle, Users, MousePointerClick, Mail, ShoppingCart, Network } from "lucide-react";
import EarlyAccessForm from "@/components/EarlyAccessForm"; // Import the new component
// import { MadeWithDyad } from "@/components/made-with-dyad"; // Removed import

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-dark-charcoal text-light-gray font-inter">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-[hsl(255_100%_30%)] to-[hsl(170_100%_45%)] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Abstract background animation placeholder */}
          <div className="absolute inset-0 bg-grid-pattern animate-pulse-slow"></div>
        </div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-poppins">
            WitsFlows: Automate Your World, Instantly.
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-10">
            Discover, deploy, and monetize powerful n8n workflows. Your future of efficiency starts here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-8 py-6 text-lg bg-accent-teal hover:bg-accent-teal/90 text-dark-charcoal font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              Explore Workflows
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-2 border-white text-primary-violet hover:bg-white hover:text-primary-violet font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              Sell Your Workflows
            </Button>
          </div>
          <p className="text-sm text-light-gray mt-8">Join the future of intelligent automation.</p>
        </div>
      </section>

      {/* Early Access CTA Section - Moved to top */}
      <section className="py-20 bg-dark-charcoal text-center">
        <div className="max-w-6xl mx-auto px-6">
          <EarlyAccessForm />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dark-charcoal text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Your Path to Seamless Automation
          </h2>
          <p className="text-lg text-light-gray mb-16">
            WitsFlows makes powerful automation accessible in three simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-accent-teal/20 mb-6">
                <Search className="w-12 h-12 text-accent-teal" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-poppins">Browse & Discover</h3>
              <p className="text-md text-light-gray">
                Explore a curated marketplace of high-performance n8n workflows, tailored for every need.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-accent-teal/20 mb-6">
                <Rocket className="w-12 h-12 text-accent-teal" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-poppins">One-Click Deployment</h3>
              <p className="text-md text-light-gray">
                Activate your chosen workflow in seconds with our revolutionary 'Deploy' button. No complex setup.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-accent-teal/20 mb-6">
                <Settings className="w-12 h-12 text-accent-teal" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-poppins">Tailor or Hire</h3>
              <p className="text-md text-light-gray">
                Modify workflows to perfection or connect with expert developers for custom solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Showcase Section */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Featured Workflows: Power Your Business
          </h2>
          <p className="text-lg text-light-gray mb-16">
            Explore popular and highly-rated n8n automations ready for instant deployment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white shadow-xl transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-10 h-10 text-primary-violet" />
                </div>
                <CardTitle className="text-2xl font-poppins">Automated Lead Nurturing</CardTitle>
                <CardDescription className="text-light-gray">Connects CRM, email, and social media for seamless lead follow-up.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="text-xl font-bold text-accent-teal">$49</span>
                <Button variant="outline" className="border-primary-violet text-primary-violet hover:bg-primary-violet hover:text-white">View Details</Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white shadow-xl transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <ShoppingCart className="w-10 h-10 text-primary-violet" />
                </div>
                <CardTitle className="text-2xl font-poppins">E-commerce Order Fulfillment</CardTitle>
                <CardDescription className="text-light-gray">Automates order processing, inventory updates, and shipping notifications.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="text-xl font-bold text-accent-teal">$79</span>
                <Button variant="outline" className="border-primary-violet text-primary-violet hover:bg-primary-violet hover:text-white">View Details</Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white shadow-xl transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <Network className="w-10 h-10 text-primary-violet" />
                </div>
                <CardTitle className="text-2xl font-poppins">Social Media Content Scheduler</CardTitle>
                <CardDescription className="text-light-gray">Plans, publishes, and analyzes posts across multiple social platforms.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="text-xl font-bold text-accent-teal">Free</span>
                <Button variant="outline" className="border-primary-violet text-primary-violet hover:bg-primary-violet hover:text-white">View Details</Button>
              </CardContent>
            </Card>
          </div>
          <Button className="mt-12 px-8 py-4 text-lg bg-primary-violet hover:bg-primary-violet/90 text-white font-bold rounded-lg shadow-lg transition-all duration-300">
            See All Workflows
          </Button>
        </div>
      </section>

      {/* Hire Developers Section */}
      <section className="py-20 bg-dark-charcoal text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Need a Custom Solution? Hire an Expert.
          </h2>
          <p className="text-lg text-light-gray mb-16">
            Connect with top-tier n8n developers for bespoke workflows or modifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white shadow-xl transition-transform duration-300 hover:scale-105">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Aisha Khan" />
                  <AvatarFallback className="bg-accent-teal text-dark-charcoal text-2xl font-bold">AK</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-poppins">Aisha Khan</CardTitle>
                <CardDescription className="text-light-gray">E-commerce & CRM Integrations</CardDescription>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-light-gray">(24 projects)</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-accent-teal hover:bg-accent-teal/90 text-dark-charcoal font-bold">Hire Now</Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white shadow-xl transition-transform duration-300 hover:scale-105">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Marcus Chen" />
                  <AvatarFallback className="bg-primary-violet text-white text-2xl font-bold">MC</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-poppins">Marcus Chen</CardTitle>
                <CardDescription className="text-light-gray">Data Automation & API Development</CardDescription>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-light-gray">(18 projects)</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-accent-teal hover:bg-accent-teal/90 text-dark-charcoal font-bold">Hire Now</Button>
              </CardContent>
            </Card>
          </div>
          <Button className="mt-12 px-8 py-4 text-lg bg-primary-violet hover:bg-primary-violet/90 text-white font-bold rounded-lg shadow-lg transition-all duration-300">
            View All Developers
          </Button>
        </div>
      </section>

      {/* Why WitsFlows? Section */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Why Choose WitsFlows?
          </h2>
          <p className="text-lg text-light-gray mb-16">
            Experience the next generation of automation with unparalleled advantages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-accent-teal/20 mb-6">
                <FastForward className="w-10 h-10 text-accent-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">Blazing Fast Deployment</h3>
              <p className="text-md text-light-gray">Go from discovery to active automation in minutes, not hours or days.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-accent-teal/20 mb-6">
                <Puzzle className="w-10 h-10 text-accent-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">Tailored to Your Needs</h3>
              <p className="text-md text-light-gray">Easily customize existing workflows or commission new ones to fit your exact requirements.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-accent-teal/20 mb-6">
                <Users className="w-10 h-10 text-accent-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">Thriving Ecosystem</h3>
              <p className="text-md text-light-gray">Join a vibrant community of innovators, developers, and automation enthusiasts.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-accent-teal/20 mb-6">
                <MousePointerClick className="w-10 h-10 text-accent-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">Effortless Activation</h3>
              <p className="text-md text-light-gray">Our unique 'Deploy' button makes launching complex automations incredibly simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-violet to-accent-teal text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white mb-10">
            Join WitsFlows today and step into a world of intelligent, effortless automation.
          </p>
          <Button className="px-10 py-6 text-xl bg-white hover:bg-gray-100 text-primary-violet font-bold rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-subtle">
            Start Automating Today
          </Button>
        </div>
      </section>
      {/* <MadeWithDyad /> */}
    </div>
  );
};

export default LandingPage;