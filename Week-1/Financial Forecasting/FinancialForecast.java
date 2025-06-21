public class FinancialForecast {

    // to cal future value
    public static double futureValue(double presentValue, double growthRate, int periods) {
        if (periods == 0) {
            return presentValue;
        }
        return (1 + growthRate) * futureValue(presentValue, growthRate, periods - 1);
    }

    public static double futureValueIterative(double presentValue, double growthRate, int periods) {
        double result = presentValue;
        for (int i = 0; i < periods; i++) {
            result *= (1 + growthRate);
        }
        return result;
    }
}