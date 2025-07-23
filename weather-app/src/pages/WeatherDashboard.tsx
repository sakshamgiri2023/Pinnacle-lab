
import { Button } from '@/components/ui/button'
import { AlertTriangle, MapPin, RefreshCcw } from 'lucide-react'
import { useGeolocation } from '@/hooks/use.Geolocation'
import WeatherSkeleton from '@/components/LoadingSkeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useReverseQuery, useWeatherQuery, useForecastQuery } from '@/hooks/use.Weather';
import CurrentWeather from '@/components/CurrentWeather';
// import HourlyTemperature from '@/components/HourlyTemperature';






const WeatherDashboard = () => {
    const {
        coordinates,
        error: locationError,
        getLocation,
        isLoading: locationLoading,
    } = useGeolocation();


    // Use the correct hooks for each type of data
    const weatherQuery = useWeatherQuery(coordinates); // should return WeatherData
    const forecastQuery = useForecastQuery(coordinates); // should return ForecastData
    const LocationQuery = useReverseQuery(coordinates); // returns GeocodingResponse[]






    function handleRefresh() {
        getLocation();
        if (coordinates) {
            weatherQuery.refetch();
            forecastQuery.refetch();
            LocationQuery.refetch();
        }
    }

    // if (locationLoading) {
    //     return <WeatherSkeleton />
    // }

    // if (locationError) {
    //     return <Alert variant="destructive">
    //         <AlertTriangle className='h-4 w-4' />
    //         <AlertTitle>Location Error.</AlertTitle>
    //         <AlertDescription className='flex flex-col gap-4'>
    //             <p>{locationError}</p>
    //             <Button onClick={getLocation}
    //                 variant={"outline"}
    //                 className='w-fit'
    //             >
    //                 <MapPin className='mr-2 h-4 w-4' />
    //                 Enable Location

    //             </Button>
    //         </AlertDescription>
    //     </Alert>
    // }

    if (!coordinates) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className='h-4 w-4' />
                <AlertTitle>Location Required.</AlertTitle>
                <AlertDescription className='flex flex-col gap-4'>
                    <p>Please enable location access to see your local weather.</p>
                    <Button onClick={getLocation}
                        variant={"outline"}
                        className='w-fit'
                    >
                        <MapPin className='mr-2 h-4 w-4' />
                        Enable Location

                    </Button>
                </AlertDescription>
            </Alert>
        )
    }

    const locationName = LocationQuery.data?.[0];

    if (weatherQuery.error || forecastQuery.error) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className='h-4 w-4' />
                <AlertTitle>Location Required.</AlertTitle>
                <AlertDescription className='flex flex-col gap-4'>
                    <p>Failed to fetch weather data. Please try again.</p>
                    <Button onClick={handleRefresh}
                        variant={"outline"}
                        className='w-fit'
                    >
                        <MapPin className='mr-2 h-4 w-4' />
                        Enable Location

                    </Button>
                </AlertDescription>
            </Alert>
        )
    }


    if (!weatherQuery.data || !forecastQuery.data || !locationName) {
        return <WeatherSkeleton />;
    }



    return (
        <div className='space-y-4'>
            {/* farorite cities */}
            <div className='flex items-center justify-between'>
                <h1 className='text=xl font-bold tracking-tight'>My Location</h1>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={handleRefresh}
                    disabled={weatherQuery.isFetching || forecastQuery.isFetching}
                >

                    <RefreshCcw className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""}`} />
                </Button>
            </div>
            <div className='grid gap-6'>
                <div>
                    {/* current weather */}
                    <CurrentWeather
                        data={weatherQuery.data}
                        location={locationName}
                    />
                    {/* hourly temperature */}
                    {/* <HourlyTemperature
                        data={forecastQuery.data} /> */}
                </div>
                <div>
                    {/* details */}
                    {/* forecast */}
                </div>
            </div>

        </div>
    )
}

export default WeatherDashboard