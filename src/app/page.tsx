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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#2563eb"/>
                  <path d="M12 20 C12 20, 6 16, 6 12 C6 10, 7 8, 9 8 C10 8, 11 9, 12 10 C13 9, 14 8, 15 8 C17 8, 18 10, 18 12 C18 16, 12 20, 12 20 Z" 
                        fill="white" 
                        transform="translate(0, -1) scale(0.8)"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">CuraX AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                The Problem
              </button>
              <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                How It Works
              </button>
              <button onClick={() => scrollToSection('results')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Results
              </button>
              <button onClick={() => scrollToSection('investors')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Investors
              </button>
              <button onClick={() => scrollToSection('privacy')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Privacy
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('footer')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 md:py-36 pt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" rx="8" fill="#2563eb"/>
                  <path d="M30 50 C30 50, 15 40, 15 30 C15 25, 18 20, 23 20 C26 20, 29 22, 30 24 C31 22, 34 20, 37 20 C42 20, 45 25, 45 30 C45 40, 30 50, 30 50 Z" 
                        fill="white" 
                        transform="translate(0, -2) scale(0.9)"/>
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The AI-Powered Health Operating System<br />
              <span className="text-blue-600">For Your Whole Family</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Get instant symptom guidance, prevent allergic reactions, and understand medical reports—all in one secure, HIPAA-compliant platform. Trusted by families worldwide.
            </p>
            <div className="flex justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('footer')}
              >
                Get Early Access
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                <span className="text-green-600 font-bold">✓</span>
                <span className="font-semibold">Fully HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                <span className="text-green-600 font-bold">✓</span>
                <span className="font-semibold">13+ Languages Supported</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                <span className="text-green-600 font-bold">✓</span>
                <span className="font-semibold">IRB-Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                <span className="text-green-600 font-bold">✓</span>
                <span className="font-semibold">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Product Showcase Section with Animated Images */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See CuraX AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the intuitive interface that's transforming family healthcare
            </p>
          </div>

          {/* Animated Dashboard Preview */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h3 className="text-white text-xl font-bold">Family Health Dashboard</h3>
                <p className="text-blue-100 text-sm">Real-time health monitoring for your entire family</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src="/product-images/dashboard.png" 
                    alt="CuraX AI Dashboard" 
                    className="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Live
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
                    <div className="text-sm text-blue-800">Symptom Checks</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300" style={{transitionDelay: '0.1s'}}>
                    <div className="text-2xl font-bold text-green-600 mb-1">15</div>
                    <div className="text-sm text-green-800">Image Analysis</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300" style={{transitionDelay: '0.2s'}}>
                    <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                    <div className="text-sm text-purple-800">Family Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Family Members Preview */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                <h3 className="text-white text-xl font-bold">Family Health Profiles</h3>
                <p className="text-purple-100 text-sm">Comprehensive health tracking for every family member</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src="/product-images/family-members.png" 
                    alt="Family Health Profiles" 
                    className="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Active
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                    <h4 className="font-bold text-blue-900 mb-2">edong boni</h4>
                    <p className="text-sm text-blue-700">45 years • Diabetes, Hypertension</p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-4 transform hover:scale-105 transition-all duration-300" style={{transitionDelay: '0.1s'}}>
                    <h4 className="font-bold text-pink-900 mb-2">chinchirga</h4>
                    <p className="text-sm text-pink-700">25 years • Soy Allergy</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 transform hover:scale-105 transition-all duration-300" style={{transitionDelay: '0.2s'}}>
                    <h4 className="font-bold text-green-900 mb-2">achintir</h4>
                    <p className="text-sm text-green-700">25 years • Acid Reflux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Symptom Checker Preview */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                <h3 className="text-white text-xl font-bold">AI Symptom Checker</h3>
                <p className="text-red-100 text-sm">Instant, accurate health assessments powered by AI</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src="/product-images/symptom-checker.png" 
                    alt="AI Symptom Checker" 
                    className="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Critical
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 transform hover:scale-105 transition-all duration-300">
                    <h4 className="font-bold text-red-800 mb-2">Diagnosis</h4>
                    <p className="text-red-700 font-medium">Hypertensive Crisis</p>
                    <div className="mt-2 flex gap-2">
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Severity: Very High</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Confidence: 95%</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 transform hover:scale-105 transition-all duration-300" style={{transitionDelay: '0.1s'}}>
                    <h4 className="font-bold text-green-800 mb-2">Recommended Actions</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Hydrate immediately</li>
                      <li>• Administer pain relief</li>
                      <li>• Seek medical attention</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Medications & Treatment Preview */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-4">
                <h3 className="text-white text-xl font-bold">Smart Medication Management</h3>
                <p className="text-orange-100 text-sm">AI-powered treatment recommendations and safety checks</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-2 border-orange-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-lg border border-orange-200 transform hover:scale-105 transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-red-800">Emergency Alert</h4>
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          </div>
                          <p className="text-sm text-red-700">Seek immediate medical attention</p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 shadow-lg border border-purple-200 transform hover:scale-105 transition-all duration-300" style={{transitionDelay: '0.1s'}}>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-purple-800">Home Care</h4>
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                          </div>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Quiet rest in dark room</li>
                            <li>• Cold compress to forehead</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 shadow-lg border border-blue-200 transform hover:scale-105 transition-all duration-300">
                          <h4 className="font-bold text-blue-900 mb-2">Aspirin</h4>
                          <p className="text-sm text-blue-700 mb-2">Analgesic/Antipyretic</p>
                          <div className="space-y-1 text-xs text-blue-600">
                            <p><strong>Dosage:</strong> 300mg</p>
                            <p><strong>Uses:</strong> Pain relief, inflammation reduction</p>
                            <p class="text-red-600 font-medium"><strong>Warning:</strong> GI bleeding risk</p>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"></div>
                            <span className="text-sm font-medium">AI Safety Check Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Pricing Preview */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <h3 className="text-white text-xl font-bold">Simple, Transparent Pricing</h3>
                <p className="text-green-100 text-sm">Choose the plan that works best for your family</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300">
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 mb-2">Free</h4>
                        <div className="text-3xl font-bold text-gray-900 mb-4">$0</div>
                        <p className="text-sm text-gray-600 mb-4">Basic symptom analysis</p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>Basic symptom checker</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>Single user</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg border-2 border-blue-300 transform hover:scale-105 transition-all duration-300 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-blue-900 mb-2">Basic</h4>
                        <div className="text-3xl font-bold text-blue-900 mb-4">$4.99</div>
                        <p className="text-sm text-blue-700 mb-4">Advanced health insights</p>
                        <div className="space-y-2 text-sm text-blue-700">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">✓</span>
                            <span>Advanced symptom analysis</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">✓</span>
                            <span>Family profiles (up to 5)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">✓</span>
                            <span>Basic food safety</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-lg border-2 border-purple-300 transform hover:scale-105 transition-all duration-300" style={{transitionDelay: '0.1s'}}>
                      <div className="text-center">
                        <h4 className="font-bold text-purple-900 mb-2">Premium</h4>
                        <div className="text-3xl font-bold text-purple-900 mb-4">$14.99</div>
                        <p className="text-sm text-purple-700 mb-4">Complete family health</p>
                        <div className="space-y-2 text-sm text-purple-700">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-600">✓</span>
                            <span>Everything in Basic</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-purple-600">✓</span>
                            <span>Unlimited family members</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-purple-600">✓</span>
                            <span>Medical file analysis</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-purple-600">✓</span>
                            <span>Voice assistance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">73% of families choose Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Healthcare Crisis Families Face Every Day
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                You shouldn't need a medical degree to keep your loved ones safe. Between food allergies, confusing symptoms, and expensive urgent care trips, families are left navigating a broken system alone.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-0 shadow-xl bg-gradient-to-br from-red-500 to-pink-600 text-white transform hover:scale-105 transition-all duration-300">
                <CardContent className="pt-12 pb-8">
                  <div className="text-7xl font-bold mb-4">70%</div>
                  <p className="text-lg font-semibold mb-2">Families Avoid Doctors</p>
                  <p className="text-red-100">Due to cost and accessibility barriers</p>
                  <div className="mt-6 text-4xl">💰</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white transform hover:scale-105 transition-all duration-300">
                <CardContent className="pt-12 pb-8">
                  <div className="text-7xl font-bold mb-4">$200B</div>
                  <p className="text-lg font-semibold mb-2">Wasted Annually</p>
                  <p className="text-orange-100">On preventable emergency visits</p>
                  <div className="mt-6 text-4xl">🚑</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white transform hover:scale-105 transition-all duration-300">
                <CardContent className="pt-12 pb-8">
                  <div className="text-7xl font-bold mb-4">32M</div>
                  <p className="text-lg font-semibold mb-2">Americans With Food Allergies</p>
                  <p className="text-green-100">No real-time safety tools</p>
                  <div className="mt-6 text-4xl">🍎</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Introducing Your Family's Health Operating System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finally, a smarter way to care for everyone you love. CuraX AI is the world's first comprehensive family health platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="h-full border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl text-white">🩺</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">AI Symptom Checker</h3>
                <p className="text-gray-600 leading-relaxed">Instant, accurate guidance for any symptom, day or night. Powered by advanced AI that understands your family's health history.</p>
              </CardContent>
            </Card>

            <Card className="h-full border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl text-white">🍎</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Smart Food Safety</h3>
                <p className="text-gray-600 leading-relaxed">Real-time analysis protects your family from allergies and nutritional risks with personalized food recommendations.</p>
              </CardContent>
            </Card>

            <Card className="h-full border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl text-white">📋</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Medical File Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">Upload lab reports, X-rays, or MRI scans for expert AI analysis and clear explanations in simple terms.</p>
              </CardContent>
            </Card>

            <Card className="h-full border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl text-white">🎤</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Voice-Powered Care</h3>
                <p className="text-gray-600 leading-relaxed">Hands-free health assistance in 13+ languages for busy families who need support while multitasking.</p>
              </CardContent>
            </Card>

            <Card className="h-full border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl text-white">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Family Profiles</h3>
                <p className="text-gray-600 leading-relaxed">Personalized care for every member, from kids to grandparents. All health information in one secure place.</p>
              </CardContent>
            </Card>

            <Card className="h-full border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl text-white">🔒</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Enterprise-Grade Security</h3>
                <p className="text-gray-600 leading-relaxed">Military-grade encryption and HIPAA/GDPR compliance ensure your family's health data stays private and protected.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Test Results Section */}
      <section id="results" className="py-24 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven Results From Real Families
            </h2>
            <p className="text-xl text-emerald-100 mb-2">91 Families | 247 Users | 30-Day Independent Pilot Study</p>
            <p className="text-emerald-200">IRB-Approved Methodology with Full Participant Consent</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">73%</div>
                <p className="text-xl font-bold mb-2">Conversion Rate</p>
                <p className="text-gray-700">Families would pay after trial</p>
                <div className="mt-4 text-4xl">💰</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">8.3/10</div>
                <p className="text-xl font-bold mb-2">Net Promoter Score</p>
                <p className="text-purple-100">Exceptionally High</p>
                <div className="mt-4 text-4xl">⭐</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">$298</div>
                <p className="text-xl font-bold mb-2">Average Savings</p>
                <p className="text-green-100">Per family annually</p>
                <div className="mt-4 text-4xl">💸</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">36</div>
                <p className="text-xl font-bold mb-2">Urgent Care Visits</p>
                <p className="text-blue-100">Successfully avoided</p>
                <div className="mt-4 text-4xl">🏥</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-red-500 to-pink-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">12</div>
                <p className="text-xl font-bold mb-2">ER Visits</p>
                <p className="text-red-100">Prevented</p>
                <div className="mt-4 text-4xl">🚨</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">142</div>
                <p className="text-xl font-bold mb-2">Food Allergy Alerts</p>
                <p className="text-amber-100">8 severe reactions prevented</p>
                <div className="mt-4 text-4xl">🚨</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300">
              Download Full Beta Test Report
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How CuraX AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to transform your family's healthcare experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Family Profiles</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Add every family member, their health details, allergies, and medical history in one secure location.
              </p>
              <div className="mt-6 text-4xl">👥</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <span className="text-4xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Use voice, text, or your camera to get instant, trusted guidance from our advanced AI system.
              </p>
              <div className="mt-6 text-4xl">🤖</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <span className="text-4xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live with Confidence</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Make informed decisions, prevent emergencies, and save time and money with peace of mind.
              </p>
              <div className="mt-6 text-4xl">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section id="privacy" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy & Security Built In
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your family's health data deserves the highest level of protection. We've built enterprise-grade security into every aspect of CuraX AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">HIPAA Compliance</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CuraX AI is fully HIPAA compliant, ensuring your protected health information (PHI) is handled according to the highest standards of privacy and security in healthcare.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>End-to-end encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Secure data storage with access controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Regular security audits and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Business Associate Agreements (BAAs) with all partners</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">GDPR Compliance</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We comply with GDPR requirements, giving you control over your personal data and ensuring transparency in how we collect, use, and protect your information.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Lawful, fair, and transparent data processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Limited data collection for specified purposes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Data subject rights (access, rectification, deletion)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Breach notification within 72 hours</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Military-Grade Encryption</h3>
                <p className="text-gray-600 text-sm">AES-256 encryption for data at rest and in transit</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy by Design</h3>
                <p className="text-gray-600 text-sm">Privacy considerations built into every feature</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Compliance</h3>
                <p className="text-gray-600 text-sm">Ongoing monitoring and compliance updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors & Partners Section */}
      <section id="investors" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Investing in the Future of Family Healthcare
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              CuraX AI is tackling a $847B global market with a validated solution and exceptional unit economics. We seek visionary partners to accelerate our mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-gray-900 transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">$847B</div>
                <p className="text-xl font-bold mb-2">Global Market</p>
                <p className="text-gray-700">Family healthcare spending</p>
                <div className="mt-4 text-4xl">🌍</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">15:1</div>
                <p className="text-xl font-bold mb-2">LTV/CAC Ratio</p>
                <p className="text-emerald-100">($180/$12)</p>
                <div className="mt-4 text-4xl">📈</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-8">
                <div className="text-7xl font-bold mb-3">$2M</div>
                <p className="text-xl font-bold mb-2">Series A</p>
                <p className="text-blue-100">Investment round</p>
                <div className="mt-4 text-4xl">💼</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300">
              View Investor Deck
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-lg font-semibold bg-white/10">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Three Forms */}
      <section id="footer" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join the CuraX AI Family</h2>
            <p className="text-xl text-gray-600">Choose how you'd like to get involved</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {/* Family Early Access Form */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Family Early Access</CardTitle>
                <CardDescription className="text-blue-100">
                  Be among the first families to experience the future of healthcare.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFamilySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="family-name" className="text-white font-semibold">Full Name</Label>
                    <Input
                      id="family-name"
                      value={familyForm.fullName}
                      onChange={(e) => setFamilyForm({...familyForm, fullName: e.target.value})}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="family-email" className="text-white font-semibold">Email Address</Label>
                    <Input
                      id="family-email"
                      type="email"
                      value={familyForm.email}
                      onChange={(e) => setFamilyForm({...familyForm, email: e.target.value})}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="family-size" className="text-white font-semibold">Family Size</Label>
                    <Select value={familyForm.familySize} onValueChange={(value) => setFamilyForm({...familyForm, familySize: value})}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white mt-2">
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
                    <Label htmlFor="family-interest" className="text-white font-semibold">Primary Interest</Label>
                    <Select value={familyForm.primaryInterest} onValueChange={(value) => setFamilyForm({...familyForm, primaryInterest: value})}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white mt-2">
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
                  <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold mt-4">
                    Join Waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Investor Interest Form */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Investor Interest</CardTitle>
                <CardDescription className="text-emerald-100">
                  Learn about our investment opportunity and growth strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInvestorSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="investor-name" className="text-white font-semibold">Full Name</Label>
                    <Input
                      id="investor-name"
                      value={investorForm.fullName}
                      onChange={(e) => setInvestorForm({...investorForm, fullName: e.target.value})}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="investor-email" className="text-white font-semibold">Email Address</Label>
                    <Input
                      id="investor-email"
                      type="email"
                      value={investorForm.email}
                      onChange={(e) => setInvestorForm({...investorForm, email: e.target.value})}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="investor-firm" className="text-white font-semibold">Firm/Company</Label>
                    <Input
                      id="investor-firm"
                      value={investorForm.firm}
                      onChange={(e) => setInvestorForm({...investorForm, firm: e.target.value})}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2"
                      placeholder="Enter firm name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="investor-type" className="text-white font-semibold">Investor Type</Label>
                    <Select value={investorForm.investorType} onValueChange={(value) => setInvestorForm({...investorForm, investorType: value})}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white mt-2">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="angel">Angel Investor</SelectItem>
                        <SelectItem value="vc">VC Firm</SelectItem>
                        <SelectItem value="family-office">Family Office</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-bold mt-4">
                    Request Pitch Deck
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Strategic Partnership Form */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-600 to-purple-700 text-white transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Strategic Partnership</CardTitle>
                <CardDescription className="text-purple-100">
                  Partner with us to bring CuraX AI to your community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="partner-name" className="text-white font-semibold">Full Name</Label>
                    <Input
                      id="partner-name"
                      value={partnerForm.fullName}
                      onChange={(e) => setPartnerForm({...partnerForm, fullName: e.target.value})}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-email" className="text-white font-semibold">Email Address</Label>
                    <Input
                      id="partner-email"
                      type="email"
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-org" className="text-white font-semibold">Organization</Label>
                    <Input
                      id="partner-org"
                      value={partnerForm.organization}
                      onChange={(e) => setPartnerForm({...partnerForm, organization: e.target.value})}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2"
                      placeholder="Enter organization"
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-type" className="text-white font-semibold">Partnership Type</Label>
                    <Select value={partnerForm.partnershipType} onValueChange={(value) => setPartnerForm({...partnerForm, partnershipType: value})}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white mt-2">
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
                  <Button type="submit" className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold mt-4">
                    Contact Partnerships Team
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="pt-12 border-t border-gray-200">
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-4">
                © 2024 CuraX AI, a Tulwe Group venture. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Privacy Policy</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Terms of Service</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">HIPAA Compliance</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">GDPR Compliance</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Data Protection</a>
                <a href="mailto:info@tulwegroup.com" className="text-blue-600 hover:text-blue-800 font-semibold">Contact: info@tulwegroup.com</a>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500">
              <p>This website and our services comply with HIPAA (Health Insurance Portability and Accountability Act) and GDPR (General Data Protection Regulation) standards. 
              Your health information is protected with enterprise-grade security and encryption.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}