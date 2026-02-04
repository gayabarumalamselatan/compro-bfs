import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Mail, Pin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold mb-4">Hubungi Kami</h2>
          <p className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-gray-800 mb-4">
            Siap Memberikan Solusi Kesehatan Terbaik
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          {/* <Card className="border-border hover:border-primary hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="mb-3 group-hover:scale-110 transition-transform">
                <Mail />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:business@bfsbintanglima.com"
                className="text-primary hover:text-secondary font-semibold break-all"
              >
                business@bfsbintanglima.com
              </a>
            </CardContent>
          </Card> */}
          <div className="bg-gray-50 p-10 rounded-2xl flex flex-col gap-5">
            <Mail className="size-8 text-primary" />
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold">Email</h2>
              <a
                href="mailto:business@bfsbintanglima.com"
                className="text-primary hover:text-secondary text-sm break-all"
              >
                business@bfsbintanglima.com
              </a>
            </div>
          </div>
          <div className="bg-gray-50 p-10 rounded-2xl flex flex-col gap-5">
            <Globe className="size-8 text-primary" />
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold">Website</h2>
              <a
                href="https://bfsbintanglima.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary text-sm break-all"
              >
                bfsbintanglima.com
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-10 flex flex-col gap-5">
            <Pin className="size-8 text-primary" />
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold">Alamat</h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                AD Premier Office Park,
                <br />
                7th Floor, Suite 6<br />
                Jalan TB. Simatupang No. 5<br />
                Jakarta Selatan 12550
                <br />
                INDONESIA
              </p>
            </div>
          </div>

          {/* Website */}
          {/* <Card className="border-border  hover:border-primary hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                <Globe />
              </div>
              <CardTitle>Website</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://bfsbintanglima.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary font-semibold break-all"
              >
                bfsbintanglima.com
              </a>
            </CardContent>
          </Card> */}

          {/* Address */}
          {/* <Card className="border-border hover:border-primary hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                <Pin />
              </div>
              <CardTitle>Alamat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AD Premier Office Park,
                <br />
                7th Floor, Suite 6<br />
                Jalan TB. Simatupang No. 5<br />
                Jakarta Selatan 12550
                <br />
                INDONESIA
              </p>
            </CardContent>
          </Card> */}
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Siap Bermitra Bersama?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Hubungi tim kami untuk mendiskusikan solusi kesehatan yang tepat
            untuk fasilitas Anda
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-primary font-semibold"
          >
            Hubungi Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
}
