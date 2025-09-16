'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Home() {
  const [familyForm, setFamilyForm] = useState({
    fullName: '',
    email: '',
    familySize: '',
    primaryInterest: '',
    message: ''
  });

  const [investorForm, setInvestorForm] = useState({
    fullName: '',
    email: '',
    firm: '',
    investorType: '',
    message: ''
  });

  const [partnerForm, setPartnerForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    partnershipType: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFamilySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/family-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(familyForm),
      });

      if (response.ok) {
        alert('Family signup submitted successfully! We will contact you soon.');
        setFamilyForm({ fullName: '', email: '', familySize: '', primaryInterest: '', message: '' });
      } else {
        alert('Error submitting family signup. Please try again.');
      }
    } catch (error) {
      alert('Error submitting family signup. Please try again.');
    }
  };

  const handleInvestorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/investor-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(investorForm),
      });

      if (response.ok) {
        alert('Investor interest submitted successfully! We will contact you soon.');
        setInvestorForm({ fullName: '', email: '', firm: '', investorType: '', message: '' });
      } else {
        alert('Error submitting investor interest. Please try again.');
      }
    } catch (error) {
      alert('Error submitting investor interest. Please try again.');
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/partner-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(partnerForm),
      });

      if (response.ok) {
        alert('Partner interest submitted successfully! We will contact you soon.');
        setPartnerForm({ fullName: '', email: '', organization: '', partnershipType: '', message: '' });
      } else {
        alert('Error submitting partner interest. Please try again.');
      }
    } catch (error) {
      alert('Error submitting partner interest. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="CuraX AI" className="h-8 w-auto" />
              <span className="text-xl font-bold text-blue-800">CuraX AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('problem')} className="text-gray-600 hover:text-blue-600 transition-colors">
                The Problem
              </button>
              <button onClick={() => scrollToSection('solution')} className="text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('results')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Results
              </button>
              <button onClick={() => scrollToSection('investors')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Investors
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('footer')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The AI-Powered Health Assistant for Your Whole Family
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get instant symptom guidance, prevent allergic reactions, and understand medical reports—all in one place. Loved by 91 families in our pilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('footer')}
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Watch Video
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Fully HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>13+ Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>IRB-Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Worried, Overwhelmed, and Guessing About Your Family's Health?
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              You shouldn't need a medical degree to keep your loved ones safe. Between food allergies, confusing symptoms, and expensive urgent care trips, families are left navigating a broken system alone.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-blue-800 mb-4">70%</div>
                  <p className="text-gray-600">Families avoid doctors due to cost and accessibility</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-blue-800 mb-4">$200B</div>
                  <p className="text-gray-600">Wasted annually on preventable emergency visits</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-blue-800 mb-4">32M</div>
                  <p className="text-gray-600">Americans have food allergies with no real-time tools</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Introducing Your Family's Health OS
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Finally, a Smarter Way to Care for Everyone You Love. CuraX AI is the world's first family health operating system.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🩺</div>
                <h3 className="font-semibold text-lg mb-2">AI Symptom Checker</h3>
                <p className="text-sm text-gray-600">Instant guidance for any symptom, day or night.</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🍎</div>
                <h3 className="font-semibold text-lg mb-2">Smart Food Safety</h3>
                <p className="text-sm text-gray-600">Scan and analyze food for allergens and nutritional risks.</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-semibold text-lg mb-2">Medical File Intelligence</h3>
                <p className="text-sm text-gray-600">Upload labs or scans for clear, AI-powered explanations.</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="font-semibold text-lg mb-2">Voice-Powered Care</h3>
                <p className="text-sm text-gray-600">Hands-free help in over 13 languages.</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-lg mb-2">Family Profiles</h3>
                <p className="text-sm text-gray-600">Personalized care for every member, from kids to grandparents.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Test Results Section */}
      <section id="results" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Just Take Our Word For It. See Our Results.
            </h2>
            <p className="text-xl text-blue-100 mb-8">91 Families | 247 Users | 30-Day Pilot</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="text-center bg-white text-gray-900">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-blue-800 mb-4">73%</div>
                <p className="text-gray-600">Families would pay after the trial</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-gray-900">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-blue-800 mb-4">8.3/10</div>
                <p className="text-gray-600">Net Promoter Score (Exceptionally High)</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-gray-900">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-blue-800 mb-4">$298</div>
                <p className="text-gray-600">Average Healthcare Savings per Family</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-gray-900">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-blue-800 mb-4">36</div>
                <p className="text-gray-600">Urgent Care Visits Avoided</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-gray-900">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-blue-800 mb-4">12</div>
                <p className="text-gray-600">ER Visits Prevented</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-gray-900">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-blue-800 mb-4">142</div>
                <p className="text-gray-600">Food Allergy Alerts Issued</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
              Read the Full Beta Test Report
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <CardTitle className="text-xl">Create Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Add every family member, their health details, and allergies.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <CardTitle className="text-xl">Get AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Use voice, text, or your camera to get instant, trusted guidance.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <CardTitle className="text-xl">Live with Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Make informed decisions, prevent emergencies, and save time and money.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investors & Partners Section */}
      <section id="investors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investing in the Future of Accessible Healthcare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CuraX AI is tackling a $847B global market with a validated solution and incredible unit economics. We are seeking partners to help us scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-blue-800 mb-2">$847B</div>
                <p className="text-gray-600">Global Family Healthcare Market</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-blue-800 mb-2">15:1</div>
                <p className="text-gray-600">LTV/CAC Ratio ($180/$12)</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-blue-800 mb-2">$2M</div>
                <p className="text-gray-600">Series A Round</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              View Investor Deck
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Three Forms */}
      <section id="footer" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the CuraX AI Family</h2>
            <p className="text-gray-600">Choose how you'd like to get involved</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Family Early Access Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Family Early Access</CardTitle>
                <CardDescription>
                  Be among the first families to experience the future of healthcare.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFamilySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="family-name">Full Name</Label>
                    <Input
                      id="family-name"
                      value={familyForm.fullName}
                      onChange={(e) => setFamilyForm({...familyForm, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="family-email">Email Address</Label>
                    <Input
                      id="family-email"
                      type="email"
                      value={familyForm.email}
                      onChange={(e) => setFamilyForm({...familyForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="family-size">Family Size</Label>
                    <Select value={familyForm.familySize} onValueChange={(value) => setFamilyForm({...familyForm, familySize: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select family size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 members</SelectItem>
                        <SelectItem value="3-4">3-4 members</SelectItem>
                        <SelectItem value="5+">5+ members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="family-interest">I'm most interested in...</Label>
                    <Select value={familyForm.primaryInterest} onValueChange={(value) => setFamilyForm({...familyForm, primaryInterest: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="symptom-checker">Symptom Checker</SelectItem>
                        <SelectItem value="food-safety">Food Safety</SelectItem>
                        <SelectItem value="medical-files">Medical Files</SelectItem>
                        <SelectItem value="voice-help">Voice Help</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Join Waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Investor Interest Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Investor Interest</CardTitle>
                <CardDescription>
                  Learn about our investment opportunity and growth strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInvestorSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="investor-name">Full Name</Label>
                    <Input
                      id="investor-name"
                      value={investorForm.fullName}
                      onChange={(e) => setInvestorForm({...investorForm, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="investor-email">Email Address</Label>
                    <Input
                      id="investor-email"
                      type="email"
                      value={investorForm.email}
                      onChange={(e) => setInvestorForm({...investorForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="investor-firm">Firm/Company</Label>
                    <Input
                      id="investor-firm"
                      value={investorForm.firm}
                      onChange={(e) => setInvestorForm({...investorForm, firm: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="investor-type">I am a...</Label>
                    <Select value={investorForm.investorType} onValueChange={(value) => setInvestorForm({...investorForm, investorType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="angel">Angel Investor</SelectItem>
                        <SelectItem value="vc">VC Firm</SelectItem>
                        <SelectItem value="family-office">Family Office</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Request Pitch Deck
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Strategic Partnership Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Strategic Partnership</CardTitle>
                <CardDescription>
                  Partner with us to bring CuraX AI to your community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="partner-name">Full Name</Label>
                    <Input
                      id="partner-name"
                      value={partnerForm.fullName}
                      onChange={(e) => setPartnerForm({...partnerForm, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-email">Email Address</Label>
                    <Input
                      id="partner-email"
                      type="email"
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-org">Organization</Label>
                    <Input
                      id="partner-org"
                      value={partnerForm.organization}
                      onChange={(e) => setPartnerForm({...partnerForm, organization: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-type">Partnership Type</Label>
                    <Select value={partnerForm.partnershipType} onValueChange={(value) => setPartnerForm({...partnerForm, partnershipType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school">School District</SelectItem>
                        <SelectItem value="insurance">Health Insurance</SelectItem>
                        <SelectItem value="senior-living">Senior Living</SelectItem>
                        <SelectItem value="healthcare">Healthcare Provider</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Contact Our Partnerships Team
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © 2024 CuraX AI, a Tulwe Group venture. All rights reserved.
            </p>
            <div className="mt-4 space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Use</a>
              <a href="mailto:info@tulwegroup.com" className="text-blue-600 hover:text-blue-800">Contact: info@tulwegroup.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}