"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Coffee, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const menuItems = [
  {
    name: "Signature Espresso",
    description: "Our house blend with notes of dark chocolate, caramel, and a hint of citrus. A bold yet smooth foundation for any espresso drink.",
    category: "Espresso",
  },
  {
    name: "Honey Oat Latte",
    description: "Creamy oat milk meets our signature espresso, sweetened with local wildflower honey and dusted with cinnamon.",
    category: "Specialty",
  },
  {
    name: "Cold Brew Reserve",
    description: "Steeped for 18 hours using single origin beans. Served over ice with a subtle vanilla finish.",
    category: "Cold",
  },
  {
    name: "Lavender Mocha",
    description: "House made lavender syrup paired with rich Belgian chocolate and our signature espresso, topped with silky steamed milk.",
    category: "Specialty",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Coffee className="w-8 h-8" style={{ color: "var(--color-caramel)" }} />
              <span className="font-serif text-xl md:text-2xl" style={{ color: "var(--color-espresso)" }}>
                Aroma Coffee
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "var(--color-espresso)" }}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="rounded-full px-6"
                style={{
                  backgroundColor: "var(--color-espresso)",
                  color: "var(--color-cream)",
                }}
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: "var(--color-espresso)" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "var(--color-espresso)" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[var(--color-cream)] border-b border-[var(--color-border)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-lg font-medium transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
                style={{
                  color: "var(--color-espresso)",
                  transitionDelay: mobileMenuOpen ? `${index * 60}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`inline-block mt-4 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
              style={{
                backgroundColor: "var(--color-espresso)",
                color: "var(--color-cream)",
                transitionDelay: mobileMenuOpen ? `${navLinks.length * 60}ms` : "0ms",
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="pt-20 md:pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left py-8 lg:py-0">
              <p
                className="text-sm md:text-base uppercase tracking-widest mb-4"
                style={{ color: "var(--color-caramel)" }}
              >
                Specialty Coffee Shop
              </p>
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
                style={{ color: "var(--color-espresso)" }}
              >
                Where Every Cup Tells a Story
              </h1>
              <p
                className="text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
                style={{ color: "var(--color-mocha)" }}
              >
                We source exceptional beans from around the world and craft them with care,
                creating moments of warmth and connection in every sip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8"
                  style={{
                    backgroundColor: "var(--color-espresso)",
                    color: "var(--color-cream)",
                  }}
                >
                  <a href="#menu">Explore Our Menu</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                  style={{
                    borderColor: "var(--color-espresso)",
                    color: "var(--color-espresso)",
                  }}
                >
                  <a href="#about">Our Story</a>
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="Specialty coffee being crafted at Aroma Coffee"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full -z-10"
                style={{ backgroundColor: "var(--color-caramel)", opacity: 0.3 }}
              />
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full -z-10"
                style={{ backgroundColor: "var(--color-mocha)", opacity: 0.2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32" style={{ backgroundColor: "var(--color-charcoal)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm uppercase tracking-widest mb-4"
              style={{ color: "var(--color-caramel)" }}
            >
              Crafted with Care
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl" style={{ color: "var(--color-cream)" }}>
              Our Signature Drinks
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:border-[var(--color-caramel)]"
                style={{
                  backgroundColor: "rgba(245, 241, 235, 0.05)",
                  borderColor: "rgba(245, 241, 235, 0.1)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-caramel)" }}
                  >
                    <Coffee className="w-6 h-6" style={{ color: "var(--color-espresso)" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="font-serif text-xl md:text-2xl"
                        style={{ color: "var(--color-cream)" }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="text-xs uppercase tracking-wider px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(196, 149, 106, 0.2)",
                          color: "var(--color-caramel)",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p style={{ color: "var(--color-mocha)" }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p style={{ color: "var(--color-mocha)" }}>
              Visit us to explore our full menu of specialty drinks and seasonal offerings.
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/feature.png"
                  alt="The Aroma Coffee experience"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl -z-10"
                style={{ border: "2px solid var(--color-caramel)" }}
              />
            </div>

            {/* Right: Content */}
            <div>
              <p
                className="text-sm uppercase tracking-widest mb-4"
                style={{ color: "var(--color-caramel)" }}
              >
                Our Story
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6"
                style={{ color: "var(--color-espresso)" }}
              >
                Passion in Every Pour
              </h2>
              <div className="space-y-4" style={{ color: "var(--color-mocha)" }}>
                <p className="text-lg">
                  Aroma Coffee was born from a simple belief: that exceptional coffee has the power
                  to transform ordinary moments into extraordinary ones.
                </p>
                <p>
                  We partner directly with farmers who share our commitment to sustainable,
                  ethical practices. Every bean we source is carefully selected for its unique
                  flavor profile and roasted in small batches to bring out its full potential.
                </p>
                <p>
                  Our baristas are more than coffee makers; they are artisans who take pride in
                  crafting each drink with precision and care. Whether you prefer a bold espresso
                  or a silky latte, we are here to create your perfect cup.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t" style={{ borderColor: "var(--color-border)" }}>
                <div>
                  <div className="font-serif text-3xl md:text-4xl" style={{ color: "var(--color-espresso)" }}>
                    100%
                  </div>
                  <p className="text-sm mt-1" style={{ color: "var(--color-mocha)" }}>
                    Ethically Sourced Beans
                  </p>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl" style={{ color: "var(--color-espresso)" }}>
                    Small
                  </div>
                  <p className="text-sm mt-1" style={{ color: "var(--color-mocha)" }}>
                    Batch Roasted Daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 md:py-32"
        style={{ backgroundColor: "var(--color-espresso)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Info */}
            <div>
              <p
                className="text-sm uppercase tracking-widest mb-4"
                style={{ color: "var(--color-caramel)" }}
              >
                Get in Touch
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6" style={{ color: "var(--color-cream)" }}>
                We Would Love to Hear From You
              </h2>
              <p className="text-lg mb-8" style={{ color: "var(--color-mocha)" }}>
                Have a question about our coffee, want to learn more about our sourcing,
                or interested in hosting a private event? Send us a message.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(196, 149, 106, 0.2)" }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "var(--color-caramel)" }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "var(--color-mocha)" }}>
                      Visit Us
                    </p>
                    <p style={{ color: "var(--color-cream)" }}>Contact us for location details</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(196, 149, 106, 0.2)" }}
                  >
                    <Clock className="w-5 h-5" style={{ color: "var(--color-caramel)" }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "var(--color-mocha)" }}>
                      Opening Hours
                    </p>
                    <p style={{ color: "var(--color-cream)" }}>Contact us for current hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              className="p-6 md:p-10 rounded-2xl"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-espresso)" }}
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="rounded-lg"
                      style={{
                        backgroundColor: "white",
                        borderColor: "var(--color-border)",
                        color: "var(--color-espresso)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-espresso)" }}
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="rounded-lg"
                      style={{
                        backgroundColor: "white",
                        borderColor: "var(--color-border)",
                        color: "var(--color-espresso)",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-espresso)" }}
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    className="rounded-lg"
                    style={{
                      backgroundColor: "white",
                      borderColor: "var(--color-border)",
                      color: "var(--color-espresso)",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-espresso)" }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    className="rounded-lg resize-none"
                    style={{
                      backgroundColor: "white",
                      borderColor: "var(--color-border)",
                      color: "var(--color-espresso)",
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  style={{
                    backgroundColor: "var(--color-espresso)",
                    color: "var(--color-cream)",
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-16 md:py-20 border-t"
        style={{
          backgroundColor: "var(--color-charcoal)",
          borderColor: "rgba(245, 241, 235, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <Coffee className="w-8 h-8" style={{ color: "var(--color-caramel)" }} />
                <span className="font-serif text-2xl" style={{ color: "var(--color-cream)" }}>
                  Aroma Coffee
                </span>
              </a>
              <p className="max-w-sm mb-6" style={{ color: "var(--color-mocha)" }}>
                Crafting exceptional coffee experiences since day one.
                Every cup is a journey from farm to your hands.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: "rgba(196, 149, 106, 0.2)" }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" style={{ color: "var(--color-caramel)" }} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: "rgba(196, 149, 106, 0.2)" }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" style={{ color: "var(--color-caramel)" }} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: "rgba(196, 149, 106, 0.2)" }}
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" style={{ color: "var(--color-caramel)" }} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-medium text-sm uppercase tracking-wider mb-4"
                style={{ color: "var(--color-cream)" }}
              >
                Explore
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors hover:opacity-80"
                      style={{ color: "var(--color-mocha)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4
                className="font-medium text-sm uppercase tracking-wider mb-4"
                style={{ color: "var(--color-cream)" }}
              >
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#contact"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "var(--color-mocha)" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "var(--color-mocha)" }}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "var(--color-mocha)" }}
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: "rgba(245, 241, 235, 0.1)" }}
          >
            <p className="text-sm" style={{ color: "var(--color-mocha)" }}>
              Aroma Coffee. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
