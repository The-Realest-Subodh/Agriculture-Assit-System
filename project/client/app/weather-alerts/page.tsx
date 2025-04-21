import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { weatherData } from "@/lib/data";
import { ExclamationTriangleIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Cloud, Sun, CloudRain, CloudFog, Wind, Thermometer } from "lucide-react";

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return <Sun className="h-8 w-8 text-yellow-500" />;
    case "partly cloudy":
      return <Cloud className="h-8 w-8 text-gray-400" />;
    case "cloudy":
      return <CloudFog className="h-8 w-8 text-gray-500" />;
    case "rain":
      return <CloudRain className="h-8 w-8 text-blue-500" />;
    default:
      return <Cloud className="h-8 w-8 text-gray-400" />;
  }
};

export default function WeatherAlertsPage() {
  const { current, forecast, alerts } = weatherData;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Weather Alerts</h1>
        <p className="text-muted-foreground">
          Stay updated with real-time weather information and agricultural alerts
        </p>
      </div>

      {/* Current Weather */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Weather for {current.location}</CardTitle>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date(current.updatedAt).toLocaleString()}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-center justify-center text-center">
              {getWeatherIcon(current.condition)}
              <div className="ml-4">
                <p className="text-4xl font-bold">{current.temperature}°C</p>
                <p className="text-lg">{current.condition}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="flex items-center">
                <Thermometer className="mr-2 h-5 w-5 text-blue-500" />
                <span>Humidity: {current.humidity}%</span>
              </div>
              <div className="flex items-center">
                <Wind className="mr-2 h-5 w-5 text-blue-500" />
                <span>
                  Wind: {current.windSpeed} km/h {current.windDirection}
                </span>
              </div>
              <div className="flex items-center">
                <CloudRain className="mr-2 h-5 w-5 text-blue-500" />
                <span>Chance of Rain: {current.rainChance}%</span>
              </div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h3 className="mb-2 font-semibold">Agricultural Tip</h3>
              <p className="text-sm">
                {current.rainChance > 50
                  ? "Consider delaying any field operations that could be affected by wet conditions."
                  : "Current conditions are favorable for field operations and spraying activities."}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Alerts */}
      <h2 className="mb-4 text-2xl font-bold">Active Alerts</h2>
      <div className="mb-8 space-y-4">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            variant={alert.type === "warning" || alert.type === "alert" ? "destructive" : "default"}
          >
            {alert.type === "warning" || alert.type === "alert" ? (
              <ExclamationTriangleIcon className="h-4 w-4" />
            ) : (
              <InfoCircledIcon className="h-4 w-4" />
            )}
            <AlertTitle className="text-base font-medium">{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        ))}
      </div>

      {/* 5-Day Forecast */}
      <h2 className="mb-4 text-2xl font-bold">5-Day Forecast</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {forecast.map((day, index) => (
          <Card key={index} className={day.advisory ? "border-yellow-300" : ""}>
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-lg">{day.day}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-2 flex justify-center">
                {getWeatherIcon(day.condition)}
              </div>
              <p className="mb-1 text-sm">{day.condition}</p>
              <p className="mb-2">
                <span className="font-bold">{day.high}°</span> /{" "}
                <span className="text-muted-foreground">{day.low}°</span>
              </p>
              <p className="text-sm">Rain: {day.rainChance}%</p>
              {day.advisory && (
                <div className="mt-4 rounded bg-yellow-50 p-2 text-sm text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
                  {day.advisory}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}