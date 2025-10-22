// app/contact-02/page.tsx (o donde tengas esta página)
import { submitContact } from "../actions/submitContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Contact02Page() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        {/* …tu columna de info igual… */}

        <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
          {/* columna izquierda igual */}

          <Card className="bg-accent shadow-none py-0">
            <CardContent className="p-6 md:p-8">
              {/* 👇 aquí conectamos la acción */}
              <form action={submitContact}>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      required
                      className="mt-2 bg-white h-10 shadow-none"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      required
                      className="mt-2 bg-white h-10 shadow-none"
                    />
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      className="mt-2 bg-white h-10 shadow-none"
                    />
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      required
                      rows={6}
                      className="mt-2 bg-white shadow-none"
                    />
                  </div>

                  <div className="col-span-2 flex items-center gap-2">
                    <Checkbox id="acceptTerms" name="acceptTerms" className="bg-background" />
                    <Label htmlFor="acceptTerms" className="gap-0">
                      You agree to our
                      <Link href="#" className="underline ml-1">terms and conditions</Link>
                      <span>.</span>
                    </Label>
                  </div>
                </div>

                <Button className="mt-6 w-full" size="lg" type="submit">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
