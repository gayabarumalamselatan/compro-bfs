"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Wifi,
  BarChart3,
  Shield,
  Zap,
  Search,
  Filter,
  Check,
  Cloud,
  Smartphone,
  Database,
  AlertCircle,
} from "lucide-react";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "../../../app/iot-solutions/loading";

const iotFeatures = [
  {
    icon: Wifi,
    title: "Konektivitas Seamless",
    description:
      "Integrasi IoT yang mulus dengan sistem existing fasilitas kesehatan Anda",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Dashboard monitoring real-time untuk data peralatan dan performa kesehatan",
  },
  {
    icon: Shield,
    title: "Keamanan Data",
    description:
      "Enkripsi tingkat enterprise dan compliance dengan standar privasi medis internasional",
  },
  {
    icon: Zap,
    title: "Efisiensi Operasional",
    description:
      "Otomasi proses dan optimisasi penggunaan sumber daya untuk efisiensi maksimal",
  },
];

const iotCapabilities = [
  {
    title: "Real-time Equipment Monitoring",
    description:
      "Pantau status dan performa semua peralatan medis secara real-time dari dashboard terpusat",
    metrics: ["Uptime 99.9%", "Latency <100ms", "Multi-device support"],
  },
  {
    title: "Predictive Maintenance",
    description:
      "Sistem AI yang memprediksi kebutuhan maintenance sebelum terjadi kegagalan peralatan",
    metrics: [
      "Deteksi dini anomali",
      "Scheduling otomatis",
      "Cost reduction 40%",
    ],
  },
  {
    title: "Patient Data Integration",
    description:
      "Integrasi data pasien dari berbagai peralatan untuk pandangan holistik status kesehatan",
    metrics: ["Data consolidation", "EHR integration", "HIPAA compliant"],
  },
  {
    title: "Remote Access & Control",
    description:
      "Akses dan kontrol peralatan dari mana saja dengan sistem keamanan berlapis",
    metrics: ["Secure VPN", "Role-based access", "Audit logging"],
  },
];

const iotBenefits = [
  {
    category: "Operasional",
    items: [
      "Mengurangi downtime peralatan hingga 60%",
      "Otomasi proses administrasi kesehatan",
      "Penjadwalan maintenance yang optimal",
      "Manajemen inventory real-time",
    ],
  },
  {
    category: "Keuangan",
    items: [
      "ROI dalam 18-24 bulan",
      "Pengurangan biaya operational 35%",
      "Optimisasi penggunaan aset",
      "Prediksi cost lebih akurat",
    ],
  },
  {
    category: "Klinis",
    items: [
      "Peningkatan patient safety",
      "Kualitas data monitoring lebih baik",
      "Respon time lebih cepat",
      "Keputusan klinis berbasis data",
    ],
  },
  {
    category: "Teknologi",
    items: [
      "Arsitektur cloud-native scalable",
      "API yang comprehensive",
      "Machine learning capabilities",
      "Real-time data processing",
    ],
  },
];

const iotSolutions = [
  {
    id: "monitoring",
    title: "Real-time Equipment Monitoring",
    description:
      "Pantau status dan performa semua peralatan medis secara real-time dari dashboard terpusat",
    category: "Monitoring & Analytics",
    benefits: [
      "Uptime 99.9%",
      "Latency <100ms",
      "Multi-device support",
      "Alert real-time",
    ],
    metrics: [
      "Deteksi dini anomali",
      "Scheduling otomatis",
      "Cost reduction 40%",
    ],
    icon: Wifi,
  },
  {
    id: "maintenance",
    title: "Predictive Maintenance",
    description:
      "Sistem AI yang memprediksi kebutuhan maintenance sebelum terjadi kegagalan peralatan",
    category: "Maintenance Management",
    benefits: [
      "Predictive algorithms",
      "Scheduling otomatis",
      "Asset tracking",
      "Work order automation",
    ],
    metrics: [
      "Deteksi dini anomali",
      "Scheduling otomatis",
      "Cost reduction 40%",
    ],
    icon: AlertCircle,
  },
  {
    id: "integration",
    title: "Patient Data Integration",
    description:
      "Integrasi data pasien dari berbagai peralatan untuk pandangan holistik status kesehatan",
    category: "Data Integration",
    benefits: [
      "Data consolidation",
      "EHR integration",
      "HIPAA compliant",
      "Single source of truth",
    ],
    metrics: ["Data consolidation", "EHR integration", "HIPAA compliant"],
    icon: Database,
  },
  {
    id: "access",
    title: "Remote Access & Control",
    description:
      "Akses dan kontrol peralatan dari mana saja dengan sistem keamanan berlapis",
    category: "Security & Access",
    benefits: [
      "Secure VPN",
      "Role-based access",
      "Audit logging",
      "Two-factor authentication",
    ],
    metrics: ["Secure VPN", "Role-based access", "Audit logging"],
    icon: Shield,
  },
  {
    id: "mobile",
    title: "Mobile Dashboard",
    description:
      "Aplikasi mobile untuk monitoring dan management peralatan dari genggaman tangan",
    category: "Monitoring & Analytics",
    benefits: [
      "Native apps",
      "Offline capability",
      "Push notifications",
      "Touch-optimized UI",
    ],
    metrics: ["iOS & Android", "Offline sync", "Real-time alerts"],
    icon: Smartphone,
  },
  {
    id: "analytics",
    title: "Advanced Analytics",
    description:
      "Dashboard analytics canggih dengan insights berbasis data untuk optimasi operasional",
    category: "Monitoring & Analytics",
    benefits: [
      "Custom dashboards",
      "Data visualization",
      "Predictive models",
      "Custom reports",
    ],
    metrics: ["Data-driven insights", "Performance KPIs", "ROI tracking"],
    icon: BarChart3,
  },
];

export default function IoTSolutionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const categories = Array.from(new Set(iotSolutions.map((s) => s.category)));

  const filteredSolutions = useMemo(() => {
    return iotSolutions.filter((solution) => {
      const matchesCategory =
        !selectedCategory || solution.category === selectedCategory;
      const matchesSearch =
        solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        solution.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <span className="font-bold text-primary-foreground text-sm">
                BFS
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-foreground leading-none">
                BFS
              </span>
              <span className="text-xs text-muted-foreground">Healthcare</span>
            </div>
          </Link>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-transparent"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Wifi className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              IoT Healthcare Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Integrated IoT Healthcare Solutions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi IoT terintegrasi yang menghubungkan semua peralatan kesehatan
            Anda dengan platform cloud yang cerdas, aman, dan scalable
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 sm:py-16 md:py-20 border-b border-border bg-background">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari solusi IoT, fitur, atau capability..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Filter Kategori
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="bg-transparent"
                >
                  Semua Solusi
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="bg-transparent"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results counter */}
            <div className="text-sm text-muted-foreground">
              Ditemukan{" "}
              <span className="font-semibold text-foreground">
                {filteredSolutions.length}
              </span>{" "}
              solusi IoT
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Fitur Utama Platform
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iotFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary transition-all hover:shadow-lg group"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* IoT Solutions Grid */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary/3 to-secondary/3">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {filteredSolutions.length > 0 ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
                {selectedCategory
                  ? `Solusi: ${selectedCategory}`
                  : "Kemampuan & Solusi IoT"}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSolutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <Card
                      key={solution.id}
                      className="border-border hover:shadow-lg transition-all overflow-hidden group"
                    >
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 flex items-center justify-center h-20">
                        <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <CardHeader>
                        <div className="text-xs font-medium text-primary uppercase tracking-wide mb-2">
                          {solution.category}
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {solution.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-2">
                          {solution.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                            Kemampuan
                          </h4>
                          <ul className="space-y-1">
                            {solution.benefits
                              .slice(0, 3)
                              .map((benefit, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                                  {benefit}
                                </li>
                              ))}
                          </ul>
                        </div>

                        <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                          Pelajari Selengkapnya
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Tidak ada solusi IoT yang cocok dengan pencarian Anda.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="bg-transparent"
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Capabilities - Original IoT Capabilities */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Detail Kemampuan Utama
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {iotCapabilities.map((capability, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {capability.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <Check className="h-3.5 w-3.5 text-primary mr-3 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Manfaat Implementasi
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iotBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {benefit.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Deployment Section */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Model Deployment & Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-all">
              <CardHeader>
                <Cloud className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Cloud-Based</CardTitle>
                <CardDescription>
                  Managed cloud solution dengan scale otomatis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-primary mb-2">Custom</p>
                  <p className="text-sm text-muted-foreground">
                    Berdasarkan device & data volume
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    99.99% uptime SLA
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Auto-scaling
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Managed backups
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    24/7 support
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Konsultasi
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all border-primary/50 relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl text-xs font-semibold">
                Populer
              </div>
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Hybrid</CardTitle>
                <CardDescription>
                  Kombinasi cloud dan on-premise solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-primary mb-2">
                    Fleksibel
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Per-site subscription model
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Data residency control
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Local redundancy
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Connected analytics
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Prioritas support
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Jadwalkan Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-4" />
                <CardTitle>On-Premise</CardTitle>
                <CardDescription>
                  Solusi dedicated untuk kebutuhan khusus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-primary mb-2">
                    Enterprise
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Full control & customization
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Complete control
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Air-gapped support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Custom integration
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Hubungi Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Diagram Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Arsitektur Platform IoT
          </h2>

          <Card className="border-border overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle>Ekosistem IoT Terintegrasi</CardTitle>
              <CardDescription>
                Platform IoT kami menghubungkan semua layer dari edge devices
                hingga cloud analytics dengan arsitektur yang scalable dan
                secure
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-lg border border-primary/20 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Edge Layer - Sensors & Devices
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        IoT gateways, sensors, dan peralatan medis yang
                        terhubung dengan protokol industri standar
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-secondary/10 to-transparent p-6 rounded-lg border border-secondary/20 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-secondary">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Network Layer - Secure Connectivity
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        5G, WiFi, LAN enterprise dengan enkripsi end-to-end dan
                        redundancy mechanism
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-lg border border-primary/20 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Cloud Platform - Intelligence
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Data processing, AI/ML analytics, real-time streaming,
                        dan business intelligence
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-secondary/10 to-transparent p-6 rounded-lg border border-secondary/20 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-secondary">
                        4
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Application Layer - User Experience
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Dashboard, mobile app, API gateway, dan integrasi dengan
                        sistem EHR/HIS existing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Transformasi Digital Dimulai Dari Sini
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Hubungi tim ahli kami untuk konsultasi mendalam tentang solusi IoT
            yang tepat untuk fasilitas kesehatan Anda
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-primary font-semibold"
          >
            Jadwalkan Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
}

export { Loading };
