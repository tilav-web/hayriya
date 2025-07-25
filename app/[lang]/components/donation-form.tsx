"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QrCode, ExternalLink, Heart, Gift } from "lucide-react";
import Image from "next/image";

interface DonationFormProps {
  dict: any;
}

export function DonationForm({ dict }: DonationFormProps) {
  const handleDonationClick = (witch: number) => {
    // Replace with your actual donation URL

    if (witch === 1)
      return window.open(
        "https://www.donationalerts.com/r/saidmuhammadalixon",
        "_blank"
      );

    if (witch === 2)
      return window.open("https://tirikchilik.uz/cyberdatafort", "_blank");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Image
                width={25}
                height={25}
                src={"/donationalerts.png"}
                alt="qr code"
              />
              {dict.donation.qr1.title}
            </CardTitle>
            <CardDescription className="text-center">
              {dict.donation.qr1.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-100 border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Image
                  width={200}
                  height={200}
                  src={"/qr-code1.jpg"}
                  className="w-full h-full"
                  alt="qr code "
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              {dict.donation.qr1.instruction}
            </p>
            <Button
              onClick={() => handleDonationClick(1)}
              variant="outline"
              size="sm"
              className="mt-4 gap-2 bg-transparent"
            >
              {dict.donation.buttons.openPage}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-1">
              <Image
                width={20}
                height={20}
                src={"/tirikchilik.png"}
                alt="qr code"
              />
              {dict.donation.qr2.title}
            </CardTitle>
            <CardDescription className="text-center">
              {dict.donation.qr2.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-100 border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Image
                  width={200}
                  height={200}
                  src={"/qr-code2.png"}
                  className="w-full h-full"
                  alt="qr code "
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              {dict.donation.qr2.instruction}
            </p>
            <Button
              onClick={() => handleDonationClick(2)}
              variant="outline"
              size="sm"
              className="mt-4 gap-2 bg-transparent"
            >
              {dict.donation.buttons.openPage}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              {dict.donation.qr3.title}
            </CardTitle>
            <CardDescription className="text-center">
              {dict.donation.qr3.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Image
                  width={200}
                  height={200}
                  src={"/qr-code1.jpg"}
                  className="w-full h-full"
                  alt="qr code "
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              {dict.donation.qr3.instruction}
            </p>
            <Button
              onClick={() => handleDonationClick(1)}
              variant="outline"
              size="sm"
              className="mt-4 gap-2 bg-transparent"
            >
              {dict.donation.buttons.openPage}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
