
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Filter, 
  Clock, 
  BookmarkPlus, 
  MessageSquare, 
  Settings, 
  Chrome,
  Zap,
  Users,
  Target,
  Sparkles
} from "lucide-react";

const Index = () => {
  const [filterName, setFilterName] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [keywords, setKeywords] = useState("");
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippetContent, setSnippetContent] = useState("");

  const savedFilters = [
    { name: "React Jobs", keywords: "react", timeFilter: "3600", experience: "Entry Level" },
    { name: "Software Engineer", keywords: "software engineer", timeFilter: "18000", experience: "Mid Level" },
    { name: "Frontend Dev", keywords: "frontend developer", timeFilter: "7200", experience: "Entry Level" },
  ];

  const snippets = [
    { title: "Referral Request", content: "Hi [Name], I noticed you work at [Company]. I'm very interested in the [Position] role and would love to learn more about the company culture..." },
    { title: "Follow-up Message", content: "Thank you for connecting! I wanted to follow up on our previous conversation about opportunities at [Company]..." },
    { title: "Cold Outreach", content: "Hi [Name], I hope this message finds you well. I'm reaching out because I'm passionate about [Industry] and admire the work [Company] is doing..." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">LinkedInBoost</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Chrome className="w-4 h-4 mr-2" />
                Install Extension
              </Button>
              <Button size="sm">Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            <Sparkles className="w-3 h-3 mr-1" />
            Supercharge Your LinkedIn Job Search
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Find Jobs Faster with
            <span className="text-blue-600"> Smart Filters</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Custom time filters, saved searches, and message templates to streamline your LinkedIn job hunting experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Chrome className="w-5 h-5 mr-2" />
              Add to Chrome - Free
            </Button>
            <Button size="lg" variant="outline">
              <Target className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Land Your Dream Job</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Powerful tools designed to give you an edge in today's competitive job market</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Precise Time Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Filter jobs by exact posting time - from minutes to hours, get the freshest opportunities first.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookmarkPlus className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Saved Search Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Create and save multiple search configurations for different roles and instantly switch between them.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Message Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pre-built snippets for referrals, follow-ups, and cold outreach with smart placeholder filling.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">One-click access to your most-used filters and templates directly from LinkedIn.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Personal Job Search Command Center</h2>
            <p className="text-gray-600">Manage your filters, templates, and search strategy all in one place</p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Dashboard
              </CardTitle>
              <CardDescription className="text-blue-100">Manage your LinkedIn job search tools</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="filters" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="filters">Search Filters</TabsTrigger>
                  <TabsTrigger value="snippets">Message Snippets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="filters" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Create New Filter</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="filter-name">Filter Name</Label>
                          <Input 
                            id="filter-name"
                            placeholder="e.g., React Jobs - 1 Hour"
                            value={filterName}
                            onChange={(e) => setFilterName(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="keywords">Keywords</Label>
                          <Input 
                            id="keywords"
                            placeholder="e.g., react, frontend, javascript"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="time-filter">Time Filter (seconds)</Label>
                          <Input 
                            id="time-filter"
                            placeholder="e.g., 3600 (1 hour)"
                            value={timeFilter}
                            onChange={(e) => setTimeFilter(e.target.value)}
                          />
                        </div>
                        <Button className="w-full">
                          <BookmarkPlus className="w-4 h-4 mr-2" />
                          Save Filter
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Saved Filters</h3>
                      <div className="space-y-3">
                        {savedFilters.map((filter, index) => (
                          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{filter.name}</h4>
                                <p className="text-sm text-gray-500">{filter.keywords}</p>
                                <Badge variant="outline" className="mt-1">
                                  {Math.floor(parseInt(filter.timeFilter) / 3600)}h filter
                                </Badge>
                              </div>
                              <Button size="sm" variant="outline">Use</Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="snippets" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Create New Snippet</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="snippet-title">Snippet Title</Label>
                          <Input 
                            id="snippet-title"
                            placeholder="e.g., Referral Request"
                            value={snippetTitle}
                            onChange={(e) => setSnippetTitle(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="snippet-content">Message Template</Label>
                          <Textarea 
                            id="snippet-content"
                            placeholder="Use [Name], [Company], [Position] as placeholders"
                            rows={6}
                            value={snippetContent}
                            onChange={(e) => setSnippetContent(e.target.value)}
                          />
                        </div>
                        <Button className="w-full">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Save Snippet
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Your Snippets</h3>
                      <div className="space-y-3">
                        {snippets.map((snippet, index) => (
                          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-medium">{snippet.title}</h4>
                                <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                                  {snippet.content.substring(0, 80)}...
                                </p>
                              </div>
                              <Button size="sm" variant="outline">Use</Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Join Thousands of Successful Job Seekers</h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop missing out on opportunities. Get notified about fresh job postings before everyone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Chrome className="w-5 h-5 mr-2" />
              Install Extension Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">LinkedInBoost</span>
              </div>
              <p className="text-gray-400">Supercharge your LinkedIn job search with smart filters and templates.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Chrome Extension</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LinkedInBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
