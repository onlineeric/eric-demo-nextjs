'use client';

import { useTheme } from "next-themes";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { useEffect, useState } from "react";

export default function DarkModePage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading theme...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Dark Mode Demo</h1>
        <p className="text-default-500">
          Test the dark mode functionality with HeroUI components.
        </p>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Current Theme: {theme}</h2>
        </CardHeader>
        <CardBody>
          <div className="flex gap-2 flex-wrap">
            {themes.map((t) => (
              <Button
                key={t}
                color={theme === t ? "primary" : "default"}
                variant={theme === t ? "solid" : "bordered"}
                onClick={() => setTheme(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <h3 className="font-semibold">Background Colors</h3>
          </CardHeader>
          <CardBody className="space-y-2">
            <div className="p-2 bg-background border rounded">bg-background</div>
            <div className="p-2 bg-content1 border rounded">bg-content1</div>
            <div className="p-2 bg-content2 border rounded">bg-content2</div>
            <div className="p-2 bg-default-100 border rounded">bg-default-100</div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-semibold">Text Colors</h3>
          </CardHeader>
          <CardBody className="space-y-2">
            <div className="text-foreground">text-foreground</div>
            <div className="text-default-500">text-default-500</div>
            <div className="text-primary">text-primary</div>
            <div className="text-secondary">text-secondary</div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}